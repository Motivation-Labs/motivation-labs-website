import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getProduct } from "@/lib/products";
import { productJsonLd } from "@/lib/structured-data";
import CexBadge from "@/components/CexBadge";

const product = getProduct("money")!;

export const metadata: Metadata = {
  title: "Motivation Money — Stablecoin Payroll & Crypto Payment Operations",
  description:
    "Stablecoin payroll software for global teams. Self-custody treasury with Safe, CEX-routed USDC/USDT payments, full audit trail. API-first — built for AI agents and humans. Free to start.",
  alternates: {
    canonical: "/money",
    languages: { en: "/money", zh: "/zh/money" },
  },
  openGraph: {
    title: "Motivation Money — Stablecoin Payroll & Crypto Payment Operations",
    description:
      "Pay your global team in USDC/USDT. Self-custody treasury, CEX-routed private payments, complete audit trail. API and CLI for AI agent automation.",
    type: "website",
    images: [{ url: "/og/money.png", width: 1200, height: 630, alt: "Motivation Money" }],
  },
};

const principles = [
  {
    title: "Self-Custody First",
    body: "Your treasury never leaves your Safe. You hold the keys — Motivation Money is the operations layer on top, not a custodian.",
  },
  {
    title: "CEX Privacy by Design",
    body: "Routing payments through a CEX breaks the on-chain trace between your treasury and recipients — private by default, compliant by architecture.",
  },
  {
    title: "Auditability by Default",
    body: "Every action creates a record — payroll created, confirmed, executed, failed. Nothing disappears.",
  },
  {
    title: "Wrong Wallet is Impossible",
    body: "Recipient addresses are locked at onboarding and enforced at the CEX level. There is no UI path to send funds to an unverified address.",
  },
];

