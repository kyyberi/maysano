import { siteConfig } from '../config/site'
import { HeroGraph } from './HeroGraph'

export function Hero() {
  return (
    <section className="hero section" id="top">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">FOR DATA, GOVERNANCE AND AI LEADERS</p>
            <h1>Connect data<br /><span>directly to business</span></h1>
            <p className="hero-lead">Maysano connects business objectives, use cases and data products in one knowledge graph, with built-in governance, lifecycle management and explainable AI agents. It works alongside your existing catalogs and data platforms.</p>
            <div className="hero-actions">
              <a className="button button--hero" href={siteConfig.bookingUrl}>Book a 30-Minute Demo</a>
              <a className="text-link text-link--hero" href="#how-it-works">See How It Works <span aria-hidden="true">↓</span></a>
            </div>
          </div>
          <HeroGraph />
        </div>
      </div>
    </section>
  )
}
