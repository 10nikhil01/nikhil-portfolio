"use client";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import SunIcon from "@/icons/SunIcon";
import MoonIcon from "@/icons/MoonIcon";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant={"default"}
      size={"icon"}
      onClick={toggleTheme}
      className={`size-5 border-none bg-background p-0 text-foreground shadow-none hover:bg-background focus-visible:ring-0`}
    >
      <SunIcon />
      <MoonIcon />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
