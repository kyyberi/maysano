import { Footer } from './Footer'
import { Header } from './Header'
import { siteConfig } from '../config/site'
import type { ReactNode } from 'react'

const articlePath = 'insights/data-catalog-vs-data-product-portfolio-management/'
const articleUrl = `${siteConfig.siteUrl}${articlePath}`
const contractsArticlePath = 'insights/data-contracts-and-data-product-specifications/'
const contractsArticleUrl = `${siteConfig.siteUrl}${contractsArticlePath}`
const governanceArticlePath = 'insights/traditional-governance-to-minimum-lovable-governance/'
const governanceArticleUrl = `${siteConfig.siteUrl}${governanceArticlePath}`
const graphArticlePath = 'insights/knowledge-graph-vs-ontology/'
const graphArticleUrl = `${siteConfig.siteUrl}${graphArticlePath}`
const agentsArticlePath = 'insights/traditional-ai-agents-vs-governed-ai-agents/'
const agentsArticleUrl = `${siteConfig.siteUrl}${agentsArticlePath}`
const deliveryArticlePath = 'insights/manual-vs-ai-assisted-governed-data-product-delivery/'
const deliveryArticleUrl = `${siteConfig.siteUrl}${deliveryArticlePath}`
const catalogSocialImage = `${siteConfig.siteUrl}og/insight-data-catalog-portfolio.png`
const contractsSocialImage = `${siteConfig.siteUrl}og/insight-data-contracts-specifications.png`
const governanceSocialImage = `${siteConfig.siteUrl}og/insight-minimum-lovable-governance.png`
const graphSocialImage = `${siteConfig.siteUrl}og/insight-knowledge-graph-ontology.png`
const agentsSocialImage = `${siteConfig.siteUrl}og/insight-governed-ai-agents.png`
const deliverySocialImage = `${siteConfig.siteUrl}og/insight-ai-assisted-delivery.png`

type InsightKind = 'catalog' | 'contracts' | 'governance' | 'delivery' | 'graph' | 'agents'

type InsightCard = {
  category: string
  title: string
  summary: string
  kind: InsightKind
  href?: string
}

const insightGroups: Array<{ number: string, title: string, cards: InsightCard[] }> = [
  {
    number: '01',
    title: 'Product operating model',
    cards: [
      {
        category: 'Portfolio',
        title: 'Data Catalog vs. Portfolio Management',
        summary: 'Know what data exists. Understand why products matter.',
        kind: 'catalog',
        href: articleUrl,
      },
      {
        category: 'Open standards',
        title: 'Data Contracts vs. Product Specifications',
        summary: 'Understand the interface and the complete product.',
        kind: 'contracts',
        href: contractsArticleUrl,
      },
    ],
  },
  {
    number: '02',
    title: 'Governance & delivery',
    cards: [
      {
        category: 'Governance',
        title: 'Minimum Lovable Governance',
        summary: 'Build governance into work, rather than adding gates later.',
        kind: 'governance',
        href: governanceArticleUrl,
      },
      {
        category: 'Delivery',
        title: 'Manual vs. AI-Assisted Delivery',
        summary: 'Move from scattered inputs to reviewed product work.',
        kind: 'delivery',
        href: deliveryArticleUrl,
      },
    ],
  },
  {
    number: '03',
    title: 'Architecture & AI',
    cards: [
      {
        category: 'Knowledge graph',
        title: 'Knowledge Graph vs. Ontology',
        summary: 'Relationships and meaning for people and AI agents.',
        kind: 'graph',
        href: graphArticleUrl,
      },
      {
        category: 'AI agents',
        title: 'Traditional vs. Governed AI Agents',
        summary: 'AI with business context, controls and decision evidence.',
        kind: 'agents',
        href: agentsArticleUrl,
      },
    ],
  },
]

function InsightIllustration({ kind }: { kind: InsightKind }) {
  const stroke = { fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }
  const muted = { ...stroke, opacity: 0.42 }

  if (kind === 'catalog') return <svg viewBox="0 0 260 136" aria-hidden="true"><rect x="22" y="28" width="74" height="24" rx="3" {...muted} /><rect x="22" y="58" width="74" height="24" rx="3" {...muted} /><rect x="22" y="88" width="74" height="24" rx="3" {...muted} /><path d="M96 40 C120 40 126 66 154 70 M96 70 H154 M96 100 C120 100 126 74 154 70" {...stroke} /><circle cx="180" cy="70" r="28" {...stroke} /><circle cx="180" cy="70" r="7" fill="currentColor" /></svg>
  if (kind === 'contracts') return <svg viewBox="0 0 260 136" aria-hidden="true"><rect x="32" y="36" width="72" height="66" rx="4" {...muted} /><path d="M49 58 H84 M49 74 H79 M49 88 H70" {...muted} /><path d="M104 70 H150" {...stroke} /><circle cx="160" cy="70" r="6" fill="currentColor" /><path d="M166 70 H192" {...stroke} /><rect x="192" y="20" width="56" height="98" rx="5" {...stroke} /><path d="M207 47 H233 M207 65 H233 M207 83 H233" {...stroke} /></svg>
  if (kind === 'governance') return <svg viewBox="0 0 260 136" aria-hidden="true"><path d="M42 68 H218" {...muted} /><circle cx="58" cy="68" r="19" {...stroke} /><circle cx="108" cy="68" r="19" {...stroke} /><circle cx="158" cy="68" r="19" {...stroke} /><circle cx="208" cy="68" r="19" {...stroke} /><path d="M51 68 l5 5 10 -12 M101 68 l5 5 10 -12 M151 68 l5 5 10 -12 M201 68 l5 5 10 -12" {...stroke} /></svg>
  if (kind === 'delivery') return <svg viewBox="0 0 260 136" aria-hidden="true"><rect x="26" y="38" width="64" height="60" rx="4" {...muted} /><path d="M43 57 H75 M43 72 H69" {...muted} /><path d="M90 68 H122" {...stroke} /><circle cx="144" cy="68" r="24" {...stroke} /><path d="M134 68 l7 7 14 -16" {...stroke} /><path d="M168 68 H198" {...stroke} /><rect x="198" y="38" width="64" height="60" rx="4" {...muted} /><path d="M215 57 H247 M215 72 H241" {...muted} /></svg>
  if (kind === 'graph') return <svg viewBox="0 0 260 136" aria-hidden="true"><path d="M57 68 L105 34 L151 68 L105 102 Z M151 68 L201 38 M151 68 L201 98" {...muted} /><circle cx="57" cy="68" r="9" {...stroke} /><circle cx="105" cy="34" r="9" {...stroke} /><circle cx="105" cy="102" r="9" {...stroke} /><circle cx="151" cy="68" r="15" fill="currentColor" /><circle cx="201" cy="38" r="9" {...stroke} /><circle cx="201" cy="98" r="9" {...stroke} /></svg>
  return <svg viewBox="0 0 260 136" aria-hidden="true"><path d="M130 68 L63 36 M130 68 L63 100 M130 68 L197 36 M130 68 L197 100" {...muted} /><circle cx="63" cy="36" r="10" {...muted} /><circle cx="63" cy="100" r="10" {...muted} /><circle cx="197" cy="36" r="10" {...muted} /><circle cx="197" cy="100" r="10" {...muted} /><circle cx="130" cy="68" r="35" {...stroke} /><rect x="114" y="53" width="32" height="28" rx="5" {...stroke} /><circle cx="124" cy="64" r="2.5" fill="currentColor" /><circle cx="136" cy="64" r="2.5" fill="currentColor" /><path d="M122 74 H138" {...stroke} /></svg>
}

const heroDiagramLabels: Record<InsightKind, { left: string, right: string, inputs: string[], outcomes: string[], core: [string, string] }> = {
  catalog: { left: 'Data catalog', right: 'Business context', inputs: ['Data assets', 'Metadata', 'Search', 'Classification'], outcomes: ['Business objectives', 'Use cases', 'Investment decisions'], core: ['Data', 'products'] },
  contracts: { left: 'Interfaces', right: 'Product context', inputs: ['Schemas', 'Quality', 'Access', 'Change rules'], outcomes: ['Product purpose', 'Consumers', 'Commitments'], core: ['Data', 'product'] },
  governance: { left: 'Product work', right: 'Accountability', inputs: ['Purpose', 'Ownership', 'Evidence', 'Controls'], outcomes: ['Review points', 'Decisions', 'Lifecycle'], core: ['Governed', 'product'] },
  delivery: { left: 'Business input', right: 'Reviewed work', inputs: ['Workshop notes', 'Use cases', 'Known products', 'Open questions'], outcomes: ['Candidates', 'Decisions', 'Delivery'], core: ['Product', 'work'] },
  graph: { left: 'Connected objects', right: 'Shared meaning', inputs: ['Objectives', 'Use cases', 'Products', 'Dependencies'], outcomes: ['Definitions', 'Rules', 'Interpretation'], core: ['Operating', 'graph'] },
  agents: { left: 'Agent context', right: 'Accountable action', inputs: ['Objectives', 'Policies', 'Evidence', 'Permissions'], outcomes: ['Recommendations', 'Review', 'Controls'], core: ['Governed', 'agents'] },
}

function InsightHeroDiagram({ kind }: { kind: InsightKind }) {
  const diagram = heroDiagramLabels[kind]
  const inputYs = [55, 91, 127, 163]
  const outputYs = [68, 112, 156]

  return (
    <div className="insight-hero-diagram" aria-hidden="true">
      <svg viewBox="0 0 600 250" role="presentation">
        <text x="16" y="18" className="insight-hero-diagram__label">{diagram.left}</text>
        <text x="434" y="18" className="insight-hero-diagram__label">{diagram.right}</text>
        {diagram.inputs.map((item, index) => <g key={item}><rect x="0" y={inputYs[index]} width="145" height="27" rx="6" className="insight-hero-diagram__card" /><text x="18" y={inputYs[index] + 17} className="insight-hero-diagram__text">{item}</text><path d={`M145 ${inputYs[index] + 14} C173 ${inputYs[index] + 14} 181 105 222 112`} className="insight-hero-diagram__line" /></g>)}
        {diagram.outcomes.map((item, index) => <g key={item}><path d={`M378 112 C408 112 409 ${outputYs[index] + 14} 434 ${outputYs[index] + 14}`} className="insight-hero-diagram__line insight-hero-diagram__line--lime" /><rect x="434" y={outputYs[index]} width="166" height="27" rx="6" className="insight-hero-diagram__card insight-hero-diagram__card--outcome" /><text x="452" y={outputYs[index] + 17} className="insight-hero-diagram__text">{item}</text></g>)}
        <circle cx="300" cy="112" r="78" className="insight-hero-diagram__core" />
        <path d="M300 82 l12 7 v14 l-12 7 -12-7 V89 Z" className="insight-hero-diagram__mark" />
        <text x="300" y="131" textAnchor="middle" className="insight-hero-diagram__core-text">{diagram.core[0]}</text>
        <text x="300" y="146" textAnchor="middle" className="insight-hero-diagram__core-text">{diagram.core[1]}</text>
        <path d="M300 190 V212" className="insight-hero-diagram__line insight-hero-diagram__line--lime" />
        <rect x="160" y="212" width="280" height="28" rx="6" className="insight-hero-diagram__footer" />
        <text x="300" y="230" textAnchor="middle" className="insight-hero-diagram__footer-text">Governance · ownership · lifecycle</text>
      </svg>
    </div>
  )
}

