"use client";

import { FooterData } from "@/components/common/footer/constant";
import type { MidMenuItem } from "@/components/common/header/constant";
import { MidMenus } from "@/components/common/header/constant";
import useMediaQuery from "@/utils/useMediaQuery";
import { motion } from "framer-motion";
import Link from "next/link";

function SecondColumn() {
    const isLargeScreen = useMediaQuery("(min-width: 640px)");
  
  return (
    <motion.div
      initial={isLargeScreen ? { x: 0, opacity: 0 } : { x: -40, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", duration: 0.5, delay: 0.1, damping: 10 }}
      viewport={{ once: false }}
      className="flex flex-col justify-start max-sm:w-full max-sm:items-center max-sm:justify-center sm:mx-auto"
    >
      <h3 className="pointer-events-none mb-2 text-lg font-semibold">{FooterData.SecondHeading}</h3>
      {MidMenus.slice(1).map((menu: MidMenuItem) => (
        <Link
          href={menu.href}
          className="my-1 text-sm text-muted-foreground hover:text-foreground dark:hover:text-amber-300"
          rel="noopener noreferrer"
          aria-label={menu.label}
          key={menu.label}
        >
          {menu.label}
        </Link>
      ))}
    </motion.div>
  );
}

export default SecondColumn;
