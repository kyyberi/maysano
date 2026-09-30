const strategyNodes = ['Objectives', 'Use Cases']
const deliveryNodes = ['Data Products', 'Governance & Lifecycle', 'Delivery']

export function HeroGraph() {
  return (
    <div className="hero-model" aria-label="Business strategy connects through Maysano to data products, governance, lifecycle and delivery">
      <p className="hero-model-label">Business strategy</p>
      <div className="hero-model-chain">
        {strategyNodes.map((node) => <div className="hero-model-node" key={node}>{node}</div>)}
        <div className="hero-model-core">
          <span>The connected layer</span>
          <strong>MAYSANO</strong>
        </div>
        {deliveryNodes.map((node) => <div className="hero-model-node" key={node}>{node}</div>)}
      </div>
      <p className="hero-model-label hero-model-label--end">Delivery</p>
    </div>
  )
}
