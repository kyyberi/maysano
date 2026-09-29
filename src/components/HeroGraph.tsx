const nodes = [
  { label: 'Objective', x: 90, y: 70, tone: 'sage' },
  { label: 'Use Case', x: 330, y: 70, tone: 'peach' },
  { label: 'Owner', x: 370, y: 165, tone: 'neutral' },
  { label: 'Policy', x: 70, y: 220, tone: 'neutral' },
  { label: 'Version', x: 360, y: 300, tone: 'sage' },
  { label: 'AI Agent', x: 90, y: 340, tone: 'peach' },
  { label: 'Dataset', x: 220, y: 392, tone: 'neutral' },
] as const

const paths = [
  'M90 70 C135 98 178 145 220 220',
  'M330 70 C286 104 256 154 220 220',
  'M370 165 C326 174 278 196 220 220',
  'M70 220 C120 211 168 214 220 220',
  'M360 300 C316 288 272 251 220 220',
  'M90 340 C142 312 182 270 220 220',
  'M220 392 C220 338 220 282 220 220',
] as const

export function HeroGraph() {
  return (
    <div className="hero-graph" aria-label="A knowledge graph connecting business objectives, a use case, a data product, ownership, policy, version, agent and dataset">
      <div className="graph-caption">
        <span className="status-dot" />
        Connected portfolio context
      </div>
      <svg viewBox="0 0 440 440" preserveAspectRatio="none" role="img" aria-hidden="true">
        <g className="graph-lines">
          {paths.map((path) => <path key={path} d={path} />)}
        </g>
        <g className="graph-pulses">
          <path d={paths[0]} />
          <path d={paths[4]} />
          <path d={paths[6]} />
        </g>
      </svg>
      {nodes.map((node) => (
        <div key={node.label} className={`graph-node graph-node--${node.tone}`} style={{ left: `${node.x / 4.4}%`, top: `${node.y / 4.4}%` }}>
          {node.label}
        </div>
      ))}
      <div className="graph-core">
        <span>Data Product</span>
        <strong>Customer 360</strong>
        <small>Active · v3.2</small>
      </div>
      <p className="graph-axis graph-axis--business">Business context</p>
      <p className="graph-axis graph-axis--data">Data estate</p>
    </div>
  )
}
