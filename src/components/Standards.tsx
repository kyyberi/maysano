import { SectionIntro } from './SectionIntro'

const standards = [
  ['ODPS', 'Product definition'],
  ['ODPC', 'Product contracts'],
  ['ODPG', 'Product relationships'],
  ['ODPV', 'Value evidence'],
  ['ODPR', 'Agent recipes'],
]

export function Standards() {
  return (
    <section className="section standards-section" id="standards">
      <div className="container">
        <SectionIntro eyebrow="OPEN STANDARDS" title="Built around open standards" />
        <div className="standards-grid">
          <div className="standards-copy">
            <p className="section-copy">Maysano works with the Linux Foundation Open Data Product Specification ecosystem. Product definitions, relationships and agent recipes should remain portable—not disappear into a proprietary black box.</p>
          <a className="text-link" href="https://opendataproducts.org" target="_blank" rel="noreferrer">Explore the ODPS ecosystem <span aria-hidden="true">↗</span></a>
          </div>
          <div className="standards-visual" aria-label="Open Data Product Specification ecosystem standards">
            <div className="standards-core">Open Data Product<br />Specification ecosystem</div>
            <div className="standards-list">
              {standards.map(([code, label]) => (
                <div className="standard-row" key={code}><strong>{code}</strong><span>{label}</span><i /></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
