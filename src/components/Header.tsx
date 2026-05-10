"use client";

import Image from "next/image";
import Link from "next/link";
import { MouseEvent, useState } from "react";

interface HeaderProps {
  locale?: "en" | "zh";
  dict?: unknown;
}

export default function Header({ locale = "en" }: HeaderProps) {
  const homeHref = locale === "zh" ? "/zh" : "/";
  const [isBrandVisible, setIsBrandVisible] = useState(false);

  function handleBrandClick(event: MouseEvent<HTMLAnchorElement>) {
    if (!window.matchMedia("(hover: none), (pointer: coarse)").matches) {
      return;
    }

    event.preventDefault();
    setIsBrandVisible((current) => !current);
  }

  return (
    <header className="ml-header">
      <Link
        href={homeHref}
        aria-label="Motivation Labs home"
        aria-expanded={isBrandVisible}
        className={`ml-brand-link${isBrandVisible ? " is-revealed" : ""}`}
        onClick={handleBrandClick}
      >
        <Image
          src="/images/motivation-labs-avatar.png"
          alt=""
          width={44}
          height={44}
          priority
        />
        <span className="ml-brand-name">Motivation Labs</span>
      </Link>
    </header>
  );
}
