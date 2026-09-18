import type { Metadata } from "next";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://slk-construction-demo.vercel.app";
export const GOOGLE_BUSINESS_URL = "https://www.google.com/maps/place/SLK+Construction+and+Remodeling/@46.9295945,-109.283302,9z/data=!3m1!4b1!4m6!3m5!1s0x85244b63891228d9:0x5d5472f601c6feca!8m2!3d46.9295945!4d-109.283302!16s%2Fg%2F11zdd14v6j?entry=ttu";

export function siteMetadata(overrides: Partial<Metadata> = {}): Metadata {
  return {
    metadataBase: new URL(SITE_URL), title: { default: "SLK Construction and Remodeling", template: "%s | SLK Construction and Remodeling" },
    description: "Construction, structural repairs, seamless gutters, and remodeling in Lewistown and Fergus County, Montana.",
    alternates: { canonical: "/" },
    openGraph: { type: "website", siteName: "SLK Construction and Remodeling", title: "SLK Construction and Remodeling", description: "Thoughtful construction and remodeling work in Lewistown and Fergus County, Montana.", images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "SLK Construction and Remodeling" }] },
    twitter: { card: "summary_large_image", title: "SLK Construction and Remodeling", description: "Construction and remodeling in Lewistown and Fergus County, Montana.", images: ["/opengraph-image"] },
    icons: { icon: "/icon.svg" }, robots: { index: false, follow: false, googleBot: { index: false, follow: false } }, ...overrides
  };
}
