import { Footer } from './Footer'
import { Header } from './Header'
import { siteConfig } from '../config/site'
import type { ReactNode } from 'react'

const articlePath = 'insights/data-catalog-vs-data-product-portfolio-management/'
const articleUrl = `${siteConfig.siteUrl}${articlePath}`
const contractsArticlePath = 'insights/data-contracts-and-data-product-specifications/'
const contractsArticleUrl = `${siteConfig.siteUrl}${contractsArticlePath}`

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
      },
      {
        category: 'Delivery',
        title: 'Manual vs. AI-Assisted Delivery',
        summary: 'Move from scattered inputs to reviewed product work.',
        kind: 'delivery',
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
      },
      {
        category: 'AI agents',
        title: 'Traditional vs. Governed AI Agents',
        summary: 'AI with business context, controls and decision evidence.',
        kind: 'agents',
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

function InsightStructuredData({ headline, description, url }: { headline: string, description: string, url: string }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    headline,
    description,
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
      />
      <article className="insight-article">
        <header className="insight-article__header">
          <div className="container insight-article__header-inner">
            <a className="insight-article__back" href={`${siteConfig.siteUrl}insights/`}>Insights</a>
            <p className="eyebrow">Maysano Insights · Product operating model</p>
            <h1>Data Catalog vs. Data Product Portfolio Management: Why Enterprises Need Both</h1>
            <p className="insight-article__dek">A practical guide to connecting data assets with business objectives, investment decisions, governance, and AI operations.</p>
            <p className="insight-article__meta">7–8 minute read</p>
          </div>
        </header>

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

          <aside className="insight-article__series" aria-label="Next in the Insights series">
            <p className="eyebrow">Next in the series</p>
            <p><a href={contractsArticleUrl}>Data Contracts and Data Product Specifications: Different Jobs, One Product</a></p>
            <p>From Traditional Governance to Minimum Lovable Governance</p>
          </aside>
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
      />
      <article className="insight-article">
        <header className="insight-article__header">
          <div className="container insight-article__header-inner">
            <a className="insight-article__back" href={`${siteConfig.siteUrl}insights/`}>Insights</a>
            <p className="eyebrow">Maysano Insights · Product operating model · Article 02</p>
            <h1>Data Contracts and Data Product Specifications: Different Jobs, One Product</h1>
            <p className="insight-article__dek">Why defining how data is delivered is different from defining the complete product, and why enterprise AI needs both.</p>
            <p className="insight-article__meta">9–10 minute read</p>
          </div>
        </header>

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

          <aside className="insight-article__series" aria-label="Related Insights">
            <p className="eyebrow">Related insight</p>
            <p><a href={articleUrl}>Data Catalog vs. Data Product Portfolio Management: Why Enterprises Need Both</a></p>
            <p>From Traditional Governance to Minimum Lovable Governance</p>
          </aside>
        </div>
      </article>
    </InsightShell>
  )
}
