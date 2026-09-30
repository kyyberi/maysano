import { SectionIntro } from './SectionIntro'

const model = [
  ['01', 'Objective', 'Why change matters'],
  ['02', 'Use Case', 'How value is created'],
  ['03', 'Data Products', 'What the work needs'],
  ['04', 'Governance', 'What must be true'],
  ['05', 'Lifecycle', 'Where each product stands'],
  ['06', 'Delivery', 'What happens next'],
]

export function StrategyGraph() {
  return (
    <section className="section model-section">
      <div className="container">
        <SectionIntro
          eyebrow="THE CONNECTED MODEL"
          title="One connected model from objective to delivery."
          copy="Maysano creates a knowledge graph of the business objects surrounding data products. A product no longer exists as an isolated technical asset: you can see why it exists, who depends on it, who owns it, how it is governed and where it sits in delivery."
        />
        <ol className="model-flow">
          {model.map(([number, title, copy]) => (
            <li key={title}>
              <span>{number}</span>
              <strong>{title}</strong>
              <small>{copy}</small>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
