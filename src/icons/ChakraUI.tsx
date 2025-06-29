import type { IconProps } from "@/types";

export function ChakraUi({ height = 35, width = 35 }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24 8C32.837 8 40 15.163 40 24C40 32.837 32.837 40 24 40C15.163 40 8 32.837 8 24C8 15.163 15.163 8 24 8Z"
        fill="url(#paint0_linear_1743_88236)"
      />
      <path
        d="M16.6606 24.6824L27.5661 13.8512C27.7691 13.6482 28.0976 13.8958 27.9606 14.1467L23.9012 21.5871C23.8104 21.7522 23.9309 21.9552 24.1191 21.9552H31.1335C31.3597 21.9552 31.4687 22.2326 31.3036 22.3861L19.0114 33.8595C18.7902 34.0658 18.4633 33.7753 18.6399 33.531L24.4592 25.5029C24.578 25.3378 24.4608 25.1083 24.2578 25.1083H16.8356C16.6127 25.1083 16.5021 24.8392 16.6606 24.6824Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1743_88236"
          x1="23.9984"
          y1="8"
          x2="23.9984"
          y2="40"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#7BCBD4" />
          <stop offset="1" stop-color="#29C6B7" />
        </linearGradient>
      </defs>
    </svg>
  );
}
