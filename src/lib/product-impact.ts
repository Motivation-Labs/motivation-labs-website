import productImpactSnapshot from "@/data/product-impact-metrics.json";

export type ProductImpactRecord = {
  productSlug: string;
  revenueUsdCents: number;
  paidClientCount: number;
  userCount: number;
  outputUnitCount: number | null;
};

export type ProductImpactMetric = {
  label: string;
  value: string;
  note?: string;
};

export type ProductImpactSummary = {
  metrics: ProductImpactMetric[];
  updatedAtLabel: string;
};

type ProductImpactSnapshot = {
  updatedAtHongKong: string;
  records: ProductImpactRecord[];
};

const snapshot = productImpactSnapshot as ProductImpactSnapshot;

export async function queryProductImpactSummary(): Promise<ProductImpactSummary> {
  return {
    metrics: await queryProductImpactMetrics(),
    updatedAtLabel: formatHongKongTimestamp(snapshot.updatedAtHongKong),
  };
}

export async function queryProductImpactMetrics(): Promise<ProductImpactMetric[]> {
  const totals = await queryProductImpactTotals();

  return [
    {
      label: "Revenue",
      value: formatUsd(totals.revenueUsdCents),
      note: "USD",
    },
    {
      label: "Clients",
      value: formatInteger(totals.paidClientCount),
    },
    {
      label: "Users",
      value: formatInteger(totals.userCount),
    },
    {
      label: "Service units",
      value:
        totals.outputUnitCount === null
          ? "TBD"
          : formatInteger(totals.outputUnitCount),
    },
  ];
}

export async function queryProductImpactTotals() {
  const rows = await queryProductImpactRows();
  const hasUnknownOutputUnits = rows.some((row) => row.outputUnitCount === null);

  return rows.reduce(
    (totals, row) => ({
      revenueUsdCents: totals.revenueUsdCents + row.revenueUsdCents,
      paidClientCount: totals.paidClientCount + row.paidClientCount,
      userCount: totals.userCount + row.userCount,
      outputUnitCount:
        totals.outputUnitCount === null || row.outputUnitCount === null
          ? null
          : totals.outputUnitCount + row.outputUnitCount,
    }),
    {
      revenueUsdCents: 0,
      paidClientCount: 0,
      userCount: 0,
      outputUnitCount: hasUnknownOutputUnits ? null : 0,
    },
  );
}

async function queryProductImpactRows(): Promise<ProductImpactRecord[]> {
  return snapshot.records;
}

function formatUsd(cents: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(cents / 100);
}

function formatInteger(value: number) {
  return new Intl.NumberFormat("en-US").format(value);
}

function formatHongKongTimestamp(value: string) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Hong_Kong",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date(value));
  const part = (type: string) =>
    parts.find((timestampPart) => timestampPart.type === type)?.value ?? "";

  return `${part("year")}-${part("month")}-${part("day")} ${part("hour")}:${part("minute")} HKT`;
}
