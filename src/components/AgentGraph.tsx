import { Reveal } from './Reveal'
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
          title="AI agents operate in your portfolio."
          copy="Agents operate on the connected graph containing business objectives, use cases, data products, governance and lifecycle context—not on an isolated prompt."
        />
        <Reveal className="agent-stage">
          <div className="agent-hub rise" aria-label="Connected portfolio context available to AI agents">
            <span>Shared operating context</span>
            <strong>Enterprise knowledge graph</strong>
            <ul>{graphContext.map((item) => <li key={item}>{item}</li>)}</ul>
            <p>Portfolio agents use this context to explain gaps, dependencies, governance needs and change impact.</p>
          </div>
          <ul className="agent-traits">
            {properties.map(([term, description], index) => (
              <li key={term} className="rise">
                <span>0{index + 1}</span>
                <strong>{term}</strong>
                <p>{description}</p>
              </li>
            ))}
          </ul>
        </Reveal>
        <div className="recipe-note">
          <span>OPEN RECIPE LAYER</span>
          <p>The recipe approach builds on open standards in the LF AI & Data Open Data Product Specification ecosystem, keeping agent behavior portable and reviewable.</p>
        </div>
      </div>
    </section>
  )
}