function InsightArticleHeader({ kind, kicker, title, dek, readTime, topics }: { kind: InsightKind, kicker: string, title: string, dek: string, readTime: string, topics: string[] }) {
  return (
    <header className="insight-article__header">
      <div className="container insight-article__header-inner">
        <a className="insight-article__back" href={`${siteConfig.siteUrl}insights/`}>Insights</a>
        <div className="insight-article__hero-grid">
          <div className="insight-article__hero-copy">
            <p className="eyebrow">{kicker}</p>
            <h1>{title}</h1>
            <p className="insight-article__dek">{dek}</p>
            <div className="insight-article__meta" aria-label="Article details">
              <span>{readTime} read</span>
              {topics.map((topic) => <span key={topic}>{topic}</span>)}
            </div>
          </div>
          <InsightHeroDiagram kind={kind} />
        </div>
      </div>
    </header>
  )
}

function InsightArticleSideContent({ quote, children }: { quote: string, children: ReactNode }) {
  return (
    <aside className="insight-article__side-content">
      <blockquote className="insight-article__takeaway">{quote}</blockquote>
      <div className="insight-article__series" aria-label="Related Insights">{children}</div>
    </aside>
  )
}

function InsightCardView({ card }: { card: InsightCard }) {
  const content = <>
    <div className="insight-card__illustration"><InsightIllustration kind={card.kind} /></div>
    <p className="insight-card__category">{card.category}</p>
    <h3>{card.title}</h3>
    <p>{card.summary}</p>
    {card.href ? <span className="insight-card__action">Read insight <span aria-hidden="true">↗</span></span> : <span className="insight-card__pending">Insight in preparation</span>}
  </>

  return card.href
    ? <a className="insight-card" href={card.href}>{content}</a>
    : <article className="insight-card insight-card--pending">{content}</article>
}

function InsightStructuredData({ headline, description, url, image }: { headline: string, description: string, url: string, image: string }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    headline,
    description,
    image,
    mainEntityOfPage: url,
    author: {
      '@type': 'Person',
      name: 'Jarkko Moilanen',
      url: siteConfig.creatorUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Data Maestro Academy FZE LLC',
      url: siteConfig.siteUrl,
      logo: `${siteConfig.siteUrl}logo.webp`,
    },
    isPartOf: {
      '@type': 'Blog',
      name: 'Maysano Insights',
      url: `${siteConfig.siteUrl}insights/`,
    },
    about: ['data catalog', 'data product portfolio management', 'data governance'],
    inLanguage: 'en',
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}

function InsightShell({ children }: { children: ReactNode }) {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
    </>
  )
}

export function InsightsIndex() {
  return (
    <InsightShell>
      <section className="insights-library">
        <div className="insights-hero">
          <div className="container">
            <p className="eyebrow">Insights / Practical perspectives</p>
            <h1>Better decisions about data products and AI.</h1>
            <p className="insights-hero__lead">Practical guidance for teams connecting business objectives, use cases, data products, governance, and AI operations.</p>
          </div>
        </div>
        <div className="container insights-library__groups" id="insights-collection">
          {insightGroups.map((group) => (
            <section className="insight-group" key={group.number} aria-labelledby={`insight-group-${group.number}`}>
              <h2 id={`insight-group-${group.number}`}><span>{group.number}</span> / {group.title}</h2>
              <div className="insight-group__grid">
                {group.cards.map((card) => <InsightCardView key={card.title} card={card} />)}
              </div>
            </section>
          ))}
        </div>
        <section className="insights-library__cta" aria-labelledby="insights-cta-title">
          <div className="container">
            <h2 id="insights-cta-title">Connect business decisions to data.</h2>
            <p>See how Maysano connects portfolio management, governance, and AI-assisted delivery.</p>
            <a className="button button--light" href={siteConfig.bookingUrl}>Book a live demo <span aria-hidden="true">↗</span></a>
          </div>
        </section>
      </section>
    </InsightShell>
  )
}

export function InsightArticle() {
  return (
    <InsightShell>
      <InsightStructuredData
        headline="Data Catalog vs. Data Product Portfolio Management: Why Enterprises Need Both"
        description="A practical guide to connecting data assets with business objectives, investment decisions, governance, and AI operations."
        url={articleUrl}
        image={catalogSocialImage}
      />
      <article className="insight-article">
        <InsightArticleHeader
          kind="catalog"
          kicker="Maysano Insights · Product operating model"
          title="Data Catalog vs. Data Product Portfolio Management: Why Enterprises Need Both"
          dek="A practical guide to connecting data assets with business objectives, investment decisions, governance, and AI operations."
          readTime="7–8 minute"
          topics={['Data products', 'Strategy']}
        />

        <div className="container insight-article__layout">
          <div className="insight-article__content">
            <h2>Do we need a data catalog or data product portfolio management?</h2>
            <p>A data catalog helps people find, understand, and govern data assets. Data product portfolio management helps an organization decide which data products it needs, why they matter, who is responsible for them, what business outcomes they support, and what should happen next.</p>
            <p>These are different responsibilities, and many organizations need both.</p>
            <p>A company might have an excellent data catalog containing thousands of documented assets, business definitions, ownership information, lineage, and quality metadata. Yet its leadership might still struggle to answer which data products support a strategic objective, where investments overlap, which products should be developed next, or which initiatives no longer deliver sufficient value.</p>
            <p>The missing piece is not necessarily more metadata. It is the connection between the business decisions being made and the data products intended to support them.</p>

            <h2>What a data catalog does well</h2>
            <p>A modern data catalog creates a shared view of an organization&apos;s data assets. It helps teams understand what information exists, where it comes from, how it is structured, who owns it, and which conditions govern its use.</p>
            <p>For a data engineer, this might mean finding the correct customer table, checking its schema, and understanding its lineage. For a data steward, it might involve reviewing sensitive data classifications or improving business definitions. For an analyst, it means identifying a trusted source without searching through several systems.</p>
            <p>Modern catalogs also support business metadata, policies, quality signals, and relationships between assets. Some offer data product management and marketplaces. These capabilities are valuable and should remain part of the enterprise architecture.</p>
            <p>But documenting a data product does not automatically establish the operating model required to manage an entire portfolio of products against changing business priorities.</p>
            <p>A catalog might tell you that a customer profile dataset exists, who owns it, and whether it meets quality expectations. That still leaves a different set of questions.</p>
            <p className="insight-article__question">Why are we maintaining this product? Which strategic objectives depend on it? Which business use cases consume it? Is there another product doing the same job? Has anyone approved its next development phase? How does its operational status affect the broader portfolio?</p>
            <p>These questions concern product decisions, priorities, dependencies, and lifecycle management rather than asset discovery alone.</p>

            <h2>What data product portfolio management adds</h2>
            <p>Data product portfolio management starts with business demand.</p>
            <p>An organization identifies objectives it wants to achieve and use cases that require better information, automation, analytics, or AI. It then defines or identifies the data products needed to support those outcomes.</p>
            <p>The resulting portfolio connects business objectives, use cases, products, owners, dependencies, priorities, governance requirements, and lifecycle states.</p>
            <p>This changes the way leaders evaluate data work. Instead of seeing an inventory of available assets, they see which products contribute to particular business outcomes, which investments deserve attention, and where delivery or governance gaps exist.</p>
            <p>Consider a product that supports five business use cases. A proposed change to that product has implications beyond its schema or technical availability. Product managers need to understand who relies on it, which business objectives might be affected, whether existing commitments need review, and how the change fits into the delivery roadmap.</p>
            <p>Portfolio management provides the decision context around those questions. The data catalog continues to provide the underlying asset information.</p>

            <h2>A banking example: one objective, three data products</h2>
            <p>Consider a bank pursuing a business objective to improve customer retention by identifying customers at risk of leaving and enabling earlier intervention.</p>
            <p>The bank already operates a data catalog. Its customer, transaction, digital engagement, and service interaction data are documented. Data engineers know where the assets live, which systems produce them, and what quality rules apply.</p>
            <p>To pursue the objective, the bank identifies three data products.</p>
            <h3>Customer 360 Profile</h3>
            <p>Provides a consistent view of customer attributes and relationships.</p>
            <h3>Customer Engagement Signals</h3>
            <p>Brings together relevant interaction and activity indicators that help explain changes in customer behaviour.</p>
            <h3>Customer Retention Indicators</h3>
            <p>Produces measures that support retention analysis and decision-making, drawing on the other two products.</p>
            <p>The data catalog describes the underlying assets, metadata, technical dependencies, classifications, and relevant governance information.</p>
            <p>But the bank must also manage the business relationships between these three products.</p>
            <p>The Customer Retention Indicators product supports the retention objective directly. It depends on the other two products. Each product has an owner, a lifecycle state, delivery commitments, and requirements for quality and permitted use.</p>
            <p>Now suppose the Customer Engagement Signals product is delayed or its quality expectations are not met. The problem is no longer confined to a technical dataset. It affects the delivery of Customer Retention Indicators, the intended retention use case, and potentially the bank&apos;s business objective.</p>
            <p>A portfolio view makes these relationships visible. The bank&apos;s product leadership sees which work is affected, who must participate in the decision, and which priorities require review.</p>
            <p>The same relationships also reveal opportunities. If another department proposes a similar customer engagement product, the organization can evaluate reuse before funding overlapping development.</p>
            <p>That is the difference between knowing which data exists and managing why data products exist.</p>

            <h2>How Maysano connects the two worlds</h2>
            <p>Maysano operates at the intersection of business strategy and data product management.</p>
            <p>It connects business objectives, use cases, data products, ownership, dependencies, governance, lifecycle, and delivery context in a shared knowledge graph. These relationships allow business leaders, product managers, governance teams, and AI agents to work from connected operational context.</p>
            <p>A business objective is not merely a text field attached to a dataset. It is a managed object connected to the use cases and data products intended to fulfil it.</p>
            <p>A data product is not simply a collection of metadata. It is a managed product with a purpose, owners, versions, lifecycle decisions, governance requirements, and relationships to other products and business needs.</p>
            <p>Maysano also supports AI-assisted portfolio and product work. Agents operate with connected business and product context rather than relying only on prompts and isolated technical descriptions. This enables them to identify potential gaps, prepare candidate products, examine relationships, and present recommendations for accountable human review.</p>
            <p>That distinction becomes increasingly important as organizations adopt AI-assisted and agent-enabled operations. Agents need machine-readable business meaning, relationships, permissions, current lifecycle states, and decision evidence to support responsible enterprise workflows.</p>
            <p>Technical metadata is part of that context, but it is not the complete business operating model.</p>

            <h2>What Maysano does not replace</h2>
            <p>Maysano does not require an organization to abandon its existing data catalog, warehouse, lakehouse, metadata management platform, or data integration environment.</p>
            <p>The catalog should continue managing the metadata and discovery responsibilities for which it was selected. Data platforms continue storing, processing, securing, and serving the actual data. Existing governance, risk, and compliance functions retain their authority over enterprise policies and controls.</p>
            <p>Maysano adds the business and product operating context connecting these systems to objectives, decisions, and delivery.</p>
            <p>The architectural principle is straightforward: retain existing systems where they provide value and introduce the missing relationships and workflows needed to manage data products as business investments.</p>

            <h2>When do you need a catalog, and when do you need both?</h2>
            <p>If your immediate problem is that employees struggle to find datasets, understand technical metadata, identify trusted sources, or establish consistent asset documentation, a data catalog is a sensible priority.</p>
            <p>If your organization already manages data products and needs to understand which products support strategic objectives, how to prioritise investments, how product dependencies affect delivery, and how governance stays connected to decisions, portfolio management becomes important.</p>
            <p>Some advanced catalog platforms already cover parts of this territory. The right decision depends on how well those capabilities support your actual portfolio operating model, rather than on the product category printed on a vendor website.</p>
            <p>You should look for the ability to manage business objectives, use cases, product relationships, ownership, lifecycle, priorities, governance evidence, and delivery status as connected, actionable information.</p>
            <p>If those capabilities already exist in your current environment and work well together, a separate portfolio platform might not be necessary. If they remain scattered across spreadsheets, project tools, catalogs, slide decks, and meetings, the missing operating layer deserves attention.</p>

            <h2>The next question: are your data products ready for AI agents?</h2>
            <p>The growing use of AI agents makes this distinction more important.</p>
            <p>An agent might successfully locate a dataset using catalog metadata and generate a technically correct query. But an enterprise agent also needs to understand the business purpose of its work, the permitted scope of an action, the ownership and operational state of the products involved, and whether a recommendation requires review.</p>
            <p>Without those relationships, technical correctness does not establish business suitability.</p>
            <p>A connected product portfolio provides the context agents need to reason about products, dependencies, governance requirements, and business demand. It also provides a place to record proposed changes, evidence, and human decisions.</p>
            <p>The next stage of enterprise data management is therefore not about replacing the catalog. It is about making the connection between data assets, business decisions, and governed AI operations explicit and usable.</p>

            <aside className="insight-product-context" aria-label="About Maysano">
              <p className="eyebrow">Maysano context</p>
              <p>Maysano connects this operating model to business objectives, use cases, data products, governance, lifecycle, and delivery context. It complements existing catalogs and data platforms.</p>
              <a className="button" href={siteConfig.bookingUrl}>Book a 30-minute live demo</a>
            </aside>

            <section className="insight-article__references" aria-labelledby="further-reading">
              <h2 id="further-reading">Further reading</h2>
              <p>These sources provide background on the distinct and sometimes overlapping capabilities discussed here. They do not validate Maysano claims.</p>
              <ul>
                <li><a href="https://www.collibra.com/products/data-catalog" target="_blank" rel="noreferrer">Collibra Data Catalog</a></li>
                <li><a href="https://aws.amazon.com/blogs/big-data/the-art-and-science-of-data-product-portfolio-management/" target="_blank" rel="noreferrer">AWS: The art and science of data product portfolio management</a></li>
              </ul>
            </section>
          </div>

          <InsightArticleSideContent quote="A catalog tells you what data exists. Portfolio management helps you decide what to do with it.">
            <p className="eyebrow">Next in the series</p>
            <p><a href={contractsArticleUrl}>Data Contracts and Data Product Specifications: Different Jobs, One Product</a></p>
            <p><a href={governanceArticleUrl}>From Traditional Governance to Minimum Lovable Governance</a></p>
          </InsightArticleSideContent>
        </div>
      </article>
    </InsightShell>
  )
}

