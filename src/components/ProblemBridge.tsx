import { Reveal } from './Reveal'
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
        <Reveal className="bridge">
          <div className="bridge-stage" aria-label="The missing connection between business strategy and the data estate">
            <article className="bridge-panel bridge-panel--tilt-left rise">
              <p>Business strategy</p>
              <h3>Intent and value</h3>
              <ul>{businessItems.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
            <div className="bridge-medallion rise">
              <strong>Missing connection</strong>
              <small>Manual mapping · fragmented context</small>
            </div>
            <article className="bridge-panel bridge-panel--tilt-right rise">
              <p>Data estate</p>
              <h3>Assets and operations</h3>
              <ul>{dataItems.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          </div>
          <div className="bridge-join rise">
            <span>Maysano</span>
            <p>Connects the language of business intent to the language of enterprise data.</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
