const portfolioObjects = ['Business Objectives', 'Business Use Cases', 'Data Products']

const foundationPlatforms = ['Metadata Management', 'Data Management']

export function HeroGraph() {
  return (
    <div className="hero-model" aria-label="Maysano manages business objectives, business use cases and data products with built-in governance and lifecycle management above existing metadata and data management platforms">
      <div className="hero-model-layer">
        <div className="hero-model-heading">
          <span>Business &amp; product layer</span>
          <strong>MAYSANO</strong>
        </div>
        <div className="hero-model-objects">
          {portfolioObjects.map((item) => <div className="hero-model-node" key={item}>{item}</div>)}
        </div>
        <div className="hero-model-controls">
          <span>Built in across the portfolio</span>
          <strong>Governance &amp; Lifecycle Management</strong>
        </div>
      </div>
      <div className="hero-model-foundation">
        <span className="hero-model-connector">Runs above and connects to</span>
        <div className="hero-model-platforms">
          {foundationPlatforms.map((item) => (
            <div key={item}>
              <small>Existing platform</small>
              <strong>{item}</strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
