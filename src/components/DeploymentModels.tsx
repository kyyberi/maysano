import { SectionIntro } from './SectionIntro'

const operatingLayer = [
  'Business objectives',
  'Business use cases',
  'Data products',
  'Governance',
  'Lifecycle',
  'AI agents',
]

const deploymentModels = [
  {
    audience: 'For smaller companies',
    title: 'All-in-one local AI package',
    components: ['Maysano', 'Local LLM server', 'Hardware included'],
    benefits: [
      'Private AI in the office',
      'Up to 16 concurrent LLM connections',
      'Supports local knowledge and coding workflows',
    ],
    close: 'One package: software, model serving and hardware.',
    price: 'Starting from 29 500 USD',
  },
  {
    audience: 'For larger or regulated environments',
    title: 'Customer cloud deployment',
    components: ['Maysano', 'Customer cloud', 'Customer-provided LLMs'],
    benefits: [
      'Deploy in the customer environment',
      'Use approved enterprise models',
      'Connect to the existing enterprise stack',
    ],
    close: 'Private deployment with a customer-controlled AI layer.',
    price: 'On request',
  },
]

export function DeploymentModels() {
  return (
    <section className="section deployment-section" id="deployment">
      <div className="container">
        <SectionIntro
          eyebrow="DEPLOYMENT MODELS"
          title="Two deployment models. One Maysano operating layer."
          copy="Choose an all-in-one local AI package for a smaller company or a customer-cloud deployment for a larger or regulated environment. The connected business operating layer stays the same."
        />
        <div className="deployment-diagram">
          <div className="deployment-operating-layer">
            <div className="deployment-operating-layer__heading">
              <span>Shared operating layer</span>
              <strong>Same business context, governance and portfolio view</strong>
            </div>
            <ol className="deployment-capabilities">
              {operatingLayer.map((item, index) => (
                <li key={item}>
                  <span>{`0${index + 1}`}</span>
                  <strong>{item}</strong>
                </li>
              ))}
            </ol>
          </div>

          <div className="deployment-options">
            {deploymentModels.map((model) => (
              <article className="deployment-option" key={model.title}>
                <p>{model.audience}</p>
                <h3>{model.title}</h3>
                <div className="deployment-components" aria-label={`${model.title} components`}>
                  {model.components.map((component) => <span key={component}>{component}</span>)}
                </div>
                <ul className="deployment-benefits">
                  {model.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}
                </ul>
                <small>{model.close}</small>
                <p className="deployment-price">
                  <span>Indicative pricing</span>
                  <strong>{model.price}</strong>
                </p>
              </article>
            ))}
          </div>
          <p className="deployment-choice">Same business processes, governance and portfolio context - different deployment choices.</p>
        </div>
      </div>
    </section>
  )
}
