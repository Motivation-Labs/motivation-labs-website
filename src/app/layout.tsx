import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./quiet.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { organizationJsonLd, websiteJsonLd } from "@/lib/structured-data";

const geistSans = localFont({
  src: "../../node_modules/next/dist/next-devtools/server/font/geist-latin.woff2",
  variable: "--font-geist-sans",
  display: "swap",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../../node_modules/next/dist/next-devtools/server/font/geist-mono-latin.woff2",
  variable: "--font-geist-mono",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://motivationlabs.ai"),
  title: {
    default: "Motivation Labs | Humans and Agents in Harmony",
    template: "%s | Motivation Labs",
  },
  description:
    "Motivation Labs is an independent home for software products built to help agents work with humans in harmony.",
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      zh: "/zh",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "zh_CN",
    siteName: "Motivation Labs",
    title: "Motivation Labs | Humans and Agents in Harmony",
    description:
      "An independent home for software products built by a solo founder to serve a human-agent team.",
    images: [{ url: "/og/home.png", width: 1200, height: 630, alt: "Motivation Labs" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Motivation Labs | Humans and Agents in Harmony",
    description:
      "An independent home for software products built to help agents work with humans in harmony.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased selection:bg-gray-200`}
      >
        <GoogleAnalytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationJsonLd(), websiteJsonLd()]),
          }}
        />
        {children}
      </body>
    </html>
  );
}
