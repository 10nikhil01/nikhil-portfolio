import type { IconProps } from "@/types";

export function Nextjs({ height = 35, width = 35 }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1743_93318)">
        <mask
          id="mask0_1743_93318"
          mask-type="alpha"
          maskUnits="userSpaceOnUse"
          x="8"
          y="8"
          width="32"
          height="32"
        >
          <path
            d="M24 40C32.8366 40 40 32.8366 40 24C40 15.1634 32.8366 8 24 8C15.1634 8 8 15.1634 8 24C8 32.8366 15.1634 40 24 40Z"
            fill="black"
          />
        </mask>
        <g mask="url(#mask0_1743_93318)">
          <path
            d="M24 40C32.8366 40 40 32.8366 40 24C40 15.1634 32.8366 8 24 8C15.1634 8 8 15.1634 8 24C8 32.8366 15.1634 40 24 40Z"
            fill="black"
          />
          <path
            d="M34.5793 36.0032L20.292 17.5996H17.6001V30.3943H19.7536V20.3345L32.8888 37.3054C33.4815 36.9088 34.0461 36.4734 34.5793 36.0032Z"
            fill="url(#paint0_linear_1743_93318)"
          />
          <path
            d="M30.5777 17.5996H28.4443V30.3996H30.5777V17.5996Z"
            fill="url(#paint1_linear_1743_93318)"
          />
        </g>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_1743_93318"
          x1="27.3779"
          y1="28.7107"
          x2="33.689"
          y2="36.5329"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1743_93318"
          x1="29.511"
          y1="17.5996"
          x2="29.4753"
          y2="26.9996"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stopOpacity="0" />
        </linearGradient>
        <clipPath id="clip0_1743_93318">
          <rect width="32" height="32" fill="white" transform="translate(8 8)" />
        </clipPath>
      </defs>
    </svg>
  );
}
