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
        <SectionIntro eyebrow="OPEN FOUNDATION" title="Built on an open data product foundation." />
        <div className="standards-grid">
          <div className="standards-copy">
            <p className="section-copy">Maysano works with the LF AI & Data Open Data Product Specification ecosystem so product definitions, contracts, relationships and agent recipes can remain portable and machine-readable.</p>
            <ul className="standards-benefits">
              <li>Portable product definitions</li>
              <li>Reduced vendor dependency</li>
              <li>Agent-ready product context</li>
              <li>Interoperability across the data estate</li>
            </ul>
            <a className="text-link" href="https://opendataproducts.org" target="_blank" rel="noreferrer">Explore Open Standards <span aria-hidden="true">↗</span></a>
          </div>
          <div className="standards-visual" aria-label="Open Data Product Specification ecosystem standards">
            <div className="standards-core">Open Data Product<br />Specification<br />ecosystem</div>
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
