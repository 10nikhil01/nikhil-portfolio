"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const router = useRouter();
  useEffect(() => {
    const timeout = setTimeout(() => {
      router.back();
    }, 2000);

    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <main className="flex h-screen flex-col items-center justify-center bg-background text-foreground px-4 text-center">
      <h1 className="text-2xl font-bold mb-2">Oops! Page Not Found</h1>
      <p className="text-muted-foreground mb-4">
        You'll be redirected automatically. If not,{" "}
        <Button
          variant={"link"}
          onClick={() => router.back()}
          className="text-blue-500 underline m-0 p-0 hover:text-blue-600"
        >
          click here
        </Button>
      </p>
      <p className="text-xs text-gray-400">404 - Not Found</p>
    </main>
  );
}
