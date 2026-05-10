import type { Metadata } from "next";
import Link from "next/link";
import { queryProductImpactSummary } from "@/lib/product-impact";

type Work = {
  mark: string;
  name: string;
  description: string;
  href: string;
};

const works: Work[] = [
  {
    mark: "C",
    name: "Crosscheck",
    description: "Auto code-review pipelines.",
    href: "https://github.com/Motivation-Labs/crosscheck",
  },
  {
    mark: "F",
    name: "Motivation Form",
    description: "Agent-built forms for feedback and insight.",
    href: "https://form.gold",
  },
  {
    mark: "K",
    name: "Motivate Kids",
    description: "Points, badges, and rewards for family motivation.",
    href: "https://github.com/Motivation-Labs/motivate-kids",
  },
  {
    mark: "M",
    name: "Motivation Money",
    description: "Stablecoin payroll and team treasury.",
    href: "/money",
  },
  {
    mark: "M",
    name: "Motivate Me",
    description: "Personal habit loops.",
    href: "https://github.com/Motivation-Labs/motivate-me",
  },
  {
    mark: "T",
    name: "Motivation Team",
    description: "Onboarding, subscriptions, and team ops.",
    href: "https://github.com/Motivation-Labs/motivation-team",
  },
];

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const productLetters = Array.from(new Set(works.map((work) => work.mark))).sort(
  (left, right) => alphabet.indexOf(left) - alphabet.indexOf(right),
);
const firstProductIndex = alphabet.indexOf(productLetters[0]);
const lastProductIndex = alphabet.indexOf(productLetters[productLetters.length - 1]);
const topParkingLetters = alphabet.slice(0, firstProductIndex).join(" ");
const bottomParkingLetters = alphabet.slice(lastProductIndex + 1).join(" ");
const placeholderLetters = new Map(
  productLetters.flatMap((letter, index): Array<[string, string]> => {
    const nextLetter = productLetters[index + 1];

    if (!nextLetter) {
      return [];
    }

    const currentIndex = alphabet.indexOf(letter);
    const nextIndex = alphabet.indexOf(nextLetter);

    if (nextIndex - currentIndex <= 1) {
      return [];
    }

    return [
      [
        alphabet[Math.floor((currentIndex + nextIndex) / 2)],
        alphabet.slice(currentIndex + 1, nextIndex).join(" "),
      ],
    ];
  }),
);

export const metadata: Metadata = {
  title: "Motivation Labs | Humans and Agents in Harmony",
  description:
    "Motivation Labs is an independent home for software products built by a solo founder to serve a human-agent team.",
  alternates: {
    canonical: "/",
    languages: { en: "/", zh: "/zh" },
  },
  openGraph: {
    title: "Motivation Labs",
    description:
      "An independent home for software products built to help agents work with humans in harmony.",
    type: "website",
    locale: "en_US",
    alternateLocale: "zh_CN",
    images: [{ url: "/og/home.png", width: 1200, height: 630, alt: "Motivation Labs" }],
  },
};

export default async function Home() {
  const impactSummary = await queryProductImpactSummary();

  return (
    <main className="ml-page">
      <section className="ml-impact" aria-labelledby="impact-title">
        <h2 id="impact-title">Impact</h2>
        <dl>
          {impactSummary.metrics.map((metric) => (
            <div key={metric.label}>
              <dt>{metric.label}</dt>
              <dd>
                {metric.value}
                {metric.note && <span>{metric.note}</span>}
              </dd>
            </div>
          ))}
        </dl>
        <p>Aggregate statistics across Motivation Labs products.</p>
        <p>Last updated {impactSummary.updatedAtLabel}.</p>
      </section>

      <section className="ml-section" aria-labelledby="about-title">
        <h1 id="about-title">About</h1>
        <div className="ml-copy">
          <p>
            Motivation Labs is an independent entity for the software products I
            build, mainly to serve the needs of{" "}
            <Link href="https://inductive.network">our team</Link>, family, and
            friends. Our team&apos;s mission is to carry out a vision of agents
            working with humans in harmony.
          </p>
        </div>
      </section>

      <section
        className="ml-section ml-philosophy"
        aria-labelledby="philosophy-title"
      >
        <h2 id="philosophy-title">Product Philosophy</h2>
        <blockquote>
          <p>&quot;Write programs that do one thing and do it well.&quot;</p>
          <cite>
            M. Douglas McIlroy,{" "}
            <Link href="https://inigomedina.co/library/work/mcilroy-unix-foreword">
              UNIX Time-Sharing System: Foreword
            </Link>
          </cite>
        </blockquote>
      </section>

      <section
        className="ml-section ml-works-section"
        id="products"
        aria-labelledby="software-title"
      >
        <h2 id="software-title">Software</h2>
        <div className="ml-alphabet-map">
          {topParkingLetters && (
            <span
              className="ml-alpha-node ml-alpha-end-node is-start"
              data-letters={topParkingLetters}
              aria-label={`Potential software letters: ${topParkingLetters}`}
              tabIndex={0}
            />
          )}
          {alphabet.map((letter) => {
            const letterWorks = works.filter((work) => work.mark === letter);
            const hasWorks = letterWorks.length > 0;

            return (
              <div
                className={`ml-alpha-row ${hasWorks ? "is-product" : "is-empty"}`}
                key={letter}
              >
                <span className="ml-alpha-letter" aria-hidden="true">
                  {letter}
                </span>
                {!hasWorks && placeholderLetters.has(letter) && (
                  <span
                    className="ml-alpha-node"
                    data-letters={placeholderLetters.get(letter)}
                    aria-label={`Potential software letters: ${placeholderLetters.get(letter)}`}
                    tabIndex={0}
                  />
                )}
                {hasWorks ? (
                  <div className="ml-alpha-products">
                    {letterWorks.map((work) => (
                      <Link
                        className="ml-alpha-product"
                        href={work.href}
                        key={`${work.mark}-${work.name}`}
                      >
                        <strong>{work.name}</strong>
                        <span>{work.description}</span>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <span className="ml-alpha-line" aria-hidden="true" />
                )}
              </div>
            );
          })}
          {bottomParkingLetters && (
            <span
              className="ml-alpha-node ml-alpha-end-node is-end"
              data-letters={bottomParkingLetters}
              aria-label={`Potential software letters: ${bottomParkingLetters}`}
              tabIndex={0}
            />
          )}
        </div>
      </section>
    </main>
  );
}
