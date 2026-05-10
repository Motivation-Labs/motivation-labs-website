import { Product } from "./products";

const BASE_URL = "https://motivationlabs.ai";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Motivation Labs",
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    description:
      "Motivation Labs is an independent home for software products built to help agents work with humans in harmony.",
    foundingDate: "2026",
    address: {
      "@type": "PostalAddress",
      addressLocality: "San Francisco",
      addressRegion: "CA",
      addressCountry: "US",
    },
    sameAs: [
      // TODO: Add X/Twitter URL when @motivationlabs account is created
    ],
  };
}

export function productJsonLd(product: Product, locale?: string) {
  const isLive = product.slug === "money";

  const base = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.name,
    description: product.description,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    inLanguage: locale === "zh" ? "zh-CN" : "en-US",
    publisher: {
      "@type": "Organization",
      name: "Motivation Labs",
      url: BASE_URL,
    },
    url: `${BASE_URL}/${product.slug}`,
  };

  if (isLive) {
    return {
      ...base,
      offers: {
        "@type": "AggregateOffer",
        lowPrice: "0",
        highPrice: "1.99",
        priceCurrency: "USD",
        offerCount: 3,
        offers: [
          {
            "@type": "Offer",
            name: "Free",
            price: "0",
            priceCurrency: "USD",
            description: "Up to 3 team members. All features included.",
            availability: "https://schema.org/InStock",
          },
          {
            "@type": "Offer",
            name: "Pro",
            price: "1.99",
            priceCurrency: "USD",
            description: "Unlimited team members. $1.99/member/month.",
            availability: "https://schema.org/InStock",
          },
          {
            "@type": "Offer",
            name: "Enterprise",
            price: "0",
            priceCurrency: "USD",
            description: "Custom pricing. Dedicated infrastructure and SLA.",
            availability: "https://schema.org/InStock",
          },
        ],
      },
    };
  }

  return {
    ...base,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/PreOrder",
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Motivation Labs",
    url: BASE_URL,
    description:
      "An independent home for software products built by a solo founder to serve a human-agent team.",
    publisher: organizationJsonLd(),
  };
}
