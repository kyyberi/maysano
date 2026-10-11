import { Footer } from './Footer'
import { Header } from './Header'
import { siteConfig } from '../config/site'

const architectureUrl = `${siteConfig.siteUrl}architecture/`

const ownership = [
  ['Business objectives and use cases', 'Maysano-managed portfolio'],
  ['Data product portfolio relationships', 'Maysano'],
  ['Product lifecycle, versions, and decisions', 'Maysano-managed products'],
  ['Asset metadata and technical lineage', 'Existing catalogs and metadata systems'],
  ['Physical data storage and processing', 'Existing data platforms'],
  ['Enterprise identity and access enforcement', 'Existing IAM and security systems'],
  ['Enterprise policies and regulatory authority', 'Existing governance and compliance functions'],
  ['Agent workflows and their activity records', 'Maysano'],
  ['Engineering tickets and implementation execution', 'Delivery systems such as Jira'],
]

const workflow = [
  ['Source material', 'Business requirements and meeting notes enter Maysano.'],
  ['AI-generated candidates', 'Agents prepare candidate objectives, use cases, products, dependencies, and gaps.'],
  ['Portfolio context', 'Existing portfolio relationships inform the proposed work.'],
  ['Human-reviewed decision', 'A product manager approves, refines, or rejects the proposed work.'],
  ['Managed product records', 'Approved work enters the relevant product lifecycle and governance context.'],
  ['External delivery execution', 'Delivery tasks may be prepared for Jira where the integration is configured.'],
]

const deploymentComparison = [
  ['Target', 'Smaller organizations, private AI environments', 'Larger organizations with established systems'],
  ['Deployment', 'Local-first environment', 'Customer cloud'],
  ['LLM', 'Apple Silicon-optimized local server', 'Customer-approved models'],
  ['Model routing', 'Local default, optional cloud', 'Customer-defined model infrastructure'],
  ['Knowledge graph', 'Maysano', 'Maysano'],
  ['Portfolio and governance', 'Maysano', 'Maysano'],
  ['Existing catalogs', 'Optional', 'Integrated where available'],
  ['Data management', 'Optional add-on capabilities', 'Existing enterprise stack'],
]

function ArchitectureStructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${architectureUrl}#webpage`,
    url: architectureUrl,
    name: 'Maysano Reference Architecture | Data Products, Knowledge Graph & Governed AI',
    description: 'Explore how Maysano connects business objectives, data product portfolios, knowledge graphs, governance, and AI agents with existing enterprise systems.',
    isPartOf: { '@id': `${siteConfig.siteUrl}#website` },
    about: { '@id': `${siteConfig.siteUrl}#product` },
    author: { '@id': `${siteConfig.siteUrl}#creator` },
    inLanguage: 'en',
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}

