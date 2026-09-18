import Image from "next/image";
import { SiteHeader } from "../components/SiteHeader";
import { GOOGLE_BUSINESS_URL, siteMetadata } from "../lib/site";

export const metadata = siteMetadata({ title: "Construction and Remodeling in Lewistown, MT" });

const services = [
  ["Seamless gutters", "New seamless gutter work and repair, planned around the way your home handles Montana weather."],
  ["Construction + structural repairs", "Practical construction work and structural repairs with an eye for the details that keep a home sound."],
  ["Remodeling + historic homes", "Thoughtful remodeling for lived-in homes, including historic-home work that respects what is already there."],
  ["Planning + coordination", "Planning, permits, and inspection coordination to make the next step clear before work begins."],
  ["A clean jobsite", "Dust barriers and daily cleanup are part of the work—not an afterthought."],
  ["Written estimates", "Start with a free, no-obligation site assessment and a written estimate for the work ahead."]
];

export default function HomePage() {
  return <>
    <SiteHeader />
    <main id="main">
      <section className="hero" aria-labelledby="hero-title"><div className="hero-grid" /><div className="shell hero-content"><p className="eyebrow">Lewistown · Fergus County · Montana</p><h1 id="hero-title">Built with care. Finished with precision.</h1><p className="hero-copy">SLK Construction and Remodeling brings careful construction, seamless gutters, structural repairs, and remodeling to the homes and communities of Central Montana.</p><div className="actions"><a className="button primary" href="https://slkseamlessgutters.com/contact">Request a site assessment</a><a className="button secondary" href="tel:+14063502113">Call 406-350-2113</a></div></div></section>
      <section className="section" id="services" aria-labelledby="services-title"><div className="shell"><div className="section-header"><p className="eyebrow">What we do</p><div><h2 id="services-title">The work behind a better home.</h2><p className="section-intro">From the first look at your property to the last sweep of the jobsite, the process stays clear, practical, and respectful of your home.</p></div></div><div className="service-grid">{services.map(([title, body]) => <article className="service" key={title}><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
      <section className="section dark" id="work" aria-labelledby="work-title"><div className="shell"><div className="section-header"><p className="eyebrow">Selected work</p><div><h2 id="work-title">Honest materials. Considered details.</h2><p className="section-intro">A few examples of the kind of home work SLK helps bring together.</p></div></div><div className="projects"><figure className="project"><Image src="/project-1.png" alt="Completed kitchen remodeling project with warm wood floors and bright cabinetry" fill sizes="(max-width: 704px) 100vw, 60vw" /></figure><figure className="project small"><Image src="/project-2.png" alt="Completed kitchen project with custom cabinetry and farmhouse sink" fill sizes="(max-width: 704px) 100vw, 40vw" /><figcaption>Remodeling that works hard and feels at home.</figcaption></figure></div></div></section>
      <section className="section location-band" id="area" aria-labelledby="area-title"><div className="shell"><p className="eyebrow">Where we work</p><h2 id="area-title">Close to home in Fergus County.</h2></div><div className="shell"><p className="section-intro">Serving Lewistown and surrounding communities including:</p><div className="location-list"><span>Grass Range</span><span>Denton</span><span>Winifred</span><span>Roy</span><span>Stanford</span></div><a className="button secondary" href={GOOGLE_BUSINESS_URL} target="_blank" rel="noreferrer">View Google Business profile ↗</a></div></section>
      <section className="section" id="contact" aria-labelledby="contact-title"><div className="shell contact"><div><p className="eyebrow">Start with a conversation</p><h2 id="contact-title">Let’s look at the work together.</h2><p className="section-intro">Reach out for a free, no-obligation site assessment and written estimate.</p><div className="actions"><a className="button primary" href="https://slkseamlessgutters.com/contact">Contact SLK</a><a className="button secondary" href="mailto:Kuhnhausen1975@gmail.com">Email SLK</a></div></div><div><div className="contact-card"><strong>Call</strong><a href="tel:+14063502113">406-350-2113</a></div><div className="contact-card"><strong>Email</strong><a href="mailto:Kuhnhausen1975@gmail.com">Kuhnhausen1975@gmail.com</a></div><div className="contact-card"><strong>Visit</strong><span>1207 6th Ave N<br />Lewistown, MT</span></div><h3 className="hours-title">Official hours</h3><div className="hours"><span>Mon–Fri</span><span>8am–8pm</span><span>Sat–Sun</span><span>10am–8pm</span></div></div></div></section>
    </main>
  </>;
}
