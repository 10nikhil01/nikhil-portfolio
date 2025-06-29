import type { IconProps } from "@/types";

export function Firebase({ size = "32", className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 351"
      width={size}
      className={className}
      height={size}
    >
      <path fill="#FFCA28" d="M0 276L128 0l128 276-128 75z" />
      <path fill="#FFA000" d="M128 0l128 276-64-43z" />
      <path fill="#F57F17" d="M0 276l128-75v150z" />
    </svg>
  );
}
