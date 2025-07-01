"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[9999] h-1 origin-left rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-pink-500"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