function LogicalArchitectureDiagram() {
  return (
    <div className="architecture-diagram-scroll" tabIndex={0} aria-label="Scrollable logical reference architecture diagram">
      <svg className="logical-architecture-diagram" viewBox="0 0 1120 690" role="img" aria-labelledby="logical-architecture-title logical-architecture-description">
        <title id="logical-architecture-title">Maysano logical reference architecture</title>
        <desc id="logical-architecture-description">Business and human interaction sits above the Maysano operating core. Governed AI execution connects to the operating core and consumes model infrastructure. Existing enterprise systems remain below the operating core. Open standards and integrations are cross-cutting definitions.</desc>
        <g className="architecture-svg__connection">
          <path d="M485 155 V270" />
          <path d="M900 265 V300" />
          <path d="M685 405 H730" />
          <path d="M245 460 H285" strokeDasharray="5 7" />
          <path d="M485 545 V580" />
        </g>
        <g className="architecture-svg__label">
          <text x="500" y="220">portfolio context</text>
          <text x="915" y="289">model service</text>
        </g>

        <g className="architecture-svg__group architecture-svg__group--business">
          <rect x="200" y="30" width="720" height="125" rx="10" />
          <text x="230" y="66" className="architecture-svg__eyebrow">BUSINESS AND HUMAN INTERACTION</text>
          <text x="230" y="103">Business leadership · Product managers · Governance teams · Delivery teams</text>
          <text x="230" y="132">Portfolio Studio · Boardroom Assistant · Portfolio views and reviews</text>
        </g>

        <g className="architecture-svg__group architecture-svg__group--standards">
          <rect x="25" y="300" width="220" height="225" rx="10" />
          <text x="50" y="335" className="architecture-svg__eyebrow">OPEN STANDARDS</text>
          <text x="50" y="375">ODPS</text><text x="50" y="405">ODPC · ODPG</text><text x="50" y="435">ODCS</text>
          <text x="50" y="475">APIs</text><text x="50" y="505">MCP · Supported SDKs</text>
        </g>

        <g className="architecture-svg__group architecture-svg__group--core">
          <rect x="285" y="270" width="400" height="275" rx="10" />
          <text x="315" y="307" className="architecture-svg__eyebrow">MAYSANO OPERATING CORE</text>
          <text x="315" y="350" className="architecture-svg__title">Connected business</text>
          <text x="315" y="378" className="architecture-svg__title">and product context</text>
          <text x="315" y="424">Knowledge graph and semantics</text>
          <text x="315" y="456">Portfolio, lifecycle, ownership, dependencies</text>
          <text x="315" y="488">Minimum Lovable Governance</text>
          <text x="315" y="520">Decisions, evidence, and delivery context</text>
        </g>

        <g className="architecture-svg__group architecture-svg__group--agents">
          <rect x="730" y="300" width="340" height="240" rx="10" />
          <text x="760" y="335" className="architecture-svg__eyebrow">GOVERNED AI EXECUTION</text>
          <text x="760" y="375">Standardized recipes and workflows</text>
          <text x="760" y="410">Portfolio-aware context retrieval</text>
          <text x="760" y="445">Permissions and approval points</text>
          <text x="760" y="480">Explainability, audit, and controls</text>
          <text x="760" y="515">Operational kill switch</text>
        </g>

        <g className="architecture-svg__group architecture-svg__group--models">
          <rect x="740" y="180" width="320" height="85" rx="10" />
          <text x="770" y="213" className="architecture-svg__eyebrow">AI MODEL INFRASTRUCTURE</text>
          <text x="770" y="240">Local models · Approved cloud models</text>
          <text x="770" y="258">Configured model routing</text>
        </g>

        <g className="architecture-svg__group architecture-svg__group--ecosystem">
          <rect x="135" y="580" width="850" height="85" rx="10" />
          <text x="165" y="612" className="architecture-svg__eyebrow">ENTERPRISE INTEGRATIONS AND OPTIONAL SUPPORTING SERVICES</text>
          <text x="165" y="640">Catalogs and metadata · Warehouses and lakehouses · Business applications and APIs</text>
          <text x="165" y="660">IAM · Security and governance · Engineering and delivery tools such as Jira</text>
        </g>
      </svg>
    </div>
  )
}

function AgentWorkflowDiagram() {
  const steps = ['Business task or approved workflow', 'Agent recipe', 'Context retrieval from Maysano', 'Permitted tool and model execution', 'Validation and governance checks', 'Proposed result', 'Human review where required', 'Recorded outcome']

  return (
    <div className="architecture-diagram-scroll" tabIndex={0} aria-label="Scrollable governed AI workflow diagram">
      <svg className="agent-workflow-diagram" viewBox="0 0 1160 275" role="img" aria-labelledby="agent-workflow-title agent-workflow-description">
        <title id="agent-workflow-title">Governed AI agent workflow</title>
        <desc id="agent-workflow-description">A business task follows an agent recipe, retrieves Maysano context, performs permitted model and tool work, passes validation and governance checks, proposes a result, and receives human review where required before a recorded outcome.</desc>
        <defs><marker id="agent-arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="#B7C0BF" /></marker></defs>
        {steps.map((step, index) => {
          const x = 20 + index * 142
          const isReview = index === 6
          const isProposal = index === 5
          return <g key={step} className={`agent-workflow-svg__step ${isReview ? 'agent-workflow-svg__step--review' : ''} ${isProposal ? 'agent-workflow-svg__step--proposal' : ''}`}>
            {index < steps.length - 1 && <path className="agent-workflow-svg__arrow" d={`M${x + 122} 136 H${x + 140}`} />}
            <rect x={x} y="80" width="122" height="112" rx="8" />
            <text x={x + 15} y="110" className="agent-workflow-svg__number">0{index + 1}</text>
            <text x={x + 15} y="139" className="agent-workflow-svg__label">{step.split(' ').slice(0, 3).join(' ')}</text>
            <text x={x + 15} y="162" className="agent-workflow-svg__label">{step.split(' ').slice(3).join(' ')}</text>
          </g>
        })}
        <text x="20" y="45" className="agent-workflow-svg__note">Agents prepare and propose. Applicable controls and accountable people determine what is authorized.</text>
        <text x="20" y="236" className="agent-workflow-svg__note">Portfolio context, tool permissions, validation, evidence, and activity records remain inspectable throughout the workflow.</text>
      </svg>
    </div>
  )
}

