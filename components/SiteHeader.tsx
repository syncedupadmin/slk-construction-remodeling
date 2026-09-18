"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
const nav = [{ label: "Services", href: "/services" }, { label: "Our work", href: "/work" }, { label: "Our process", href: "/process" }, { label: "Service area", href: "/service-area" }, { label: "Contact", href: "/contact" }];
export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <div className="utility"><div className="shell"><span>Local construction & remodeling · Lewistown, Montana</span><a href="tel:+14063502113">Let’s talk about your home: 406-350-2113</a></div></div>
    <div className="shell header-inner"><Link className="brand" href="/" aria-label="SLK Construction and Remodeling home"><Image src="/logo.png" width={280} height={280} alt="SLK" preload /><span>Construction<br /><small>& Remodeling</small></span></Link>
      <nav className="desktop-nav" aria-label="Primary navigation">{nav.map(item => <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined}>{item.label}</Link>)}</nav>
      <Link className="header-call" href="/contact">Start a project <span aria-hidden="true">↗</span></Link>
      <button className="menu-toggle" aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)} onKeyDown={e => { if(e.key === "Escape") setOpen(false); }}>{open ? "Close" : "Menu"}<span aria-hidden="true">{open ? "×" : "+"}</span></button>
    </div>
    {open && <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation" onKeyDown={e => {if(e.key === "Escape") setOpen(false);}}>{nav.map(item => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} aria-current={pathname === item.href ? "page" : undefined}>{item.label}<span aria-hidden="true">↗</span></Link>)}<a href="tel:+14063502113">Call 406-350-2113</a></nav>}
  </header>;
}
