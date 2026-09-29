import { SectionIntro } from './SectionIntro'

const controls = [
  ['01', 'Explainable', 'Understand why an agent reached a recommendation.'],
  ['02', 'Auditable', 'Maintain a record of actions, inputs and decisions.'],
  ['03', 'Controlled', 'Human oversight and kill-switch controls remain available.'],
  ['04', 'Configurable', 'Change behavior through external recipes, not hidden prompts.'],
  ['05', 'Standardized', 'Use shared product and workflow definitions rather than proprietary agent logic.'],
]

export function AgentControls() {
  return (
    <section className="section control-section">
      <div className="container">
        <SectionIntro eyebrow="ENTERPRISE CONTROL" title="AI you can inspect and control" align="center" />
        <div className="control-grid">
          {controls.map(([number, title, copy]) => (
            <article className="control-item" key={title}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
