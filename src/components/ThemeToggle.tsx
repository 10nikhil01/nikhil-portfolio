"use client";
import * as React from "react";
import DarkThemeIcon from "@/icons/LightTheme";
import LightThemeIcon from "@/icons/DarkTheme";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className={`size-5 border-none bg-background p-0 text-foreground shadow-none hover:bg-background focus-visible:ring-0`}
    >
      <DarkThemeIcon />
      <LightThemeIcon />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}