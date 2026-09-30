const outcomes = [
  ['#how-it-works', 'Connect strategy to data products', 'See which objectives and use cases each data product supports, in one knowledge graph.'],
  ['#governance', 'Governance inside the work', 'Ownership, evidence, policies and controls applied while teams create, develop, review and operate.'],
  ['#agents', 'Agents that can explain the portfolio', 'AI agents work from objectives, use cases, products, governance and lifecycle context, not an isolated prompt.'],
]

export function OutcomeStrip() {
  return (
    <section className="outcome-strip" aria-label="What Maysano delivers">
      <div className="container">
        <ul className="outcome-list">
          {outcomes.map(([href, title, copy], index) => (
            <li key={href}>
              <a href={href}>
                <span>{`0${index + 1}`}</span>
                <strong>{title}</strong>
                <small>{copy}</small>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
