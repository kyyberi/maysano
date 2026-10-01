import { SectionIntro } from './SectionIntro'

const reviewAreas = [
  ['Deployment & architecture', 'Review hosting, network and integration boundaries for the target environment.'],
  ['Security & access control', 'Map portfolio access and responsibilities to enterprise identity and control requirements.'],
  ['Auditability', 'Keep product decisions, changes and agent activity visible for human review.'],
  ['Integrations & ownership', 'Connect delivery and data systems without changing ownership of the source data.'],
  ['AI model flexibility', 'Keep portfolio context and agent recipes separate from the selected model runtime.'],
]

export function EnterpriseTrust() {
  return (
    <section className="section enterprise-section" id="enterprise">
      <div className="container enterprise-grid">
        <SectionIntro
          eyebrow="ENTERPRISE TRUST"
          title="Designed for enterprise environments"
          copy="A Maysano evaluation includes the architecture, controls and ownership boundaries around the product—not only a feature tour."
        />
        <div className="enterprise-list">
          {reviewAreas.map(([title, copy], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <div><h3>{title}</h3><p>{copy}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
