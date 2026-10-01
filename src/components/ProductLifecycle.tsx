import { SectionIntro } from './SectionIntro'

const questions = [
  ['What supports this objective?', 'Portfolio graph connects objectives, use cases and the products they require.'],
  ['Where are the gaps or blockers?', 'Lifecycle, ownership, governance and delivery context show what needs attention.'],
  ['What should we do next?', 'Portfolio Assistant turns connected context into explainable, reviewable actions.'],
]

export function ProductLifecycle() {
  return (
    <section className="section product-section" id="product">
      <div className="container">
        <SectionIntro
          eyebrow="THE PRODUCT"
          title="From portfolio understanding to action"
          copy="Maysano brings portfolio relationships, lifecycle management, governance, delivery monitoring and assistant-led analysis into one working environment."
        />
        <div className="product-story">
          <div className="product-questions">
            {questions.map(([question, answer], index) => (
              <article key={question}>
                <span>0{index + 1}</span>
                <h3>{question}</h3>
                <p>{answer}</p>
              </article>
            ))}
          </div>
          <figure className="product-screenshot">
            <img
              src={`${import.meta.env.BASE_URL}product-catalog.webp`}
              alt="Maysano product catalog showing a production data product and its business context"
              loading="lazy"
              width="1780"
              height="734"
            />
            <figcaption><span>Product view</span> A governed data product catalog connected to business use cases.</figcaption>
          </figure>
        </div>
        <div className="product-capabilities" aria-label="Selected Maysano product capabilities">
          <span>Portfolio graph</span>
          <span>Data product lifecycle</span>
          <span>Talk-to-Portfolio</span>
          <span>Governance</span>
          <span>Delivery monitoring</span>
          <span>Jira integration</span>
        </div>
      </div>
    </section>
  )
}
