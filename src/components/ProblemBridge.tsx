import { SectionIntro } from './SectionIntro'

const businessItems = ['Objectives', 'Use Cases', 'Priorities']
const dataItems = ['Catalogs', 'Data Products', 'Platforms', 'Metadata']

export function ProblemBridge() {
  return (
    <section className="section problem-section" id="how-it-works">
      <div className="container">
        <SectionIntro
          eyebrow="THE PROBLEM"
          title="Your business and your data speak different languages."
          copy="Business teams define outcomes. Data teams manage products, platforms and pipelines. Governance adds policies and controls, while AI teams need enough context to understand what any of it means. The connections are often weak, manual or missing."
        />
        <div className="problem-visual" aria-label="The missing connection between business strategy and the data estate">
          <div className="problem-side">
            <span>Business strategy</span>
            <h3>Intent and value</h3>
            <ul>{businessItems.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
          <div className="problem-gap">
            <span className="problem-gap-line" />
            <strong>Missing connection</strong>
            <small>Manual mapping · fragmented context</small>
            <span className="problem-gap-line" />
          </div>
          <div className="problem-side">
            <span>Data estate</span>
            <h3>Assets and operations</h3>
            <ul>{dataItems.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
        </div>
        <div className="problem-resolution">
          <span>MAYSANO</span>
          <p>Connects the language of business intent to the language of enterprise data.</p>
        </div>
      </div>
    </section>
  )
}
