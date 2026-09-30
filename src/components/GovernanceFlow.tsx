import { Reveal } from './Reveal'
import { SectionIntro } from './SectionIntro'

const phases = ['Create', 'Develop', 'Review', 'Operate', 'Improve']
const controls = ['Ownership', 'Controls', 'Evidence', 'Policies']

export function GovernanceFlow() {
  return (
    <section className="section governance-section" id="governance">
      <div className="container">
        <SectionIntro eyebrow="MINIMUM LOVABLE GOVERNANCE" title="Governance built into the work" />
        <div className="governance-grid">
          <div className="governance-summary">
            <p className="section-copy">Minimum Lovable Governance means applying the ownership, evidence, policies and controls a product needs while teams create, develop, review and operate it—not as a separate gate after the work has already happened.</p>
            <p className="governance-close">Teams see what applies while they work.</p>
          </div>
          <Reveal className="gov-board" >
            <ol className="gov-phases" aria-label="Governance applied continuously across design, build, review, operate and change">
              {phases.map((phase, index) => (
                <li key={phase} className="rise">
                  <span>{index + 1}</span>
                  <strong>{phase}</strong>
                </li>
              ))}
            </ol>
            <div className="gov-layer rise">
              <p><i /> Minimum Lovable Governance</p>
              <ul>{controls.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            <p className="gov-note">Not a final gate. A shared operating layer throughout the lifecycle.</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
