select
  'form' as product_slug,
  -- Revenue is computed by scripts/update-impact-metrics.py from Stripe paid Charges.
  0 as revenue_usd_cents,
  (select count(distinct owner_id)::int from forms where owner_id is not null) as paid_client_count,
  (select count(*)::int from user_profiles) as user_count,
  (select count(*)::int from responses) as output_unit_count;
