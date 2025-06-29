import type { IconProps } from "@/types";

export function Mongodb({ size = "32", className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 590"
      width={size}
      height={size}
      className={className}
    >
      <path fill="#10AA50" d="M128 0C128 0 0 198 128 590c128-392 0-590 0-590z" />
      <path fill="#12924F" d="M128 0v590c128-392 0-590 0-590z" />
    </svg>
  );
}
