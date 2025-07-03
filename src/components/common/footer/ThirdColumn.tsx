"use client";

import type { SocialLinksItem } from "@/components/common/footer/constant";
import { FooterData, SocialLinks } from "@/components/common/footer/constant";
import StartConvoButton from "@/components/common/StartConversationButton";
import useMediaQuery from "@/utils/useMediaQuery";
import { motion } from "framer-motion";
import Link from "next/link";

function ThirdColumn() {
  const isLargeScreen = useMediaQuery("(min-width: 640px)");

  return (
    <motion.div
      initial={isLargeScreen ? { x: 0, opacity: 0 } : { x: -40, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", duration: 0.5, delay: 0.1, damping: 10 }}
      viewport={{ once: false }}
      className="max-sm:flex max-sm:w-full max-sm:flex-col max-sm:items-center max-sm:justify-center"
    >
      <h3 className="pointer-events-none mb-3 text-lg font-semibold">{FooterData.ThirdHeading}</h3>
      <p className="pointer-events-none text-sm text-muted-foreground max-sm:text-center">
        {FooterData.SecondParagraph}
      </p>
      <div className="my-4 flex space-x-4 text-muted-foreground ">
        {SocialLinks.map(({ href, label, icon: Icon }: SocialLinksItem) => (
          <Link
            key={label}
            rel="noopener noreferrer"
            href={href}
            target="_blank"
            className="text-xl hover:text-foreground dark:hover:text-amber-300"
            aria-label={label}
          >
            {Icon}
          </Link>
        ))}
      </div>
      <StartConvoButton />
    </motion.div>
  );
}

export default ThirdColumn;
