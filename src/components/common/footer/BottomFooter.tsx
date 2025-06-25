import type { FooterLinkItem } from "@/components/common/footer/constant";
import { FooterData, FooterLinks } from "@/components/common/footer/constant";
import Link from "next/link";

function BottomFooter() {
  const currentYear = new Intl.DateTimeFormat("en", {
    year: "numeric",
  }).format(new Date());
  return (
    <>
      <div className="mt-8 flex w-full items-center justify-center space-x-4 md:justify-end">
        {FooterLinks.map((link: FooterLinkItem) => (
          <Link
            key={link.label}
            href={link.href}
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground dark:hover:text-amber-300"
            aria-label={link.label}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="pointer-events-none mt-2 w-full border-t border-foreground/20 pt-6 text-center text-sm text-accent-foreground">
        <p>
          © {currentYear} {FooterData.Copyright}
        </p>
      </div>
    </>
  );
}

export default BottomFooter;