export function DataContractsInsightArticle() {
  return (
    <InsightShell>
      <InsightStructuredData
        headline="Data Contracts and Data Product Specifications: Different Jobs, One Product"
        description="Why defining how data is delivered is different from defining the complete product, and why enterprise AI needs both."
        url={contractsArticleUrl}
        image={contractsSocialImage}
      />
      <article className="insight-article">
        <InsightArticleHeader
          kind="contracts"
          kicker="Maysano Insights · Product operating model · Article 02"
          title="Data Contracts and Data Product Specifications: Different Jobs, One Product"
          dek="Why defining how data is delivered is different from defining the complete product, and why enterprise AI needs both."
          readTime="9–10 minute"
          topics={['Open standards', 'Product definition']}
        />

        <div className="container insight-article__layout">
          <div className="insight-article__content">
            <h2>Is a data contract enough to define a data product?</h2>
            <p>A data contract is not a replacement for a data product specification. Both describe important aspects of a data product, but they address different questions.</p>
            <p>A data contract establishes expectations between a data provider and consumers. It describes what an interface delivers, how the data is structured, what quality and service conditions apply, and who is responsible for meeting those commitments.</p>
            <p>A data product specification describes the product as a whole. It establishes what the product provides, why it exists, who owns it, how consumers access it, what commitments apply, and how it is managed throughout its lifecycle.</p>
            <p>The difference matters because a single data product might serve several consumers through different interfaces, each with its own contractual expectations. Those interfaces still belong to one managed product with a shared purpose, ownership, and lifecycle.</p>
            <p>Organizations investing in data contracts are making a useful step toward more reliable data delivery. But if their ambition is to manage data as reusable business products, they need a way to describe and operate the complete product as well.</p>

            <h2>What data contracts solve</h2>
            <p>Consider a data engineering team that delivers customer information to several consuming applications. The team might expose a database table, an API, or a stream of customer updates.</p>
            <p>Without an explicit agreement, consumers rely on assumptions. They expect particular fields to remain available, refresh schedules to stay consistent, and changes to arrive without breaking their applications.</p>
            <p>These assumptions become problems when producers modify schemas, change delivery schedules, or alter data semantics without sufficient coordination.</p>
            <p>A data contract makes these expectations explicit and machine-readable.</p>
            <p>For example, a contract might specify that every customer record has a unique identifier, that required fields must not be empty, that a particular dataset is refreshed each morning, and that breaking schema changes require advance notice.</p>
            <p>The contract gives producers and consumers a common reference for testing, monitoring, and managing changes.</p>
            <p>Modern data contract standards cover more than basic schemas. The Open Data Contract Standard (ODCS), maintained under the Linux Foundation&apos;s LF AI &amp; Data umbrella, supports structural definitions, semantics, ownership, quality rules, service expectations, and other relevant information.</p>
            <p>This is an important distinction. A mature data contract is not merely a schema file. It can contain substantial technical and operational context.</p>
            <p>But the broader business question still exists: what is the data product that these contracts belong to?</p>

            <h2>What a data product specification adds</h2>
            <p>A data product has an identity that should survive individual interface changes.</p>
            <p>Imagine that a customer profile product initially delivers data through a warehouse table. Later, the product team adds an API and a dedicated interface for approved AI applications.</p>
            <p>The delivery mechanisms differ, but the organization has not necessarily created three separate data products. It has created three ways to consume one product.</p>
            <p>A product specification provides a common definition across these interfaces.</p>
            <p>It describes the product&apos;s identity, purpose, ownership, version, lifecycle, intended consumers, access methods, quality expectations, and relevant operating commitments.</p>
            <p>It also gives the product a stable reference for governance and operational management. Teams can understand what is being offered without reconstructing the product definition from several independent interface contracts.</p>
            <p>The Open Data Product Specification (ODPS), developed within the Open Data Product Initiative under LF AI &amp; Data, provides a machine-readable standard for this broader definition.</p>
            <p>ODPS supports product-level descriptions and relationships to data access, quality, service commitments, licensing, and data contracts. This allows an organization to connect the complete product definition with more specific agreements governing individual interfaces.</p>
            <p>It is also important to distinguish a product specification from the broader portfolio operating model. Business objectives, investment decisions, use-case priorities, and relationships between products often need to be managed across the portfolio rather than forced into a single product document.</p>
            <p>The product specification provides the authoritative definition of an individual product. The portfolio connects that product to business demand and decisions.</p>

            <h2>A banking example: one customer product, several contracts</h2>
            <p>Consider a bank that operates a Customer 360 Profile data product.</p>
            <p>Its purpose is to provide approved consumers with a consistent view of customer information. The product supports customer service, retention analysis, and selected risk management activities.</p>
            <p>A data product manager owns the product definition, coordinates consumer expectations, and manages its lifecycle. Technical teams maintain the data pipelines and interfaces. Governance and security teams establish applicable policies and controls.</p>
            <p>Now consider three ways the bank makes the product available.</p>
            <h3>The analytics interface</h3>
            <p>Provides an approved warehouse view for analysts. Its contract specifies fields, data types, refresh expectations, and quality requirements.</p>
            <h3>The application API</h3>
            <p>Serves customer information to internal applications. Its contract includes the response schema, interface version, reliability expectations, and relevant access conditions.</p>
            <h3>The AI consumption interface</h3>
            <p>Provides controlled access for approved AI agents. Its contract defines the permitted interface, exposed information, quality expectations, and relevant operational conditions. Additional authorization and agent controls govern which actions are allowed.</p>
            <p>Each interface has different expectations and might evolve independently.</p>
            <p>The analytics team might request an additional field. The application team might need an API version change. AI consumers might require a narrower view of sensitive customer attributes.</p>
            <p>These changes should not automatically redefine the entire Customer 360 product.</p>
            <p>At the same time, a product-level change can affect several contracts. If the bank changes the agreed meaning of an important customer attribute, all consuming interfaces might need review.</p>
            <p>This is why separating product definition from interface-specific agreements is useful.</p>
            <p>The product specification describes the shared product. The contracts establish specific commitments for its interfaces. Portfolio management connects the product to the bank&apos;s business objectives, use cases, dependencies, and investment decisions.</p>
            <p>Together, these provide a more complete operating model than any one document alone.</p>

            <h2>What happens when contracts exist without product management?</h2>
            <p>An organization might maintain hundreds of technically valid data contracts and still struggle to answer fundamental product questions.</p>
            <p className="insight-article__question">Which contracts belong to the same product? Who decides whether that product should continue receiving investment? Which business use cases depend on it? What happens when one interface is retired while another remains active?</p>
            <p>These questions are not defects in data contracts. They reflect responsibilities that sit outside the scope of individual interface agreements.</p>
            <p>Without a shared product definition, teams risk treating every interface as a separate product. This makes ownership, lifecycle management, reuse, and change coordination more difficult.</p>
            <p>Conversely, defining products without meaningful interface contracts creates a different problem. The organization understands why its products exist but lacks explicit commitments about the data consumers receive.</p>
            <p>A product description that promises reliable customer information is not sufficient unless teams also define what reliability means, how they measure it, and which delivery expectations consumers depend on.</p>
            <p>Product specifications and data contracts should therefore reinforce each other rather than compete.</p>

            <h2>Open standards make the relationship practical</h2>
            <p>One way to avoid fragmented definitions is to use open, machine-readable standards.</p>
            <p>The Open Data Contract Standard (ODCS) describes agreements concerning data delivery and consumption.</p>
            <p>The Open Data Product Specification (ODPS) describes the broader data product and supports references to contractual definitions.</p>
            <p>These standards address related but different requirements. They are not competing alternatives.</p>
            <p>In the ODPS 4.2 development work, the contract model was extended to support named contract profiles rather than limiting a product to one contract definition. This allows individual data access methods to be associated with the relevant contractual profile.</p>
            <p>The practical reason is straightforward. Different consumers of the same product might operate under different access and contractual conditions.</p>
            <p>A bank might offer standard internal consumption, a restricted risk-management interface, and a separate interface for approved AI applications. Those interfaces can remain part of the same product while having distinct contractual requirements.</p>
            <p>The important architectural principle is to preserve the relationship between the product and its consuming interfaces without duplicating the entire product definition for every contract.</p>
            <p>Open standards also reduce dependency on a single vendor&apos;s proprietary representation of products and contracts. They allow different tools to exchange and validate structured information, although integration and interoperability still require implementation work.</p>
            <p>This matters increasingly as AI agents become consumers and participants in data product operations.</p>

            <h2>Why AI agents need the complete context</h2>
            <p>An AI agent attempting to use enterprise data needs to answer more than whether a dataset is technically accessible.</p>
            <p>It needs to identify an appropriate product, understand the intended business purpose, determine which interface is relevant, interpret the contractual expectations, and operate within the permissions granted to it.</p>
            <p>A data contract helps the agent understand the particular interface and its delivery conditions.</p>
            <p>A data product specification helps the agent understand the product being consumed, its identity, purpose, available interfaces, and product-level commitments.</p>
            <p>The broader portfolio and governance context provides additional information about business objectives, related use cases, dependencies, current lifecycle state, and decisions requiring human approval.</p>
            <p>Consider an agent asked to recommend a data source for customer retention analysis.</p>
            <p>It might find several technically similar interfaces. Contract information helps it compare schemas, freshness, and quality conditions. Product and portfolio context helps it determine which option is intended for the use case, whether it is still active, and which organizational relationships matter.</p>
            <p>Even with this context, authorization and policy enforcement must remain in the appropriate systems. Machine-readable descriptions inform decisions. They do not replace enforcement or guarantee that an agent&apos;s recommendation is correct.</p>
            <p>For AI-assisted and agent-enabled operations, this distinction is essential. Agents need structured meaning and current operational context, not a collection of disconnected documents.</p>

            <h2>Where Maysano fits</h2>
            <p>Maysano builds on this separation between product definitions, interface contracts, and business portfolio context.</p>
            <p>It connects business objectives, use cases, data products, governance requirements, ownership, lifecycle, versions, and delivery context through a shared knowledge graph.</p>
            <p>Open standards provide machine-readable definitions that support interoperability. Maysano connects those definitions to the operating relationships and decisions surrounding the products.</p>
            <p>This means a product manager can examine the broader purpose and dependencies of a product while also understanding its access methods and contractual commitments.</p>
            <p>AI agents can work with the same connected product context when preparing candidates, identifying gaps, examining relationships, or supporting governed product workflows. Their recommendations remain subject to applicable controls and accountable review.</p>
            <p>Maysano does not need to become the execution engine for every contract, the platform hosting every dataset, or the system enforcing every enterprise security policy.</p>
            <p>Existing data platforms continue delivering data. Contract management and validation tools continue managing interface agreements. Catalogs continue supporting discovery and metadata management. Security and governance systems retain their enforcement and oversight responsibilities.</p>
            <p>Maysano adds the connected business and product operating layer around these capabilities.</p>

            <h2>Which should your organization implement first?</h2>
            <p>If your primary problem is unreliable data delivery, unexpected schema changes, inconsistent quality, or unclear producer-consumer commitments, start with data contracts.</p>
            <p>They establish explicit expectations and provide a foundation for automated validation and controlled change.</p>
            <p>If your organization struggles to define ownership, understand which interfaces belong to which products, manage product versions, connect products to business demand, or coordinate lifecycle decisions, product specifications and portfolio management deserve attention.</p>
            <p>For organizations building an enterprise data product operating model, the longer-term goal should include both.</p>
            <p>Start with a clear business need. Identify the product that serves it. Define the product using a machine-readable specification. Establish the contracts appropriate to its interfaces. Connect the product to its ownership, governance, lifecycle, and business relationships.</p>
            <p>The result is not more documentation for its own sake.</p>
            <p>It is a manageable product with explicit commitments, a clear business purpose, and enough structured context for people and AI agents to understand how it should be used and operated.</p>

            <aside className="insight-product-context" aria-label="About Maysano">
              <p className="eyebrow">Maysano context</p>
              <p>Maysano connects product definitions and interface contracts to business objectives, use cases, governance, lifecycle, and delivery context. It complements contract tools, catalogs, and data platforms.</p>
              <a className="button" href={siteConfig.bookingUrl}>Book a 30-minute live demo</a>
            </aside>
          </div>

          <InsightArticleSideContent quote="A contract defines a delivery agreement. A product specification defines the complete product around it.">
            <p className="eyebrow">Related insight</p>
            <p><a href={articleUrl}>Data Catalog vs. Data Product Portfolio Management: Why Enterprises Need Both</a></p>
            <p><a href={governanceArticleUrl}>From Traditional Governance to Minimum Lovable Governance</a></p>
          </InsightArticleSideContent>
        </div>
      </article>
    </InsightShell>
  )
}

