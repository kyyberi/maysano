import { SectionIntro } from './SectionIntro'

export const questions = [
  [
    'What does Maysano connect?',
    'Maysano connects business objectives and use cases to data products in a shared knowledge graph. Governance, lifecycle and delivery context stay attached to the same portfolio.',
  ],
  [
    'Does Maysano replace our data catalog or data platform?',
    'No. Maysano works above and alongside catalogs, metadata platforms, data platforms, warehouses, lakehouses and operational systems. Those remain the underlying systems.',
  ],
  [
    'How is governance built into the work?',
    'Ownership, policies, evidence, controls and access requirements are applied while products are created, developed, reviewed and operated—not as a separate final gate.',
  ],
  [
    'What do AI Agent operations do?',
    'AI agents use connected portfolio context to explain gaps, dependencies, governance needs and change impact. Activity and reasoning remain reviewable, with human oversight and kill controls available.',
  ],
  [
    'Can Maysano work with our existing AI and enterprise architecture?',
    'Portfolio context and agent recipes stay separate from the selected model runtime. Deployment, identity, access, network and integration boundaries are reviewed for the target environment.',
  ],
  [
    'What happens in a 30-minute demo?',
    'We walk through strategy-to-product connections, governance and lifecycle inside the work, portfolio gaps and dependencies, AI Agent operations and the enterprise questions relevant to your environment.',
  ],
] as const

export function FAQ() {
  return (
    <section className="section faq-section" id="faq">
      <div className="container faq-grid">
        <SectionIntro
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          title="Questions enterprise teams ask first"
          copy="Clear answers about where Maysano fits, what it connects and how it operates in an enterprise environment."
        />
        <div className="faq-list">
          {questions.map(([question, answer]) => (
            <details className="faq-item" key={question}>
              <summary>
                <strong>{question}</strong>
                <span className="faq-toggle" aria-hidden="true">+</span>
              </summary>
              <div className="faq-answer"><p>{answer}</p></div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
