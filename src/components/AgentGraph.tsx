import { SectionIntro } from './SectionIntro'

const agents = [
  ['Portfolio Agent', 'Portfolio health'],
  ['Governance Agent', 'Applicable controls'],
  ['Product Agent', 'Product quality'],
  ['Impact Agent', 'Change effects'],
]

const graphContext = ['Objectives', 'Use Cases', 'Data Products', 'Dependencies', 'Governance', 'Ownership', 'Versions', 'Decisions']

export function AgentGraph() {
  return (
    <section className="section agents-section" id="agents">
      <div className="container">
        <SectionIntro eyebrow="CONTEXT-AWARE OPERATIONS" title="AI agents that understand your business context" copy="Maysano agents operate on the connected company portfolio—not isolated prompts. Every agent works with the same governed context and leaves a visible record." />
        <div className="agent-visual">
          <div className="agent-row">
            {agents.map(([name, purpose], index) => (
              <div className="agent-unit" key={name}>
                <div className="agent-topline"><span>A{index + 1}</span><i /></div>
                <strong>{name}</strong>
                <small>{purpose}</small>
              </div>
            ))}
          </div>
          <div className="agent-connectors" aria-hidden="true"><span /><span /><span /><span /></div>
          <div className="shared-graph">
            <div className="shared-graph-heading">
              <span>SHARED OPERATING CONTEXT</span>
              <strong>Enterprise Knowledge Graph</strong>
            </div>
            <div className="shared-graph-nodes">
              {graphContext.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
          <div className="recipe-band">
            <span>EXTERNAL CONTROL LAYER</span>
            <p>Agent behavior is configured outside the model through standardized recipes aligned with the Linux Foundation Open Data Product Specification ecosystem.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
