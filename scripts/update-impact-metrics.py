#!/usr/bin/env python3
from __future__ import annotations

import argparse
import json
import os
import urllib.parse
import urllib.request
from dataclasses import dataclass
from datetime import datetime, timedelta
from pathlib import Path
from typing import Any, Literal
from zoneinfo import ZoneInfo


EXPECTED_COLUMNS = {
    "product_slug",
    "revenue_usd_cents",
    "paid_client_count",
    "user_count",
    "output_unit_count",
}

HONG_KONG = ZoneInfo("Asia/Hong_Kong")


RevenueMode = Literal["none", "stripe_payment_intents"]


@dataclass(frozen=True)
class ProductStep:
    label: str
    slug: str
    database_url_env: str
    sql_file: str
    revenue_mode: RevenueMode
    stripe_secret_env: str | None = None
    fallback_database_url_env: str | None = None
    fallback_stripe_secret_env: str | None = None


PRODUCT_STEPS = [
    ProductStep(
        label="Step 01 Motivation Money",
        slug="money",
        database_url_env="MONEY_SUPABASE_DATABASE_URL",
        fallback_database_url_env="SUPABASE_DATABASE_URL",
        sql_file="scripts/sql/product-impact-money.sql",
        revenue_mode="stripe_payment_intents",
        stripe_secret_env="MONEY_STRIPE_SECRET_KEY",
        fallback_stripe_secret_env="STRIPE_SECRET_KEY",
    ),
    ProductStep(
        label="Step 02 Motivation Form",
        slug="form",
        database_url_env="FORM_SUPABASE_DATABASE_URL",
        sql_file="scripts/sql/product-impact-form.sql",
        revenue_mode="stripe_payment_intents",
        stripe_secret_env="FORM_STRIPE_SECRET_KEY",
    ),
]


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Update Motivation Labs product impact metrics from product databases."
    )
    parser.add_argument(
        "--out",
        default="src/data/product-impact-metrics.json",
        help="JSON snapshot file consumed by the website.",
    )
    parser.add_argument(
        "--range-start",
        default=os.environ.get("METRICS_RANGE_START"),
        help="Inclusive reporting window start date, YYYY-MM-DD in Hong Kong time.",
    )
    parser.add_argument(
        "--range-end",
        default=os.environ.get("METRICS_RANGE_END"),
        help="Exclusive reporting window end date, YYYY-MM-DD in Hong Kong time.",
    )
    args = parser.parse_args()

    now = datetime.now(HONG_KONG).replace(microsecond=0)
    range_start, range_end = resolve_reporting_range(
        now=now,
        range_start=args.range_start,
        range_end=args.range_end,
    )

    records: list[dict[str, int | str | None]] = []
    step_log: list[dict[str, Any]] = []

    for step in PRODUCT_STEPS:
        record = query_product_step(step)
        records.append(record)
        step_log.append(
            {
                "step": step.label,
                "productSlug": record["productSlug"],
                "source": "supabase",
                "revenueMode": step.revenue_mode,
            }
        )

    records.sort(key=lambda record: str(record["productSlug"]))
    totals = calculate_totals(records)
    step_log.append(
        {
            "step": "Step 03 Total",
            "productSlug": "total",
            "source": "sum(records)",
            "record": totals,
        }
    )

    snapshot = {
        "updatedAtHongKong": now.isoformat(),
        "rangeStartHongKong": range_start.date().isoformat(),
        "rangeEndHongKong": range_end.date().isoformat(),
        "records": records,
        "total": totals,
        "steps": step_log,
    }
    output_path = Path(args.out)
    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_text(
        json.dumps(snapshot, indent=2, ensure_ascii=False) + "\n",
        encoding="utf-8",
    )


def query_product_step(step: ProductStep) -> dict[str, int | str | None]:
    database_url = env_value(step.database_url_env, step.fallback_database_url_env)
    if not database_url:
        raise SystemExit(
            f"Missing {step.database_url_env} for {step.label}."
        )

    sql = Path(step.sql_file).read_text(encoding="utf-8")
    rows = query_rows(database_url, sql)
    if len(rows) != 1:
        raise ValueError(f"{step.sql_file} must return exactly one row.")

    record = normalize_row(rows[0])
    if record["productSlug"] != step.slug:
        raise ValueError(
            f"{step.sql_file} returned product_slug={record['productSlug']!r}, expected {step.slug!r}."
        )

    stripe_secret_key = env_value(
        step.stripe_secret_env,
        step.fallback_stripe_secret_env,
    )
    if stripe_secret_key and step.revenue_mode == "stripe_payment_intents":
        record["revenueUsdCents"] = query_stripe_payment_intent_revenue_usd_cents(
            stripe_secret_key
        )

    return record


def query_rows(database_url: str, sql: str) -> list[dict[str, Any]]:
    try:
        import psycopg
        from psycopg.rows import dict_row
    except ImportError as error:
        raise SystemExit(
            "Missing dependency psycopg. Install with: python -m pip install 'psycopg[binary]'"
        ) from error

    with psycopg.connect(normalize_database_url(database_url), row_factory=dict_row) as connection:
        with connection.cursor() as cursor:
            cursor.execute(sql)
            return list(cursor.fetchall())