export function ArchitecturePage() {
  return (
    <>
      <ArchitectureStructuredData />
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <main id="main-content" className="architecture-page">
        <header className="architecture-page__hero">
          <div className="container architecture-page__hero-inner">
            <p className="eyebrow">MAYSANO · REFERENCE ARCHITECTURE</p>
            <h1>Maysano Reference Architecture</h1>
            <p className="architecture-page__subtitle">The business and data product operating layer for governed, AI-agent-first enterprises.</p>
            <p>Maysano connects business objectives, use cases, data products, governance, lifecycle, and delivery in a shared knowledge graph. AI agents operate with this connected context, while existing enterprise platforms retain responsibility for data storage, processing, metadata management, security, and execution.</p>
            <p className="architecture-page__principle">Connect existing systems. Preserve their responsibilities. Make business context operational.</p>
          </div>
        </header>

        <section className="section architecture-page__section" aria-labelledby="logical-architecture-heading">
          <div className="container">
            <div className="architecture-page__section-head">
              <p className="eyebrow">01 · LOGICAL REFERENCE ARCHITECTURE</p>
              <h2 id="logical-architecture-heading">A connected operating layer, not another data platform</h2>
              <p>Maysano is the central operating capability for business and data product context. The diagram shows architectural responsibilities, not a mandatory request-processing pipeline.</p>
            </div>
            <LogicalArchitectureDiagram />
            <p className="architecture-page__caption">In enterprise deployments, Maysano connects to existing data catalogs, platforms, and governance systems. In the all-in-one offering, Maysano provides an integrated operating environment with optional metadata capabilities and local-first AI.</p>
            <nav className="architecture-page__related-links" aria-label="Explore Maysano capabilities">
              <a href={`${siteConfig.siteUrl}#product`}>Product capabilities</a>
              <a href={`${siteConfig.siteUrl}#how-it-works`}>Knowledge graph</a>
              <a href={`${siteConfig.siteUrl}#agents`}>AI agents</a>
              <a href={`${siteConfig.siteUrl}#standards`}>Open standards</a>
              <a href={`${siteConfig.siteUrl}#governance`}>Governance</a>
              <a href={`${siteConfig.siteUrl}insights/`}>Insights</a>
            </nav>
          </div>
        </section>

        <section className="section architecture-page__planes" aria-labelledby="planes-heading">
          <div className="container">
            <div className="architecture-page__section-head">
              <p className="eyebrow">02 · THREE ARCHITECTURAL PLANES</p>
              <h2 id="planes-heading">Separate the data, operating, and AI execution responsibilities</h2>
            </div>
            <div className="architecture-planes">
              <article><span>01</span><h3>Enterprise data plane</h3><p>Existing systems store, transform, process, govern, and deliver actual data. Maysano does not require enterprise data to be physically moved into its platform.</p></article>
              <article className="architecture-planes__focus"><span>02</span><h3>Maysano operating plane</h3><p>Maysano manages connected objectives, use cases, products, ownership, dependencies, lifecycle, governance, and delivery relationships.</p></article>
              <article><span>03</span><h3>AI execution plane</h3><p>AI agents use permitted portfolio context, defined workflows, model services, operational controls, and accountable human review.</p></article>
            </div>
          </div>
        </section>

        <section className="section architecture-page__section" aria-labelledby="ownership-heading">
          <div className="container">
            <div className="architecture-page__section-head architecture-page__section-head--split">
              <div><p className="eyebrow">03 · KNOWLEDGE GRAPH AND OWNERSHIP</p><h2 id="ownership-heading">One connected operating graph. Clear system ownership.</h2></div>
              <p>Maysano maintains managed portfolio and business-decision context. External systems remain authoritative for the information and responsibilities they manage.</p>
            </div>
            <div className="architecture-ownership-grid">
              <div className="architecture-ownership-table-wrap">
                <table className="architecture-ownership-table">
                  <thead><tr><th>Responsibility</th><th>Primary authority</th></tr></thead>
                  <tbody>{ownership.map(([responsibility, authority]) => <tr key={responsibility}><th scope="row">{responsibility}</th><td>{authority}</td></tr>)}</tbody>
                </table>
              </div>
              <aside className="architecture-information-types" aria-label="Graph information types">
                <p className="eyebrow">GRAPH INFORMATION TYPES</p>
                <ol>
                  <li><strong>Maysano-owned</strong><span>Managed portfolio objects, relationships, lifecycle decisions, and evidence.</span></li>
                  <li><strong>Externally authoritative</strong><span>Referenced or synchronized information remains owned by its source system.</span></li>
                  <li><strong>AI-generated proposal</strong><span>Candidate information awaits accountable human review before becoming managed work.</span></li>
                </ol>
              </aside>
            </div>
          </div>
        </section>

        <section className="section architecture-page__standards" aria-labelledby="standards-heading">
          <div className="container">
            <div className="architecture-page__section-head architecture-page__section-head--split">
              <div><p className="eyebrow">04 · OPEN STANDARDS</p><h2 id="standards-heading">Open standards at the foundation</h2></div>
              <p>Machine-readable definitions support portability, validation, interoperability, and agent-ready context. Product specifications describe individual products; Maysano connects them to the broader portfolio graph and operating decisions.</p>
            </div>
            <div className="architecture-standards-grid">
              <article><strong>ODPS</strong><span>Describes the data product.</span></article>
              <article><strong>ODPC</strong><span>Supports contractual commitments in the Open Data Product standards family.</span></article>
              <article><strong>ODPG</strong><span>Supports governance-related definitions.</span></article>
              <article><strong>ODCS</strong><span>Describes data contracts and interface-level expectations.</span></article>
              <article><strong>APIs and MCP</strong><span>Support integration and tool access where implemented.</span></article>
            </div>
            <p className="architecture-page__note">Supported standards, integrations, and configuration details should be verified for the target environment. This page does not assert a particular specification version or universal connector coverage.</p>
          </div>
        </section>

        <section className="section architecture-page__agents" aria-labelledby="agent-architecture-heading">
          <div className="container">
            <div className="architecture-page__section-head">
              <p className="eyebrow">05 · GOVERNED AI AGENT ARCHITECTURE</p>
              <h2 id="agent-architecture-heading">AI agents operate with business context and defined controls</h2>
              <p>The knowledge graph supplies contextual relationships. Standardized recipes define repeatable work; model services and tools provide permitted execution; governance controls and authorization systems determine what may happen next.</p>
            </div>
            <AgentWorkflowDiagram />
            <div className="architecture-page__agent-notes">
              <p><strong>Not prompt-only control.</strong> An LLM prompt does not enforce security. Permissions, workflow design, validation, review, monitoring, and enforcement remain separate responsibilities.</p>
              <p><strong>Inspectable operations.</strong> Evidence and activity records make work reviewable; governed agent design improves control but does not guarantee correctness.</p>
            </div>
          </div>
        </section>

        <section className="section architecture-page__section" aria-labelledby="deployment-heading">
          <div className="container">
            <div className="architecture-page__section-head">
              <p className="eyebrow">06 · DEPLOYMENT ARCHITECTURE</p>
              <h2 id="deployment-heading">Two Deployment Models. One Maysano Operating Model.</h2>
            </div>
            <div className="deployment-models-diagram">
              <header className="deployment-models-diagram__shared">
                <p>Shared Maysano operating model</p>
                <strong>Knowledge Graph · Portfolio · Governance · AI Agents</strong>
                <span>Open standards · Lifecycle · Decision evidence</span>
              </header>
              <div className="deployment-models-diagram__models">
                <article className="deployment-models-diagram__model deployment-models-diagram__model--all-in-one">
                  <p className="eyebrow">ALL-IN-ONE</p>
                  <h3>Local-first hybrid AI</h3>
                  <table><thead><tr><th>Capability</th><th>All-in-one</th></tr></thead><tbody>{deploymentComparison.map(([label, allInOne]) => <tr key={label}><th scope="row">{label}</th><td>{allInOne}</td></tr>)}</tbody></table>
                </article>
                <article className="deployment-models-diagram__model">
                  <p className="eyebrow">ENTERPRISE</p>
                  <h3>Customer cloud</h3>
                  <table><thead><tr><th>Capability</th><th>Enterprise</th></tr></thead><tbody>{deploymentComparison.map(([label, , enterprise]) => <tr key={label}><th scope="row">{label}</th><td>{enterprise}</td></tr>)}</tbody></table>
                </article>
              </div>
            </div>
            <div className="architecture-page__deployment-notes">
              <p><strong>All-in-one is not an all-replacement claim.</strong> It provides a cohesive Maysano operating environment—knowledge graph, portfolio management, governance, agent workflows, and local AI infrastructure—without requiring an organization to assemble a complex enterprise AI stack first. It does not replace every data store or business application.</p>
              <p><strong>Local-first hybrid AI.</strong> The Apple Silicon-optimized LLM server supports up to 16 concurrent LLM connections and can route selected tasks to cloud models under configured criteria. Trust boundaries, data movement, and the applicable model-server configuration must be confirmed for the target environment.</p>
            </div>
          </div>
        </section>

        <section className="section architecture-page__example" aria-labelledby="operating-example-heading">
          <div className="container">
            <div className="architecture-page__section-head">
              <p className="eyebrow">07 · END-TO-END OPERATING EXAMPLE</p>
              <h2 id="operating-example-heading">From business discussion to governed product delivery</h2>
              <p>A product manager receives customer-retention workshop notes. Context continues across source material, agent preparation, accountable review, managed portfolio records, and configured delivery execution.</p>
            </div>
            <ol className="architecture-operating-workflow">
              {workflow.map(([label, copy], index) => <li key={label}><span>{`0${index + 1}`}</span><strong>{label}</strong><p>{copy}</p></li>)}
            </ol>
            <p className="architecture-page__note">Preparing a Jira task does not mean that a product has been implemented. It prepares delivery work after the relevant decision and lifecycle steps.</p>
          </div>
        </section>

        <section className="section architecture-page__boundaries" aria-labelledby="boundaries-heading">
          <div className="container architecture-page__boundaries-grid">
            <div><p className="eyebrow">08 · ARCHITECTURE BOUNDARIES</p><h2 id="boundaries-heading">What Maysano owns. What stays in your existing stack.</h2></div>
            <div><p>Maysano owns connected business and product operating context within its managed scope. Existing systems continue to own physical data, technical metadata where applicable, enterprise security enforcement, regulatory governance authority, and engineering execution.</p><p>Metadata management can be added for organizations without an established metadata solution, but it is not the primary Maysano product.</p></div>
          </div>
        </section>

        <section className="architecture-page__cta" aria-labelledby="architecture-cta-heading">
          <div className="container">
            <p className="eyebrow">NEXT STEP</p>
            <h2 id="architecture-cta-heading">See the architecture applied to your environment</h2>
            <p>Explore how Maysano connects your existing data platforms, business objectives, product portfolio, governance, and AI operations without replacing your current investments.</p>
            <div><a className="button" href="https://jarkkomoilanen.com/engage">Book a 30-minute architecture discussion</a><a className="text-link" href={`${siteConfig.siteUrl}insights/`}>Explore Maysano Insights <span aria-hidden="true">↗</span></a></div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