export function MinimumLovableGovernanceInsightArticle() {
  return (
    <InsightShell>
      <InsightStructuredData
        headline="From Traditional Governance to Minimum Lovable Governance"
        description="Why enterprise data product governance should become part of everyday work instead of a separate process that slows it down."
        url={governanceArticleUrl}
        image={governanceSocialImage}
      />
      <article className="insight-article">
        <InsightArticleHeader
          kind="governance"
          kicker="Maysano Insights · Governance & delivery · Article 03"
          title="From Traditional Governance to Minimum Lovable Governance"
          dek="Why enterprise data product governance should become part of everyday work instead of a separate process that slows it down."
          readTime="11–12 minute"
          topics={['Governance', 'Lifecycle']}
        />

        <div className="container insight-article__layout">
          <div className="insight-article__content">
            <h2>Is traditional data governance holding back data product delivery?</h2>
            <p>Traditional data governance is not wrong. Organizations need policies, clear ownership, access controls, quality requirements, accountability, and evidence that important decisions follow agreed rules.</p>
            <p>The problem is often how governance enters the work. Teams can identify business needs, design data products, agree technical solutions, and begin implementation before governance becomes a serious discussion. A separate review process then introduces requirements that should have influenced the original decisions.</p>
            <p>Product teams spend time preparing documentation for approval. Governance teams review decisions they were not involved in making. Missing information leads to additional meetings, revisions, delays, and sometimes substantial rework. At the other extreme, a review becomes a formality that records a decision without improving it.</p>
            <p>Neither outcome is an effective way to manage data products.</p>
            <p>Minimum Lovable Governance (MLG) takes a different approach: the smallest useful set of governance requirements is part of the product workflow from the beginning. The objective is not less accountability. It is governance that people understand, follow, and benefit from while doing their actual work.</p>

            <h2>What traditional data governance gets right</h2>
            <p>Enterprise data governance exists for good reasons. A bank must protect customer information. A healthcare organization must manage sensitive patient data. A government agency must understand what information it may share and under which conditions.</p>
            <p>These requirements do not disappear because an organization adopts data products, agile delivery, or AI agents. Security defines controls and enforcement mechanisms. Risk and compliance functions interpret obligations and assess exposure. Data governance teams establish common policies, classifications, and quality expectations.</p>
            <p>The weakness appears when these capabilities operate through disconnected procedures. A product team may keep ownership in a spreadsheet, describe access in a document, track delivery in Jira, and submit separate forms for security and governance review. Each system contains part of the picture, but none necessarily shows the relationship between business purpose, product definition, applicable policies, delivery status, and decisions already made.</p>
            <p>Governance then becomes an exercise in collecting evidence rather than using evidence to guide the work.</p>

            <h2>What Minimum Lovable Governance means</h2>
            <p>Minimum Lovable Governance is the smallest useful set of ownership, evidence, controls, policies, and review points that stays connected to a data product throughout its lifecycle.</p>
            <p>Minimum does not mean avoiding necessary controls. It means avoiding unnecessary administration, duplicated information, and approvals that add no meaningful value. Lovable describes an operating experience that teams will use because it helps them make better decisions.</p>
            <p>A product manager should see the requirements that apply before committing to delivery. A data steward should see which products need attention without reconstructing their context. A reviewer should understand what changed, why it matters, and the evidence supporting the proposed decision.</p>
            <p>Requirements should also vary with the situation. A public, low-risk reference dataset does not necessarily need the same reviews as a product containing sensitive customer information. Enterprise policies determine the control level; MLG makes those requirements visible and actionable within the product lifecycle.</p>

            <h2>A banking example: from business idea to governed data product</h2>
            <p>Consider a bank planning a Customer Retention Indicators data product. Its business objective is to reduce customer churn through earlier engagement. The proposed product will combine customer profiles, transaction activity, and customer interactions.</p>
            <h3>Stage 1: The idea</h3>
            <p>With MLG, the initial candidate already has a business objective, intended use case, proposed owner, and basic classification. The team does not need a full governance assessment yet; it needs enough information to identify responsibilities and obvious risks. Because customer information is involved, privacy, access, and permitted-use requirements become visible before a development commitment is made.</p>
            <h3>Stage 2: Product definition</h3>
            <p>The team identifies consumers, data dependencies, quality expectations, access needs, and the parties responsible for product decisions. Ownership becomes explicit, applicable policies are associated with the product, sensitive-data requirements are visible, and known gaps are recorded rather than hidden in meeting notes.</p>
            <h3>Stage 3: Review and approval</h3>
            <p>Appropriate reviewers still determine whether the product meets requirements before it becomes available. MLG does not remove this decision point. It improves the information available for it: purpose, use, ownership, dependencies, access requirements, quality expectations, evidence, and unresolved questions. The outcome becomes part of the product&apos;s decision history.</p>
            <h3>Stage 4: Operation and change</h3>
            <p>Once operational, the bank may introduce a consumer, modify its customer model, revise access conditions, or change quality expectations. Each change can affect interfaces, contracts, use cases, owners, and policies. Connected context triggers the appropriate review without making teams repeat every prior assessment. Changes requiring formal authorization still follow the bank&apos;s established approval and enforcement processes.</p>

            <h2>Governance should follow the lifecycle</h2>
            <p>An early idea needs enough information to establish purpose, responsibility, and obvious constraints. An investment candidate needs stronger evidence of feasibility, demand, dependencies, and expected value. A product entering delivery needs technical responsibilities, contractual expectations, relevant controls, and review requirements.</p>
            <p>An operational product needs continuing oversight of quality, access, commitments, changes, and lifecycle decisions. A retiring product needs to consider dependencies, consumers, contractual obligations, and retention requirements. Applying every requirement at the idea stage creates unnecessary work; waiting until production creates unnecessary risk.</p>
            <p>The useful approach is to introduce the right requirements at the right point, based on enterprise policy and the product&apos;s circumstances.</p>

            <h2>Why connected context matters more than another approval form</h2>
            <p>Many governance problems are information problems. Organizations have policies, ownership registers, project records, metadata catalogs, risk assessments, and approval workflows, but the relationships between them can be difficult to maintain.</p>
            <p>A small technical change to a product supporting three business use cases may affect a quality threshold, sensitive information subject to restrictions, or an AI agent in an automated workflow. A reviewer cannot assess that change responsibly from a technical specification alone. The decision requires business context, product relationships, relevant policies, operational state, and evidence of earlier commitments.</p>
            <p>A connected knowledge graph makes business objectives, use cases, data products, owners, policies, dependencies, lifecycle states, and decisions related objects rather than independent documents. It does not establish compliance or guarantee every dependency is known. Its value is making the available relationships explicit, traceable, and usable in governance workflows.</p>

            <h2>What changes when AI agents participate in governance?</h2>
            <p>Agents can interpret requirements, propose product definitions, analyse dependencies, identify missing information, and prepare work for review. An agent reviewing a proposed customer-data product might identify that it has no assigned owner, that its intended use involves sensitive information, or that a similar product already exists. It can present those findings with supporting context and recommend further review.</p>
            <p>Identifying a governance gap is different from deciding whether a product is compliant. An AI agent should not independently invent policies, establish business ownership, grant access, or approve a product for production merely because its generated assessment appears convincing.</p>
            <p>A governed agent operates within defined permissions and workflows. Its inputs, source evidence, actions, and recommendations should be traceable. Applicable controls determine which operations need human review or approval. Maysano applies explainable and auditable agent workflows, externally configured recipes, and operational controls such as a kill switch to support this approach.</p>
            <p>These mechanisms make agent activity easier to inspect and control. They do not make AI output infallible or remove the need for accountable human decisions. Machine-readable context, current lifecycle states, explicit permissions, and recorded decision evidence provide a stronger foundation than policies buried in PDFs or approvals hidden in email.</p>

            <h2>Where Maysano fits</h2>
            <p>Maysano connects business objectives, use cases, data products, ownership, lifecycle, governance requirements, dependencies, and delivery context through a shared knowledge graph. It brings relevant governance information into the workflows used to define, evaluate, deliver, and manage data products.</p>
            <p>Product teams can identify missing ownership, required reviews, unresolved governance questions, and affected relationships as work progresses. AI agents can help prepare product definitions, identify gaps, examine dependencies, and produce recommendations for human review.</p>
            <p>Maysano builds on open, machine-readable standards managed under the Linux Foundation&apos;s LF AI &amp; Data umbrella. These standards support consistent product definitions, contracts, and operational information across tools and organizational boundaries.</p>
            <h3>What Maysano does not replace</h3>
            <p>Maysano does not replace enterprise risk management, cybersecurity, legal, privacy, or compliance functions. It is not the authoritative enforcement point for every access policy or security control. Existing governance platforms, identity systems, data catalogs, and security infrastructure continue performing their designated responsibilities.</p>
            <p>Maysano provides the business and product context needed to connect those responsibilities with product decisions and delivery workflows. Where other systems hold authoritative policies, classifications, ownership records, or approvals, those responsibilities should remain there.</p>

            <h2>How much governance is enough?</h2>
            <p>There is no universal minimum. A public reference product, an internal financial-reporting product, and a customer-facing AI data product operate under different conditions. The appropriate requirements depend on purpose, sensitivity, consumers, dependencies, regulatory obligations, and potential impact.</p>
            <p>The practical starting point is to identify the decisions that require accountability and the evidence required to make those decisions responsibly: who owns the product, which business purpose it serves, which policies apply, what quality commitments exist, who may consume it, what needs approval before a lifecycle change, and how decisions and changes are recorded.</p>
            <p>Apply controls at the appropriate lifecycle stages, automate repeatable checks where suitable, and preserve human accountability for decisions that require it. When governance information is already in the product workflow, teams spend less effort collecting it for a separate review and gain more opportunity to address problems early.</p>

            <h2>From governance documents to governed operations</h2>
            <p>Traditional governance frameworks will continue to matter. Organizations still need common policies, clear authority, oversight, and formal controls. What needs to change is their relationship with everyday product work.</p>
            <p>Minimum Lovable Governance embeds necessary requirements into the lifecycle of the products being managed. It makes ownership visible, connects policies to relevant work, records decision evidence, and brings review points into the process where decisions happen.</p>
            <p>As AI agents participate in product definition, governance analysis, and operations, both machines and human teams need the same current, explicit, and traceable context. The next step is not removing governance from enterprise data operations. It is making governance integral to how those operations work.</p>

            <aside className="insight-product-context" aria-label="About Maysano">
              <p className="eyebrow">Maysano context</p>
              <p>Maysano keeps relevant ownership, policies, controls, review requirements, and decision evidence connected to the product through its lifecycle. It complements governance, security, compliance, catalog, and data platforms rather than replacing them.</p>
              <a className="button" href={siteConfig.bookingUrl}>Book a 30-minute live demo</a>
            </aside>

            <section className="insight-article__references" aria-labelledby="governance-reading-title">
              <h2 id="governance-reading-title">Further reading</h2>
              <p><a href="https://opendataproducts.org/framework/" target="_blank" rel="noreferrer">Open Data Product Operating Framework</a></p>
              <p><a href="https://opendataproducts.org/" target="_blank" rel="noreferrer">Open Data Product Specification</a></p>
            </section>
          </div>

          <InsightArticleSideContent quote="Governance creates less friction when it is part of the product, not a gate after the work.">
            <p className="eyebrow">Related insight</p>
            <p><a href={articleUrl}>Data Catalog vs. Data Product Portfolio Management: Why Enterprises Need Both</a></p>
            <p><a href={deliveryArticleUrl}>Manual vs. AI-Assisted, Governed Data Product Delivery</a></p>
          </InsightArticleSideContent>
        </div>
      </article>
    </InsightShell>
  )
}

