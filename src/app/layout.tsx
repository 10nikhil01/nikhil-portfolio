import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Providers from "@/providers";
import { getSiteUrl } from "@/utils/getSiteURL";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nikhil | Portfolio",
  description:
    "I'm Nikhil Kumar, a frontend developer specializing in building fast, accessible, and SEO-friendly web applications using React, Next.js, and modern web technologies.",
  metadataBase: new URL(getSiteUrl()),
  applicationName: "NikPortfolio",
  generator: "Next.js",
  keywords: [
    "Nikhil Kumar",
    "Frontend Developer",
    "React Developer",
    "Next.js Portfolio",
    "Web Developer",
    "JavaScript",
    "TypeScript",
    "SEO Optimization",
    "Tailwind CSS",
    "UI Developer",
  ],
  referrer: "origin-when-cross-origin",
  authors: [{ name: "Nikhil Kumar", url: getSiteUrl() }],
  creator: "Nikhil Kumar",
  publisher: "Nik",
  // colorScheme: "light", // or "dark" or "only light/dark"

  // 🔹 Format Detection (for mobile)
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },

  // 🔹 Theme Color (for mobile browsers / PWA)
  // themeColor: "#ffffff",

  // 🔹 Viewport (used only if not set in <meta>)
  // viewport: {
  //   width: "device-width",
  //   initialScale: 1,
  //   maximumScale: 1,
  // },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#5bbad5",
      },
    ],
  },
  openGraph: {
    title: "Nikhil | Developer",
    description:
      "2 years of experience in building scalable, high-performance, and SEO-optimized web applications.",
    url: getSiteUrl(),
    siteName: "nikhil portfolio",
    // images: [
    //   {
    //     url: `${getSiteUrl()}/opengraph-image`,
    //     width: 1200,
    //     height: 630,
    //     alt: "Nikhil Portfolio OG",
    //   },
    // ],
    locale: "en-IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nikhil | Developer",
    description:
      "2 years of experience in building scalable, high-performance, and SEO-optimized web applications.",
    site: "@site_handle",
    creator: "@creator_handle",
    // images: [`${getSiteUrl()}/twitter-image`],
  },
  appleWebApp: {
    capable: true,
    title: "Nikhil | Portfolio",
    statusBarStyle: "default",
  },

  // 🔹 Manifest
  // manifest: "/manifest.json",

  alternates: {
    canonical: getSiteUrl(),
    languages: {
      "en-US": `${getSiteUrl()}/en`,
      "fr-FR": `${getSiteUrl()}/fr`,
    },
  },

  bookmarks: ["https://yourdomain.com/blog/post1"],
  category: "technology",
  classification: "web development",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div>{children}</div>
        </Providers>
      </body>
    </html>
  );
}
