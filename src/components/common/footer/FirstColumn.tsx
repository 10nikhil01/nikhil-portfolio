"use client";

import { FooterData } from "@/components/common/footer/constant";
import useMediaQuery from "@/utils/useMediaQuery";
import { motion } from "framer-motion";

function FirstColumn() {
  const isLargeScreen = useMediaQuery("(min-width: 640px)");

  return (
    <motion.div
      initial={isLargeScreen ? { x: 0, opacity: 0 } : { x: -40, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", duration: 0.5, delay: 0.1, damping: 10 }}
      viewport={{ once: false }}
      className="max-sm:flex max-sm:w-full max-sm:flex-col max-sm:items-center max-sm:justify-center"
    >
      <motion.h2
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", duration: 0.5, delay: 0.1, damping: 10, stiffness: 300 }}
        viewport={{ once: false }}
        className="pointer-events-none text-2xl font-bold"
      >
        {FooterData.FirstHeading}
      </motion.h2>
      <p className="pointer-events-none mt-2 text-sm text-muted-foreground max-sm:text-center">
        {FooterData.FirstParagraph}
      </p>
    </motion.div>
  );
}

export default FirstColumn;
