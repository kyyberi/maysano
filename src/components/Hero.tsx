import { siteConfig } from '../config/site'
import { HeroGraph } from './HeroGraph'
import { HeroTypewriter } from './HeroTypewriter'
import heroDiagram from '../assets/hero-portfolio-flow.webp'

export function Hero() {
  return (
    <section className="hero section" id="top">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">FOR DATA, GOVERNANCE AND AI LEADERS</p>
            <h1>Connect data<br /><HeroTypewriter text="directly to business" /></h1>
            <p className="hero-lead">Maysano connects business objectives, use cases and data products in one knowledge graph, with built-in governance, lifecycle management and explainable AI agents. It works alongside your existing catalogs and data platforms.</p>
            {/* Below 900px the diagram sits between the text and the buttons:
                the animated diagram on tablets (744–900px), the static image on phones (<744px). */}
            <div className="hero-mobile-visual">
              <HeroGraph />
            </div>
            <figure className="hero-phone-visual">
              <img
                src={heroDiagram}
                alt="Maysano sits between data sources and business outcomes: it connects business objectives, use cases and data products with built-in governance, leading to better decisions, more efficient operations and greater public value."
                width={1915}
                height={821}
              />
            </figure>
            <div className="hero-actions">
              <a className="button button--hero" href={siteConfig.bookingUrl}>Book a 30-Minute Demo</a>
              <a className="text-link text-link--hero" href="#how-it-works">See How It Works <span aria-hidden="true">↓</span></a>
              <a className="text-link text-link--hero" href="maysano.pdf" download>Download Overview <span aria-hidden="true">↓</span></a>
            </div>
          </div>
          {/* Wider screens (over 900px): the diagram has its own column */}
          <div className="hero-model">
            <HeroGraph />
          </div>
        </div>
      </div>
    </section>
  )
}
