select
  'money' as product_slug,
  -- Revenue is computed by scripts/update-impact-metrics.py from Stripe succeeded PaymentIntents.
  0 as revenue_usd_cents,
  (select count(*)::int from organizations) as paid_client_count,
  (select count(*)::int from users) as user_count,
  (
    (select count(*)::int
     from payouts p
     join payroll_runs pr on pr.id = p.payroll_run_id
     where p.status::text <> 'CANCELLED'
       and coalesce(pr.is_test_run, false) = false)
    +
    (select count(*)::int
     from fund_transfers
     where status::text <> 'FAILED')
    +
    (select count(*)::int
     from invoices
     where status::text <> 'VOID')
  ) as output_unit_count;
