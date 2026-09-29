import { siteConfig } from '../config/site'
import { HeroGraph } from './HeroGraph'

export function Hero() {
  return (
    <main id="main-content">
      <section className="hero section" id="top">
        <div className="container hero-stage">
          <div className="hero-grid">
            <div className="hero-copy">
              <h1>Connect business<br /><span>directly to data</span></h1>
              <p className="hero-lead">Maysano connects business objectives, use cases and data products in one governed enterprise knowledge graph.</p>
              <p className="hero-support">Manage the full data product lifecycle, connect products to business value, embed governance into the work and run explainable AI agents across the portfolio.</p>
              <div className="hero-actions">
                <a className="button button--hero" href={siteConfig.bookingUrl}>Book a Demo</a>
                <a className="text-link text-link--hero" href={siteConfig.platformUrl}>Explore the Platform <span aria-hidden="true">↓</span></a>
              </div>
            </div>
            <HeroGraph />
          </div>
          <div className="hero-distinction" aria-label="How Maysano complements the enterprise data stack">
            <div>
              <span>YOUR EXISTING STACK</span>
              <strong>Your existing platforms manage data and metadata.</strong>
            </div>
            <span className="hero-distinction-link" aria-hidden="true">→</span>
            <div>
              <span>THE MAYSANO LAYER</span>
              <strong>Maysano connects them to the business.</strong>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
