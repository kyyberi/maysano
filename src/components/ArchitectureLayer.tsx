import { SectionIntro } from './SectionIntro'

const layers = [
  {
    label: 'Business strategy',
    items: ['Objectives', 'Priorities', 'Use Cases', 'Business Outcomes'],
  },
  {
    label: 'Maysano',
    items: ['Knowledge Graph', 'Data Product Portfolio', 'Lifecycle', 'Governance', 'AI Agents'],
    emphasis: true,
  },
  {
    label: 'Data & metadata systems',
    items: ['Data Catalogs', 'Metadata Platforms', 'Data Platforms', 'Warehouses', 'Lakehouses', 'Operational Systems'],
  },
]

export function ArchitectureLayer() {
  return (
    <section className="section architecture" id="platform">
      <div className="container">
        <SectionIntro
          eyebrow="DIFFERENTIATION"
          title="The missing layer between strategy and data management."
          copy="Your existing data platforms describe, store and operate data. Maysano connects those assets to why the business needs them and how they create value."
        />
        <div className="layer-diagram">
          {layers.map((layer, index) => (
            <div key={layer.label} className={`layer-band ${layer.emphasis ? 'layer-band--emphasis' : ''}`}>
              <span>0{index + 1}</span>
              <h3>{layer.label}</h3>
              <div>{layer.items.map((item) => <strong key={item}>{item}</strong>)}</div>
            </div>
          ))}
        </div>
        <p className="architecture-note"><strong>Complementary by design.</strong> Maysano does not replace catalogs, metadata platforms or data platforms. It gives them business context.</p>
      </div>
    </section>
  )
}
