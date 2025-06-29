"use client";

import { useScrollDirection } from "@/utils/useScrolled";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface ScrollHeaderWrapperProps {
  children: ReactNode;
}

export default function ScrollHeaderWrapper({ children }: ScrollHeaderWrapperProps) {
  const scrollDir = useScrollDirection();

  const shouldShow = scrollDir === "up" || scrollDir === "top" || scrollDir === "idle";

  return (
    <div
      className={cn(
        "sticky top-0 z-50 transition-all duration-700",
        shouldShow ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0",
        "bg-background/10 backdrop-blur-sm"
      )}
    >
      {children}
    </div>
  );
}
