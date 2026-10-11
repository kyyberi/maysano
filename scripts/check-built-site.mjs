import { readFile, readdir, stat } from 'node:fs/promises'

const [html, insights, article, contractsArticle, robots, sitemap, notFound] = await Promise.all([
  readFile(new URL('../dist/index.html', import.meta.url), 'utf8'),
  readFile(new URL('../dist/insights/index.html', import.meta.url), 'utf8'),
  readFile(new URL('../dist/insights/data-catalog-vs-data-product-portfolio-management/index.html', import.meta.url), 'utf8'),
  readFile(new URL('../dist/insights/data-contracts-and-data-product-specifications/index.html', import.meta.url), 'utf8'),
  readFile(new URL('../dist/robots.txt', import.meta.url), 'utf8'),
  readFile(new URL('../dist/sitemap.xml', import.meta.url), 'utf8'),
  readFile(new URL('../dist/404.html', import.meta.url), 'utf8'),
])

const imageTags = html.match(/<img\b[^>]*>/g) || []
const hashTargets = [...html.matchAll(/href="#([^"]+)"/g)].map((match) => match[1])
const assetDirectory = new URL('../dist/assets/', import.meta.url)
const assetNames = await readdir(assetDirectory)
const assetSizes = Object.fromEntries(await Promise.all(assetNames.map(async (name) => [name, (await stat(new URL(name, assetDirectory))).size])))
const javascriptBytes = Object.entries(assetSizes).filter(([name]) => name.endsWith('.js')).reduce((total, [, size]) => total + size, 0)
const cssBytes = Object.entries(assetSizes).filter(([name]) => name.endsWith('.css')).reduce((total, [, size]) => total + size, 0)

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
  ['canonical Insight article in sitemap', sitemap.includes('<loc>https://maysano.com/insights/data-catalog-vs-data-product-portfolio-management/</loc>')],
  ['canonical contracts Insight article in sitemap', sitemap.includes('<loc>https://maysano.com/insights/data-contracts-and-data-product-specifications/</loc>')],
  ['prerendered Insights index', insights.includes('Better decisions about data products and AI.')],
  ['Insights index canonical URL', insights.includes('<link rel="canonical" href="https://maysano.com/insights/"')],
  ['Insights index has six editorial cards', (insights.match(/class="insight-card(?: |")/g) || []).length === 6],
  ['contracts card targets the published Insight', insights.includes('href="https://maysano.com/insights/data-contracts-and-data-product-specifications/"')],
  ['prerendered Insight article', article.includes('Data Catalog vs. Data Product Portfolio Management: Why Enterprises Need Both')],
  ['Insight article canonical URL', article.includes('<link rel="canonical" href="https://maysano.com/insights/data-catalog-vs-data-product-portfolio-management/"')],
  ['Insight article structured data', article.includes('"@type":"BlogPosting"')],
  ['Insight article keeps product boundary', article.includes('What Maysano does not replace')],
  ['prerendered contracts Insight article', contractsArticle.includes('Data Contracts and Data Product Specifications: Different Jobs, One Product')],
  ['contracts Insight article canonical URL', contractsArticle.includes('<link rel="canonical" href="https://maysano.com/insights/data-contracts-and-data-product-specifications/"')],
  ['contracts Insight article structured data', contractsArticle.includes('"@type":"BlogPosting"')],
  ['contracts Insight article keeps contract and product distinction', contractsArticle.includes('Product specifications and data contracts should therefore reinforce each other rather than compete.')],
  ['custom 404 links home', notFound.includes('href="https://maysano.com/"')],
  ['all built images are WebP', !/<img[^>]+src="[^"]+\.(?:png|jpe?g)\b/i.test(html)],
  ['all images have alt text', imageTags.every((tag) => /\balt="[^"]*"/.test(tag))],
  ['all images reserve dimensions', imageTags.every((tag) => /\bwidth="\d+"/.test(tag) && /\bheight="\d+"/.test(tag))],
  ['all internal section links resolve', hashTargets.every((id) => html.includes(`id="${id}"`))],
  ['prerendered asset paths remain portable', !/\b(?:src|href)="\/(?!\/)/.test(html)],
  ['JavaScript stays below 250 kB uncompressed', javascriptBytes < 250_000],
  ['CSS stays below 100 kB uncompressed', cssBytes < 100_000],
]

const failures = checks.filter(([, passed]) => !passed)
if (failures.length) {
  for (const [label] of failures) console.error(`FAIL ${label}`)
  process.exit(1)
}

for (const [label] of checks) console.log(`PASS ${label}`)