def normalize_database_url(database_url: str) -> str:
    parsed = urllib.parse.urlsplit(database_url)
    query = urllib.parse.parse_qsl(parsed.query, keep_blank_values=True)
    query = [
        (key, value)
        for key, value in query
        if key not in {"pgbouncer", "connection_limit"}
    ]
    return urllib.parse.urlunsplit(
        (
            parsed.scheme,
            parsed.netloc,
            parsed.path,
            urllib.parse.urlencode(query),
            parsed.fragment,
        )
    )


def normalize_row(row: dict[str, Any]) -> dict[str, int | str | None]:
    missing_columns = EXPECTED_COLUMNS - set(row.keys())
    if missing_columns:
        raise ValueError(f"Metrics SQL is missing columns: {sorted(missing_columns)}")

    return {
        "productSlug": require_string(row["product_slug"], "product_slug"),
        "revenueUsdCents": require_non_negative_int(
            row["revenue_usd_cents"], "revenue_usd_cents"
        ),
        "paidClientCount": require_non_negative_int(
            row["paid_client_count"], "paid_client_count"
        ),
        "userCount": require_non_negative_int(row["user_count"], "user_count"),
        "outputUnitCount": optional_non_negative_int(
            row["output_unit_count"], "output_unit_count"
        ),
    }


def calculate_totals(
    records: list[dict[str, int | str | None]],
) -> dict[str, int | str | None]:
    output_units: int | None = 0
    for record in records:
        if output_units is None or record["outputUnitCount"] is None:
            output_units = None
        else:
            output_units += int(record["outputUnitCount"])

    return {
        "productSlug": "total",
        "revenueUsdCents": sum(int(record["revenueUsdCents"]) for record in records),
        "paidClientCount": sum(int(record["paidClientCount"]) for record in records),
        "userCount": sum(int(record["userCount"]) for record in records),
        "outputUnitCount": output_units,
    }


def query_stripe_payment_intent_revenue_usd_cents(stripe_secret_key: str) -> int:
    total = 0
    starting_after: str | None = None

    while True:
        payload = query_stripe(
            stripe_secret_key,
            "https://api.stripe.com/v1/charges",
            {"limit": "100"},
            starting_after,
        )

        charges = payload.get("data", [])
        for charge in charges:
            if charge.get("currency") != "usd":
                continue
            if charge.get("status") != "succeeded":
                continue
            amount = int(charge.get("amount") or 0)
            refunded = int(charge.get("amount_refunded") or 0)
            total += amount - refunded

        if not payload.get("has_more") or not charges:
            return total

        starting_after = charges[-1]["id"]


def query_stripe(
    stripe_secret_key: str,
    url: str,
    params: dict[str, str],
    starting_after: str | None,
) -> dict[str, Any]:
    if starting_after:
        params = {**params, "starting_after": starting_after}

    request = urllib.request.Request(
        url + "?" + urllib.parse.urlencode(params),
        headers={"Authorization": f"Bearer {stripe_secret_key}"},
    )
    with urllib.request.urlopen(request, timeout=30) as response:
        return json.loads(response.read().decode("utf-8"))


def resolve_reporting_range(
    now: datetime,
    range_start: str | None,
    range_end: str | None,
) -> tuple[datetime, datetime]:
    if range_start or range_end:
        if not range_start or not range_end:
            raise ValueError("--range-start and --range-end must be provided together.")
        return parse_hong_kong_date(range_start), parse_hong_kong_date(range_end)

    week_start = (now - timedelta(days=now.weekday())).replace(
        hour=0,
        minute=0,
        second=0,
        microsecond=0,
    )
    return week_start - timedelta(days=7), week_start + timedelta(days=7)


def parse_hong_kong_date(value: str) -> datetime:
    return datetime.strptime(value, "%Y-%m-%d").replace(tzinfo=HONG_KONG)


def env_value(primary: str | None, fallback: str | None = None) -> str | None:
    if primary:
        value = os.environ.get(primary)
        if value:
            return value.strip()
    if fallback:
        value = os.environ.get(fallback)
        if value:
            return value.strip()
    return None


def require_string(value: Any, column: str) -> str:
    if not isinstance(value, str) or not value.strip():
        raise ValueError(f"{column} must be a non-empty string.")
    return value.strip()


def require_non_negative_int(value: Any, column: str) -> int:
    if value is None:
        raise ValueError(f"{column} cannot be null.")
    if isinstance(value, bool):
        raise ValueError(f"{column} must be a number.")

    normalized = int(value)
    if normalized < 0:
        raise ValueError(f"{column} cannot be negative.")
    return normalized


def optional_non_negative_int(value: Any, column: str) -> int | None:
    if value is None:
        return None
    return require_non_negative_int(value, column)


if __name__ == "__main__":
    main()
