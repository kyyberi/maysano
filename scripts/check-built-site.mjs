import { readFile, readdir, stat } from 'node:fs/promises'

const [html, insights, architecture, article, contractsArticle, governanceArticle, graphArticle, agentsArticle, deliveryArticle, robots, sitemap, notFound] = await Promise.all([
  readFile(new URL('../dist/index.html', import.meta.url), 'utf8'),
  readFile(new URL('../dist/insights/index.html', import.meta.url), 'utf8'),
  readFile(new URL('../dist/architecture/index.html', import.meta.url), 'utf8'),
  readFile(new URL('../dist/insights/data-catalog-vs-data-product-portfolio-management/index.html', import.meta.url), 'utf8'),
  readFile(new URL('../dist/insights/data-contracts-and-data-product-specifications/index.html', import.meta.url), 'utf8'),
  readFile(new URL('../dist/insights/traditional-governance-to-minimum-lovable-governance/index.html', import.meta.url), 'utf8'),
  readFile(new URL('../dist/insights/knowledge-graph-vs-ontology/index.html', import.meta.url), 'utf8'),
  readFile(new URL('../dist/insights/traditional-ai-agents-vs-governed-ai-agents/index.html', import.meta.url), 'utf8'),
  readFile(new URL('../dist/insights/manual-vs-ai-assisted-governed-data-product-delivery/index.html', import.meta.url), 'utf8'),
  readFile(new URL('../dist/robots.txt', import.meta.url), 'utf8'),
  readFile(new URL('../dist/sitemap.xml', import.meta.url), 'utf8'),
  readFile(new URL('../dist/404.html', import.meta.url), 'utf8'),
])

const imageTags = html.match(/<img\b[^>]*>/g) || []
const hashTargets = [...html.matchAll(/href="#([^"]+)"/g)].map((match) => match[1])
const assetDirectory = new URL('../dist/assets/', import.meta.url)
const assetNames = await readdir(assetDirectory)
const assetSizes = Object.fromEntries(await Promise.all(assetNames.map(async (name) => [name, (await stat(new URL(name, assetDirectory))).size])))
const largestJavaScriptBytes = Math.max(...Object.entries(assetSizes).filter(([name]) => name.endsWith('.js')).map(([, size]) => size), 0)
const cssBytes = Object.entries(assetSizes).filter(([name]) => name.endsWith('.css')).reduce((total, [, size]) => total + size, 0)
const insightSocialImages = [
  ['catalog Insight', article, 'insight-data-catalog-portfolio.png', 'Maysano Insight: Data Catalog vs. Data Product Portfolio Management: Why Enterprises Need Both'],
  ['contracts Insight', contractsArticle, 'insight-data-contracts-specifications.png', 'Maysano Insight: Data Contracts and Data Product Specifications: Different Jobs, One Product'],
  ['governance Insight', governanceArticle, 'insight-minimum-lovable-governance.png', 'Maysano Insight: From Traditional Governance to Minimum Lovable Governance'],
  ['graph Insight', graphArticle, 'insight-knowledge-graph-ontology.png', 'Maysano Insight: Knowledge Graph vs. Ontology: What Enterprise Data Products Need'],
  ['governed-agents Insight', agentsArticle, 'insight-governed-ai-agents.png', 'Maysano Insight: Traditional AI Agents vs. Governed AI Agents for Enterprise Data Work'],
  ['delivery Insight', deliveryArticle, 'insight-ai-assisted-delivery.png', 'Maysano Insight: Manual vs. AI-Assisted, Governed Data Product Delivery'],
]
const insightSocialImageSizes = await Promise.all(insightSocialImages.map(async ([, , file]) => {
  const image = await readFile(new URL(`../dist/og/${file}`, import.meta.url))
  return image.length >= 24 && image.toString('ascii', 1, 4) === 'PNG' && image.readUInt32BE(16) === 1200 && image.readUInt32BE(20) === 630
}))
const hasInsightSocialMetadata = (document, file, alt) => {
  const imageUrl = `https://maysano.com/og/${file}`
  return document.includes(`<meta property="og:image" content="${imageUrl}" />`)
    && document.includes('<meta property="og:image:width" content="1200" />')
    && document.includes('<meta property="og:image:height" content="630" />')
    && document.includes(`<meta property="og:image:alt" content="${alt}" />`)
    && document.includes('<meta name="twitter:card" content="summary_large_image" />')
    && document.includes(`<meta name="twitter:image" content="${imageUrl}" />`)
    && document.includes(`<meta name="twitter:image:alt" content="${alt}" />`)
}

