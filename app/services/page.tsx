import { SiteHeader } from "../../components/SiteHeader";
import { siteMetadata } from "../../lib/site";

export const metadata = siteMetadata({ title: "Services", alternates: { canonical: "/services" } });
const services = [
  ["Seamless gutters + repair", "New seamless gutter work and repair, planned around the way your home handles Montana weather."],
  ["Construction + structural repairs", "Practical construction work and structural repairs with an eye for the details that keep a home sound."],
  ["Remodeling + historic homes", "Thoughtful remodeling for lived-in homes, including historic-home work that respects what is already there."],
  ["Planning, permits + inspections", "Planning, permit, and inspection coordination to make the next step clear before work begins."]
];
export default function ServicesPage() { return <><SiteHeader /><main id="main"><section className="page-hero"><div className="shell"><p className="eyebrow">Services</p><h1>Good work starts with a clear plan.</h1><p className="hero-copy">SLK Construction and Remodeling helps homeowners in Lewistown and Fergus County move from a practical first conversation to a finished, cared-for space.</p></div></section><section className="section" aria-labelledby="service-list-title"><div className="shell"><div className="section-header"><p className="eyebrow">The scope</p><div><h2 id="service-list-title">Built around your home.</h2><p className="section-intro">Choose the work that matches what your property needs now. Every project begins with an assessment, not an assumption.</p></div></div><div className="service-grid">{services.map(([title, body]) => <article className="service" key={title}><h3>{title}</h3><p>{body}</p><a className="text-link" href="/contact">Talk through the work →</a></article>)}</div></div></section><section className="section dark"><div className="shell cta-strip"><div><p className="eyebrow">Ready when you are</p><h2>Start with a site assessment.</h2></div><a className="button primary" href="https://slkseamlessgutters.com/contact">Request an assessment</a></div></section></main></>; }
