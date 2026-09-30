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
          title="See the connection."
          copy="One banking objective becomes a governed portfolio of products, responsibilities and delivery work."
        />
        <div className="example-flow" aria-label="SME loan approval example from business objective through delivery">
          <div className="example-step example-step--primary">
            <span>Business objective</span>
            <strong>Reduce SME loan approval time</strong>
          </div>
          <div className="example-step">
            <span>Use case</span>
            <strong>Automated SME credit assessment</strong>
          </div>
          <div className="example-step">
            <span>Required data products</span>
            <div className="example-items">{products.map((item) => <strong key={item}>{item}</strong>)}</div>
          </div>
          <div className="example-step">
            <span>Governance</span>
            <div className="example-items example-items--compact">{governance.map((item) => <strong key={item}>{item}</strong>)}</div>
          </div>
          <div className="example-step">
            <span>Delivery</span>
            <div className="delivery-track">{delivery.map((item, index) => <strong key={item}><i>{index + 1}</i>{item}</strong>)}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
