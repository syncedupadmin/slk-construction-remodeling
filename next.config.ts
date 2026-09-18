import type { NextConfig } from "next";
import path from "node:path";

const preview = process.env.SITE_PREVIEW !== "false";
const nextConfig: NextConfig = {
  turbopack: { root: path.resolve(__dirname) }, poweredByHeader: false,
  images: { formats: ["image/avif", "image/webp"] },
  async headers() { return [{ source: "/(.*)", headers: [ ...(preview ? [{ key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" }] : []), { key: "X-Content-Type-Options", value: "nosniff" }, { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" } ] }]; }
};
export default nextConfig;
