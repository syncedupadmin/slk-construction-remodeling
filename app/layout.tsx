import type { Viewport } from "next";
import { siteMetadata } from "../lib/site";
import "./globals.css";

export const metadata = siteMetadata();
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#f4f1e9" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a>{children}<footer><div className="footer-inner"><div><strong>SLK Construction and Remodeling</strong><span>1207 6th Ave N · Lewistown, MT</span></div><nav aria-label="Footer navigation"><a href="/services">Services</a><a href="/work">Work</a><a href="/process">Process</a><a href="/service-area">Service area</a><a href="/contact">Contact</a></nav><a href="https://syncedupsolutions.com" target="_blank" rel="noreferrer">Powered by SyncedUp</a></div></footer></body></html>;
}