export function KnowledgeGraphInsightArticle() {
  return (
    <InsightShell>
      <InsightStructuredData
        headline="Knowledge Graph vs. Ontology: What Enterprise Data Products Need"
        description="Why organizations need both connected business knowledge and shared meaning, and why building a large enterprise ontology is not always the right starting point."
        url={graphArticleUrl}
        image={graphSocialImage}
      />
      <article className="insight-article">
        <InsightArticleHeader
          kind="graph"
          kicker="Maysano Insights · Architecture & AI · Article 04"
          title="Knowledge Graph vs. Ontology: What Enterprise Data Products Need"
          dek="Why organizations need both connected business knowledge and shared meaning, and why building a large enterprise ontology is not always the right starting point."
          readTime="11–12 minute"
          topics={['Knowledge graph', 'Semantics']}
        />

        <div className="container insight-article__layout">
          <div className="insight-article__content">
            <h2>Does an enterprise need a knowledge graph or an ontology?</h2>
            <p>A knowledge graph and an ontology are not competing technologies. They address different parts of the same problem.</p>
            <p>A knowledge graph connects things and describes their relationships. An ontology defines the concepts, vocabulary, and rules that help people and systems interpret those relationships consistently.</p>
            <p>A graph might connect a business objective to use cases, data products, owners, policies, and operational dependencies. An ontology helps establish what those connections mean: the difference between an objective and a use case, what qualifies as a data product, and how business ownership differs from technical responsibility.</p>
            <p>The knowledge graph tells us what is connected. The ontology helps explain what those connections mean.</p>
            <p>Enterprise data product operating models benefit from both. That does not mean an organization must spend years designing a comprehensive enterprise ontology before connecting its first business objective to a data product. A practical approach begins with the concepts and relationships needed for real decisions, then adds formality as the operating model grows.</p>

            <h2>What a knowledge graph does</h2>
            <p>Most organizations already hold substantial information about their operations. Strategic objectives live in planning documents; use cases are recorded in spreadsheets, presentations, and delivery tools; data products appear in catalogs or technical specifications; ownership sits in organizational systems; governance policies live in separate repositories.</p>
            <p>The problem is usually not that information is missing. It is that the relationships between these pieces are difficult to establish and maintain. A knowledge graph represents relevant objects and their relationships in a connected structure.</p>
            <p>Consider a bank with an objective to improve customer retention. The objective connects to a customer-churn use case, which depends on Customer 360 Profile and Customer Engagement Signals products. Both products have owners, interfaces, governance requirements, and lifecycle states. Customer Engagement Signals may itself depend on a product supplying digital interaction data.</p>
            <p>Now consider retiring the digital-interaction product. An asset inventory may show technical dependencies. A connected business and product graph can also show the affected products, the use cases they support, and the business objective at risk. It makes the impact of a proposed decision easier to examine.</p>

            <h2>What an ontology adds</h2>
            <p>A knowledge graph contains relationships, but those relationships need meaning. One department might say a data product is “owned by” a business unit while another uses the same term for the engineering team operating its infrastructure. The wording is identical; the responsibilities are not.</p>
            <p>An ontology defines concepts and the relationships between them. It can distinguish a business owner from a technical owner, a business objective from a use case, a data product from its individual assets, and a governance policy from a technical enforcement control. It can also define constraints and classifications that guide interpretation.</p>
            <p>Formal ontology languages such as OWL support extensive semantic modelling and reasoning. RDF provides a graph-based data model, while SHACL supports validation of RDF graphs against defined constraints. These technologies matter when information must be exchanged and interpreted consistently across organizational and system boundaries.</p>
            <p>Not every operational graph needs an elaborate ontology or a complete semantic-web implementation. A controlled vocabulary, clear object types, documented relationship meanings, and practical validation rules often provide enough structure for initial use cases. The important question is whether the organization has enough shared meaning to make relationships trustworthy and useful.</p>

            <h2>A banking example: connecting strategy to operational data products</h2>
            <p>Consider a bank reducing customer churn through three products: Customer 360 Profile, Customer Engagement Signals, and Customer Retention Indicators. Each has a definition, owner, lifecycle state, and contractual and governance commitments. The bank also has a retention objective and use cases for identifying at-risk customers, prioritising engagement, and evaluating outcomes.</p>
            <p>A graph connects these objects. Customer Retention Indicators supports the churn-analysis use case; that use case contributes to the retention objective; the indicators product depends on the profile and engagement products. This lets teams ask which products contribute to an objective, which use cases depend on an at-risk product, whether work overlaps, and whose participation a lifecycle change requires.</p>
            <p>An ontology, or a sufficiently structured semantic model, keeps the relationships consistent. A product dependency is not the same as a business contribution. A product owner is not the same as a governance approver. Without those distinctions, even an impressive graph visualization can produce misleading conclusions.</p>
            <p>The business value comes from combining connected information with clear meaning.</p>

            <h2>Why a large enterprise ontology is not always the best starting point</h2>
            <p>Some semantic initiatives attempt to define every business concept, relationship, attribute, hierarchy, and rule before the model is used in an operational workflow. This has valid uses, particularly in domains with strong interoperability requirements, complex regulation, or established domain ontologies.</p>
            <p>For an organization improving data product portfolio management, however, a complete enterprise ontology can create substantial work before visible operational value. Definitions become subjects of prolonged negotiation while immediate business problems remain unresolved.</p>
            <p>A more practical foundation is a limited set of purposeful objects: business objectives, use cases, data products, owners, policies, dependencies, lifecycle states, and decisions. Their relationships answer questions that enterprise leaders, product managers, governance teams, and delivery teams already ask.</p>
            <p>The semantic model should grow in response to real requirements. If ownership is interpreted differently across teams, introduce explicit ownership roles. If lifecycle transitions require evidence, define states and requirements. This does not reject ontology engineering; it applies it where it creates immediate value and adds formality when justified.</p>

            <h2>Minimum Lovable Semantics: enough meaning to operate responsibly</h2>
            <p>Minimum Lovable Semantics follows the same reasoning as Minimum Lovable Governance: establish enough shared meaning for reliable operations without requiring a perfect representation of the entire enterprise before work can begin.</p>
            <p>Define the concepts people and AI agents need, establish the relationships that matter for decisions, and make those definitions explicit and machine-readable where appropriate. For a data product portfolio, clarify the meaning of an objective, use case, product, owner, dependency, governance requirement, and lifecycle state.</p>
            <p>Ambiguous relationships should be avoided. Saying that a product is “related to” an objective is less useful than saying it supports a named use case that contributes to that objective. The more precise relationship gives people and systems a stronger basis for assessing dependencies and understanding why a product matters.</p>
            <p>Minimum Lovable Semantics does not ignore semantic quality. It focuses semantic discipline on what matters now, keeps the model understandable, and extends it as operational requirements grow. Formal ontologies remain valuable when stronger consistency, reasoning, interoperability, or validation is needed.</p>

            <h2>Why AI agents make semantic context more important</h2>
            <p>A human product manager may know a product supports customer retention because the relationship came up in meetings. An AI agent does not automatically possess that context. A catalog, documents, and search tools may not explain how objectives, use cases, products, responsibilities, policies, and lifecycle decisions relate.</p>
            <p>Without explicit context, an agent can identify a technically relevant dataset while overlooking a product&apos;s intended purpose, operational limitations, or governance restrictions. A graph provides connected business and product information; a semantic model helps the agent interpret its meaning.</p>
            <p>For a proposed change to Customer Engagement Signals, an agent can prepare an impact assessment, identify affected stakeholders, and recommend appropriate reviews. It needs the graph to find dependencies and use cases, and the semantic model to distinguish technical dependencies from business contributions and governance responsibilities.</p>
            <p>Connected context does not guarantee correct reasoning. Information may be stale or incomplete, and an agent can interpret evidence incorrectly. Enterprise agents need current operational state, source provenance, defined permissions, auditable activity, and human review for consequential decisions. A graph improves available context; it does not replace governance or independent validation.</p>

            <h2>A graph must represent living operational context</h2>
            <p>A static relationship diagram can explain an architecture. An operational knowledge graph must reflect change: objectives change, use cases are approved or discontinued, products move through lifecycle stages, owners change, dependencies evolve, and governance decisions introduce requirements.</p>
            <p>Without current state and recorded decisions, the graph becomes another outdated documentation repository. This matters even more when agents rely on it. An agent assessing a candidate needs to know whether a similar product is operational or retired, who owns it, and whether the portfolio has unresolved governance issues.</p>
            <p>A useful model combines stable definitions with changing operational information. Semantics explain what objects and relationships mean; lifecycle and governance information explains current condition; provenance and decision evidence explain where information came from and why a conclusion was reached.</p>

            <h2>Where Maysano fits</h2>
            <p>Maysano uses a knowledge graph to connect business objectives, use cases, data products, ownership, governance, dependencies, lifecycle, versions, and delivery context. It is the connected business and product operating layer between enterprise strategy and existing data-management environments.</p>
            <p>Maysano does not replace a data catalog, warehouse, lakehouse, or enterprise metadata platform. Those systems continue managing the assets, technical metadata, and data services for which they are responsible. Maysano focuses on the relationships that explain why products exist, which business needs they support, who is accountable, how they are governed, and what is happening throughout their lifecycle.</p>
            <p>Agents work with structured portfolio information to identify candidates, examine dependencies, prepare specifications, identify missing relationships, and support governed delivery. Explicit object definitions and relationship semantics make that context interpretable; governance controls, activity records, and review processes make agent-supported work accountable.</p>
            <p>Maysano also builds on open standards managed under the Linux Foundation&apos;s LF AI &amp; Data umbrella, including the Open Data Product Specification and related standards. These machine-readable definitions structure individual data products and their commitments; Maysano connects them to portfolio context, business objectives, use cases, governance, and lifecycle.</p>
            <h3>What Maysano does not replace</h3>
            <p>Maysano does not replace an enterprise ontology program where broader semantic integration or reasoning is needed. It does not replace specialised semantic-modelling tools, knowledge-engineering platforms, or authoritative vocabularies maintained elsewhere. Existing systems should remain authoritative for their information: catalogs for metadata, data platforms for storage and processing, security systems for access enforcement, and business applications for transactional information.</p>
            <p>When an enterprise already maintains ontologies or semantic definitions, they should inform how relevant concepts and relationships are interpreted in Maysano. The purpose is to connect information required for product and portfolio decisions, not reproduce the full enterprise knowledge environment.</p>

            <h2>How should your organization get started?</h2>
            <p>Start with decisions you want to improve. For data product portfolio management, identify a small number of objectives and the use cases that support them. Connect those use cases to the data products they need, then add ownership, dependencies, lifecycle states, and relevant governance requirements.</p>
            <p>Define each object type and relationship clearly enough that different teams interpret it consistently. Test the model against practical questions: which products support an objective, which use cases depend on a product approaching retirement, where ownership is missing, where products overlap, and which reviews a change needs.</p>
            <p>If the model helps people answer those questions and take appropriate action, it is already creating operational value. Add formal semantics, validation rules, and ontological structure as more systems and use cases make them useful.</p>

            <h2>From connected information to connected decisions</h2>
            <p>The distinction matters, but enterprises should not treat a knowledge graph and ontology as a technology competition. A graph connects information. An ontology establishes shared meaning. Governance and lifecycle management keep that information useful in operational decisions.</p>
            <p>For data product management, the goal is to connect business demand with the products, ownership, controls, and delivery activities needed to respond. AI agents make these connections more important: they need machine-readable business context, interpretable relationships, current state, and traceable evidence.</p>
            <p>Start with the relationships that matter, define what they mean, and keep them connected to the decisions being made. More formal ontologies can strengthen that foundation when requirements demand precision and interoperability.</p>

            <aside className="insight-product-context" aria-label="About Maysano">
              <p className="eyebrow">Maysano context</p>
              <p>Maysano connects business objectives, use cases, data products, governance, lifecycle, and delivery context through a shared knowledge graph. It complements existing metadata catalogs, data platforms, and semantic technologies.</p>
              <a className="button" href={siteConfig.bookingUrl}>Book a 30-minute live demo</a>
            </aside>

            <section className="insight-article__references" aria-labelledby="graph-reading-title">
              <h2 id="graph-reading-title">Further reading</h2>
              <p><a href="https://www.w3.org/TR/rdf11-concepts/" target="_blank" rel="noreferrer">W3C RDF 1.1 Concepts and Abstract Syntax</a></p>
              <p><a href="https://www.w3.org/TR/owl2-overview/" target="_blank" rel="noreferrer">W3C OWL 2 Web Ontology Language</a></p>
              <p><a href="https://www.w3.org/TR/shacl/" target="_blank" rel="noreferrer">W3C SHACL, Shapes Constraint Language</a></p>
              <p><a href="https://opendataproducts.org/" target="_blank" rel="noreferrer">Open Data Product Specification</a></p>
            </section>
          </div>

          <InsightArticleSideContent quote="A graph connects information. Shared semantics make those connections usable.">
            <p className="eyebrow">Related insight</p>
            <p><a href={articleUrl}>Data Catalog vs. Data Product Portfolio Management: Why Enterprises Need Both</a></p>
            <p><a href={agentsArticleUrl}>Traditional AI Agents vs. Governed AI Agents for Enterprise Data Work</a></p>
          </InsightArticleSideContent>
        </div>
      </article>
    </InsightShell>
  )
}