const checks = [
  ['prerendered H1', (html.match(/<h1[\s>]/g) || []).length === 1],
  ['prerendered main content', html.includes('Connect data') && html.includes('Questions enterprise teams ask first')],
  ['canonical URL', html.includes('<link rel="canonical" href="https://maysano.com/"')],
  ['indexable robots meta', html.includes('name="robots" content="index, follow, max-image-preview:large"')],
  ['no noindex directive', !/noindex/i.test(html)],
  ['homepage description', /<meta name="description" content="[^"]+"/.test(html)],
  ['FAQ structured data', html.includes('"@type":"FAQPage"')],
  ['organization structured data', html.includes('"@type":"Organization"')],
  ['software product structured data', html.includes('"@type":"SoftwareApplication"')],
  ['real creator identity', html.includes('Jarkko Moilanen')],
  ['analytics configured once', (html.match(/gtag\('config', 'G-PX44YVYL9Z'\)/g) || []).length === 1],
  ['Googlebot allowed', /User-agent:\s*\*[\s\S]*Allow:\s*\//.test(robots)],
  ['sitemap declared in robots', robots.includes('Sitemap: https://maysano.com/sitemap.xml')],
  ['canonical homepage in sitemap', sitemap.includes('<loc>https://maysano.com/</loc>')],
  ['canonical Insights index in sitemap', sitemap.includes('<loc>https://maysano.com/insights/</loc>')],
  ['canonical Architecture page in sitemap', sitemap.includes('<loc>https://maysano.com/architecture/</loc>')],
  ['canonical Insight article in sitemap', sitemap.includes('<loc>https://maysano.com/insights/data-catalog-vs-data-product-portfolio-management/</loc>')],
  ['canonical contracts Insight article in sitemap', sitemap.includes('<loc>https://maysano.com/insights/data-contracts-and-data-product-specifications/</loc>')],
  ['canonical governance Insight article in sitemap', sitemap.includes('<loc>https://maysano.com/insights/traditional-governance-to-minimum-lovable-governance/</loc>')],
  ['canonical graph Insight article in sitemap', sitemap.includes('<loc>https://maysano.com/insights/knowledge-graph-vs-ontology/</loc>')],
  ['canonical governed-agents Insight article in sitemap', sitemap.includes('<loc>https://maysano.com/insights/traditional-ai-agents-vs-governed-ai-agents/</loc>')],
  ['canonical delivery Insight article in sitemap', sitemap.includes('<loc>https://maysano.com/insights/manual-vs-ai-assisted-governed-data-product-delivery/</loc>')],
  ['prerendered Insights index', insights.includes('Better decisions about data products and AI.')],
  ['Insights index canonical URL', insights.includes('<link rel="canonical" href="https://maysano.com/insights/"')],
  ['prerendered Architecture page', architecture.includes('<h1>Maysano Reference Architecture</h1>')],
  ['Architecture page canonical URL', architecture.includes('<link rel="canonical" href="https://maysano.com/architecture/"')],
  ['Architecture page structured data', architecture.includes('"@type":"WebPage"') && architecture.includes('"@id":"https://maysano.com/architecture/#webpage"')],
  ['Architecture page preserves the Maysano system boundary', architecture.includes('Maysano does not require enterprise data to be physically moved into its platform.')],
  ['Architecture page includes governed AI controls', architecture.includes('An LLM prompt does not enforce security.')],
  ['Insights index has six editorial cards', (insights.match(/class="insight-card(?: |")/g) || []).length === 6],
  ['contracts card targets the published Insight', insights.includes('href="https://maysano.com/insights/data-contracts-and-data-product-specifications/"')],
  ['governance card targets the published Insight', insights.includes('href="https://maysano.com/insights/traditional-governance-to-minimum-lovable-governance/"')],
  ['graph card targets the published Insight', insights.includes('href="https://maysano.com/insights/knowledge-graph-vs-ontology/"')],
  ['agents card targets the published Insight', insights.includes('href="https://maysano.com/insights/traditional-ai-agents-vs-governed-ai-agents/"')],
  ['delivery card targets the published Insight', insights.includes('href="https://maysano.com/insights/manual-vs-ai-assisted-governed-data-product-delivery/"')],
  ['prerendered Insight article', article.includes('Data Catalog vs. Data Product Portfolio Management: Why Enterprises Need Both')],
  ['Insight article canonical URL', article.includes('<link rel="canonical" href="https://maysano.com/insights/data-catalog-vs-data-product-portfolio-management/"')],
  ['Insight article structured data', article.includes('"@type":"BlogPosting"')],
  ['Insight article keeps product boundary', article.includes('What Maysano does not replace')],
  ['catalog Insight links to Architecture', article.includes('href="https://maysano.com/architecture/"')],
  ['prerendered contracts Insight article', contractsArticle.includes('Data Contracts and Data Product Specifications: Different Jobs, One Product')],
  ['contracts Insight article canonical URL', contractsArticle.includes('<link rel="canonical" href="https://maysano.com/insights/data-contracts-and-data-product-specifications/"')],
  ['contracts Insight article structured data', contractsArticle.includes('"@type":"BlogPosting"')],
  ['contracts Insight article keeps contract and product distinction', contractsArticle.includes('Product specifications and data contracts should therefore reinforce each other rather than compete.')],
  ['contracts Insight links to Architecture', contractsArticle.includes('href="https://maysano.com/architecture/"')],
  ['prerendered governance Insight article', governanceArticle.includes('From Traditional Governance to Minimum Lovable Governance')],
  ['governance Insight article canonical URL', governanceArticle.includes('<link rel="canonical" href="https://maysano.com/insights/traditional-governance-to-minimum-lovable-governance/"')],
  ['governance Insight article structured data', governanceArticle.includes('"@type":"BlogPosting"')],
  ['governance Insight article keeps human approval boundary', governanceArticle.includes('An AI agent should not independently invent policies')],
  ['prerendered graph Insight article', graphArticle.includes('Knowledge Graph vs. Ontology: What Enterprise Data Products Need')],
  ['graph Insight article canonical URL', graphArticle.includes('<link rel="canonical" href="https://maysano.com/insights/knowledge-graph-vs-ontology/"')],
  ['graph Insight article structured data', graphArticle.includes('"@type":"BlogPosting"')],
  ['graph Insight article keeps graph and ontology distinction', graphArticle.includes('The knowledge graph tells us what is connected. The ontology helps explain what those connections mean.')],
  ['graph Insight links to Architecture', graphArticle.includes('href="https://maysano.com/architecture/"')],
  ['prerendered governed-agents Insight article', agentsArticle.includes('Traditional AI Agents vs. Governed AI Agents for Enterprise Data Work')],
  ['governed-agents Insight article canonical URL', agentsArticle.includes('<link rel="canonical" href="https://maysano.com/insights/traditional-ai-agents-vs-governed-ai-agents/"')],
  ['governed-agents Insight article structured data', agentsArticle.includes('"@type":"BlogPosting"')],
  ['governed-agents Insight article keeps approval boundary', agentsArticle.includes('authority to execute.')],
  ['governed-agents Insight links to Architecture', agentsArticle.includes('href="https://maysano.com/architecture/"')],
  ['prerendered delivery Insight article', deliveryArticle.includes('Manual vs. AI-Assisted, Governed Data Product Delivery')],
  ['delivery Insight article canonical URL', deliveryArticle.includes('<link rel="canonical" href="https://maysano.com/insights/manual-vs-ai-assisted-governed-data-product-delivery/"')],
  ['delivery Insight article structured data', deliveryArticle.includes('"@type":"BlogPosting"')],
  ['delivery Insight article keeps human-review boundary', deliveryArticle.includes('Agents prepare the decision; they do not make it for the bank.')],
  ...insightSocialImages.map(([label, document, file, alt]) => [`${label} has its branded social metadata`, hasInsightSocialMetadata(document, file, alt)]),
  ['Insight social images are 1200 by 630 PNGs', insightSocialImageSizes.every(Boolean)],
  ['custom 404 links home', notFound.includes('href="https://maysano.com/"')],
  ['all built images are WebP', !/<img[^>]+src="[^"]+\.(?:png|jpe?g)\b/i.test(html)],
  ['all images have alt text', imageTags.every((tag) => /\balt="[^"]*"/.test(tag))],
  ['all images reserve dimensions', imageTags.every((tag) => /\bwidth="\d+"/.test(tag) && /\bheight="\d+"/.test(tag))],
  ['all internal section links resolve', hashTargets.every((id) => html.includes(`id="${id}"`))],
  ['prerendered asset paths remain portable', !/\b(?:src|href)="\/(?!\/)/.test(html)],
  ['initial JavaScript chunk stays below 250 kB uncompressed', largestJavaScriptBytes < 250_000],
  ['CSS stays below 100 kB uncompressed', cssBytes < 100_000],
]

const failures = checks.filter(([, passed]) => !passed)
if (failures.length) {
  for (const [label] of failures) console.error(`FAIL ${label}`)
  process.exit(1)
}

for (const [label] of checks) console.log(`PASS ${label}`)
