import { SectionIntro } from './SectionIntro'

export function Evidence() {
  return (
    <section className="section evidence-section" id="evidence">
      <div className="container">
        <SectionIntro
          eyebrow="EVIDENCE"
          title="Built from real data product experience."
          copy="The public site should earn trust with verifiable delivery evidence—not borrowed logos or invented performance numbers."
        />
        <div className="evidence-grid">
          <article className="evidence-supported">
            <span>SUPPORTED IN THIS REPOSITORY</span>
            <h3>Open data product foundation</h3>
            <p>The product narrative and operating model are built around the Open Data Product Specification ecosystem and machine-readable product context.</p>
            <a className="text-link" href="#standards">See the open foundation <span aria-hidden="true">↓</span></a>
          </article>
          <article className="evidence-placeholder">
            <span>VERIFIED EVIDENCE REQUIRED</span>
            <h3>Customer outcomes and implementation references</h3>
            <p>No approved customer names, case-study metrics or measured workflow improvements are present in this repository. Publish them here only after the source and permission are verified.</p>
            <ul>
              <li>Enterprise implementation reference</li>
              <li>Measured workflow improvement</li>
              <li>Approved customer or government-scale case study</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}
