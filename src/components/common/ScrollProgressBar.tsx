"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[9999] h-1 origin-left rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-pink-500"
      style={{ scaleX }}
    />
  );
}
