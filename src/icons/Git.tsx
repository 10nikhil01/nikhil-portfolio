import type { IconProps } from "@/types";
import React from "react";

export function Git({ size = "32", className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 97.16 97.16"
      width={size}
      className={className}
      height={size}
    >
      <path
        fill="#f05133"
        d="M92.71 44.41L52.75 4.45a5.03 5.03 0 0 0-7.11 0L38.48 11.6l9.18 9.18a7.44 7.44 0 0 1 9.48 9.48l8.8 8.8a7.45 7.45 0 1 1-5.32 5.32l-8.26-8.26v21.78a7.45 7.45 0 1 1-7.07-.2V35.47a7.45 7.45 0 0 1-3.27-10.45l-9.01-9.01-26.9 26.9a5.03 5.03 0 0 0 0 7.11l39.96 39.96a5.03 5.03 0 0 0 7.11 0l39.96-39.96a5.03 5.03 0 0 0 0-7.11z"
      />
    </svg>
  );
}
