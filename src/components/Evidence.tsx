import { siteConfig } from '../config/site'
import { SectionIntro } from './SectionIntro'

const referenceTopics = [
  'Customer references, once approved for sharing',
  'Deployment and architecture review',
  'Security, access control and auditability',
]

export function Evidence() {
  return (
    <section className="section evidence-section" id="evidence">
      <div className="container">
        <SectionIntro
          eyebrow="PROOF & REFERENCES"
          title="Open foundation. References in the demo."
          copy="The data product foundation behind Maysano is open and public, so you can review it before you speak to us. Customer references are shared in the demo."
        />
        <div className="evidence-grid">
          <article className="evidence-supported">
            <span>PUBLIC FOUNDATION</span>
            <h3>Open Data Product Specification ecosystem</h3>
            <p>Product definitions, contracts, relationships and agent recipes build on the LF AI & Data open standards, so your portfolio context stays portable and machine-readable.</p>
            <a className="text-link" href="#standards">See the open foundation <span aria-hidden="true">↓</span></a>
          </article>
          <article className="evidence-references">
            <span>IN THE DEMO</span>
            <h3>References and enterprise review, in conversation</h3>
            <p>We share customer references directly, once they are approved for your evaluation, and walk through the enterprise questions your team will ask.</p>
            <ul>
              {referenceTopics.map((topic) => <li key={topic}>{topic}</li>)}
            </ul>
            <a className="button" href={siteConfig.bookingUrl}>Ask for references in a demo</a>
          </article>
        </div>
      </div>
    </section>
  )
}
