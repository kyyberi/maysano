import { SectionIntro } from './SectionIntro'

const spine = [
  ['Business Objective', 'Reduce credit decision time'],
  ['Use Case', 'Real-time risk assessment'],
  ['Data Product', 'Credit Risk Signals'],
  ['Product Version', 'v2.4 · Active'],
  ['Data / API / Model', '6 connected resources'],
]

const context = [
  ['Owner', 'Risk Data Office'],
  ['KPI', 'Decision latency'],
  ['Governance', '3 controls'],
  ['Dependencies', '4 products'],
  ['Agent', 'Impact Agent'],
  ['Decision History', '12 records'],
]

export function StrategyGraph() {
  return (
    <section className="section strategy-section">
      <div className="container">
        <SectionIntro eyebrow="CONNECTED CONTEXT" title="One graph from strategy to data" copy="Business context is not stored in disconnected documents. Maysano maintains the relationships between intent, use cases, products, governance and the underlying data estate." />
        <div className="strategy-visual">
          <div className="strategy-spine">
            {spine.map(([label, value], index) => (
              <div className="spine-node" key={label}>
                <span className="node-order">0{index + 1}</span>
                <div><small>{label}</small><strong>{value}</strong></div>
                {index < spine.length - 1 && <span className="spine-line" />}
              </div>
            ))}
          </div>
          <div className="context-grid" aria-label="Connected business and governance context">
            {context.map(([label, value]) => (
              <div className="context-item" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
          <div className="continuity-note">
            <span className="continuity-mark" aria-hidden="true" />
            <p><strong>Context survives change.</strong> When a product evolves, its objectives, ownership, controls and decisions remain connected.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
