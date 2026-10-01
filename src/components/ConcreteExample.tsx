import { Reveal } from './Reveal'
import { SectionIntro } from './SectionIntro'

const products = ['Customer Profile', 'Credit History', 'Transaction Behaviour']
const governance = ['Owners', 'Quality requirements', 'Policies', 'Access', 'Risk controls']
const delivery = ['Planned', 'In Development', 'Review', 'Operational']

export function ConcreteExample() {
  return (
    <section className="section example-section">
      <div className="container">
        <SectionIntro
          eyebrow="A CONCRETE EXAMPLE"
          title="See the connection"
          copy="One banking objective becomes a governed portfolio of products, responsibilities and delivery work."
        />
        <Reveal>
          <ol className="story" aria-label="SME loan approval example from business objective through delivery">
            <li className="story-step story-step--lead rise">
              <span className="story-dot" />
              <div className="story-card">
                <span>Business objective</span>
                <strong>Reduce SME loan approval time</strong>
              </div>
            </li>
            <li className="story-step rise">
              <span className="story-dot" />
              <div className="story-card">
                <span>Use case</span>
                <strong>Automated SME credit assessment</strong>
              </div>
            </li>
            <li className="story-step rise">
              <span className="story-dot" />
              <div className="story-card">
                <span>Required data products</span>
                <div className="pill-row">{products.map((item) => <em key={item}>{item}</em>)}</div>
              </div>
            </li>
            <li className="story-step rise">
              <span className="story-dot" />
              <div className="story-card">
                <span>Governance</span>
                <div className="pill-row">{governance.map((item) => <em key={item}>{item}</em>)}</div>
              </div>
            </li>
            <li className="story-step rise">
              <span className="story-dot" />
              <div className="story-card">
                <span>Delivery</span>
                <div className="progress-row">{delivery.map((item, index) => <em key={item}><i>{index + 1}</i>{item}</em>)}</div>
              </div>
            </li>
          </ol>
        </Reveal>
      </div>
    </section>
  )
}
