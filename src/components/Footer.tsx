interface FooterProps {
  locale?: "en" | "zh";
  dict?: unknown;
}

export default function Footer({}: FooterProps) {
  return (
    <footer className="ml-footer" id="contact">
      All rights reserved by Motivation Labs LLC, 2026.
    </footer>
  );
}
