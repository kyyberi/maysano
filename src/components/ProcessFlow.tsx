import { SectionIntro } from './SectionIntro'

const steps = [
  ['Define', 'Business objective'],
  ['Connect', 'The use case'],
  ['Design', 'Required data products'],
  ['Deliver', 'Versions & dependencies'],
  ['Operate', 'Controlled AI agents'],
]

export function ProcessFlow() {
  return (
    <section className="section process-section">
      <div className="container">
        <SectionIntro eyebrow="END-TO-END" title="From objective to operational data product" align="center" />
        <div className="process-flow">
          <div className="process-steps">
            {steps.map(([verb, object], index) => (
              <div className="process-step" key={verb}>
                <span>0{index + 1}</span>
                <strong>{verb}</strong>
                <small>{object}</small>
              </div>
            ))}
          </div>
          <div className="process-governance">
            <span>GOVERNANCE ACROSS THE FULL PROCESS</span>
            <i />
            <p>Ownership · policies · evidence · controls · decision history</p>
          </div>
        </div>
      </div>
    </section>
  )
}
