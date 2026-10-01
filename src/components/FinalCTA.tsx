import { siteConfig } from '../config/site'

const demoPoints = [
  ['Strategy connected to data', 'Objectives, use cases and data products linked in one knowledge graph.'],
  ['Governance in the work', 'Ownership, evidence, policies and controls across create, develop, review and operate.'],
  ['AI Agent operations', 'Portfolio-aware agents explaining gaps, dependencies, governance needs and change impact.'],
]

export function FinalCTA() {
  return (
    <section className="section final-cta">
      <div className="container final-cta-inner">
        <p className="eyebrow">BOOK A 30-MINUTE DEMO</p>
        <h2>Connect your data portfolio to the business</h2>
        <p>In 30 minutes, see how Maysano connects objectives, use cases, data products, governance and delivery in one operating model.</p>
        <ol className="cta-demo-list" aria-label="What you will see in the demo">
          {demoPoints.map(([title, copy], index) => (
            <li key={title}>
              <span>{`0${index + 1}`}</span>
              <strong>{title}</strong>
              <small>{copy}</small>
            </li>
          ))}
        </ol>
        <div className="cta-actions">
          <a className="button button--light" href={siteConfig.bookingUrl}>Book a 30-Minute Demo</a>
          <a className="text-link text-link--light" href={siteConfig.platformUrl}>Explore the Platform <span aria-hidden="true">↑</span></a>
        </div>
      </div>
    </section>
  )
}
