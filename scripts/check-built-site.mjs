import { readFile, readdir, stat } from 'node:fs/promises'

const [html, insights, architecture, kentaro, kentaroBackground, kentaroEpisode, article, contractsArticle, governanceArticle, graphArticle, agentsArticle, deliveryArticle, controlPlaneArticle, robots, sitemap, llms, notFound] = await Promise.all([
  readFile(new URL('../dist/index.html', import.meta.url), 'utf8'),
  readFile(new URL('../dist/insights/index.html', import.meta.url), 'utf8'),
  readFile(new URL('../dist/architecture/index.html', import.meta.url), 'utf8'),
  readFile(new URL('../dist/kentaro/index.html', import.meta.url), 'utf8'),
  readFile(new URL('../dist/kentaro/why-kentaro-exists/index.html', import.meta.url), 'utf8'),
  readFile(new URL('../dist/kentaro/episodes/ownership-apparently/index.html', import.meta.url), 'utf8'),
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
  ['Kentaro episode pages in sitemap', ['ownership-apparently', 'meeting-he-wasnt-in', 'brief-that-wasnt', 'can-you-fix-it', 'approved-by-nobody', 'one-small-extra-thing', 'the-data-is-there', 'new-team-member'].every((slug) => sitemap.includes(`<loc>https://maysano.com/kentaro/episodes/${slug}/</loc>`))],
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
  ['prerendered Kentaro archive', kentaro.includes('kentaro-hero__title-line kentaro-hero__title-line--light">An agentic business experience.</span>') && !kentaro.includes('The Office.') && kentaro.includes('Kentaro’s one-minute stories reveal the friction between business people and AI agents.') && kentaro.includes('Unclear mandates. Missing context. Authority without accountability.') && kentaro.includes('Kentaro Harness is being built to reduce that friction, giving people and agents a clearer way to work together.') && kentaro.includes('Watch Kentaro stories') && kentaro.includes('href="#episodes"') && kentaro.includes('Explore Kentaro Harness') && kentaro.includes('href="#kentaro-harness"') && !kentaro.includes('Watch latest episode') && kentaro.includes('THE FRICTION, EPISODE BY EPISODE') && kentaro.includes('One-minute stories about work that was never made clear.') && kentaro.includes('Kentaro does not fail because he lacks effort.') && kentaro.includes('THE WORKPLACE PROBLEMS KENTARO EXPOSES') && kentaro.includes('See how Kentaro Harness is being built to reduce this friction') && !kentaro.includes('WATCH KENTARO AT WORK') && !kentaro.includes('One-minute stories about business people and AI agents.')],
  ['Kentaro archive introduces Kentaro immediately after the hero and before the friction comparison', kentaro.includes('MEET KENTARO') && kentaro.includes('Kentaro is an AI agent at work.') && kentaro.includes('Kentaro is the AI agent at the centre of these one-minute workplace stories.') && kentaro.includes('Kentaro takes the words literally and asks the questions people hoped would stay unasked.') && kentaro.indexOf('MEET KENTARO') > kentaro.indexOf('KENTARO AT WORK') && kentaro.indexOf('MEET KENTARO') < kentaro.indexOf('WHY THESE STORIES')],
  ['Kentaro archive presents the people-to-agent friction comparison before the stories', kentaro.includes('WHY THESE STORIES') && kentaro.includes('Clear to people.<br/>Ambiguous to Kentaro.') && kentaro.includes('Business people work through shared history, informal decisions and assumptions that rarely appear in a brief. Kentaro does not have that social memory.') && kentaro.includes('Take ownership.') && kentaro.includes('What decisions am I authorised to make?') && kentaro.includes('Use your judgment.') && kentaro.includes('Which judgment is approved, and by whom?') && kentaro.includes('Make it happen.') && kentaro.includes('What result counts as success?') && kentaro.includes('href="#episodes"') && kentaro.includes('href="#kentaro-harness"') && !kentaro.includes('WHY KENTARO IS IN TROUBLE') && kentaro.indexOf('WHY THESE STORIES') < kentaro.indexOf('THE FRICTION, EPISODE BY EPISODE')],
  ['Kentaro archive connects stories to the Harness and onward to its roadmap', kentaro.includes('THE KENTARO HARNESS') && kentaro.includes('A working agreement<br/>for people and agents.') && kentaro.includes('Kentaro turns business context into working context for an agent.') && kentaro.includes('Start from shared context') && kentaro.includes('Make the mandate explicit') && kentaro.includes('Keep people accountable') && kentaro.includes('See how Kentaro is being built') && kentaro.includes('View the Kentaro roadmap') && kentaro.includes('href="#kentaro-roadmap"') && !kentaro.includes('A working layer for shared context.') && !kentaro.includes('The stories show Kentaro in trouble.') && kentaro.indexOf('THE KENTARO HARNESS') > kentaro.indexOf('THE FRICTION, EPISODE BY EPISODE')],
  ['Kentaro archive shows the Harness delivery phases after the linked roadmap destination', kentaro.includes('id="kentaro-roadmap"') && kentaro.includes('KENTARO HARNESS ROADMAP') && kentaro.includes('From a business objective to evidence-backed delivery.') && kentaro.includes('Kentaro harness starts as a local harness that turns products, objectives, and use cases into governed execution packages.') && kentaro.includes('Each next phase extends that proven foundation, first into Maysano, then into agent clients and approved execution runtimes.') && kentaro.includes('v0.1 — Local governed Harness') && kentaro.includes('kentaro-harness on PyPI') && kentaro.includes('read-only access through the Maysano Platform API') && kentaro.includes('v0.2 — Maysano Platform synchronisation') && kentaro.includes('v0.3 — Agent-client integrations') && kentaro.includes('Codex, Claude Code and OpenCode integrations') && kentaro.includes('same Kentaro core, CLI and schemas') && kentaro.includes('v0.4 — Optional external execution runtimes') && kentaro.includes('such as HarnessRouter') && !kentaro.includes('Local web experience') && kentaro.includes('Maysano portfolio and enterprise operations') && kentaro.includes('Active build target') && kentaro.indexOf('KENTARO HARNESS ROADMAP') > kentaro.indexOf('THE KENTARO HARNESS')],
  ['Kentaro archive pairs equal update and Harness panels with a MailerLite form and contribution route', kentaro.includes('kentaro-follow__grid') && kentaro.includes('kentaro-follow__column--updates') && kentaro.includes('kentaro-follow__column--harness') && kentaro.includes('KEEP UP WITH KENTARO') && kentaro.includes('Follow Kentaro’s next assignment.') && kentaro.includes('New Kentaro stories and Harness development updates.') && kentaro.includes('action="https://assets.mailerlite.com/jsonp/2642436/forms/201458879917196911/subscribe"') && kentaro.includes('name="fields[email]"') && kentaro.includes('Get updates') && kentaro.includes('Help build the Harness.') && kentaro.includes('Kentaro is open source, and contributions are welcome.') && kentaro.includes('Contribute on GitHub') && kentaro.indexOf('KEEP UP WITH KENTARO') > kentaro.indexOf('MEET KENTARO')],
  ['Kentaro archive canonical URL', kentaro.includes('<link rel="canonical" href="https://maysano.com/kentaro/"')],
  ['Kentaro archive has a dedicated rich social preview', hasKentaroSocialMetadata(kentaro)],
  ['Kentaro background page has a dedicated rich social preview', hasKentaroSocialMetadata(kentaroBackground)],
  ['Kentaro episode page has a dedicated rich social preview', hasKentaroSocialMetadata(kentaroEpisode)],
  ['Kentaro social image is a non-empty JPEG', kentaroSocialImage.length > 50_000 && kentaroSocialImage[0] === 0xff && kentaroSocialImage[1] === 0xd8],
  ['Kentaro archive serves WebP imagery', kentaroImageTags.length > 0 && kentaroImageTags.every((tag) => /\bsrc="[^"]+\.webp"/i.test(tag))],
  ['Kentaro archive preloads its own hero image', kentaro.includes('<link rel="preload" as="image" href="../assets/kentaro-workplace-uncertainty-') && kentaro.includes('fetchpriority="high"')],
  ['Kentaro archive does not preload the homepage visual', !kentaro.includes('hero-portfolio-flow')],
  ['Kentaro archive serves its route stylesheet before hydration', Boolean(kentaroCssAsset) && kentaro.includes(`href="../assets/${kentaroCssAsset}"`)],
  ['prerendered Kentaro background page', kentaroBackground.includes('<h1>Why Kentaro Exists</h1>') && kentaroBackground.includes('The agent is not the whole story.') && kentaroBackground.includes('Business owner and agent.') && kentaroBackground.includes('Human. Agent. Harness.') && kentaroBackground.includes('The stories make the tension visible.') && kentaroBackground.includes('The solution is a clearer working relationship.') && kentaroBackground.includes('Further reading.')],
  ['Kentaro background page canonical URL', kentaroBackground.includes('<link rel="canonical" href="https://maysano.com/kentaro/why-kentaro-exists/"')],
  ['Kentaro background page keeps exploration boundary', kentaroBackground.includes('exploration and early work, not a claim that a final operating model already exists')],
  ['Kentaro background page links the source references', kentaroBackground.includes('https://doi.org/10.6028/NIST.AI.100-1') && kentaroBackground.includes('https://github.com/Maysano/Kentaro')],
  ['Kentaro archive shows eight episode stories without archive controls', (kentaro.match(/class="kentaro-episode-card(?: |")/g) || []).length === 8 && kentaro.includes('Ownership, Apparently') && kentaro.includes('The New Team Member') && kentaro.includes('Friction: undefined role') && kentaro.includes('Friction: data without purpose') && kentaro.includes('Friction: scope without a renewed mandate') && (kentaro.match(/Watch episode/g) || []).length === 8 && !kentaro.includes('Search episodes') && !kentaro.includes('Filter episodes by topic') && !kentaro.includes('Sort episodes')],
  ['Kentaro archive has no configured YouTube videos', !kentaro.includes('i.ytimg.com/vi/') && !kentaro.includes('youtube-nocookie.com/embed/') && !kentaro.includes('Watch on YouTube')],
  ['prerendered Kentaro episode page', kentaroEpisode.includes('Ownership, Apparently') && kentaroEpisode.includes('THE SCENE') && kentaroEpisode.includes('What does ownership mean?') && kentaroEpisode.includes('Business owner') && kentaroEpisode.includes('Kentaro') && kentaroEpisode.includes('THE HIDDEN PROBLEM') && kentaroEpisode.includes('Ownership is not a mandate.') && kentaroEpisode.includes('BEFORE THE AGENT STARTS') && kentaroEpisode.includes('Role') && kentaroEpisode.includes('Scope') && kentaroEpisode.includes('Approval points') && kentaroEpisode.includes('Accountable owner') && kentaroEpisode.includes('FROM STORY TO HARNESS') && kentaroEpisode.includes('Turn ownership into decision rights.') && !kentaroEpisode.includes('Episode video coming soon') && !kentaroEpisode.includes('No later story')],
  ['Kentaro episode canonical URL', kentaroEpisode.includes('<link rel="canonical" href="https://maysano.com/kentaro/episodes/ownership-apparently/"')],
  ['Kentaro episode has the episode-specific title tag', kentaroEpisode.includes('<title>Ownership, Apparently | Kentaro at Work</title>')],
  ['Kentaro episode has article and breadcrumb structured data', kentaroEpisode.includes('"@type":"BlogPosting"') && kentaroEpisode.includes('"@type":"BreadcrumbList"') && kentaroEpisode.includes('Kentaro at Work')],
  ['Kentaro episode uses configured 4 by 5 video aspect ratio', kentaroEpisode.includes('aspect-ratio:4 / 5')],
  ['Kentaro episode has no configured YouTube embed', !kentaroEpisode.includes('youtube-nocookie.com/embed/') && !kentaroEpisode.includes('Play episode')],
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
