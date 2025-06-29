import type { IconProps } from "@/types";

export function Vercel({ size = "32", className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1155 1000"
      width={size}
      height={size}
      className={className}
    >
      <path d="M577.5 0L1155 1000H0L577.5 0z" />
    </svg>
  );
}
