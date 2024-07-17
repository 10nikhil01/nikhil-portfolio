"use client";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="bg-background">
      <ThemeToggle />
      <h1 className="text-foreground">HomePage</h1>
      </main>
  );
}
