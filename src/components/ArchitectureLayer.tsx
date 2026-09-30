import { Reveal } from './Reveal'
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
        <Reveal>
          <div className="stack">
            {layers.map((layer, index) => (
              <article key={layer.label} className={`stack-layer rise ${layer.emphasis ? 'stack-layer--focus' : ''}`}>
                <span>0{index + 1}</span>
                <div>
                  <h3>{layer.label}</h3>
                  <div className="pill-row">{layer.items.map((item) => <em key={item}>{item}</em>)}</div>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
        <p className="architecture-note"><strong>Complementary by design.</strong> Maysano does not replace catalogs, metadata platforms or data platforms. It gives them business context.</p>
      </div>
    </section>
  )
}
