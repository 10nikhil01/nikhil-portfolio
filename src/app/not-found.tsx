"use client";

import { useEffect } from "react";
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
    <main className="flex h-screen flex-col items-center justify-center bg-background px-4 text-center text-foreground">
      <h1 className="mb-2 text-2xl font-bold">Oops! Page Not Found</h1>
      <p className="mb-4 text-muted-foreground">
        You&apos;ll be redirected automatically. If not,{" "}
        <Button
          variant={"link"}
          onClick={() => router.back()}
          className="m-0 p-0 text-blue-500 underline hover:text-blue-600"
        >
          click here
        </Button>
      </p>
      <p className="text-xs text-gray-400">404 - Not Found</p>
    </main>
  );
}