export default function MoneyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd(product)),
        }}
      />

      {/* ── Hero ── */}
      <section className="bg-[#f2faf5] border-b-2 border-black py-24 md:py-36">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              {/* Logo + badge */}
              <div className="flex items-center gap-4 mb-10">
                <Image
                  src="/images/money/motivation_money_logo.png"
                  alt="Motivation Money"
                  width={52}
                  height={52}
                  className="object-contain logo-walk"
                />
                <div className="inline-block px-4 py-1.5 rounded-md border-2 border-black bg-emerald-400 text-black text-[11px] font-black uppercase tracking-[0.15em] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  M — Motivation Money
                </div>
              </div>

              <h1 className="font-hand text-5xl md:text-7xl text-black mb-6 leading-tight max-w-xl">
                Your keys. Private payments. Full audit trail.
              </h1>
              <p className="text-xl text-black/70 mb-10 font-medium leading-relaxed max-w-lg">
                Funds stay in your Safe. Payouts route through a CEX —
                untraceable on-chain, fully compliant off-chain. The financial
                operations layer built for stablecoin-native teams.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://app.motivation.money"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-notion bg-black text-white px-8 py-4 rounded-md font-black hover:bg-black/80 uppercase tracking-wider text-sm text-center"
                >
                  Try Motivation Money →
                </a>
                <Link
                  href="/"
                  className="btn-notion inline-block bg-white text-black px-8 py-4 rounded-md font-black hover:bg-emerald-50 uppercase tracking-wider text-sm text-center"
                >
                  ← Back
                </Link>
              </div>
            </div>

            {/* Dashboard screenshot */}
            <div className="screenshot-card">
              <Image
                src="/images/money/04-dashboard.png"
                alt="Motivation Money Dashboard"
                width={720}
                height={480}
                className="w-full h-auto block"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Problem ── */}
      <section className="py-24 bg-white border-b-2 border-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <div className="inline-block px-3 py-1 border-2 border-black text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              The Problem
            </div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
              Stablecoin teams outgrew wallets.
              <br />
              They never got proper finance ops.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                avatar: "/images/money/01_male_short_side_parted_black_hair_open_mouth.png",
                name: "Alex, Founder",
                quote: "We pay 12 people globally in USDC. Every month it's a spreadsheet, 3 wallet apps, and prayer.",
                pain: "No financial ops layer",
              },
              {
                avatar: "/images/money/04_female_long_straight_black_hair_gentle_smile.png",
                name: "Sarah, Finance Lead",
                quote: "Our auditors ask for payment history. I export wallet transactions and try to explain what each one meant.",
                pain: "No audit trail",
              },
              {
                avatar: "/images/money/07_male_curly_dark_hair_aviator_glasses_open_grin.png",
                name: "Marcus, Ops",
                quote: "We almost wired December payroll to a test wallet from six months ago. Caught it manually. That's not a process — that's luck. One slip and $40k is gone with no recourse.",
                pain: "One wrong address away",
              },
            ].map((item) => (
              <div
                key={item.name}
                className="quote-card p-6 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] bg-white"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="quote-avatar w-12 h-12 border-2 border-black bg-gray-50 rounded-full overflow-hidden flex items-center justify-center shrink-0">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-black text-sm">{item.name}</div>
                    <div className="text-[10px] font-black uppercase tracking-wider text-black/30">
                      {item.pain}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-notion-gray font-medium leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Product Walkthrough ── */}
      <section className="py-24 bg-[#f2faf5] border-b-2 border-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
              From setup to paid — in one tool.
            </h2>
            <p className="text-lg text-notion-gray font-medium">
              Motivation Money handles the full financial operations lifecycle,
              with the context your finance team actually needs.
            </p>
          </div>

          <div className="space-y-20">
            {/* Step 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-10 h-10 border-2 border-black flex items-center justify-center font-black text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-6">
                  01
                </div>
                <h3 className="text-2xl font-black tracking-tight mb-4">
                  Your team, onboarded with verified wallets.
                </h3>
                <p className="text-notion-gray font-medium leading-relaxed mb-4">
                  Add teammates with their wallet addresses, role, and contract
                  type. Every address is verified and locked at onboarding —
                  payments can only ever go to a pre-approved destination.
                  No ad-hoc entries, no last-minute edits mid-run.
                </p>
                <ul className="space-y-2 text-sm font-medium text-notion-gray">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    Whitelist-only payouts — funds only reach verified addresses
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    Wallet verification with micro-deposit confirmation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    Per-employee coin and network preferences
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    Role-based access — operators and employees separated
                  </li>
                </ul>
              </div>
              <div className="screenshot-card">
                <Image
                  src="/images/money/05-team-list.png"
                  alt="Team management in Motivation Money"
                  width={720}
                  height={480}
                  className="w-full h-auto block"
                />
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 screenshot-card">
                <Image
                  src="/images/money/07-payouts-list.png"
                  alt="Payouts list in Motivation Money"
                  width={720}
                  height={480}
                  className="w-full h-auto block"
                />
              </div>
              <div className="order-1 md:order-2">
                <div className="w-10 h-10 border-2 border-black flex items-center justify-center font-black text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-6">
                  02
                </div>
                <h3 className="text-2xl font-black tracking-tight mb-4">
                  Every payment type, one view.
                </h3>
                <p className="text-notion-gray font-medium leading-relaxed mb-4">
                  Monthly payroll, Q1 bonuses, ad-hoc payments, expense
                  reimbursements — all in a single, clean list. No more
                  hunting across tools to know what got paid and when.
                </p>
                <ul className="space-y-2 text-sm font-medium text-notion-gray">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    Payroll runs with per-employee breakdowns
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    Ad-hoc bonuses and one-time payments
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    Reimbursements with evidence attachments
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-10 h-10 border-2 border-black flex items-center justify-center font-black text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-6">
                  03
                </div>
                <h3 className="text-2xl font-black tracking-tight mb-4">
                  Execute via CEX — secured at every layer.
                </h3>
                <p className="text-notion-gray font-medium leading-relaxed mb-4">
                  Fund from your Safe multi-sig, route through your exchange,
                  and pay each recipient in a single run. The CEX adds a second
                  layer of address enforcement — withdrawal whitelists mean
                  funds physically cannot leave to an unregistered destination.
                </p>
                {/* CEX logos */}
                <div className="flex items-center gap-2 flex-wrap mb-5">
                  <span className="text-xs font-black text-black/40 uppercase tracking-wider">Supported exchanges</span>
                  <CexBadge name="OKX" size="md" />
                  <CexBadge name="Coinbase" size="md" />
                  <CexBadge name="Binance" size="md" />
                  <CexBadge name="Kraken" size="md" />
                </div>
                <ul className="space-y-2 text-sm font-medium text-notion-gray">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    Safe → CEX fund transfer in one proposal
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    CEX withdrawal whitelist — only pre-approved addresses receive funds
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    Enterprise-grade CEX security: 2FA, IP controls, and withdrawal limits
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    Per-recipient execution with live status tracking
                  </li>
                </ul>
              </div>
              <div className="screenshot-card">
                <Image
                  src="/images/money/09-run-detail-confirmed.png"
                  alt="Payment execution in Motivation Money"
                  width={720}
                  height={480}
                  className="w-full h-auto block"
                />
              </div>
            </div>

            {/* Step 4 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 screenshot-card">
                <Image
                  src="/images/money/17-audit-log.png"
                  alt="Audit log in Motivation Money"
                  width={720}
                  height={480}
                  className="w-full h-auto block"
                />
              </div>
              <div className="order-1 md:order-2">
                <div className="w-10 h-10 border-2 border-black flex items-center justify-center font-black text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-6">
                  04
                </div>
                <h3 className="text-2xl font-black tracking-tight mb-4">
                  Every action, on record.
                </h3>
                <p className="text-notion-gray font-medium leading-relaxed mb-4">
                  A complete, timestamped audit trail — payroll created,
                  confirmed, executed, who did it and when. Your CPA will
                  thank you. Your future self will too.
                </p>
                <ul className="space-y-2 text-sm font-medium text-notion-gray">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    40+ tracked action types
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    Actor, timestamp, and details on every event
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    Exportable CSV for finance and compliance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Principles ── */}
      <section className="py-24 bg-white border-b-2 border-black">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-16">
            Built on four principles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((p, i) => (
              <div key={p.title} className="space-y-4">
                <div className="w-10 h-10 border-2 border-black flex items-center justify-center font-black text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-black text-lg">{p.title}</h3>
                <p className="text-notion-gray text-sm leading-relaxed font-medium">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Security & Privacy ── */}
      <section className="py-24 md:py-36 bg-[#f8f8f7] border-b-2 border-black" id="security">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-block px-3 py-1 border-2 border-black text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">Security & Privacy</div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">Your Treasury. Your Privacy.</h2>
          </div>

          {/* 01 */}
          <div className="border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white p-6 md:p-10 mb-10">
            <div className="grid md:grid-cols-[1.2fr_1fr] gap-10 md:gap-14 items-center">
              <div className="flex flex-col md:flex-row items-center gap-5 md:gap-0">
                <div className="flex md:flex-col gap-3 shrink-0">
                  <div className="w-14 h-14 rounded-full bg-[#2775CA] border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center rotate-[-8deg]"><span className="text-white text-lg font-black">$</span></div>
                  <div className="w-14 h-14 rounded-full bg-[#26A17B] border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center rotate-[10deg]"><span className="text-white text-lg font-black">T</span></div>
                </div>
                <svg className="w-12 h-8 shrink-0 hidden md:block" viewBox="0 0 48 32" fill="none"><path d="M4 16 C12 8, 20 24, 28 12 C32 8, 38 16, 44 14" stroke="black" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" /><path d="M40 10 L44 14 L39 17" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <svg className="w-8 h-10 shrink-0 md:hidden" viewBox="0 0 32 40" fill="none"><path d="M16 4 C8 12, 24 18, 12 26 C8 30, 16 34, 16 36" stroke="black" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" /><path d="M12 33 L16 36 L20 33" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <div className="shrink-0">
                  <div className="border-2 border-black bg-black p-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                    <div className="grid grid-cols-2 gap-2 mb-2">
                      {[{ src: "/images/exchanges/okx.png", alt: "OKX" }, { src: "/images/exchanges/coinbase.png", alt: "Coinbase" }].map((ex) => (
                        <div key={ex.alt} className="w-9 h-9 bg-white/10 border border-white/20 flex items-center justify-center"><Image src={ex.src} alt={ex.alt} width={22} height={22} className="object-contain" /></div>
                      ))}
                    </div>
                    <div className="text-[8px] font-black text-white/50 text-center uppercase tracking-wider">Your CEX</div>
                  </div>
                </div>
                <svg className="w-10 h-16 shrink-0 hidden md:block" viewBox="0 0 40 64" fill="none"><path d="M4 10 C12 6, 24 14, 36 8" stroke="black" strokeWidth="1.5" strokeDasharray="3 3" strokeLinecap="round" opacity="0.3" /><path d="M33 5 L36 8 L32 10" stroke="black" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" /><path d="M4 32 C14 28, 22 36, 36 30" stroke="black" strokeWidth="1.5" strokeDasharray="3 3" strokeLinecap="round" opacity="0.3" /><path d="M33 27 L36 30 L32 32" stroke="black" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" /><path d="M4 54 C10 50, 26 58, 36 52" stroke="black" strokeWidth="1.5" strokeDasharray="3 3" strokeLinecap="round" opacity="0.3" /><path d="M33 49 L36 52 L32 54" stroke="black" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" /></svg>
                <svg className="w-16 h-8 shrink-0 md:hidden" viewBox="0 0 64 32" fill="none"><path d="M10 4 C6 12, 14 20, 8 28" stroke="black" strokeWidth="1.5" strokeDasharray="3 3" strokeLinecap="round" opacity="0.3" /><path d="M32 4 C28 12, 36 20, 30 28" stroke="black" strokeWidth="1.5" strokeDasharray="3 3" strokeLinecap="round" opacity="0.3" /><path d="M54 4 C50 12, 58 20, 52 28" stroke="black" strokeWidth="1.5" strokeDasharray="3 3" strokeLinecap="round" opacity="0.3" /></svg>
                <div className="flex md:flex-col gap-3 shrink-0">
                  {[{ avatar: "/images/money/01_male_short_side_parted_black_hair_open_mouth.png", name: "Alex" }, { avatar: "/images/money/04_female_long_straight_black_hair_gentle_smile.png", name: "Sarah" }, { avatar: "/images/money/07_male_curly_dark_hair_aviator_glasses_open_grin.png", name: "Marcus" }].map((person) => (
                    <div key={person.name} className="flex items-center gap-2">
                      <Image src={person.avatar} alt={person.name} width={40} height={40} className="w-10 h-10 rounded-full object-cover shadow-[2px_2px_0px_0px_rgba(0,0,0,0.15)]" />
                      <div className="hidden md:block"><div className="text-[10px] font-black">{person.name}</div><div className="text-[8px] text-black/30 font-bold">Sees: Exchange</div></div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="inline-block px-2 py-0.5 border-2 border-black text-[9px] font-black uppercase tracking-[0.2em] mb-4 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] bg-emerald-50">01 — Payment Privacy</div>
                <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-4 leading-tight">Recipients never see<br />your treasury address.</h3>
                <p className="text-sm text-notion-gray font-medium leading-relaxed">Payments route through your CEX. Recipients see the exchange as sender — your treasury address never appears on-chain.</p>
              </div>
            </div>
          </div>

          {/* 02 */}
          <div className="border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white p-6 md:p-10 mb-10">
            <div className="grid md:grid-cols-[1fr_1.4fr] gap-10 md:gap-14 items-center">
              <div>
                <div className="inline-block px-2 py-0.5 border-2 border-black text-[9px] font-black uppercase tracking-[0.2em] mb-4 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] bg-emerald-50">02 — Encryption</div>
                <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-4 leading-tight">Encrypted before<br />it hits the database.</h3>
                <p className="text-sm text-notion-gray font-medium leading-relaxed">AES-256-GCM with unique IVs per row. Keys are separated by category — compromising one never exposes another.</p>
              </div>
              <div className="flex flex-col md:flex-row items-center md:justify-between">
                {[{ icon: "⌨️", label: "You type", accent: false }, { icon: "🔒", label: "Encrypted", accent: true }, { icon: "🗄️", label: "Stored", accent: false }, { icon: "⚡", label: "Execute & clear", accent: false }].map((stage, i) => (
                  <div key={stage.label} className="contents">
                    <div className="flex flex-col items-center gap-2 shrink-0">
                      <div className={`w-14 h-14 md:w-16 md:h-16 border-2 border-black flex items-center justify-center text-xl md:text-2xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${stage.accent ? "bg-black" : "bg-white"}`}>{stage.icon}</div>
                      <div className="text-[9px] font-black uppercase tracking-wider text-black/60">{stage.label}</div>
                    </div>
                    {i < 3 && (<svg className="w-8 h-5 shrink-0 hidden md:block" viewBox="0 0 32 20" fill="none"><path d="M3 10 C8 5, 16 15, 24 8 C26 6, 28 10, 29 9" stroke="black" strokeWidth="1.5" strokeDasharray="3 3" strokeLinecap="round" /><path d="M26 6 L29 9 L26 12" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>)}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 03 */}
          <div className="border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-black p-6 md:p-10 mb-10">
            <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
              <div>
                <div className="inline-block px-2 py-0.5 border border-white/20 text-[9px] font-black uppercase tracking-[0.2em] mb-4 text-white/50">03 — Control & Audit</div>
                <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-4 leading-tight text-white">You verify everything.<br />We access nothing.</h3>
                <p className="text-sm text-white/50 font-medium leading-relaxed">40+ auditable action types. Whitelist-only payments. We never custody funds or see credentials in plaintext.</p>
              </div>
              <div className="border border-white/10 overflow-hidden">
                <div className="grid grid-cols-[1fr_130px] border-b border-white/10 bg-white/5">
                  <div className="p-3 text-[9px] font-black uppercase tracking-[0.2em] text-white/30">Item</div>
                  <div className="p-3 text-[9px] font-black uppercase tracking-[0.2em] text-white/30">Our Access</div>
                </div>
                {[{ item: "Safe private keys", access: "None" }, { item: "CEX login credentials", access: "None" }, { item: "Recipient identity", access: "None" }, { item: "Your funds", access: "Never custodied" }].map((row, i) => (
                  <div key={row.item} className={`grid grid-cols-[1fr_130px] ${i < 3 ? "border-b border-white/5" : ""}`}>
                    <div className="p-3 text-xs font-medium text-white/70">{row.item}</div>
                    <div className="p-3 text-xs font-black text-emerald-400">{row.access}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="https://docs.motivation.money/money/data-privacy" className="text-sm font-black uppercase tracking-wider underline decoration-2 hover:text-black/70">Read the full Data Privacy & Security guide →</Link>
          </div>
        </div>
      </section>

      {/* ── Roadmap ── */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-block px-3 py-1 border border-white/30 text-white/60 text-[10px] font-black uppercase tracking-wider mb-6">
                Roadmap
              </div>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-6 text-white">
                Pay-in is coming.
              </h2>
              <p className="text-white/70 leading-relaxed font-medium">
                Motivation Money is expanding from a strong pay-out product
                into a complete financial operating system — collecting client
                revenue in, paying team out, all in one place.
              </p>
            </div>
            <ul className="space-y-3">
              {[
                { text: "REST API v1 with 25+ endpoints, CLI, and OpenAPI spec", done: true },
                { text: "Multi-CEX support — OKX, Coinbase, Binance, and Kraken", done: true },
                { text: "Operator role system with granular per-operator permissions", done: true },
                { text: "MCP server for AI agent access (Claude, GPT, custom agents)", done: false },
                { text: "Invoice module for stablecoin client collections", done: false },
                { text: "Public payment pages with wallet address and QR code", done: false },
                { text: "On-chain payment detection with auto-reconciliation", done: false },
              ].map((item) => (
                <li
                  key={item.text}
                  className="flex items-start gap-3 p-4 border border-white/10 bg-white/5"
                >
                  <span className={`mt-1 w-1.5 h-1.5 rounded-full shrink-0 ${item.done ? "bg-emerald-400" : "bg-white/30"}`} />
                  <span className={`text-sm font-medium ${item.done ? "text-emerald-400" : "text-white/70"}`}>
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Who It's For ── */}
      <section className="py-24 bg-white border-b-2 border-black">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
            Built for teams like yours
          </h2>
          <p className="text-notion-gray font-medium mb-12 max-w-xl">
            If your team operates in stablecoins and needs more than a wallet,
            Motivation Money was built for you.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                avatar: "/images/money/05_female_black_bob_round_glasses_heart_mouth.png",
                label: "AI-native startups",
                desc: "Lean teams with global reach, stablecoin treasuries, and agent-assisted workflows.",
              },
              {
                avatar: "/images/money/02_male_swept_up_dark_hair_furrowed_brows_open_mouth.png",
                label: "Remote-first companies",
                desc: "Distributed employees and contractors across borders who prefer USDC over wire transfers.",
              },
              {
                avatar: "/images/money/03_male_pompadour_black_hair_half_lidded_eyes_open_mouth.png",
                label: "Finance leads & operators",
                desc: "People who need audit trails and reporting — not just a wallet with a transaction hash.",
              },
            ].map((c) => (
              <div
                key={c.label}
                className="quote-card p-6 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex gap-4"
              >
                <div className="quote-avatar w-12 h-12 border-2 border-black bg-gray-50 rounded-full overflow-hidden shrink-0 flex items-center justify-center">
                  <Image
                    src={c.avatar}
                    alt={c.label}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-black mb-1">{c.label}</h3>
                  <p className="text-notion-gray text-sm font-medium leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="py-24 bg-[#f2faf5] border-b-2 border-black" id="pricing">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <div className="inline-block px-3 py-1 border-2 border-black text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              Pricing
            </div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
              All features on every plan.
              <br />
              The only difference is seats.
            </h2>
          </div>

          {/* Promo banner */}
          <div className="mb-10 p-4 border-2 border-black bg-emerald-400 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] inline-block">
            <span className="text-sm font-black uppercase tracking-wider">
              Pro is free for 3 months — no credit card required
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Free */}
            <div className="p-6 md:p-8 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] bg-white">
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40 mb-4">
                Free
              </div>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-5xl font-black tracking-tighter">$0</span>
                <span className="text-sm font-bold text-notion-gray">/month</span>
              </div>
              <p className="text-sm text-notion-gray font-medium leading-relaxed mb-6">
                Up to 3 active team members. Same features as Pro — no credit
                card, no trial period, free forever within the seat limit.
              </p>
              <ul className="space-y-2 text-sm font-medium text-notion-gray">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  Full dashboard, REST API, and CLI
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  Payroll, ad-hoc payments, reimbursements
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  Audit log with CSV export
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  Custom email branding
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  Webhooks and OpenAPI spec
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  Zero platform fees on payouts
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  24-month statement records
                </li>
              </ul>
            </div>

            {/* Pro */}
            <div className="p-6 md:p-8 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white relative">
              <div className="absolute -top-3 right-6 px-3 py-1 bg-black text-white text-[10px] font-black uppercase tracking-wider">
                Most Popular
              </div>
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40 mb-4">
                Pro
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="price-struck text-3xl font-black tracking-tighter text-black/40">$1.99</span>
                <span className="text-5xl font-black tracking-tighter">$0</span>
                <span className="text-sm font-bold text-notion-gray">/member/month</span>
              </div>
              <p className="text-xs font-bold mb-6">
                <span className="text-emerald-600">Free for the first 3 months.</span>
                {" "}Then $1.99/member/month, first 3 members always free.
              </p>
              <p className="text-sm text-notion-gray font-medium leading-relaxed mb-6">
                Remove the seat cap and scale linearly as your team grows
                exponentially. Self-service billing from your dashboard.
              </p>
              <ul className="space-y-2 text-sm font-medium text-notion-gray mb-8">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  Everything in Free
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  Unlimited team members
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  Lifetime statement records
                </li>
              </ul>

              {/* Dedicated Infrastructure add-on */}
              <div className="border-t-2 border-black pt-6">
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40 mb-3">
                  Add-on
                </div>
                <div className="p-4 border-2 border-dashed border-black/30 bg-emerald-50">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-xl font-black tracking-tight">$99</span>
                    <span className="text-xs font-bold text-notion-gray">/month</span>
                  </div>
                  <h4 className="font-black text-sm mb-2">Dedicated Infrastructure</h4>
                  <ul className="space-y-1.5 text-xs font-medium text-notion-gray">
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-emerald-500 shrink-0" />
                      Static outbound IPs for CEX API allowlisting
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-emerald-500 shrink-0" />
                      Isolated compute and database resources
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-emerald-500 shrink-0" />
                      Dedicated VPS — no shared tenancy
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm text-notion-gray font-medium">
              No per-transaction fees. The only variable cost is your exchange&apos;s
              withdrawal fee (typically $1–$10).{" "}
              <Link
                href="https://docs.motivation.money/money/pricing"
                className="underline decoration-2 hover:text-black"
              >
                Full pricing details →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-32 bg-white border-b-2 border-black text-center">
        <div className="max-w-2xl mx-auto px-6">
          <div className="flex justify-center mb-8">
            <Image
              src="/images/money/motivation_money_logo.png"
              alt="Motivation Money"
              width={64}
              height={64}
              className="object-contain logo-walk"
            />
          </div>
          <h2 className="font-hand text-4xl md:text-6xl text-black mb-6 leading-tight">
            From &ldquo;we send stablecoins&rdquo; to
            &ldquo;we run financial ops.&rdquo;
          </h2>
          <p className="text-lg text-black/70 mb-10 font-medium">
            Motivation Money is live and ready to use. No waitlist — get started today.
          </p>
          <a
            href="https://app.motivation.money"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-notion inline-block bg-black text-white px-10 py-5 rounded-md font-black text-base uppercase tracking-wider hover:bg-black/80"
          >
            Try Motivation Money →
          </a>
        </div>
      </section>
    </>
  );
}
