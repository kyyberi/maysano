import { SectionIntro } from './SectionIntro'

const platformItems = ['Schemas', 'Tables', 'Files', 'Pipelines', 'Technical metadata', 'Storage', 'Processing']
const maysanoItems = ['Business objectives', 'Use cases', 'Data products', 'Product lifecycle', 'Versions', 'Ownership', 'Business relationships', 'Governance context', 'AI agents', 'Decision history']

export function PlatformComparison() {
  return (
    <section className="section comparison-section">
      <div className="container">
        <SectionIntro eyebrow="COMPLEMENTARY BY DESIGN" title="Maysano does a different job." copy="Keep your existing data stack. Maysano adds the business and product layer above it." />
        <div className="comparison-grid">
          <div className="comparison-column comparison-column--platforms">
            <div className="comparison-heading"><span>FOUNDATION</span><h3>Metadata & Data Platforms</h3><p>Manage the technical data estate</p></div>
            <div className="comparison-list">{platformItems.map((item) => <span key={item}>{item}</span>)}</div>
          </div>
          <div className="comparison-link" aria-hidden="true"><span>+</span></div>
          <div className="comparison-column comparison-column--maysano">
            <div className="comparison-heading"><span>BUSINESS & PRODUCT LAYER</span><h3>Maysano</h3><p>Manages why data exists and how it creates value</p></div>
            <div className="comparison-list">{maysanoItems.map((item) => <span key={item}>{item}</span>)}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
