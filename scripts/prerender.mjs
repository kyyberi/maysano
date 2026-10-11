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
    pathname: '/insights/data-catalog-vs-data-product-portfolio-management/',
    outputPath: `${outputDirectory}insights/data-catalog-vs-data-product-portfolio-management/index.html`,
    title: 'Data Catalog vs. Data Product Portfolio Management | Maysano',
    description: 'A practical guide to connecting data assets with business objectives, investment decisions, governance, and AI operations.',
    canonical: 'https://maysano.com/insights/data-catalog-vs-data-product-portfolio-management/',
    ogType: 'article',
    assetPrefix: '../../',
  },
  {
    pathname: '/insights/data-contracts-and-data-product-specifications/',
    outputPath: `${outputDirectory}insights/data-contracts-and-data-product-specifications/index.html`,
    title: 'Data Contracts and Data Product Specifications | Maysano',
    description: 'Why defining how data is delivered is different from defining the complete product, and why enterprise AI needs both.',
    canonical: 'https://maysano.com/insights/data-contracts-and-data-product-specifications/',
    ogType: 'article',
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

  return html
    .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
    .replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${description}" />`)
    .replace(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${canonical}" />`)
    .replace(/<meta property="og:type" content="[^"]*" \/>/, `<meta property="og:type" content="${page.ogType}" />`)
    .replace(/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${title}" />`)
    .replace(/<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${description}" />`)
    .replace(/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${canonical}" />`)
    .replace(/<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${title}" />`)
    .replace(/<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${description}" />`)
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
