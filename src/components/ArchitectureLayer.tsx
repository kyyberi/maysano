import { Reveal } from './Reveal'
import { SectionIntro } from './SectionIntro'

const layers = [
  {
    label: 'Maysano',
    groups: [
      {
        label: 'Business context',
        items: ['Business Objectives', 'Priorities', 'Business Use Cases', 'Business Outcomes'],
      },
      {
        label: 'Portfolio operating model',
        items: ['Knowledge Graph', 'Data Product Portfolio', 'Lifecycle', 'Governance', 'AI Agents'],
      },
    ],
    emphasis: true,
  },
  {
    label: 'Data & metadata systems',
    groups: [
      {
        label: 'Existing foundation',
        items: ['Data Catalogs', 'Metadata Platforms', 'Data Platforms', 'Warehouses', 'Lakehouses', 'Operational Systems'],
      },
    ],
  },
]

export function ArchitectureLayer() {
  return (
    <section className="section architecture" id="platform">
      <div className="container">
        <SectionIntro
          eyebrow="DIFFERENTIATION"
          title="The business layer above data and metadata management."
          copy="Maysano captures business objectives and use cases, connects them to the data product portfolio, and manages governance and lifecycle in the same operating model."
        />
        <Reveal>
          <div className="stack">
            {layers.map((layer, index) => (
              <article key={layer.label} className={`stack-layer rise ${layer.emphasis ? 'stack-layer--focus' : ''}`}>
                <span>0{index + 1}</span>
                <div>
                  <h3>{layer.label}</h3>
                  <div className="stack-groups">
                    {layer.groups.map((group) => (
                      <div className="stack-group" key={group.label}>
                        <small>{group.label}</small>
                        <div className="pill-row">{group.items.map((item) => <em key={item}>{item}</em>)}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
        <p className="architecture-note"><strong>Complementary by design.</strong> Maysano owns the connected business and product context. Catalogs, metadata platforms and data platforms remain the underlying systems.</p>
      </div>
    </section>
  )
}
