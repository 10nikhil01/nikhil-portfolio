"use client";

import { useEffect, useState } from "react";

export const useScrolled = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isNowScrolled = window.scrollY > 0;
      setScrolled((prev) => {
        if (prev !== isNowScrolled) return isNowScrolled;
        return prev;
      });
    };

    handleScroll(); // Initialize state on mount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrolled;
};
