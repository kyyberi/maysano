import { mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = fileURLToPath(new URL('../', import.meta.url))
const outputDirectory = fileURLToPath(new URL('../dist/', import.meta.url))
const outputPath = fileURLToPath(new URL('../dist/index.html', import.meta.url))
const serverEntry = new URL('../dist-ssr/entry-server.js', import.meta.url)
const serverOutput = fileURLToPath(new URL('../dist-ssr', import.meta.url))

const [{ render }, template] = await Promise.all([
  import(serverEntry.href),
  readFile(outputPath, 'utf8'),
])

const rootMarker = '<div id="root"></div>'
if (!template.includes(rootMarker)) {
  throw new Error(`Unable to find the application root in ${outputPath.replace(projectRoot, '')}`)
}

const pages = [
  {
    pathname: '/',
    outputPath,
    title: 'Maysano | Connect Data Products to Business Strategy',
    description: 'Maysano connects business objectives, use cases, data products, governance and AI agents through a shared knowledge graph.',
    canonical: 'https://maysano.com/',
    ogType: 'website',
    assetPrefix: './',
  },
  {
    pathname: '/insights/',
    outputPath: `${outputDirectory}insights/index.html`,
    title: 'Maysano Insights | Governed Data Product Portfolios',
    description: 'Practical guidance for teams connecting business objectives, use cases, data products, governance, and AI operations.',
    canonical: 'https://maysano.com/insights/',
    ogType: 'website',
    assetPrefix: '../',
  },
  {
    pathname: '/architecture/',
    outputPath: `${outputDirectory}architecture/index.html`,
    title: 'Maysano Reference Architecture | Data Products, Knowledge Graph & Governed AI',
    description: 'Explore how Maysano connects business objectives, data product portfolios, knowledge graphs, governance, and AI agents with existing enterprise systems.',
    canonical: 'https://maysano.com/architecture/',
    ogType: 'website',
    assetPrefix: '../',
  },
  {
    pathname: '/kentaro/',
    outputPath: `${outputDirectory}kentaro/index.html`,
    title: 'Kentaro | An AI Agent in a Very Human Workplace | Maysano',
    description: 'One-minute stories about Kentaro, an AI agent learning to work with humans, context, and office ambiguity.',
    canonical: 'https://maysano.com/kentaro/',
    ogType: 'website',
    assetPrefix: '../',
  },
  {
    pathname: '/kentaro/episodes/first-day-missing-context/',
    outputPath: `${outputDirectory}kentaro/episodes/first-day-missing-context/index.html`,
    title: 'First day. Missing context. | Kentaro | Maysano',
    description: 'Welcome aboard. The owner has left.',
    canonical: 'https://maysano.com/kentaro/episodes/first-day-missing-context/',
    ogType: 'website',
    assetPrefix: '../../../',
  },
  {
    pathname: '/kentaro/episodes/processing-time-zero/',
    outputPath: `${outputDirectory}kentaro/episodes/processing-time-zero/index.html`,
    title: 'Processing time: zero. | Kentaro | Maysano',
    description: 'The KPI improved. The business did not.',
    canonical: 'https://maysano.com/kentaro/episodes/processing-time-zero/',
    ogType: 'website',
    assetPrefix: '../../../',
  },
  {
    pathname: '/kentaro/episodes/we-need-more-agents/',
    outputPath: `${outputDirectory}kentaro/episodes/we-need-more-agents/index.html`,
    title: 'We need more agents. | Kentaro | Maysano',
    description: 'A supervisor for the supervisor.',
    canonical: 'https://maysano.com/kentaro/episodes/we-need-more-agents/',
    ogType: 'website',
    assetPrefix: '../../../',
  },
  {
    pathname: '/kentaro/episodes/it-works-on-my-machine/',
    outputPath: `${outputDirectory}kentaro/episodes/it-works-on-my-machine/index.html`,
    title: 'It works on my machine. | Kentaro | Maysano',
    description: 'Twelve demo records. Twelve million surprises.',
    canonical: 'https://maysano.com/kentaro/episodes/it-works-on-my-machine/',
    ogType: 'website',
    assetPrefix: '../../../',
  },
  {
    pathname: '/insights/data-catalog-vs-data-product-portfolio-management/',
    outputPath: `${outputDirectory}insights/data-catalog-vs-data-product-portfolio-management/index.html`,
    title: 'Data Catalog vs. Data Product Portfolio Management | Maysano',
    description: 'A practical guide to connecting data assets with business objectives, investment decisions, governance, and AI operations.',
    canonical: 'https://maysano.com/insights/data-catalog-vs-data-product-portfolio-management/',
    ogType: 'article',
    ogImage: 'https://maysano.com/og/insight-data-catalog-portfolio.png',
    ogImageAlt: 'Maysano Insight: Data Catalog vs. Data Product Portfolio Management: Why Enterprises Need Both',
    assetPrefix: '../../',
  },
  {
    pathname: '/insights/data-contracts-and-data-product-specifications/',
    outputPath: `${outputDirectory}insights/data-contracts-and-data-product-specifications/index.html`,
    title: 'Data Contracts and Data Product Specifications | Maysano',
    description: 'Why defining how data is delivered is different from defining the complete product, and why enterprise AI needs both.',
    canonical: 'https://maysano.com/insights/data-contracts-and-data-product-specifications/',
    ogType: 'article',
    ogImage: 'https://maysano.com/og/insight-data-contracts-specifications.png',
    ogImageAlt: 'Maysano Insight: Data Contracts and Data Product Specifications: Different Jobs, One Product',
    assetPrefix: '../../',
  },
  {
    pathname: '/insights/traditional-governance-to-minimum-lovable-governance/',
    outputPath: `${outputDirectory}insights/traditional-governance-to-minimum-lovable-governance/index.html`,
    title: 'From Traditional Governance to Minimum Lovable Governance | Maysano',
    description: 'Why enterprise data product governance should become part of everyday work instead of a separate process that slows it down.',
    canonical: 'https://maysano.com/insights/traditional-governance-to-minimum-lovable-governance/',
    ogType: 'article',
    ogImage: 'https://maysano.com/og/insight-minimum-lovable-governance.png',
    ogImageAlt: 'Maysano Insight: From Traditional Governance to Minimum Lovable Governance',
    assetPrefix: '../../',
  },
  {
    pathname: '/insights/knowledge-graph-vs-ontology/',
    outputPath: `${outputDirectory}insights/knowledge-graph-vs-ontology/index.html`,
    title: 'Knowledge Graph vs. Ontology | Maysano',
    description: 'Why organizations need both connected business knowledge and shared meaning, and why building a large enterprise ontology is not always the right starting point.',
    canonical: 'https://maysano.com/insights/knowledge-graph-vs-ontology/',
    ogType: 'article',
    ogImage: 'https://maysano.com/og/insight-knowledge-graph-ontology.png',
    ogImageAlt: 'Maysano Insight: Knowledge Graph vs. Ontology: What Enterprise Data Products Need',
    assetPrefix: '../../',
  },
  {
    pathname: '/insights/traditional-ai-agents-vs-governed-ai-agents/',
    outputPath: `${outputDirectory}insights/traditional-ai-agents-vs-governed-ai-agents/index.html`,
    title: 'Traditional AI Agents vs. Governed AI Agents | Maysano',
    description: 'An AI agent that produces an answer is different from an AI agent that operates within business responsibilities, governance requirements, and accountable enterprise workflows.',
    canonical: 'https://maysano.com/insights/traditional-ai-agents-vs-governed-ai-agents/',
    ogType: 'article',
    ogImage: 'https://maysano.com/og/insight-governed-ai-agents.png',
    ogImageAlt: 'Maysano Insight: Traditional AI Agents vs. Governed AI Agents for Enterprise Data Work',
    assetPrefix: '../../',
  },
  {
    pathname: '/insights/manual-vs-ai-assisted-governed-data-product-delivery/',
    outputPath: `${outputDirectory}insights/manual-vs-ai-assisted-governed-data-product-delivery/index.html`,
    title: 'Manual vs. AI-Assisted, Governed Data Product Delivery | Maysano',
    description: 'Why enterprise data product delivery needs a better way to turn business discussions, requirements, and existing information into structured, governed product work.',
    canonical: 'https://maysano.com/insights/manual-vs-ai-assisted-governed-data-product-delivery/',
    ogType: 'article',
    ogImage: 'https://maysano.com/og/insight-ai-assisted-delivery.png',
    ogImageAlt: 'Maysano Insight: Manual vs. AI-Assisted, Governed Data Product Delivery',
    assetPrefix: '../../',
  },
  {
    pathname: '/insights/ai-control-plane-vs-data-product-operating-layer/',
    outputPath: `${outputDirectory}insights/ai-control-plane-vs-data-product-operating-layer/index.html`,
    title: 'AI Control Plane vs. Data Product Operating Layer | Maysano',
    description: 'AI control planes govern how agents execute. A data product operating layer connects execution to objectives, ownership, portfolio decisions, and outcomes.',
    canonical: 'https://maysano.com/insights/ai-control-plane-vs-data-product-operating-layer/',
    ogType: 'article',
    ogImage: 'https://maysano.com/og/insight-ai-control-plane-vs-operating-layer.png',
    ogImageAlt: 'Maysano Insight: AI Control Plane vs. Data Product Operating Layer: Why Enterprises Need Both',
    assetPrefix: '../../',
  },
]

function escapeHtml(value) {
  return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function withMetadata(html, page) {
  const title = escapeHtml(page.title)
  const description = escapeHtml(page.description)
  const canonical = escapeHtml(page.canonical)
  const ogImage = page.ogImage ? escapeHtml(page.ogImage) : null
  const ogImageAlt = page.ogImageAlt ? escapeHtml(page.ogImageAlt) : null

  const metadata = html
    .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
    .replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${description}" />`)
    .replace(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${canonical}" />`)
    .replace(/<meta property="og:type" content="[^"]*" \/>/, `<meta property="og:type" content="${page.ogType}" />`)
    .replace(/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${title}" />`)
    .replace(/<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${description}" />`)
    .replace(/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${canonical}" />`)
    .replace(/<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${title}" />`)
    .replace(/<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${description}" />`)

  if (!ogImage || !ogImageAlt) return metadata

  return metadata
    .replace(/<meta property="og:image" content="[^"]*" \/>/, `<meta property="og:image" content="${ogImage}" />`)
    .replace(/<meta property="og:image:width" content="[^"]*" \/>/, '<meta property="og:image:width" content="1200" />')
    .replace(/<meta property="og:image:height" content="[^"]*" \/>/, '<meta property="og:image:height" content="630" />')
    .replace(/<meta property="og:image:alt" content="[^"]*" \/>/, `<meta property="og:image:alt" content="${ogImageAlt}" />`)
    .replace(/<meta name="twitter:card" content="[^"]*" \/>/, '<meta name="twitter:card" content="summary_large_image" />')
    .replace(/<meta name="twitter:image" content="[^"]*" \/>/, `<meta name="twitter:image" content="${ogImage}" />`)
    .replace(/<meta name="twitter:image:alt" content="[^"]*" \/>/, `<meta name="twitter:image:alt" content="${ogImageAlt}" />`)
}

function withRelativeAssets(html, assetPrefix) {
  return html.replace(/\b(src|href)="\.\/(?=(?:assets\/|logo\.webp))/g, `$1="${assetPrefix}`)
}

for (const page of pages) {
  const appHtml = render(page.pathname).replace(/\bsrc="\/(?!\/)/g, 'src="./')
  const html = withRelativeAssets(
    withMetadata(template, page).replace(rootMarker, `<div id="root">${appHtml}</div>`),
    page.assetPrefix,
  )
  await mkdir(dirname(page.outputPath), { recursive: true })
  await writeFile(page.outputPath, html)
}

await rm(serverOutput, { recursive: true, force: true })
