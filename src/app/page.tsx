"use client";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="bg-background h-dvh flex items-center justify-center">
      <ThemeToggle />
      <h1 className="text-foreground">Home Page</h1>
    </main>
  );
}
