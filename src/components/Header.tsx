import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  locale?: "en" | "zh";
  dict?: unknown;
}

export default function Header({ locale = "en" }: HeaderProps) {
  const homeHref = locale === "zh" ? "/zh" : "/";

  return (
    <header className="ml-header">
      <Link href={homeHref} aria-label="Motivation Labs home">
        <Image
          src="/images/motivation-labs-avatar.png"
          alt=""
          width={44}
          height={44}
          priority
        />
      </Link>
    </header>
  );
}
