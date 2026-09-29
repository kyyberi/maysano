import { SectionIntro } from './SectionIntro'

const layers = [
  {
    key: '01',
    label: 'Business',
    description: 'Where value and intent are defined',
    items: ['Objectives', 'Outcomes', 'Use Cases', 'Initiatives'],
  },
  {
    key: '02',
    label: 'Maysano',
    description: 'The connective business and product layer',
    items: ['Enterprise Knowledge Graph', 'Data Product Management', 'Lifecycle & Versioning', 'Ownership & Relationships', 'Governance & AI Agents', 'Auditability'],
    emphasis: true,
  },
  {
    key: '03',
    label: 'Data & Metadata Ecosystem',
    description: 'The platforms that manage the data estate',
    items: ['Data Catalogs', 'Lakehouses', 'Warehouses', 'Databases', 'APIs', 'BI', 'ML Platforms'],
  },
]

export function ArchitectureLayer() {
  return (
    <section className="section architecture" id="platform">
      <div className="container">
        <SectionIntro eyebrow="THE CONNECTIVE LAYER" title="The missing layer between business strategy and enterprise data" />
        <div className="architecture-grid">
          <div className="architecture-stack">
            {layers.map((layer, index) => (
              <div key={layer.label} className={`architecture-layer ${layer.emphasis ? 'architecture-layer--emphasis' : ''}`}>
                <div className="layer-index">{layer.key}</div>
                <div className="layer-heading">
                  <h3>{layer.label}</h3>
                  <p>{layer.description}</p>
                </div>
                <div className="layer-items">
                  {layer.items.map((item) => <span key={item}>{item}</span>)}
                </div>
                {index < layers.length - 1 && <div className="layer-connector" aria-hidden="true">↕</div>}
              </div>
            ))}
          </div>
          <aside className="architecture-explainer">
            <p className="quote-line">Your catalog tells you <em>what</em> data exists.</p>
            <p className="quote-line quote-line--strong">Maysano tells you <em>why</em> it exists.</p>
            <p>See the business outcome it supports, who owns it, how it evolves, which products depend on it and what AI agents are allowed to do with it.</p>
          </aside>
        </div>
      </div>
    </section>
  )
}
