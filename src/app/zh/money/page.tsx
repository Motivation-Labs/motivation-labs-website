import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CexBadge from "@/components/CexBadge";
import { zh } from "@/i18n";

const d = zh.money;

export const metadata: Metadata = {
  title: "Motivation Money — 稳定币薪资发放与加密货币支付运营平台",
  description:
    "全球团队稳定币薪资软件。Safe自托管资金库，通过CEX路由的USDC/USDT隐私支付，完整审计追踪。API优先设计——为AI智能体和人类而建。免费开始使用。",
  alternates: {
    canonical: "/zh/money",
    languages: { en: "/money", zh: "/zh/money" },
  },
  openGraph: {
    title: "Motivation Money — 稳定币薪资发放与加密货币支付运营平台",
    description:
      "用USDC/USDT给全球团队发工资。自托管资金库、CEX路由隐私支付、完整审计追踪。支持AI智能体自动化。",
    type: "website",
    locale: "zh_CN",
    images: [{ url: "/og/money-zh.png", width: 1200, height: 630, alt: "Motivation Money" }],
  },
};

export default function ZhMoneyPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-[#f2faf5] border-b-2 border-black py-24 md:py-36">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
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
                {d.heroH1}
              </h1>
              <p className="text-xl text-black/70 mb-10 font-medium leading-relaxed max-w-lg">
                {d.heroSubtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://app.motivation.money"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-notion bg-black text-white px-8 py-4 rounded-md font-black hover:bg-black/80 uppercase tracking-wider text-sm text-center"
                >
                  {d.heroCta}
                </a>
                <Link
                  href="/zh"
                  className="btn-notion inline-block bg-white text-black px-8 py-4 rounded-md font-black hover:bg-emerald-50 uppercase tracking-wider text-sm text-center"
                >
                  {d.heroBack}
                </Link>
              </div>
            </div>

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
              {d.problemLabel}
            </div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight whitespace-pre-line">
              {d.problemHeading}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {d.problemPersonas.map((item, i) => {
              const avatars = [
                "/images/money/01_male_short_side_parted_black_hair_open_mouth.png",
                "/images/money/04_female_long_straight_black_hair_gentle_smile.png",
                "/images/money/07_male_curly_dark_hair_aviator_glasses_open_grin.png",
              ];
              return (
                <div
                  key={item.name}
                  className="quote-card p-6 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] bg-white"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="quote-avatar w-12 h-12 border-2 border-black bg-gray-50 rounded-full overflow-hidden flex items-center justify-center shrink-0">
                      <Image
                        src={avatars[i]}
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
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Product Walkthrough ── */}
      <section className="py-24 bg-[#f2faf5] border-b-2 border-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
              {d.walkthroughHeading}
            </h2>
            <p className="text-lg text-notion-gray font-medium">
              {d.walkthroughSubtitle}
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
                  {d.step1Heading}
                </h3>
                <p className="text-notion-gray font-medium leading-relaxed mb-4">
                  {d.step1Desc}
                </p>
                <ul className="space-y-2 text-sm font-medium text-notion-gray">
                  {d.step1Bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                      {b}
                    </li>
                  ))}
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
                  {d.step2Heading}
                </h3>
                <p className="text-notion-gray font-medium leading-relaxed mb-4">
                  {d.step2Desc}
                </p>
                <ul className="space-y-2 text-sm font-medium text-notion-gray">
                  {d.step2Bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                      {b}
                    </li>
                  ))}
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
                  {d.step3Heading}
                </h3>
                <p className="text-notion-gray font-medium leading-relaxed mb-4">
                  {d.step3Desc}
                </p>
                <div className="flex items-center gap-2 flex-wrap mb-5">
                  <span className="text-xs font-black text-black/40 uppercase tracking-wider">{d.supportedExchanges}</span>
                  <CexBadge name="OKX" size="md" />
                  <CexBadge name="Kraken" size="md" />
                  <CexBadge name="Coinbase" size="md" />
                  <CexBadge name="Binance" size="md" />
                </div>
                <ul className="space-y-2 text-sm font-medium text-notion-gray">
                  {d.step3Bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                      {b}
                    </li>
                  ))}
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
                  {d.step4Heading}
                </h3>
                <p className="text-notion-gray font-medium leading-relaxed mb-4">
                  {d.step4Desc}
                </p>
                <ul className="space-y-2 text-sm font-medium text-notion-gray">
                  {d.step4Bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                      {b}
                    </li>
                  ))}
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
            {d.principlesHeading}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {d.principles.map((p, i) => (
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
      <section className="py-24 bg-[#f8f8f7] border-b-2 border-black" id="security">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <div className="inline-block px-3 py-1 border-2 border-black text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              安全与隐私
            </div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
              您的财务数据
              <br />
              值得银行级保护。
            </h2>
          </div>

          {/* ── Flow Diagram ── */}
          <div className="mb-16">
            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40 mb-4">
              零链上追踪
            </div>
            <h3 className="text-2xl font-black tracking-tight mb-2">
              收款人永远看不到您的资金库。
            </h3>
            <p className="text-sm text-notion-gray font-medium mb-8 max-w-xl">
              付款通过交易所路由。资金库与收款人之间的链上链接从架构上被切断。
            </p>

            <div className="border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white p-6 md:p-10 overflow-x-auto">
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-0 min-w-0">
                <div className="flex flex-col items-center gap-2 shrink-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 border-2 border-black bg-emerald-50 flex flex-col items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <div className="flex gap-1 mb-1">
                      <span className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#2775CA] border border-black/20 flex items-center justify-center text-white text-[8px] md:text-[9px] font-black">$</span>
                      <span className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#26A17B] border border-black/20 flex items-center justify-center text-white text-[8px] md:text-[9px] font-black">T</span>
                    </div>
                    <span className="text-[7px] md:text-[8px] font-black text-black/60">USDC / USDT</span>
                  </div>
                  <div className="px-2 py-1 border-2 border-black bg-emerald-400 text-[8px] md:text-[9px] font-black uppercase tracking-wider shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                    Safe Multi-Sig
                  </div>
                  <span className="text-[8px] font-bold text-black/30">您的资金库</span>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-1 shrink-0">
                  <div className="hidden md:block w-8 lg:w-16 h-0.5 bg-black" />
                  <div className="md:hidden h-6 w-0.5 bg-black" />
                  <svg className="w-3 h-3 md:-ml-0.5 rotate-90 md:rotate-0" viewBox="0 0 12 12" fill="black"><path d="M2 1L10 6L2 11z" /></svg>
                </div>

                <div className="flex flex-col items-center gap-2 shrink-0">
                  <div className="border-2 border-black bg-white p-3 md:p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                    <div className="grid grid-cols-2 gap-2 mb-2">
                      {[
                        { src: "/images/exchanges/okx.svg", alt: "OKX" },
                        { src: "/images/exchanges/kraken.svg", alt: "Kraken" },
                        { src: "/images/exchanges/coinbase.svg", alt: "Coinbase" },
                        { src: "/images/exchanges/binance.svg", alt: "Binance" },
                      ].map((ex) => (
                        <div key={ex.alt} className="w-8 h-8 md:w-10 md:h-10 border border-black/20 flex items-center justify-center bg-gray-50">
                          <Image src={ex.src} alt={ex.alt} width={24} height={24} className="object-contain" />
                        </div>
                      ))}
                    </div>
                    <div className="text-[8px] md:text-[9px] font-black text-center text-black/50 uppercase tracking-wider">
                      您的交易所
                    </div>
                  </div>
                  <div className="text-[8px] font-bold text-black/30 text-center max-w-[120px]">
                    汇集数千笔<br />来自不同用户的交易
                  </div>
                </div>

                <div className="flex flex-col items-center gap-1 shrink-0">
                  <div className="hidden md:flex flex-col gap-3 items-start">
                    {[0, 1, 2].map((i) => (
                      <div key={i} className="flex items-center">
                        <div className="w-8 lg:w-14 border-t-2 border-dashed border-black/30" />
                        <svg className="w-2 h-2 -ml-0.5" viewBox="0 0 12 12" fill="rgba(0,0,0,0.3)"><path d="M2 1L10 6L2 11z" /></svg>
                      </div>
                    ))}
                  </div>
                  <div className="md:hidden flex gap-3 items-center">
                    {[0, 1, 2].map((i) => (
                      <div key={i} className="flex flex-col items-center">
                        <div className="h-6 border-l-2 border-dashed border-black/30" />
                        <svg className="w-2 h-2 -mt-0.5 rotate-90" viewBox="0 0 12 12" fill="rgba(0,0,0,0.3)"><path d="M2 1L10 6L2 11z" /></svg>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex md:flex-col gap-3 shrink-0">
                  {[
                    { avatar: "/images/money/01_male_short_side_parted_black_hair_open_mouth.png", name: "Alex" },
                    { avatar: "/images/money/04_female_long_straight_black_hair_gentle_smile.png", name: "Sarah" },
                    { avatar: "/images/money/07_male_curly_dark_hair_aviator_glasses_open_grin.png", name: "Marcus" },
                  ].map((person) => (
                    <div key={person.name} className="flex items-center gap-2">
                      <div className="w-8 h-8 md:w-9 md:h-9 rounded-full border-2 border-black overflow-hidden bg-gray-50 shrink-0">
                        <Image src={person.avatar} alt={person.name} width={36} height={36} className="w-full h-full object-cover" />
                      </div>
                      <div className="hidden md:block">
                        <div className="text-[9px] font-black">{person.name}</div>
                        <div className="text-[7px] text-black/30 font-bold">看到: 交易所</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-6 pt-4 border-t border-black/10">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-0.5 bg-black" />
                  <span className="text-[9px] font-bold text-black/40">链上充值（可见）</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 border-t-2 border-dashed border-black/30" />
                  <span className="text-[9px] font-bold text-black/40">交易所提现（无法追溯到资金库）</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Encryption Diagram ── */}
          <div className="mb-16">
            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40 mb-4">
              端到端加密
            </div>
            <h3 className="text-2xl font-black tracking-tight mb-2">
              您输入的永远不是我们存储的。
            </h3>
            <p className="text-sm text-notion-gray font-medium mb-8 max-w-xl">
              AES-256-GCM 在数据到达数据库之前完成加密。以下是您的数据在每个阶段的变化。
            </p>

            <div className="border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white overflow-hidden">
              <div className="grid grid-cols-3 border-b-2 border-black">
                <div className="p-3 md:p-4 border-r-2 border-black bg-emerald-50">
                  <div className="text-[9px] md:text-[10px] font-black uppercase tracking-wider text-emerald-700">您输入的</div>
                </div>
                <div className="p-3 md:p-4 border-r-2 border-black bg-gray-50">
                  <div className="text-[9px] md:text-[10px] font-black uppercase tracking-wider text-black/40">我们存储的</div>
                </div>
                <div className="p-3 md:p-4 bg-blue-50">
                  <div className="text-[9px] md:text-[10px] font-black uppercase tracking-wider text-blue-700">您看到的</div>
                </div>
              </div>
              {[
                { label: "CEX API 密钥", input: "a1b2c3d4-e5f6-7890", stored: "AES\u2022k7Fq2m...xP9v", display: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u20227890" },
                { label: "\u94B1\u5305\u5730\u5740", input: "0x1a2B...9fE4", stored: "AES\u2022Rj8nL2...Wq4z + SHA-256", display: "0x1a2B...9fE4" },
                { label: "\u85AA\u8D44", input: "$8,500.00", stored: "AES\u2022mN3pK7...Yv2x", display: "$8,500.00" },
                { label: "API Secret", input: "sk_live_motivate_xR7...", stored: "AES\u2022Hd9qL5...Bm1w", display: "\u4FDD\u5B58\u540E\u4E0D\u53EF\u67E5\u770B" },
              ].map((row, i) => (
                <div key={row.label} className={`grid grid-cols-3 ${i < 3 ? "border-b border-black/10" : ""}`}>
                  <div className="p-3 md:p-4 border-r-2 border-black">
                    <div className="text-[8px] md:text-[9px] font-black text-black/40 uppercase tracking-wider mb-1">{row.label}</div>
                    <div className="text-[10px] md:text-xs font-mono font-bold text-emerald-700 break-all">{row.input}</div>
                  </div>
                  <div className="p-3 md:p-4 border-r-2 border-black bg-gray-50/50">
                    <div className="text-[10px] md:text-xs font-mono font-bold text-black/30 break-all">{row.stored}</div>
                  </div>
                  <div className="p-3 md:p-4">
                    <div className="text-[10px] md:text-xs font-mono font-bold text-blue-700 break-all">{row.display}</div>
                  </div>
                </div>
              ))}
              <div className="p-3 md:p-4 border-t-2 border-black bg-black">
                <div className="text-[9px] md:text-[10px] font-bold text-white/60">
                  每次加密使用唯一随机 IV——相同输入产生不同密文。密钥分离意味着一个类别被攻破不会暴露另一个。
                </div>
              </div>
            </div>
          </div>

          {/* ── Bottom cards ── */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="p-5 md:p-6 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] bg-white">
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40 mb-4">
                三层验证机制
              </div>
              <div className="space-y-3">
                {[
                  { step: "1", label: "\u6CE8\u518C", desc: "\u5165\u804C\u65F6\u7ED1\u5B9A\u8EAB\u4EFD" },
                  { step: "2", label: "\u9A8C\u8BC1", desc: "\u5FAE\u989D\u5B58\u6B3E\u786E\u8BA4\u5730\u5740" },
                  { step: "3", label: "\u767D\u540D\u5355", desc: "\u4EA4\u6613\u6240\u5F3A\u5236\u63D0\u73B0\u9501\u5B9A" },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-3">
                    <div className="w-6 h-6 border-2 border-black flex items-center justify-center font-black text-[10px] shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] shrink-0 bg-emerald-50">
                      {item.step}
                    </div>
                    <div>
                      <div className="text-xs font-black">{item.label}</div>
                      <div className="text-[10px] text-notion-gray font-medium">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-black/40 font-bold mt-4 pt-3 border-t border-black/10">
                错误钱包转账从架构上不可能发生。
              </p>
            </div>

            <div className="p-5 md:p-6 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] bg-white">
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40 mb-4">
                数据库隔离
              </div>
              <div className="p-3 bg-gray-50 border border-black/10 mb-4 font-mono text-[10px] text-black/50">
                <div><span className="text-emerald-600">SELECT</span> * <span className="text-emerald-600">FROM</span> payouts</div>
                <div><span className="text-emerald-600">WHERE</span> org_id = <span className="text-blue-600">&apos;your-org&apos;</span></div>
                <div className="text-black/30 mt-1">-- RLS 在每次查询时强制执行</div>
              </div>
              <p className="text-xs text-notion-gray font-medium leading-relaxed">
                行级安全按组织隔离。无管理员绕过。即使应用漏洞也无法跨越组织边界。
              </p>
            </div>

            <div className="p-5 md:p-6 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] bg-white">
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40 mb-4">
                我们的承诺
              </div>
              <ul className="space-y-2.5">
                {[
                  { icon: "red", text: "\u6211\u4EEC\u7EDD\u4E0D\u6258\u7BA1\u60A8\u7684\u8D44\u91D1" },
                  { icon: "red", text: "\u6211\u4EEC\u7EDD\u4E0D\u67E5\u770B CEX \u51ED\u8BC1\u660E\u6587" },
                  { icon: "red", text: "\u6211\u4EEC\u7EDD\u4E0D\u8BBF\u95EE\u60A8\u7684 Safe \u79C1\u94A5" },
                  { icon: "green", text: "\u6BCF\u4E2A\u64CD\u4F5C\u90FD\u8BB0\u5F55\u5728\u5BA1\u8BA1\u65E5\u5FD7\u4E2D" },
                  { icon: "green", text: "\u60A8\u7684\u6570\u636E\u7EDD\u4E0D\u4E0E\u7B2C\u4E09\u65B9\u5171\u4EAB" },
                ].map((item) => (
                  <li key={item.text} className="flex items-start gap-2 text-[10px] md:text-xs font-medium text-notion-gray">
                    <span className={`w-1.5 h-1.5 mt-1 rounded-full shrink-0 ${item.icon === "red" ? "bg-red-400" : "bg-emerald-500"}`} />
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="https://docs.motivation.money/zh/money/data-privacy"
              className="text-sm font-black uppercase tracking-wider underline decoration-2 hover:text-black/70"
            >
              阅读完整的数据隐私与安全指南 →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Branding & Operations ── */}
      <section className="py-24 bg-white border-b-2 border-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <div className="inline-block px-3 py-1 border-2 border-black text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              全生命周期管控
            </div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
              不仅是支付。
              <br />
              是专业的财务运营。
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] bg-white">
              <div className="w-10 h-10 border-2 border-black flex items-center justify-center font-black text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-5">
                01
              </div>
              <h3 className="font-black text-lg mb-2">自定义邮件品牌</h3>
              <p className="text-sm text-notion-gray font-medium leading-relaxed">
                每封付款通知都带有您的 Logo、签名和组织名称。隐私控制让您
                按需屏蔽金额、地址和交易哈希。
              </p>
            </div>
            <div className="p-6 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] bg-white">
              <div className="w-10 h-10 border-2 border-black flex items-center justify-center font-black text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-5">
                02
              </div>
              <h3 className="font-black text-lg mb-2">多主体管理</h3>
              <p className="text-sm text-notion-gray font-medium leading-relaxed">
                在同一仪表盘管理多个法律实体。为员工分配实体、司法管辖区、
                注册地址和授权代表——随时满足合规要求。
              </p>
            </div>
            <div className="p-6 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] bg-white">
              <div className="w-10 h-10 border-2 border-black flex items-center justify-center font-black text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-5">
                03
              </div>
              <h3 className="font-black text-lg mb-2">API + CLI + Webhooks</h3>
              <p className="text-sm text-notion-gray font-medium leading-relaxed">
                20+ REST 端点、完整 CLI 和 12 种 webhook 事件类型。支持
                细粒度权限的 API 密钥。OpenAPI 规范自动生成 SDK 和 AI 工具。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Roadmap ── */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-block px-3 py-1 border border-white/30 text-white/60 text-[10px] font-black uppercase tracking-wider mb-6">
                {d.roadmapLabel}
              </div>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-6 text-white">
                {d.roadmapHeading}
              </h2>
              <p className="text-white/70 leading-relaxed font-medium">
                {d.roadmapDesc}
              </p>
            </div>
            <ul className="space-y-3">
              {d.roadmapItems.map((item) => (
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
            {d.whoHeading}
          </h2>
          <p className="text-notion-gray font-medium mb-12 max-w-xl">
            {d.whoSubtitle}
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {d.whoPersonas.map((c, i) => {
              const avatars = [
                "/images/money/05_female_black_bob_round_glasses_heart_mouth.png",
                "/images/money/02_male_swept_up_dark_hair_furrowed_brows_open_mouth.png",
                "/images/money/03_male_pompadour_black_hair_half_lidded_eyes_open_mouth.png",
              ];
              return (
                <div
                  key={c.label}
                  className="quote-card p-6 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex gap-4"
                >
                  <div className="quote-avatar w-12 h-12 border-2 border-black bg-gray-50 rounded-full overflow-hidden shrink-0 flex items-center justify-center">
                    <Image
                      src={avatars[i]}
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
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="py-24 bg-[#f2faf5] border-b-2 border-black" id="pricing">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <div className="inline-block px-3 py-1 border-2 border-black text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              定价
            </div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
              所有功能，每个方案都包含。
              <br />
              唯一的区别是席位数量。
            </h2>
          </div>

          <div className="mb-10 p-4 border-2 border-black bg-emerald-400 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] inline-block">
            <span className="text-sm font-black uppercase tracking-wider">
              Pro 方案免费 3 个月 — 无需信用卡
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Free */}
            <div className="p-6 md:p-8 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] bg-white">
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40 mb-4">
                免费版
              </div>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-5xl font-black tracking-tighter">$0</span>
                <span className="text-sm font-bold text-notion-gray">/月</span>
              </div>
              <p className="text-sm text-notion-gray font-medium leading-relaxed mb-6">
                最多 3 名活跃团队成员。与 Pro 版功能完全相同。无需信用卡，无试用期 — 在席位限制内永久免费。
              </p>
              <ul className="space-y-2 text-sm font-medium text-notion-gray">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  完整仪表盘、REST API 和 CLI
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  薪资发放、临时付款、报销
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  审计日志和 CSV 导出
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  自定义邮件品牌
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  Webhooks 和 OpenAPI 规范
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  零平台手续费
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  24 个月账单记录
                </li>
              </ul>
            </div>

            {/* Pro */}
            <div className="p-6 md:p-8 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white relative">
              <div className="absolute -top-3 right-6 px-3 py-1 bg-black text-white text-[10px] font-black uppercase tracking-wider">
                最受欢迎
              </div>
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40 mb-4">
                Pro
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="price-struck text-3xl font-black tracking-tighter text-black/40">$1.99</span>
                <span className="text-5xl font-black tracking-tighter">$0</span>
                <span className="text-sm font-bold text-notion-gray">/成员/月</span>
              </div>
              <p className="text-xs font-bold mb-6">
                <span className="text-emerald-600">前 3 个月免费。</span>
                之后 $1.99/成员/月，前 3 名成员始终免费。
              </p>
              <p className="text-sm text-notion-gray font-medium leading-relaxed mb-6">
                取消席位限制，成本线性增长，助力团队指数级扩张。自助管理账单。
              </p>
              <ul className="space-y-2 text-sm font-medium text-notion-gray mb-8">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  包含免费版所有功能
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  无限团队成员
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  永久账单记录
                </li>
              </ul>

              <div className="border-t-2 border-black pt-6">
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40 mb-3">
                  附加服务
                </div>
                <div className="p-4 border-2 border-dashed border-black/30 bg-emerald-50">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-xl font-black tracking-tight">$99</span>
                    <span className="text-xs font-bold text-notion-gray">/月</span>
                  </div>
                  <h4 className="font-black text-sm mb-2">专属基础设施</h4>
                  <ul className="space-y-1.5 text-xs font-medium text-notion-gray">
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-emerald-500 shrink-0" />
                      静态出站 IP，用于 CEX API 白名单
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-emerald-500 shrink-0" />
                      隔离的计算和数据库资源
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-emerald-500 shrink-0" />
                      专属 VPS — 无共享租户
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm text-notion-gray font-medium">
              无交易手续费。唯一的可变成本是交易所的提现费用（通常 $1–$10）。{" "}
              <Link
                href="https://docs.motivation.money/zh/money/pricing"
                className="underline decoration-2 hover:text-black"
              >
                查看完整定价详情 →
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
          <h2 className="font-hand text-4xl md:text-5xl text-black mb-6 leading-tight">
            {d.ctaHeading}
          </h2>
          <p className="text-lg text-black/70 mb-10 font-medium">
            {d.ctaSubtitle}
          </p>
          <a
            href="https://app.motivation.money"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-notion inline-block bg-black text-white px-10 py-5 rounded-md font-black text-base uppercase tracking-wider hover:bg-black/80"
          >
            {d.ctaButton}
          </a>
        </div>
      </section>
    </>
  );
}
