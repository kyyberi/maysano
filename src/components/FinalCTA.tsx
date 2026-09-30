import { siteConfig } from '../config/site'

export function FinalCTA() {
  return (
    <section className="section final-cta">
      <div className="container final-cta-inner">
        <p className="eyebrow">SEE MAYSANO IN CONTEXT</p>
        <h2>Connect your data portfolio to the business.</h2>
        <p>See how Maysano connects objectives, use cases, data products, governance and delivery in one operating model.</p>
        <div className="cta-actions">
          <a className="button button--light" href={siteConfig.bookingUrl}>Book a 30-Minute Demo</a>
          <a className="text-link text-link--light" href={siteConfig.platformUrl}>Explore the Platform <span aria-hidden="true">↑</span></a>
        </div>
      </div>
    </section>
  )
}
