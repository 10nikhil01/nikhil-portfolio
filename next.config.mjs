/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//       // domains: [
//       //   "purecodestorageprod.blob.core.windows.net",
//       //   "objectstorage.me-dubai-1.oraclecloud.com",
//       // ],
//       remotePatterns: [
//         {
//           protocol: "https",
//           hostname: "purecodestorageprod.blob.core.windows.net",
//           port: "",
//         },
//         {
//           protocol: "https",
//           hostname: "objectstorage.me-dubai-1.oraclecloud.com",
//           port: "",
//         },
//         {
//           protocol: "https",
//           hostname: "purecodevideos.b-cdn.net",
//           port: "",
//         },
//         {
//           protocol: "https",
//           hostname: "purecodestoragedev.blob.core.windows.net",
//           port: "",
//         },
//         {
//           protocol: "https",
//           hostname: "img.clerk.com",
//           port: "",
//         },
//       ],
//     },
//     // headers: async () => {
//     //   // Add security headers
//     //   return [
//     //     {
//     //       source: "/(.*)",
//     //       headers: [
//     //         {
//     //           key: "Strict-Transport-Security",
//     //           value: "max-age=31536000; includeSubDomains; preload",
//     //         },
//     //         {
//     //           key: "Content-Security-Policy",
//     //           value: `default-src 'self'; script-src 'self' https: 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https:; font-src 'self' data: https:; img-src 'self' https: data:;media-src 'self' https:; connect-src 'self' https: ${process.env.NODE_ENV === "development" ? "http:;" : ""}`,
//     //         },
//     //         {
//     //           key: "X-Frame-Options",
//     //           value: "DENY",
//     //         },
//     //         {
//     //           key: "X-Content-Type-Options",
//     //           value: "nosniff",
//     //         },
//     //         {
//     //           key: "Referrer-Policy",
//     //           value: "no-referrer",
//     //         },
//     //         {
//     //           key: "Permissions-Policy",
//     //           value: "geolocation=(self), microphone=()",
//     //         },
//     //       ],
//     //     },
//     //   ];
//     // },
//     headers: async () => {
//       return [
//         {
//           source: "/(.*).css", // Matches all CSS files in the static directory
//           headers: [
//             {
//               key: "Cache-Control",
//               value: "s-maxage=2592000, stale-while-revalidate", // Cache for one month
//             },
//             {
//               key: "Content-Type",
//               value: "text/css",
//             },
//           ],
//         },
//         // {
//         //   source: "/components/:framework/:uielement",
//         //   headers: [
//         //     {
//         //       key: "Cache-Control",
//         //       value: "public, max-age=2592000",
//         //     },
//         //   ],
//         // },
//         // {
//         //   source: "/components/:framework/:uielement/ads",
//         //   headers: [
//         //     {
//         //       key: "Cache-Control",
//         //       value: "public, max-age=2592000",
//         //     },
//         //   ],
//         // },
//         {
//           source: "/:path*",
//           headers: [
//             {
//               key: "Cache-Control",
//               value: "s-maxage=3600, stale-while-revalidate",
//             },
//           ],
//         },
//         {
//           source: "/(.well-known|.next)/:path*", // Matches all paths under /.well-known/vercel/
//           headers: [
//             {
//               key: "Cache-Control",
//               value: "no-store, no-cache, must-revalidate, proxy-revalidate",
//             },
//           ],
//         },
//       ];
//     },
//     rewrites: async () => {
//       return [
//         {
//           source: "/blogs",
//           destination: "https://blogs.purecode.ai/blogs/",
//         },
//         {
//           source: "/blogs/:path*",
//           destination: "https://blogs.purecode.ai/blogs/:path*",
//         },
//       ];
//     },
//     redirects: async () => {
//       return [
//         {
//           source: "/:lang(es|en)",
//           destination: "/",
//           permanent: true, // This will be a 301 redirect for /es and /en
//         },
//       ];
//     },
//   };

//   export default nextConfig;