export function GovernedAgentsInsightArticle() {
  return (
    <InsightShell>
      <InsightStructuredData
        headline="Traditional AI Agents vs. Governed AI Agents for Enterprise Data Work"
        description="An AI agent that produces an answer is different from an AI agent that operates within business responsibilities, governance requirements, and accountable enterprise workflows."
        url={agentsArticleUrl}
        image={agentsSocialImage}
      />
      <article className="insight-article">
        <InsightArticleHeader
          kind="agents"
          kicker="Maysano Insights · Architecture & AI · Article 05"
          title="Traditional AI Agents vs. Governed AI Agents for Enterprise Data Work"
          dek="An AI agent that produces an answer is different from an AI agent that operates within business responsibilities, governance requirements, and accountable enterprise workflows."
          readTime="12–13 minute"
          topics={['AI agents', 'Accountability']}
        />

        <div className="container insight-article__layout">
          <div className="insight-article__content">
            <h2>What makes an AI agent ready for enterprise operations?</h2>
            <p>An agent that generates a convincing answer is not necessarily ready to participate in enterprise operations. Traditional agents are often designed around a language model, instructions, and tools: they receive a task, retrieve information, reason about actions, and produce results. Some also execute actions in connected systems.</p>
            <p>That approach works well for summarising a document, answering a dataset question, generating SQL, or preparing a technical specification. Enterprise data work, however, has responsibilities beyond technically plausible output.</p>
            <p>An agent needs to understand why a product exists, which objectives it supports, who owns it, which governance requirements apply, whether it is operational, and which actions require human approval. It also needs current information and a way to explain recommendations with identifiable evidence.</p>
            <p>Governed AI agents address these requirements through connected business context, explicit controls, traceable operations, and human accountability. The distinction is not between intelligent and unintelligent agents. It is between agents that primarily execute tasks and agents designed to participate in controlled enterprise workflows.</p>

            <h2>What traditional AI agents do well</h2>
            <p>Traditional agents already create substantial value in knowledge work and software development. They can search documentation, inspect datasets, generate code, call APIs, analyse requirements, and prepare structured outputs. More advanced implementations coordinate specialised agents to divide complex work into manageable steps.</p>
            <p>A data engineer might ask an agent to examine a source schema and propose a transformation. A product manager might use one to turn meeting notes into an initial product description. These tasks benefit from language understanding, tool access, and the ability to combine multiple sources.</p>
            <p>Traditional agents are not inherently ungoverned. They can include authentication, authorisation, logging, validation, and approval gates. The difficulty appears when technical capability is not paired with the organizational context needed to judge whether a proposed action makes sense.</p>
            <p>An agent may find a technically suitable dataset without knowing it is retiring, propose a product that duplicates an existing one, or prepare an access request without recognising that the intended use needs additional review. More prompt instructions do not automatically solve this problem.</p>

            <h2>The missing element is business context</h2>
            <p>An agent may have a catalog, technical documentation, schemas, APIs, and business documents. These explain what information exists and how systems operate. But much of the context behind enterprise decisions lives in strategy documents, workshops, portfolio records, approval workflows, and several separate systems.</p>
            <p>A human product manager may know that a customer product supports retention, another department owns its upstream source, and an earlier review restricted certain uses. An agent does not automatically know these things. Even when it retrieves relevant documents, it must determine what is current, which relationships are authoritative, and which rules apply.</p>
            <p>Connecting business objectives, use cases, data products, ownership, governance, lifecycle states, and decision evidence gives an agent enough context to interpret information within the operating model rather than treating each task as isolated.</p>

            <h2>A banking example: identifying a missing data product</h2>
            <p>A bank wants to improve customer retention. It has a use case for detecting early churn signals, a Customer 360 Profile, and datasets for transaction and digital-engagement information. A product manager asks an agent whether a new product is needed.</p>
            <p>A traditional agent can search metadata, review the use case, and propose Customer Retention Indicators with a name, description, sources, quality requirements, and delivery recommendations. This saves time, but it does not answer whether a similar product exists, who owns the candidate, whether sources are retiring, whether use is permitted, which reviewers must participate, or whether the business approved investment.</p>
            <p>In a governed operating model, the agent starts from the registered objective and use case, examines the portfolio, dependencies, ownership, and lifecycle states, then identifies that the portfolio lacks agreed retention indicators. It prepares a candidate product linked to existing products and identifies missing ownership, potential sensitive-data requirements, and unresolved questions.</p>
            <p>The result is not an automatically approved product. It is a structured proposal with rationale, source context, uncertainties, and decisions requiring human attention. Product, governance, security, and authorised business stakeholders remain responsible for deciding whether it proceeds.</p>

            <h2>What makes an AI agent governed?</h2>
            <h3>Connected business and product context</h3>
            <p>For data product work, agents need objectives, use cases, products, owners, dependencies, contracts, policies, and lifecycle states. Those relationships help distinguish a product that is technically available from one that is appropriate for a particular business purpose.</p>
            <h3>Explicit permissions and boundaries</h3>
            <p>Preparing a product candidate must not automatically grant permission to publish it, change access rules, or modify production systems. Authorisation belongs in the relevant platforms and tools, not only in a prompt. An agent&apos;s ability to propose must remain separate from authority to execute.</p>
            <h3>Provenance and explainability</h3>
            <p>When an agent recommends a product, identifies a gap, or proposes a change, users need source context, relevant relationships, inputs, outputs, and an activity record. Explainability does not mean revealing every model calculation; it means operationally useful evidence that lets people inspect and challenge the result.</p>
            <h3>Human decision points</h3>
            <p>Routine retrieval, drafting, and low-risk analysis can proceed automatically within approved boundaries. Business priorities, material governance changes, sensitive data, access rights, and lifecycle transitions often need accountable review. The workflow should distinguish agent actions from actions requiring authorisation.</p>
            <h3>Operational controls and auditing</h3>
            <p>Enterprise agents also need logging, error handling, monitoring, limits on permitted actions, and ways to stop or disable activity. A kill switch is useful, but it is not a complete safety model. Dependable governance comes from permissions, workflow design, validation, review, monitoring, and enforcement together.</p>

            <h2>Why a knowledge graph changes the operating model</h2>
            <p>A knowledge graph connects objectives, use cases, products, owners, policies, dependencies, and operational states rather than treating each document or dataset as isolated. An agent can examine those relationships when evaluating a request.</p>
            <p>A product may depend on two others, support several use cases, and have a pending lifecycle change. That context is material when an agent prepares an impact assessment or recommends a modification. It also lets human reviewers inspect a recommendation against supported objectives, dependencies, and governance obligations.</p>
            <p>The graph must be maintained. Outdated ownership, incomplete dependencies, or obsolete lifecycle information can mislead agents and people alike. Governed operations depend on structured relationships and reliable ways to keep operational context current.</p>

            <h2>Governance must exist outside the prompt</h2>
            <p>A prompt may tell an agent not to expose sensitive information or modify products without approval. Such instructions are useful, but they are not dependable enforcement. An agent can misunderstand a request, receive misleading retrieved information, or attempt a tool operation outside the intended scope.</p>
            <p>Controls should be implemented at system and workflow boundaries. An agent proposing access should not have authority to grant it unless the organization explicitly permits that action under defined conditions. A candidate must not become operational merely because an agent marks work complete; lifecycle transitions need the organization&apos;s approval rules.</p>
            <p>Similarly, agents should receive information according to permissions enforced by relevant systems, not according to their own interpretation of what seems necessary. Separating recommendation, authorisation, and execution makes workflows more accountable and easier to adapt as policy changes.</p>

            <h2>Standardised agent recipes and repeatable operations</h2>
            <p>Data product teams repeatedly interpret objectives, examine use cases, identify candidates, prepare specifications, review dependencies, assess governance gaps, and coordinate delivery. These activities benefit from repeatable workflows rather than individually improvised prompts.</p>
            <p>A standardised recipe can define a workflow&apos;s purpose, required inputs, relevant tools, steps, expected outputs, and controls. A candidate-assessment recipe might begin with an approved objective and use case, retrieve portfolio information, search existing products, analyse requirements, prepare a definition, check for missing ownership and incomplete relationships, then present results for human review.</p>
            <p>The recipe provides repeatable structure. The connected portfolio provides business context. Governance controls determine permitted actions. This reduces dependence on individual users knowing how to craft elaborate prompts for every task.</p>

            <h2>What Maysano does differently</h2>
            <p>Maysano treats agents as participants in a broader data product operating model. It connects objectives, use cases, products, governance, lifecycle, ownership, dependencies, and delivery context in a shared knowledge graph. Agents operate on this portfolio rather than treating each request as an isolated interaction with documents and technical tools.</p>
            <p>This supports AI-assisted work such as identifying candidates, preparing structured definitions, examining relationships, identifying gaps, and supporting governed delivery. Maysano applies standardised externally configured agent recipes, explainable activity records, auditing, and operational controls, including a kill switch.</p>
            <p>Maysano builds on open standards managed under the Linux Foundation&apos;s LF AI &amp; Data umbrella. Machine-readable specifications, contractual definitions, and governance information support interoperable, structured operations. The purpose is not an agent that makes every decision independently; it is agents that accelerate analysis and preparation while ownership, lifecycle management, governance, and accountability remain explicit.</p>
            <h3>What Maysano does not replace</h3>
            <p>Maysano does not replace identity and access management, security controls, data platforms, or compliance functions. Those systems retain responsibility for enforcement and protecting resources. It does not guarantee that a generated recommendation is correct: an agent can miss a dependency, misinterpret a document, or recommend a product without sufficient business value.</p>
            <p>Human review, validation, and appropriate enforcement remain necessary. Maysano also does not require organizations to abandon existing models or data-management investments. The business objectives, product relationships, responsibilities, and decision history should not depend on a single language model.</p>

            <h2>When does an organization need governed agents?</h2>
            <p>For isolated drafting, summarisation, or exploratory analysis, a conventional agent may be sufficient: the user inspects output and takes responsibility for the next action. Requirements change when agents use shared enterprise information, prepare work affecting multiple teams, or participate in governed product processes.</p>
            <p>Organizations should pay closer attention when agents use sensitive information, coordinate across systems, propose production changes, or influence investment and regulatory decisions. Start by defining what the agent should do, which information it needs, which systems provide it, and which actions require authorisation. Then establish the controls and evidence required for those activities.</p>

            <h2>From AI assistance to accountable AI operations</h2>
            <p>Enterprise agents depend on more than improving language models. Organizations still need to determine what agents work toward, which information they should trust, what actions they may take, and who remains responsible for results.</p>
            <p>A governed agent combines technical capability with connected business context, explicit controls, current operational information, traceable evidence, and accountable decision-making. For data products, this creates a path from isolated assistance toward repeatable, supervised operations.</p>
            <p>The shift is not from humans to autonomous agents. It is from disconnected tasks to connected, governed workflows in which people and agents share an understanding of objectives, products, responsibilities, and constraints.</p>

            <aside className="insight-product-context" aria-label="About Maysano">
              <p className="eyebrow">Maysano context</p>
              <p>Governed AI agents use connected business and product context through standardised recipes, explainable operations, auditing, operational controls, and accountable review. Maysano complements existing data platforms, AI infrastructure, identity systems, and governance functions.</p>
              <a className="button" href={siteConfig.bookingUrl}>Book a 30-minute live demo</a>
            </aside>

            <section className="insight-article__references" aria-labelledby="agents-reading-title">
              <h2 id="agents-reading-title">Further reading</h2>
              <p><a href="https://www.nist.gov/itl/ai-risk-management-framework" target="_blank" rel="noreferrer">NIST AI Risk Management Framework</a></p>
              <p><a href="https://genai.owasp.org/" target="_blank" rel="noreferrer">OWASP Top 10 for Large Language Model Applications</a></p>
              <p><a href="https://opendataproducts.org/" target="_blank" rel="noreferrer">Open Data Product Specification</a></p>
            </section>
          </div>

          <InsightArticleSideContent quote="An agent may propose. Accountable people and controls determine what happens next.">
            <p className="eyebrow">Related insight</p>
            <p><a href={graphArticleUrl}>Knowledge Graph vs. Ontology: What Enterprise Data Products Need</a></p>
            <p><a href={deliveryArticleUrl}>Manual vs. AI-Assisted, Governed Data Product Delivery</a></p>
          </InsightArticleSideContent>
        </div>
      </article>
    </InsightShell>
  )
}

