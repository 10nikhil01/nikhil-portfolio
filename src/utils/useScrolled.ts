"use client";

import { useEffect, useRef, useState } from "react";

type ScrollState = "up" | "down" | "top" | "idle";

export function useScrollDirection(): ScrollState {
  const [direction, setDirection] = useState<ScrollState>("top");
  const lastYRef = useRef(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const lastY = lastYRef.current;

      // Set direction based on scroll position
      if (currentY < 10) {
        setDirection("top");
      } else if (currentY > lastY) {
        setDirection("down");
      } else if (currentY < lastY) {
        setDirection("up");
      }

      // Update scrollY
      lastYRef.current = currentY;

      // Reset idle timeout
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setDirection("idle");
      }, 2000); // 2 seconds of no scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return direction;
}
