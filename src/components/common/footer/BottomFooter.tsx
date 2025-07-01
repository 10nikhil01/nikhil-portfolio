"use client";

import type { FooterLinkItem } from "@/components/common/footer/constant";
import { FooterData, FooterLinks } from "@/components/common/footer/constant";
import useMediaQuery from "@/utils/useMediaQuery";
import { motion } from "framer-motion";
import Link from "next/link";

function BottomFooter() {
  const isLargeScreen = useMediaQuery("(min-width: 640px)");
  const currentYear = new Intl.DateTimeFormat("en", {
    year: "numeric",
  }).format(new Date());
  return (
    <>
      <motion.div
        initial={
          isLargeScreen ? { x: 0, opacity: 1} : { x: -50, opacity: 0 }
        }
        whileInView={{ x: 0, opacity: 1}}
        transition={{ type: "spring", duration: 0.5, delay: 0.1, damping: 10 }}
        viewport={{ once: false }}
        className="mt-8 flex w-full items-center justify-center space-x-4 md:justify-end"
      >
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
      </motion.div>
      <motion.div
        initial={
          isLargeScreen ? { x: 0, opacity: 1 } : { x: -50, opacity: 0}
        }
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", duration: 0.5, delay: 0.1, damping: 10 }}
        viewport={{ once: false }}
        className="pointer-events-none mt-2 w-full border-t border-foreground/20 pt-6 text-center text-sm text-accent-foreground"
      >
        <p>
          © {currentYear} {FooterData.Copyright}
        </p>
      </motion.div>
    </>
  );
}

export default BottomFooter;
