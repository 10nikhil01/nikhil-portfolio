"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

const StartConvoButton: React.FC = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/contact");
  };

  return (
    <Button
      onClick={handleClick}
      className="inline-block rounded-full border border-muted-foreground px-5 py-2 shadow-sm transition-all duration-300 hover:border-amber-300 hover:bg-amber-300 hover:text-background hover:shadow-md hover:shadow-slate-400"
    >
      Start a Conversation
    </Button>
  );
};

export default StartConvoButton;
