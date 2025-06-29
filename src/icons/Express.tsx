import type { IconProps } from "@/types";

export function Express({ size = "32", className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 27"
      width={size}
      height={size}
      className={className}
      fill="currentColor"
    >
      <text
        x="20"
        y="20"
        font-family="Arial, Helvetica, sans-serif"
        font-size="20"
        fill="currentColor"
      >
        express
      </text>
    </svg>
  );
}
