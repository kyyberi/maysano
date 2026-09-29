import { siteConfig } from '../config/site'

export function FinalCTA() {
  return (
    <section className="section final-cta">
      <div className="container final-cta-inner">
        <p className="eyebrow">PUT THE CONTEXT TO WORK</p>
        <h2>Connect your data estate to the business it serves.</h2>
        <p>See how Maysano connects objectives, use cases, data products, governance and AI agents into one operational graph.</p>
        <div className="cta-actions">
          <a className="button button--light" href={siteConfig.bookingUrl}>Book a Demo</a>
          <a className="text-link text-link--light" href={siteConfig.platformUrl}>Explore the Platform <span aria-hidden="true">↑</span></a>
        </div>
      </div>
    </section>
  )
}
