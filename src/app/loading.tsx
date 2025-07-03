"use client";

import type { Variants } from "framer-motion";
import { motion } from "framer-motion";

function Loading() {
  const dotVariants: Variants = {
    jump: {
      y: -30,
      transition: {
        duration: 0.8,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      animate="jump"
      transition={{ staggerChildren: -0.2, staggerDirection: -1 }}
      className="flex h-dvh items-center justify-center gap-3"
    >
      <motion.div
        className="size-5 rounded-[50%] bg-primaryGradient will-change-transform"
        variants={dotVariants}
      />
      <motion.div
        className="size-5 rounded-[50%] bg-primaryGradient will-change-transform"
        variants={dotVariants}
      />
      <motion.div
        className="size-5 rounded-[50%] bg-primaryGradient will-change-transform"
        variants={dotVariants}
      />
    </motion.div>
  );
}

export default Loading;
