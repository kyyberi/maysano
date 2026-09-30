import { siteConfig } from '../config/site'
import { HeroGraph } from './HeroGraph'

export function Hero() {
  return (
    <section className="hero section" id="top">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-copy">
            <h1>Connect data<br /><span>directly to business</span></h1>
            <p className="hero-lead">Maysano connects business objectives, use cases and data products in one knowledge graph, then brings governance, lifecycle management and explainable AI agents into the same operating model.</p>
            <div className="hero-actions">
              <a className="button button--hero" href={siteConfig.bookingUrl}>Book a Demo</a>
              <a className="text-link text-link--hero" href="#how-it-works">See How It Works <span aria-hidden="true">↓</span></a>
            </div>
            <p className="hero-trust">Knowledge Graph <span>•</span> Data Product Lifecycle <span>•</span> Built-in Governance <span>•</span> Explainable AI Agents</p>
          </div>
          <HeroGraph />
        </div>
      </div>
    </section>
  )
}
