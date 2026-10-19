import { readFile, readdir, stat } from 'node:fs/promises'

const [html, insights, architecture, kentaro, kentaroBackground, article, contractsArticle, governanceArticle, graphArticle, agentsArticle, deliveryArticle, controlPlaneArticle, robots, sitemap, llms, notFound] = await Promise.all([
  readFile(new URL('../dist/index.html', import.meta.url), 'utf8'),
  readFile(new URL('../dist/insights/index.html', import.meta.url), 'utf8'),
  readFile(new URL('../dist/architecture/index.html', import.meta.url), 'utf8'),
  readFile(new URL('../dist/kentaro/index.html', import.meta.url), 'utf8'),
  readFile(new URL('../dist/kentaro/why-kentaro-exists/index.html', import.meta.url), 'utf8'),
  readFile(new URL('../dist/insights/data-catalog-vs-data-product-portfolio-management/index.html', import.meta.url), 'utf8'),
  readFile(new URL('../dist/insights/data-contracts-and-data-product-specifications/index.html', import.meta.url), 'utf8'),
  readFile(new URL('../dist/insights/traditional-governance-to-minimum-lovable-governance/index.html', import.meta.url), 'utf8'),
  readFile(new URL('../dist/insights/knowledge-graph-vs-ontology/index.html', import.meta.url), 'utf8'),
  readFile(new URL('../dist/insights/traditional-ai-agents-vs-governed-ai-agents/index.html', import.meta.url), 'utf8'),
  readFile(new URL('../dist/insights/manual-vs-ai-assisted-governed-data-product-delivery/index.html', import.meta.url), 'utf8'),
  readFile(new URL('../dist/insights/ai-control-plane-vs-data-product-operating-layer/index.html', import.meta.url), 'utf8'),
  readFile(new URL('../dist/robots.txt', import.meta.url), 'utf8'),
  readFile(new URL('../dist/sitemap.xml', import.meta.url), 'utf8'),
  readFile(new URL('../dist/llms.txt', import.meta.url), 'utf8'),
  readFile(new URL('../dist/404.html', import.meta.url), 'utf8'),
])

