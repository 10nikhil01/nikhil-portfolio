"use client";

import { motion } from "framer-motion";
import Avatar from "@/icons/Avatar";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-6 px-0 py-12 text-center max-sm:font-mono md:px-6"
    >
      {/* Avatar with pop-in effect */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: false }}
      >
        <Avatar aria-label="avatar on about section" />
      </motion.div>

      {/* Heading slides from top */}
      <motion.h2
        className="mb-6 text-3xl font-bold text-foreground md:text-4xl"
        initial={{ y: 40, opacity: 0, scale: 0.8 }}
        whileInView={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ type: "spring", duration: 0.5, delay: 0.1, damping: 10 }}
        viewport={{ once: false }}
      >
        ABOUT ME
      </motion.h2>

      {/* Paragraphs slide from left */}
      {[
        `👋 I'm Nikhil Kumar — a MERN Stack Developer with 2.5 years of experience, currently working at Purecode AI.`,
        `While I work across the full stack (MongoDB, Express.js, React.js, Node.js), my strength lies in building high-performance frontend applications using React.js, Next.js, TypeScript, and Tailwind CSS.`,
        `I specialize in crafting fast, accessible, and SEO-optimized web experiences — improving Core Web Vitals, leveraging SSR/ISR, and ensuring strong search engine visibility through technical SEO strategies. My work has helped drive significant improvements in organic traffic, page load performance, and user engagement.`,
      ].map((text, index) => (
        <motion.p
          key={index}
          className="text-left text-lg text-muted-foreground"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
        >
          {text}
        </motion.p>
      ))}

      {/* Button with scale/fade */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.6 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 10,
        }}
        viewport={{ once: false }}
        className="mt-5"
      >
        <Link
          href="/about"
          rel="noopener noreferrer"
          aria-label="about page"
          className="rounded-full bg-amber-500 px-4 py-3 text-white transition-all duration-300 hover:scale-105"
        >
          Read more
        </Link>
      </motion.div>
    </section>
  );
}
