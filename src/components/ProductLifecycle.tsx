import { SectionIntro } from './SectionIntro'

const stages = ['Idea', 'Design', 'Review', 'Active', 'Change', 'New Version', 'Deprecated']
const products = [
  { name: 'Customer 360 Product', owner: 'Customer Data Office', version: 'v3.2', stage: 3, tone: 'sage' },
  { name: 'Credit Risk Signals', owner: 'Risk Data Office', version: 'v2.4', stage: 2, tone: 'peach' },
  { name: 'Liquidity Position', owner: 'Treasury Data', version: 'v1.8', stage: 4, tone: 'olive' },
  { name: 'Corporate Customer Profile', owner: 'Corporate Banking', version: 'v1.0', stage: 1, tone: 'neutral' },
]

const capabilities = ['Full lifecycle', 'Product ownership', 'Versions & history', 'Use cases & KPIs', 'Dependencies', 'Governance', 'Decision history']

export function ProductLifecycle() {
  return (
    <section className="section product-section" id="data-products">
      <div className="container">
        <div className="split-heading">
          <SectionIntro eyebrow="DATA PRODUCT MANAGEMENT" title="Manage data as products, not catalog entries" copy="Give every data product a purpose, owner, lifecycle, version history and connected place in the enterprise portfolio." />
          <div className="capability-list">
            {capabilities.map((capability) => <span key={capability}>{capability}</span>)}
          </div>
        </div>
        <div className="lifecycle-board">
          <div className="lifecycle-track" aria-label="Data product lifecycle stages">
            {stages.map((stage, index) => (
              <div className={`lifecycle-stage ${index === 3 ? 'is-current' : ''}`} key={stage}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{stage}</strong>
              </div>
            ))}
          </div>
          <div className="product-register">
            <div className="register-head"><span>Data product</span><span>Ownership</span><span>Version</span><span>Lifecycle</span></div>
            {products.map((product) => (
              <div className="product-row" key={product.name}>
                <div className="product-name"><i className={`product-swatch product-swatch--${product.tone}`} /><strong>{product.name}</strong></div>
                <span>{product.owner}</span>
                <strong>{product.version}</strong>
                <div className="mini-track" aria-label={`${product.name} lifecycle position`}>
                  {stages.map((stage, index) => <i key={stage} className={index <= product.stage ? 'is-filled' : ''} />)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
