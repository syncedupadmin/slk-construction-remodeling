import Image from "next/image";
import Link from "next/link";

const nav = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Process", href: "/process" },
  { label: "Service area", href: "/service-area" },
  { label: "Contact", href: "/contact" }
];

export function SiteHeader() {
  return <header className="site-header"><div className="shell header-inner"><Link className="brand" href="/" aria-label="SLK Construction and Remodeling home"><Image src="/logo.png" width={280} height={280} alt="SLK Construction and Remodeling logo" priority /></Link><details className="menu-disclosure"><summary>Menu</summary><nav aria-label="Mobile navigation"><ul>{nav.map(item => <li key={item.href}><Link href={item.href}>{item.label}</Link></li>)}</ul></nav></details><nav className="desktop-nav" aria-label="Primary navigation"><ul>{nav.map(item => <li key={item.href}><Link href={item.href}>{item.label}</Link></li>)}</ul></nav><a className="header-call" href="tel:+14063502113">406-350-2113</a></div></header>;
}
