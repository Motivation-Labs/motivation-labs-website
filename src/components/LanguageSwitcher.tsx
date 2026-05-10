"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher({ locale }: { locale: "en" | "zh" }) {
  const pathname = usePathname();

  const isZh = locale === "zh";
  const targetPath = isZh
    ? pathname.replace(/^\/zh/, "") || "/"
    : `/zh${pathname === "/" ? "" : pathname}`;

  return (
    <div className="ml-language-switcher">
      <Link href={isZh ? targetPath : pathname} className={!isZh ? "is-active" : ""}>
        EN
      </Link>
      <Link href={isZh ? pathname : targetPath} className={isZh ? "is-active" : ""}>
        中文
      </Link>
    </div>
  );
}