export function GovernedDeliveryInsightArticle() {
  return (
    <InsightShell>
      <InsightStructuredData
        headline="Manual vs. AI-Assisted, Governed Data Product Delivery"
        description="Why enterprise data product delivery needs a better way to turn business discussions, requirements, and existing information into structured, governed product work."
        url={deliveryArticleUrl}
        image={deliverySocialImage}
      />
      <article className="insight-article">
        <InsightArticleHeader
          kind="delivery"
          kicker="Maysano Insights · Governance & operating model · Article 06"
          title="Manual vs. AI-Assisted, Governed Data Product Delivery"
          dek="Why enterprise data product delivery needs a better way to turn business discussions, requirements, and existing information into structured, governed product work."
          readTime="12–13 minute"
          topics={['Delivery', 'Portfolio']}
        />

        <div className="container insight-article__layout">
          <div className="insight-article__content">
            <h2>Why does defining a data product take so much time?</h2>
            <p>The difficult part of data product delivery often begins before anyone writes code or builds a pipeline. A business team identifies an opportunity, discusses objectives, outcomes, available information, and possible solutions, then produces notes, presentations, spreadsheets, and actions.</p>
            <p>Someone must turn that material into work a product team can evaluate and deliver. What is the business objective? Which use cases support it? Does the organization already have relevant products? Which candidates are needed? Who owns them? What is missing, and which governance requirements apply?</p>
            <p>These questions take time because information is scattered, relationships are unclear, and stakeholders use different terminology. Traditional delivery relies on people collecting documents, interpreting discussions, preparing specifications, and coordinating reviews.</p>
            <p>AI-assisted delivery changes how the preparation is done. Rather than starting with an empty document, agents help transform existing material into structured candidates, identify relationships and gaps, and prepare work for human review. The objective is not to let AI decide business needs; it is to reduce manual effort needed to prepare reliable information for those decisions.</p>

            <h2>How traditional data product delivery works</h2>
            <p>Consider a business unit trying to improve customer retention. A workshop brings together managers, analysts, engineers, and product owners to discuss the problem, existing customer information, possible indicators, and expected outcomes. Afterwards, someone must turn the discussion into a usable definition.</p>
            <p>They clarify the objective, separate use cases from technical solutions, examine existing data assets and products, document missing capability, then consider ownership, dependencies, quality, access, and governance. Information often ends up across presentations, spreadsheets, product templates, Jira tickets, and technical documentation.</p>
            <p>Experienced product managers and architects know how to translate needs into delivery requirements, but much of their time goes to collecting, restructuring, and reconciling information instead of evaluating the decisions that matter. When a use case, ownership record, or governance requirement changes, they must update several places and keep stakeholders aligned.</p>
            <p>The bottleneck is not necessarily technical expertise. It is manual coordination between business demand and product delivery.</p>

            <h2>What AI-assisted delivery changes</h2>
            <p>A meeting transcript, workshop summary, requirements document, or set of use-case descriptions becomes input to a structured workflow. Agents interpret the material and identify possible objectives, use cases, candidate products, dependencies, and unresolved questions.</p>
            <p>The output should not be a longer summary. It should be a structured representation of work the organization can evaluate. A retention workshop might yield one objective, three use cases, and several candidates. A workflow can separate those concepts, compare candidates with portfolio information, and highlight missing details.</p>
            <p>The product manager reviews the result, corrects interpretations, confirms ownership, and decides which candidates deserve attention. AI accelerates decision-ready preparation; it does not prove that source material is correct, that a candidate has commercial value, or that development has been approved.</p>

            <h2>A banking example: from workshop notes to product candidates</h2>
            <p>A bank runs a customer-retention workshop with customer operations, analytics, data management, and technology. The group identifies a strategic objective: earlier identification of disengagement. It proposes use cases for finding declining engagement, targeting retention actions, and evaluating their outcomes.</p>
            <p>The bank has customer profiles, transactions, and digital-engagement data, but the participants do not have a complete portfolio picture. At the end of the meeting, they have notes, a transcript, and possible next steps.</p>
            <h3>The manual approach</h3>
            <p>A product manager identifies the objective, separates use cases, consults the catalog, speaks with owners, and reviews documentation. They find that Customer 360 Profile exists but does not provide all required information. Customer Engagement Signals may exist elsewhere, but ownership and lifecycle status need clarification. They prepare Customer Retention Indicators as a candidate, document dependencies, identify governance requirements, create work items, and schedule reviews.</p>
            <p>Eventually the team has enough structure to decide whether to move into delivery. Depending on complexity and information quality, organizing and validating what the organization already knows can take multiple working days across several stakeholders.</p>
            <h3>The AI-assisted approach</h3>
            <p>In a connected operating environment, the meeting material enters an AI-assisted workflow. Agents identify the retention objective and use cases, prepare candidate definitions, and examine the portfolio for related capabilities. Because the portfolio connects objectives, use cases, products, owners, dependencies, and lifecycle states, agents have more context than the workshop notes alone provide.</p>
            <p>The workflow identifies Customer 360 Profile, finds Customer Engagement Signals, and flags the need to verify suitability, ownership, and availability. It prepares Customer Retention Indicators with proposed dependencies, quality considerations, governance questions, and visible gaps: no approved business owner, unclear intended consumers, and potential privacy and access review.</p>
            <p>It records those questions rather than inventing answers. The result is a structured package of objectives, use cases, candidates, relationships, assumptions, outstanding questions, and proposed next steps. Stakeholders decide whether candidates advance, merge with existing products, or are rejected. Agents prepare the decision; they do not make it for the bank.</p>

            <h2>Why a generated document is not enough</h2>
            <p>Generative AI can turn notes into a convincing requirements document, but a document alone does not establish relationships to existing products, maintain lifecycle state, identify current ownership, or link later decisions back to a business objective. It does not prevent duplicate definitions or ensure stakeholders are using the same current information.</p>
            <p>If each AI interaction produces an independent document, organizations can accelerate documentation while increasing fragmentation. A better approach turns extracted material into managed objects and relationships: an identifiable objective, connected use cases, candidate products tied to them, and references to existing products and dependencies.</p>
            <p>Governance requirements and decision evidence remain attached to the relevant work. When a use case changes, teams can inspect its relationships to candidates, products, owners, and delivery commitments. The improvement is not faster document generation; it is moving from unstructured material to connected, manageable product work.</p>

            <h2>Human review must remain part of the process</h2>
            <p>An agent can mistake an example for a confirmed requirement, an idea for an approved objective, or an assumed dependency for an existing one. It can also propose a technically plausible product with insufficient business value. These errors become serious when generated output enters formal delivery without review.</p>
            <p>Governed delivery distinguishes extracted facts, proposed interpretations, assumptions, and approved decisions. A product manager decides whether a candidate reflects the need. A proposed owner or authorised stakeholder confirms accountability. Governance functions determine which requirements apply and whether they are satisfied.</p>
            <p>Human review is not a final checkbox on an autonomous process. It is part of the model that determines how candidates become approved products and proposals become authorised actions. The required review should reflect the decision: routine drafting can have less intervention, while investment, access, sensitive data, and production transitions need stronger accountability.</p>

            <h2>Governance should begin with the first product candidate</h2>
            <p>Traditional delivery often discovers late that ownership is unclear, sensitive information needs additional controls, or a proposed access method conflicts with policy. AI-assisted workflows can introduce governance earlier by examining a candidate&apos;s initial context.</p>
            <p>Does it have an owner? Is the purpose clear? Are dependencies identified? Does use involve sensitive information? Are quality expectations documented? Are policy questions unresolved? Agents should not invent answers or declare compliance. They can make gaps visible while a product is still being evaluated.</p>
            <p>This is Minimum Lovable Governance in practice: the smallest useful set of ownership, policies, controls, evidence, and review requirements follows the product through its lifecycle. At candidate stage, teams need enough information to understand responsibilities and constraints; during delivery and before operation, they need stronger evidence on implementation, quality, access, contracts, controls, and approvals.</p>

            <h2>Why a connected portfolio matters</h2>
            <p>Without portfolio context, an agent works primarily from input documents and can overlook an existing product that already serves the need. A connected portfolio gives it information about products, objectives, use cases, dependencies, ownership, governance requirements, and lifecycle states.</p>
            <p>The agent may find that two proposed use cases depend on the same product, that a candidate overlaps work already underway, or that a solution depends on a product due for retirement. These observations help managers evaluate reuse, dependencies, and risk before commitments are made.</p>
            <p>The portfolio knowledge graph provides relationships, machine-readable product specifications provide structured definitions, and governance and lifecycle information provides operational context. Results still depend on current, complete underlying information; outdated ownership or incomplete dependencies can produce incorrect recommendations.</p>

            <h2>From product candidate to managed delivery</h2>
            <p>Preparing a candidate is only the beginning. Once the business chooses to proceed, the product needs an owner, lifecycle state, technical responsibilities, quality expectations, governance requirements, confirmed dependencies, interfaces, contractual commitments, and organised delivery work.</p>
            <p>Agents can help prepare specifications, identify incomplete requirements, and structure proposed delivery. A definition might provide the basis for an implementation backlog, but creating a backlog does not start implementation and generating a specification does not approve a product.</p>
            <p>The operating model must preserve the difference between proposed work, approved work, active delivery, and completed outcomes. A connected portfolio gives continuity between initial business discussions and later delivery, monitoring, and review as priorities change.</p>

            <h2>Standardised agent workflows reduce inconsistency</h2>
            <p>Teams repeatedly interpret requirements, analyse use cases, examine capabilities, prepare definitions, identify governance gaps, and organise review. Without shared workflows, they use different prompts, templates, assumptions, and validation practices, making AI-assisted quality difficult to evaluate.</p>
            <p>Standardised recipes define purpose, expected inputs, tools, stages, validation, outputs, operational permissions, and review points. A candidate-generation recipe can identify objectives, extract use cases, examine existing products, propose candidates, identify missing information, and prepare results for review. Another can focus on governance gaps or portfolio impact.</p>
            <p>Recipes do not guarantee perfect output. They make recurring work more repeatable, inspectable, and manageable.</p>

            <h2>What Maysano changes</h2>
            <p>Maysano connects AI-assisted product delivery to a managed business and data product portfolio. It connects objectives, use cases, products, ownership, dependencies, governance, lifecycle, versions, and delivery context through a shared knowledge graph.</p>
            <p>Portfolio Studio supports turning business input into structured product candidates and portfolio work. Agents can examine source material, identify concepts, prepare definitions, analyse relationships, and identify incomplete information. Results remain connected to the portfolio rather than becoming isolated documents.</p>
            <p>Stakeholders can review candidates, refine definitions, evaluate relationships, and decide what proceeds. Standardised externally configured recipes, explainable operations, auditing, and operational controls combine AI-assisted preparation with governed review. Open standards under the Linux Foundation&apos;s LF AI &amp; Data umbrella provide machine-readable definitions for products, contracts, and related operational information; Maysano adds connected portfolio and operating context around them.</p>
            <h3>What Maysano does not replace</h3>
            <p>Maysano does not replace business owners, product managers, architects, engineers, or governance reviewers. AI-generated candidates remain proposals until reviewed and accepted through the appropriate process. It does not replace warehouses, lakehouses, integration platforms, catalogs, metadata platforms, or delivery tools such as Jira.</p>
            <p>Those systems continue their established responsibilities. Maysano connects business and product context to the work, supporting preparation, organisation, governance, and monitoring. It does not establish business truth through AI alone: objectives require confirmation, priorities require decisions, dependencies require evidence, and governance remains subject to enterprise authority.</p>

            <h2>How should an organization introduce AI-assisted delivery?</h2>
            <p>Begin with a recurring activity where teams already spend substantial time interpreting business material and preparing product work, such as the work after a business workshop. Select a real objective and use cases, gather relevant notes, requirements, and portfolio information, then use AI assistance to produce an initial structured set of candidates and relationships.</p>
            <p>Compare the result with what an experienced product manager would normally produce. Check whether the workflow identifies objectives, separates use cases from products, recognises existing capability, exposes missing information, and preserves governance questions. Examine how much human correction is necessary.</p>
            <p>Fast output that invents requirements is not an improvement. A useful implementation reduces repetitive preparation while preserving or improving decision quality. Once it works for a limited set of cases, extend it to specifications, governance analysis, dependency assessment, and backlog preparation, while keeping transitions between proposals, reviewed definitions, approved work, and actual delivery clear.</p>

            <h2>The future of data product delivery begins before implementation</h2>
            <p>Data product delivery will always need business judgment, technical expertise, governance, and accountable decisions. AI does not remove those responsibilities; it changes how much effort teams spend preparing information before exercising that judgment.</p>
            <p>AI-assisted workflows can transform business discussions into structured candidates, connect them to existing portfolio information, identify gaps, and prepare work for review. The lasting value comes afterwards, when objectives, use cases, products, ownership, governance, lifecycle, decisions, and delivery remain part of one managed operating model.</p>
            <p>The future is not simply faster documentation or more autonomous agents. It is a managed process that moves business intent into structured, governed product work with less manual coordination and stronger continuity between decisions.</p>

            <aside className="insight-product-context" aria-label="About Maysano">
              <p className="eyebrow">Maysano context</p>
              <p>Portfolio Studio and governed AI workflows transform business material into structured candidates, identify relationships and gaps, and prepare work for accountable review. Maysano complements catalogs, data platforms, governance systems, and delivery tools rather than replacing them.</p>
              <a className="button" href={siteConfig.bookingUrl}>Book a 30-minute live demo</a>
            </aside>

            <section className="insight-article__references" aria-labelledby="delivery-reading-title">
              <h2 id="delivery-reading-title">Further reading</h2>
              <p><a href="https://opendataproducts.org/" target="_blank" rel="noreferrer">Open Data Product Specification</a></p>
              <p><a href="https://opendataproducts.org/framework/" target="_blank" rel="noreferrer">Open Data Product Operating Framework</a></p>
              <p><a href="https://bitol-io.github.io/open-data-contract-standard/" target="_blank" rel="noreferrer">Open Data Contract Standard</a></p>
            </section>
          </div>

          <InsightArticleSideContent quote="AI accelerates preparation. It does not turn an unapproved candidate into a product.">
            <p className="eyebrow">Related insight</p>
            <p><a href={governanceArticleUrl}>From Traditional Governance to Minimum Lovable Governance</a></p>
            <p><a href={agentsArticleUrl}>Traditional AI Agents vs. Governed AI Agents for Enterprise Data Work</a></p>
          </InsightArticleSideContent>
        </div>
      </article>
    </InsightShell>
  )
}
