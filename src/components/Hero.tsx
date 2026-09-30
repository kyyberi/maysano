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
            <p className="hero-lead">See which data products support which business objectives, and govern them while the work happens. Maysano connects objectives, use cases and data products in one knowledge graph, with lifecycle management and explainable AI agents in the same operating model. It works alongside your catalogs and data platforms, not instead of them.</p>
            <div className="hero-actions">
              <a className="button button--hero" href={siteConfig.bookingUrl}>Book a 30-Minute Demo</a>
              <a className="text-link text-link--hero" href="#how-it-works">See How It Works <span aria-hidden="true">↓</span></a>
            </div>
            <p className="hero-demo-note"><strong>In the demo:</strong> portfolio connection, governance in the work, and explainable agents.</p>
          </div>
          <HeroGraph />
        </div>
      </div>
    </section>
  )
}
