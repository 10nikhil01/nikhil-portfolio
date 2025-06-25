"use client";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import SunIcon from "@/icons/Sun";
import MoonIcon from "@/icons/Moon";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant={"default"}
      size={"icon"}
      onClick={toggleTheme}
      className={cn(
        "size-12 border-none bg-background p-0 text-foreground shadow-none hover:bg-background focus-visible:ring-0",
        className
      )}
    >
      <SunIcon />
      <MoonIcon />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
