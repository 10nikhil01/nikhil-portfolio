// import { getSiteUrl } from "@/utils/getSiteURL";
import { ImageResponse } from "next/og";
export const alt = "Nikhil - Developer with 2 years of experience.";
export const size = { width: 1200, height: 680 };
export const contentType = "image/png";

export const runtime = "edge";
// const logoUrl = `${getSiteUrl()}/favicon.ico`;

// const svgDataUrl = `data:image/svg+xml, ${encodeURIComponent(svgcontent)}`;
export default async function Image() {
  const gilroyBold = fetch(new URL("../fonts/gilroy/Gilroy-Bold.ttf", import.meta.url)).then(
    (res) => res.arrayBuffer()
  );
  return new ImageResponse(
    (
      <div
        className="flex w-full flex-col items-center justify-center "
        style={{
          //   backgroundImage: `url(${svgDataUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "1200px",
          height: "680px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "moonspace",
        }}
      >
        <div tw="flex flex-col items-center mb-0 justify-center">
          {/* logo */}
          {/* <img
          src={`${getSiteUrl()}/logo.webp`}
          width={200}
          height={200}
          alt="Logo"
          style={{
            width: "150px", // Adjust size accordingly
            height: "auto",
            marginBottom: "20px",
          }}
        /> */}
          {/* text */}

          <p tw="text-[120px] text-gray-900">Mr.Nikhil Kumar</p>
          <p tw="text-[106px] text-purple-600 text-center">| Developer |</p>
          <p tw="text-[106px] text-purple-600 text-center">| SEO Optimization |</p>
        </div>
        <h3 tw="text-5xl text-neutral-900 flex flex-wrap items-center justify-center">
          Next.js Developer with
          <span tw=" text-white rounded-lg bg-purple-600 mb-20 mx-1 px-2 py-3 text-center">
            2 years of experience
          </span>
          in building scalable, SEO-optimized web apps.
        </h3>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Bold",
          data: await gilroyBold,
          style: "normal",
          weight: 900,
        },
      ],
    }
  );
}
