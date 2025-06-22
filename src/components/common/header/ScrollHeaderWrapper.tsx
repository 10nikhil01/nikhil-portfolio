"use client";

import { useScrolled } from "@/utils/useScrolled";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface ScrollHeaderWrapperProps {
  children: ReactNode;
}

export default function ScrollHeaderWrapper({ children }: ScrollHeaderWrapperProps) {
  const scrolled = useScrolled();

  return (
    <div
      className={cn(
        "transition-all duration-500",
        scrolled ? "bg-background/10 backdrop-blur-sm" : "bg-transparent"
      )}
    >
      {children}
    </div>
  );
}
