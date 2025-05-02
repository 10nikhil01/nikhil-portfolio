"use client";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="flex h-dvh items-center justify-center bg-background">
      <ThemeToggle />
      <h1 className="text-foreground">Home Page</h1>
    </main>
  );
}
