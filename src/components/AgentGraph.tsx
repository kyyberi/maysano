import { SectionIntro } from './SectionIntro'

const graphContext = ['Objectives', 'Use Cases', 'Data Products', 'Governance', 'Lifecycle', 'Delivery']
const properties = [
  ['Explainable', 'Actions and reasoning remain visible.'],
  ['Auditable', 'Activity and decisions leave a reviewable record.'],
  ['Controllable', 'Human oversight and kill controls stay available.'],
  ['Externally configured', 'Standardized recipes keep behavior outside application code.'],
]

export function AgentGraph() {
  return (
    <section className="section agents-section" id="agents">
      <div className="container">
        <SectionIntro
          eyebrow="PORTFOLIO-AWARE AI"
          title="AI agents that understand your portfolio."
          copy="Agents operate on the connected graph containing business objectives, use cases, data products, governance and lifecycle context—not on an isolated prompt."
        />
        <div className="agent-layout">
          <div className="agent-context" aria-label="Connected portfolio context available to AI agents">
            <span>Shared operating context</span>
            <strong>Enterprise knowledge graph</strong>
            <div>{graphContext.map((item) => <small key={item}>{item}</small>)}</div>
            <p>Portfolio agents use this context to explain gaps, dependencies, governance needs and change impact.</p>
          </div>
          <dl className="agent-properties">
            {properties.map(([term, description], index) => (
              <div key={term}>
                <dt><span>0{index + 1}</span>{term}</dt>
                <dd>{description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="recipe-note">
          <span>OPEN RECIPE LAYER</span>
          <p>The recipe approach builds on open standards in the LF AI & Data Open Data Product Specification ecosystem, keeping agent behavior portable and reviewable.</p>
        </div>
      </div>
    </section>
  )
}
