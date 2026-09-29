import { SectionIntro } from './SectionIntro'

const phases = ['Design', 'Build', 'Review', 'Operate', 'Change']

export function GovernanceFlow() {
  return (
    <section className="section governance-section" id="governance">
      <div className="container">
        <SectionIntro eyebrow="MINIMUM LOVABLE GOVERNANCE" title="Governance built into the work" />
        <div className="governance-grid">
          <div className="governance-summary">
            <p className="section-copy">Traditional governance often arrives as a separate gate after the work has already happened. Maysano embeds the required ownership, controls, evidence and policies into the product lifecycle itself.</p>
          <p className="governance-close">Teams see what applies while they work.</p>
          </div>
          <div className="governance-visual" aria-label="Governance applied continuously across design, build, review, operate and change">
            <div className="phase-row">
              {phases.map((phase, index) => (
                <div className="phase" key={phase}>
                  <span>{index + 1}</span>
                  <strong>{phase}</strong>
                </div>
              ))}
            </div>
            <div className="governance-rail">
              <div className="rail-label"><span /> Continuous governance</div>
              <div className="rail-items">
                <span>Ownership</span><span>Controls</span><span>Evidence</span><span>Policies</span>
              </div>
            </div>
            <p className="governance-note">Not a final gate. A shared operating layer throughout the lifecycle.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