const imageTags = html.match(/<img\b[^>]*>/g) || []
const hashTargets = [...html.matchAll(/href="#([^"]+)"/g)].map((match) => match[1])
const assetDirectory = new URL('../dist/assets/', import.meta.url)
const assetNames = await readdir(assetDirectory)
const assetSizes = Object.fromEntries(await Promise.all(assetNames.map(async (name) => [name, (await stat(new URL(name, assetDirectory))).size])))
const kentaroCssAsset = assetNames.find((name) => /^kentaro-.*\.css$/.test(name))
const largestJavaScriptBytes = Math.max(...Object.entries(assetSizes).filter(([name]) => name.endsWith('.js')).map(([, size]) => size), 0)
const initialJavaScriptBytes = Math.max(...Object.entries(assetSizes).filter(([name]) => /^index-.*\.js$/.test(name)).map(([, size]) => size), 0)
const cssBytes = Object.entries(assetSizes).filter(([name]) => name.endsWith('.css')).reduce((total, [, size]) => total + size, 0)
const kentaroSocialImage = await readFile(new URL('../dist/og/kentaro-business-experience.jpg', import.meta.url))
const kentaroSocialImageUrl = 'https://maysano.com/og/kentaro-business-experience.jpg'
const kentaroSocialImageAlt = 'Kentaro, an AI agent, and a business owner working together in an office.'
const kentaroImageTags = kentaro.match(/<img\b[^>]*>/g) || []
const insightSocialImages = [
  ['catalog Insight', article, 'insight-data-catalog-portfolio.png', 'Maysano Insight: Data Catalog vs. Data Product Portfolio Management: Why Enterprises Need Both'],
  ['contracts Insight', contractsArticle, 'insight-data-contracts-specifications.png', 'Maysano Insight: Data Contracts and Data Product Specifications: Different Jobs, One Product'],
  ['governance Insight', governanceArticle, 'insight-minimum-lovable-governance.png', 'Maysano Insight: From Traditional Governance to Minimum Lovable Governance'],
  ['graph Insight', graphArticle, 'insight-knowledge-graph-ontology.png', 'Maysano Insight: Knowledge Graph vs. Ontology: What Enterprise Data Products Need'],
  ['governed-agents Insight', agentsArticle, 'insight-governed-ai-agents.png', 'Maysano Insight: Traditional AI Agents vs. Governed AI Agents for Enterprise Data Work'],
  ['delivery Insight', deliveryArticle, 'insight-ai-assisted-delivery.png', 'Maysano Insight: Manual vs. AI-Assisted, Governed Data Product Delivery'],
  ['control-plane Insight', controlPlaneArticle, 'insight-ai-control-plane-vs-operating-layer.png', 'Maysano Insight: AI Control Plane vs. Data Product Operating Layer: Why Enterprises Need Both'],
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
const hasKentaroSocialMetadata = (document) => document.includes(`<meta property="og:image" content="${kentaroSocialImageUrl}" />`)
  && document.includes('<meta property="og:image:width" content="1200" />')
  && document.includes('<meta property="og:image:height" content="630" />')
  && document.includes('<meta property="og:image:type" content="image/jpeg" />')
  && document.includes(`<meta property="og:image:alt" content="${kentaroSocialImageAlt}" />`)
  && document.includes('<meta name="twitter:card" content="summary_large_image" />')
  && document.includes(`<meta name="twitter:image" content="${kentaroSocialImageUrl}" />`)
  && document.includes(`<meta name="twitter:image:alt" content="${kentaroSocialImageAlt}" />`)

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
  ['llms.txt identifies Maysano', llms.startsWith('# Maysano\n')],
  ['llms.txt states the operating-layer boundary', llms.includes('Maysano is an operating layer, not a replacement for the existing enterprise data estate.')],
  ['llms.txt links the reference architecture', llms.includes('https://maysano.com/architecture/')],
  ['llms.txt links the Insights index', llms.includes('https://maysano.com/insights/')],
  ['canonical homepage in sitemap', sitemap.includes('<loc>https://maysano.com/</loc>')],
  ['canonical Insights index in sitemap', sitemap.includes('<loc>https://maysano.com/insights/</loc>')],
  ['canonical Architecture page in sitemap', sitemap.includes('<loc>https://maysano.com/architecture/</loc>')],
  ['canonical Kentaro page in sitemap', sitemap.includes('<loc>https://maysano.com/kentaro/</loc>')],
  ['canonical Kentaro background page in sitemap', sitemap.includes('<loc>https://maysano.com/kentaro/why-kentaro-exists/</loc>')],
  ['Kentaro episode pages are not in sitemap', !sitemap.includes('https://maysano.com/kentaro/episodes/')],
  ['canonical Insight article in sitemap', sitemap.includes('<loc>https://maysano.com/insights/data-catalog-vs-data-product-portfolio-management/</loc>')],
  ['canonical contracts Insight article in sitemap', sitemap.includes('<loc>https://maysano.com/insights/data-contracts-and-data-product-specifications/</loc>')],
  ['canonical governance Insight article in sitemap', sitemap.includes('<loc>https://maysano.com/insights/traditional-governance-to-minimum-lovable-governance/</loc>')],
  ['canonical graph Insight article in sitemap', sitemap.includes('<loc>https://maysano.com/insights/knowledge-graph-vs-ontology/</loc>')],
  ['canonical governed-agents Insight article in sitemap', sitemap.includes('<loc>https://maysano.com/insights/traditional-ai-agents-vs-governed-ai-agents/</loc>')],
  ['canonical delivery Insight article in sitemap', sitemap.includes('<loc>https://maysano.com/insights/manual-vs-ai-assisted-governed-data-product-delivery/</loc>')],
  ['canonical control-plane Insight article in sitemap', sitemap.includes('<loc>https://maysano.com/insights/ai-control-plane-vs-data-product-operating-layer/</loc>')],
  ['prerendered Insights index', insights.includes('Better decisions about data products and AI.')],
  ['Insights index canonical URL', insights.includes('<link rel="canonical" href="https://maysano.com/insights/"')],
  ['prerendered Architecture page', architecture.includes('<h1>Maysano Reference Architecture</h1>')],
  ['Architecture page canonical URL', architecture.includes('<link rel="canonical" href="https://maysano.com/architecture/"')],
  ['Architecture page structured data', architecture.includes('"@type":"WebPage"') && architecture.includes('"@id":"https://maysano.com/architecture/#webpage"')],
  ['Architecture page preserves the Maysano system boundary', architecture.includes('Maysano does not require enterprise data to be physically moved into its platform.')],
  ['Architecture page includes governed AI controls', architecture.includes('An LLM prompt does not enforce security.')],
  ['prerendered Kentaro archive', kentaro.includes('kentaro-hero__title-line kentaro-hero__title-line--light">An agentic business experience.</span>') && !kentaro.includes('The Office.') && kentaro.includes('Kentaro’s one-minute stories reveal the friction between business people and AI agents.') && kentaro.includes('Unclear mandates. Missing context. Authority without accountability.') && kentaro.includes('Kentaro Harness is being built to reduce that friction, giving people and agents a clearer way to work together.') && kentaro.includes('Watch Kentaro stories') && kentaro.includes('href="#featured-stories"') && kentaro.includes('Explore Kentaro Harness') && kentaro.includes('href="#kentaro-harness"') && kentaro.includes('Get new Kentaro stories by email') && kentaro.includes('href="#kentaro-subscribe"') && !kentaro.includes('Watch latest episode') && kentaro.includes('FEATURED EPISODES') && kentaro.includes('The friction, episode by episode.') && kentaro.includes('Kentaro does not fail because he lacks effort. He gets stuck') && kentaro.includes('Open the YouTube playlist') && !kentaro.includes('WATCH KENTARO AT WORK')],
  ['Kentaro archive introduces Kentaro immediately after the hero and before the friction comparison', kentaro.includes('MEET KENTARO') && kentaro.includes('Kentaro is an AI agent at work.') && kentaro.includes('Kentaro is the AI agent at the centre of these one-minute workplace stories.') && kentaro.includes('Kentaro takes the words literally and asks the questions people hoped would stay unasked.') && kentaro.indexOf('MEET KENTARO') > kentaro.indexOf('KENTARO AT WORK') && kentaro.indexOf('MEET KENTARO') < kentaro.indexOf('WHY THESE STORIES')],
  ['Kentaro archive presents the people-to-agent friction comparison before featured stories', kentaro.includes('WHY THESE STORIES') && kentaro.includes('Clear to people.<br/>Ambiguous to Kentaro.') && kentaro.includes('Business people work through shared history, informal decisions and assumptions that rarely appear in a brief. Kentaro does not have that social memory.') && kentaro.includes('Why Kentaro exists') && kentaro.includes('href="https://maysano.com/kentaro/why-kentaro-exists/"') && kentaro.includes('Take ownership.') && kentaro.includes('What decisions am I authorised to make?') && kentaro.includes('Use your judgment.') && kentaro.includes('Which judgment is approved, and by whom?') && kentaro.includes('Make it happen.') && kentaro.includes('What result counts as success?') && kentaro.includes('href="#featured-stories"') && kentaro.includes('href="#kentaro-harness"') && !kentaro.includes('WHY KENTARO IS IN TROUBLE') && kentaro.indexOf('WHY THESE STORIES') < kentaro.indexOf('FEATURED EPISODES')],
  ['Kentaro archive connects stories to the Harness and onward to its roadmap', kentaro.includes('THE KENTARO HARNESS') && kentaro.includes('A working agreement<br/>for people and agents.') && kentaro.includes('Kentaro turns business context into working context for an agent.') && kentaro.includes('Start from shared context') && kentaro.includes('Make the mandate explicit') && kentaro.includes('Keep people accountable') && kentaro.includes('See how Kentaro is being built') && kentaro.includes('View the Kentaro roadmap') && kentaro.includes('href="#kentaro-roadmap"') && !kentaro.includes('A working layer for shared context.') && !kentaro.includes('The stories show Kentaro in trouble.') && kentaro.indexOf('THE KENTARO HARNESS') > kentaro.indexOf('FEATURED EPISODES')],
  ['Kentaro archive shows the Harness delivery phases after the linked roadmap destination', kentaro.includes('id="kentaro-roadmap"') && kentaro.includes('KENTARO HARNESS ROADMAP') && kentaro.includes('From a business objective to evidence-backed delivery.') && kentaro.includes('Kentaro harness starts as a local harness that turns products, objectives, and use cases into governed execution packages.') && kentaro.includes('Each next phase extends that proven foundation, first into Maysano, then into agent clients and approved execution runtimes.') && kentaro.includes('v0.1.0 — Local governed Harness') && kentaro.includes('Kentaro v0.1.0 is released on GitHub and PyPI.') && kentaro.includes('https://github.com/Maysano/Kentaro/releases/tag/v0.1.0') && kentaro.includes('https://pypi.org/project/kentaro/') && kentaro.includes('read-only access through the Maysano Platform API') && kentaro.includes('v0.2 – Governed graph changes') && kentaro.includes('Create and update objectives, use cases and data products through approved Change Contracts.') && kentaro.includes('Kentaro keeps task-scoped context. Maysano validates and records every change.') && !kentaro.includes('Maysano Platform synchronisation') && kentaro.includes('v0.3 — Agent-client integrations') && kentaro.includes('Codex, Claude Code and OpenCode integrations') && kentaro.includes('same Kentaro core, CLI and schemas') && kentaro.includes('v0.4 — Optional external execution runtimes') && kentaro.includes('such as HarnessRouter') && !kentaro.includes('Local web experience') && kentaro.includes('Maysano portfolio and enterprise operations') && kentaro.includes('Released') && kentaro.includes('Active build target') && kentaro.indexOf('KENTARO HARNESS ROADMAP') > kentaro.indexOf('THE KENTARO HARNESS')],
  ['Kentaro archive answers v0.1 boundary questions before the email invitation', kentaro.includes('id="kentaro-faq"') && kentaro.includes('QUESTIONS PEOPLE ASK') && kentaro.includes('Clear boundaries for working with Kentaro.') && kentaro.includes('Does Kentaro make decisions or act on its own?') && kentaro.includes('It does not write to Maysano, execute business actions or process approvals.') && kentaro.includes('Who remains accountable for the outcome?') && kentaro.includes('People do.') && kentaro.includes('v0.1 is the released read-only local Harness.') && kentaro.includes('https://github.com/Maysano/Kentaro/blob/main/docs/roadmap.md') && kentaro.includes('"@type":"FAQPage"') && kentaro.indexOf('KENTARO HARNESS ROADMAP') < kentaro.indexOf('QUESTIONS PEOPLE ASK') && kentaro.indexOf('QUESTIONS PEOPLE ASK') < kentaro.indexOf('STAY WITH KENTARO')],
  ['Kentaro archive leads email invitations to its one configured MailerLite form', kentaro.includes('kentaro-featured-stories__subscribe-panel') && kentaro.includes('FOLLOW KENTARO') && kentaro.includes('Get the next story in your inbox.') && kentaro.includes('Join the Kentaro list') && kentaro.includes('id="kentaro-subscribe"') && kentaro.includes('STAY WITH KENTARO') && kentaro.includes('The next workplace problem is already on its way.') && kentaro.includes('Join the Kentaro list for new office stories, practical principles and updates on Kentaro Harness.') && kentaro.includes('class="ml-embedded" data-form="NdGxdW"') && !kentaro.includes('assets.mailerlite.com/jsonp/2642436/forms/201458879917196911/subscribe') && kentaro.includes('Help build the Harness.') && kentaro.includes('Tell us where human–agent work gets stuck:') && kentaro.includes('Report a human–agent issue') && kentaro.includes('Contribute code or improve the documentation') && kentaro.includes('https://github.com/Maysano/Kentaro/issues/new') && kentaro.indexOf('STAY WITH KENTARO') > kentaro.indexOf('MEET KENTARO')],
  ['Kentaro archive offers optional social follows beside its email invitation', kentaro.includes('Follow Kentaro') && kentaro.includes('https://x.com/KentaroAgent') && kentaro.includes('https://www.instagram.com/maysano_kentaro/') && kentaro.indexOf('https://x.com/KentaroAgent') > kentaro.indexOf('class="ml-embedded" data-form="NdGxdW"')],
  ['Kentaro archive canonical URL', kentaro.includes('<link rel="canonical" href="https://maysano.com/kentaro/"')],
  ['Kentaro archive has a dedicated rich social preview', hasKentaroSocialMetadata(kentaro)],
  ['Kentaro background page has a dedicated rich social preview', hasKentaroSocialMetadata(kentaroBackground)],
  ['Kentaro social image is a non-empty JPEG', kentaroSocialImage.length > 50_000 && kentaroSocialImage[0] === 0xff && kentaroSocialImage[1] === 0xd8],
  ['Kentaro archive serves WebP imagery', kentaroImageTags.length > 0 && kentaroImageTags.every((tag) => /\bsrc="[^"]+\.webp"/i.test(tag))],
  ['Kentaro archive serves a responsive hero and preloads its matching source', kentaro.includes('<source media="(max-width: 680px)" srcSet="../assets/kentaro-workplace-uncertainty-mobile-') && kentaro.includes('<link rel="preload" as="image" href="../assets/kentaro-workplace-uncertainty-mobile-') && kentaro.includes('media="(max-width: 680px)" fetchpriority="high"') && kentaro.includes('media="(min-width: 681px)" fetchpriority="high"')],
  ['Kentaro archive does not preload the homepage visual', !kentaro.includes('hero-portfolio-flow')],
  ['Kentaro archive serves its route stylesheet before hydration', Boolean(kentaroCssAsset) && kentaro.includes(`href="../assets/${kentaroCssAsset}"`)],
  ['prerendered Kentaro background page', kentaroBackground.includes('class="kentaro-hero"') && kentaroBackground.includes('Why Kentaro exists.') && kentaroBackground.includes('Explore Kentaro at Work') && kentaroBackground.includes('href="#why-this-topic"') && kentaroBackground.includes('The agent is not the whole story.') && kentaroBackground.includes('Business owner and agent.') && kentaroBackground.includes('Human. Agent. Harness.') && kentaroBackground.includes('The stories make the tension visible.') && kentaroBackground.includes('The solution is a clearer working relationship.') && kentaroBackground.includes('Further reading.')],
  ['Kentaro background page canonical URL', kentaroBackground.includes('<link rel="canonical" href="https://maysano.com/kentaro/why-kentaro-exists/"')],
  ['Kentaro background page keeps exploration boundary', kentaroBackground.includes('exploration and early work, not a claim that a final operating model already exists')],
  ['Kentaro background page links the source references', kentaroBackground.includes('https://doi.org/10.6028/NIST.AI.100-1') && kentaroBackground.includes('https://github.com/Maysano/Kentaro')],
  ['Kentaro archive shows three featured stories without archive controls', (kentaro.match(/class="kentaro-featured-card(?: |")/g) || []).length === 3 && kentaro.includes('I Expected Context… | Kentaro at Work #01') && kentaro.includes('What Makes a Good Decision? | Kentaro at Work #02') && kentaro.includes('We Need More Agents | Kentaro at Work #03') && kentaro.includes('Data without purpose') && kentaro.includes('Decision without context') && kentaro.includes('More agents, unclear roles') && kentaro.includes('kentaro-e01-') && kentaro.includes('kentaro-e02-') && kentaro.includes('kentaro-e03-') && kentaro.includes('Play I Expected Context… | Kentaro at Work #01') && kentaro.includes('Play What Makes a Good Decision? | Kentaro at Work #02') && kentaro.includes('Play We Need More Agents | Kentaro at Work #03') && !kentaro.includes('Ownership, Apparently') && !kentaro.includes('Search episodes') && !kentaro.includes('Filter episodes by topic') && !kentaro.includes('Sort episodes')],
  ['Kentaro archive presents equal story and Harness destinations', kentaro.includes('https://www.youtube.com/playlist?list=PLCfcf0t6CobQ') && kentaro.includes('target="_blank"') && kentaro.includes('rel="noreferrer"') && kentaro.includes('Watch the full Kentaro series on YouTube.') && kentaro.includes('Take the Harness and avoid the trouble.') && kentaro.includes('href="#kentaro-harness"')],
  ['Kentaro archive does not surface standalone episode pages', !kentaro.includes('/kentaro/episodes/')],
  ['Insights index has seven editorial cards', (insights.match(/class="insight-card(?: |")/g) || []).length === 7],
  ['contracts card targets the published Insight', insights.includes('href="https://maysano.com/insights/data-contracts-and-data-product-specifications/"')],
  ['governance card targets the published Insight', insights.includes('href="https://maysano.com/insights/traditional-governance-to-minimum-lovable-governance/"')],
  ['graph card targets the published Insight', insights.includes('href="https://maysano.com/insights/knowledge-graph-vs-ontology/"')],
  ['agents card targets the published Insight', insights.includes('href="https://maysano.com/insights/traditional-ai-agents-vs-governed-ai-agents/"')],
  ['delivery card targets the published Insight', insights.includes('href="https://maysano.com/insights/manual-vs-ai-assisted-governed-data-product-delivery/"')],
  ['control-plane card targets the published Insight', insights.includes('href="https://maysano.com/insights/ai-control-plane-vs-data-product-operating-layer/"')],
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
  ['prerendered control-plane Insight article', controlPlaneArticle.includes('AI Control Plane vs. Data Product Operating Layer: Why Enterprises Need Both')],
  ['control-plane Insight article canonical URL', controlPlaneArticle.includes('<link rel="canonical" href="https://maysano.com/insights/ai-control-plane-vs-data-product-operating-layer/"')],
  ['control-plane Insight article structured data', controlPlaneArticle.includes('"@type":"BlogPosting"')],
  ['control-plane Insight keeps technical-control boundary', controlPlaneArticle.includes('Maysano is not a substitute for an enterprise identity provider')],
  ['control-plane Insight links to Architecture', controlPlaneArticle.includes('href="https://maysano.com/architecture/"')],
  ...insightSocialImages.map(([label, document, file, alt]) => [`${label} has its branded social metadata`, hasInsightSocialMetadata(document, file, alt)]),
  ['Insight social images are 1200 by 630 PNGs', insightSocialImageSizes.every(Boolean)],
  ['custom 404 links home', notFound.includes('href="https://maysano.com/"')],
  ['all built images are WebP', !/<img[^>]+src="[^"]+\.(?:png|jpe?g)\b/i.test(html)],
  ['all images have alt text', imageTags.every((tag) => /\balt="[^"]*"/.test(tag))],
  ['all images reserve dimensions', imageTags.every((tag) => /\bwidth="\d+"/.test(tag) && /\bheight="\d+"/.test(tag))],
  ['all internal section links resolve', hashTargets.every((id) => html.includes(`id="${id}"`))],
  ['prerendered asset paths remain portable', !/\b(?:src|href)="\/(?!\/)/.test(html)],
  ['initial JavaScript chunk stays below 250 kB uncompressed', largestJavaScriptBytes < 250_000],
  ['initial JavaScript chunk stays below 175 kB uncompressed', initialJavaScriptBytes < 175_000],
  ['CSS stays below 100 kB uncompressed', cssBytes < 100_000],
]

const failures = checks.filter(([, passed]) => !passed)
if (failures.length) {
  for (const [label] of failures) console.error(`FAIL ${label}`)
  process.exit(1)
}

for (const [label] of checks) console.log(`PASS ${label}`)
