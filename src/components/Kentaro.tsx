import { useState } from 'react'
import kentaroBadgeImage from '../assets/kentaro/kentaro-badge.png'
import kentaroPaperMountainImage from '../assets/kentaro/kentaro-paper-mountain.png'
import kentaroWorkplaceUncertaintyImage from '../assets/kentaro/kentaro-workplace-uncertainty.png'
import { siteConfig } from '../config/site'
import {
  getKentaroEpisode,
  kentaroEpisodes,
  publishedKentaroEpisodes,
  type KentaroEpisode,
} from '../content/kentaroEpisodes'
import { Footer } from './Footer'
import { Header } from './Header'
import { KentaroUpdatesForm } from './KentaroUpdatesForm'

const kentaroBaseUrl = `${siteConfig.siteUrl}kentaro/`
const kentaroHarnessUrl = 'https://github.com/Maysano/Kentaro'
const episodeHref = (episode: KentaroEpisode) => `${kentaroBaseUrl}episodes/${episode.slug}/`
const episodeNumber = (episode: KentaroEpisode) => `Episode ${String(episode.episodeNumber).padStart(2, '0')}`
const episodeStill = (episode: KentaroEpisode) => episode.thumbnail ?? (episode.episodeNumber % 2 === 0 ? kentaroPaperMountainImage : kentaroBadgeImage)
const episodeStillAlt = (episode: KentaroEpisode) => episode.thumbnailAlt ?? 'Kentaro at work in an office.'

const kentaroRoadmap = [
  { phase: 'Phase 0', title: 'Product foundation', summary: 'Establish the MIT-licensed GitHub project, package skeleton, release workflow, product schemas and a demonstrable reference use case.', status: 'Foundation' },
  { phase: 'Phase 1', title: 'v0.1 — Local governed Harness', summary: 'Publish kentaro-harness on PyPI. Initialise a Codex project, run the CLI from use case to execution, evidence and report, with local or cloud model configuration and read-only access through the Maysano Platform API.', status: 'Active build target', active: true },
  { phase: 'Phase 2', title: 'v0.2 — Maysano Platform synchronisation', summary: 'Expand the existing API connection with tested authenticated read and write synchronisation of products, objectives and use cases.', status: 'Planned' },
  { phase: 'Phase 3', title: 'v0.3 — Agent-client integrations', summary: 'Add Codex, Claude Code and OpenCode integrations on the same Kentaro core, CLI and schemas, with the MCP server, structured JSON, reusable templates and stronger gates.', status: 'Planned' },
  { phase: 'Phase 4', title: 'v0.4 — Optional external execution runtimes', summary: 'Add optional external execution runtimes, such as HarnessRouter, while Kentaro keeps governance, evidence and customer-controlled credentials comparable.', status: 'Planned' },
  { phase: 'Phase 5', title: 'Maysano portfolio and enterprise operations', summary: 'Build the user-facing platform, portfolio view, platform-hosted agents and organisation-level governance above the proven Harness connection.', status: 'Planned' },
]

const kentaroFollowPanelStyles = `
  .kentaro-follow__grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0; }
  .kentaro-follow__column { min-width: 0; }
  .kentaro-follow__column--updates { padding-right: clamp(40px, 6vw, 96px); }
  .kentaro-follow__column--harness { padding-left: clamp(40px, 6vw, 96px); border-left: 1px solid hsl(var(--navy-foreground) / 0.2); }
  @media (max-width: 900px) {
    .kentaro-follow__grid { grid-template-columns: 1fr; gap: 36px; }
    .kentaro-follow__column--updates { padding-right: 0; padding-bottom: 36px; border-bottom: 1px solid hsl(var(--navy-foreground) / 0.2); }
    .kentaro-follow__column--harness { padding-left: 0; border-left: 0; }
  }
`

function KentaroStructuredData({ episode }: { episode?: KentaroEpisode }) {
  const url = episode ? episodeHref(episode) : kentaroBaseUrl
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: episode ? `${episode.title} | Kentaro` : 'Kentaro | Maysano',
    description: episode?.description ?? 'One-minute stories about an AI agent working with humans.',
    isPartOf: { '@id': `${siteConfig.siteUrl}#website` },
    inLanguage: 'en',
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

function EpisodeMedia({ episode, playable = false, presentation = 'detail' }: { episode: KentaroEpisode; playable?: boolean; presentation?: 'detail' | 'card' }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const still = episodeStill(episode)
  const stillAlt = episodeStillAlt(episode)

  if (!episode.youtubeVideoId) {
    return (
      <figure className={`kentaro-episode-media kentaro-episode-media--poster kentaro-episode-media--${presentation}`} style={{ aspectRatio: episode.videoAspectRatio }}>
        <img src={still} alt={stillAlt} />
        <figcaption>Episode video coming soon</figcaption>
      </figure>
    )
  }

  if (!playable || !isPlaying) {
    return (
      <button
        className={`kentaro-episode-media kentaro-episode-media--ready kentaro-episode-media--${presentation}`}
        style={{ aspectRatio: episode.videoAspectRatio }}
        type="button"
        aria-label={`Play ${episode.title}`}
        onClick={() => setIsPlaying(true)}
      >
        <img src={still} alt={stillAlt} />
        <span className="kentaro-play-label">Play episode</span>
      </button>
    )
  }

  return (
    <iframe
      className={`kentaro-episode-media kentaro-episode-media--player kentaro-episode-media--${presentation}`}
      style={{ aspectRatio: episode.videoAspectRatio }}
      src={`https://www.youtube-nocookie.com/embed/${episode.youtubeVideoId}`}
      title={`Kentaro: ${episode.title}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    />
  )
}

function EpisodeCard({ episode }: { episode: KentaroEpisode }) {
  const isPublished = episode.status === 'published'

  return (
    <article className={`kentaro-episode-card ${isPublished ? '' : 'kentaro-episode-card--coming-soon'}`}>
      {episode.youtubeVideoId ? (
        <EpisodeMedia episode={episode} playable presentation="card" />
      ) : !isPublished ? (
        <div className="kentaro-episode-card__media" aria-hidden="true">
          <span className="kentaro-thumbnail-pending kentaro-thumbnail-pending--coming">
            <small>{episodeNumber(episode)}</small>
            <strong>Coming soon</strong>
          </span>
        </div>
      ) : (
        <a className="kentaro-episode-card__media" href={episodeHref(episode)} aria-label={`Open ${episode.title}`}>
          {episode.thumbnail ? (
            <img src={episode.thumbnail} alt={episode.thumbnailAlt ?? ''} />
          ) : (
            <img src={episodeStill(episode)} alt={episodeStillAlt(episode)} />
          )}
        </a>
      )}
      <div className="kentaro-episode-card__content">
        <p className="kentaro-episode-card__number">{episodeNumber(episode)}</p>
        <h3>{isPublished ? <a href={episodeHref(episode)}>{episode.title}</a> : episode.title}</h3>
        {episode.description && <p>{episode.description}</p>}
        <div className="kentaro-episode-card__meta">
          {episode.duration && <span>{episode.duration}</span>}
          {isPublished && <a className="kentaro-episode-card__watch" href={episodeHref(episode)}>Watch episode <span aria-hidden="true">→</span></a>}
          {episode.status === 'comingSoon' && <span>Coming soon</span>}
        </div>
      </div>
    </article>
  )
}

function EpisodeLibrary() {
  const featuredEpisodes = [...publishedKentaroEpisodes]
    .sort((a, b) => b.episodeNumber - a.episodeNumber)

  return (
    <section className="kentaro-library section" id="episodes" aria-labelledby="kentaro-episodes-title">
      <div className="container">
        <div className="section-intro">
          <p className="eyebrow">WATCH KENTARO AT WORK</p>
          <h2 id="kentaro-episodes-title">One-minute stories about business people and AI agents.</h2>
          <p className="section-copy">Every story starts with ordinary work. Then the missing context, unclear mandate, or blurred accountability becomes visible.</p>
        </div>
        <div className="kentaro-episode-grid">
          {featuredEpisodes.map((episode) => <EpisodeCard key={episode.id} episode={episode} />)}
        </div>
      </div>
    </section>
  )
}

function KentaroHome() {
  return (
    <>
      <KentaroStructuredData />
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header activePath="kentaro" />
      <main id="main-content">
        <section className="kentaro-hero">
          <div className="container kentaro-hero__grid">
            <div className="kentaro-hero__copy">
              <p className="eyebrow">KENTARO AT WORK</p>
              <h1>
                <span className="kentaro-hero__title-line kentaro-hero__title-line--light">The Office.</span>
                <span className="kentaro-hero__title-line kentaro-hero__title-line--sage">An agentic experience.</span>
              </h1>
              <p className="kentaro-hero__lead">Kentaro’s one-minute stories reveal the friction between business people and AI agents.<br />Unclear mandates. Missing context. Authority without accountability.</p>
              <p className="kentaro-hero__supporting">Kentaro Harness is being built to reduce that friction, giving people and agents a clearer way to work together.</p>
              <div className="kentaro-hero__actions">
                <a className="button button--light" href="#episodes">Watch Kentaro stories <span aria-hidden="true">↓</span></a>
                <a className="text-link text-link--light" href="#kentaro-harness">Explore Kentaro Harness <span aria-hidden="true">↓</span></a>
              </div>
            </div>
            <figure className="kentaro-hero__image">
              <img src={kentaroWorkplaceUncertaintyImage} alt="Kentaro navigates workplace uncertainty across meetings, requests and paperwork." width="1448" height="1086" />
            </figure>
          </div>
        </section>
        <section className="kentaro-character section" aria-labelledby="kentaro-character-title">
          <div className="container kentaro-character__grid">
            <figure className="kentaro-character__image">
              <img src={kentaroBadgeImage} alt="Kentaro straightens his purple badge in an office." width="1448" height="1086" loading="lazy" />
            </figure>
            <div className="kentaro-character__copy">
              <p className="eyebrow">MEET KENTARO</p>
              <h2 id="kentaro-character-title">Kentaro is an AI agent at work.</h2>
              <p>Kentaro is the AI agent at the centre of these one-minute workplace stories. His job is to turn ordinary business instructions, documents and decisions into useful work.</p>
              <p>That sounds simple until the brief is unclear or the authority is missing. Kentaro takes the words literally and asks the questions people hoped would stay unasked.</p>
              <p>Before a difficult conversation, he straightens his purple badge. When he tilts his head, someone is about to explain an assumption they forgot to mention.</p>
              <blockquote>“I found the single source of truth. There are four.”</blockquote>
            </div>
          </div>
        </section>
        <section className="kentaro-purpose section" aria-labelledby="kentaro-purpose-title">
          <div className="container kentaro-purpose__grid">
            <div className="kentaro-purpose__heading">
              <p className="eyebrow">WHY KENTARO IS IN TROUBLE</p>
              <h2 id="kentaro-purpose-title">The work starts before the prompt.</h2>
            </div>
            <div className="kentaro-purpose__copy">
              <p>Kentaro is an agent in trouble. AI agents are entering ordinary work, where they meet unclear requirements, competing priorities, old documents, and words that mean different things to different people.</p>
              <p>The result is often blamed on the agent.</p>
              <p>Kentaro shows the other side. He takes workplace language seriously. When the business owner says everything is Priority One, Kentaro starts everything. When the business owner asks for speed, Kentaro optimises the number. When the business owner says, “Use your judgment,” Kentaro asks which judgment is approved.</p>
              <p>The stories raise these tensions to the surface through office comedy. Each episode ends with one practical principle for working with agents.</p>
              <ul className="kentaro-purpose__statements">
                <li><strong>Business context</strong><span>Not missing history.</span></li>
                <li><strong>Definition of success</strong><span>Not a KPI.</span></li>
                <li><strong>Trade-offs</strong><span>Not priority labels.</span></li>
                <li><strong>A working Harness</strong><span>Not another prompt.</span></li>
              </ul>
              <p>Kentaro Harness is being built as an open-source working layer that gives agents the context, mandate, boundaries, and approval path needed to work with people.</p>
            </div>
          </div>
        </section>
        <EpisodeLibrary />
        <section id="kentaro-harness" className="kentaro-harness section" aria-labelledby="kentaro-harness-title">
          <div className="container kentaro-harness__grid">
            <div className="kentaro-harness__heading">
              <p className="eyebrow">THE KENTARO HARNESS</p>
              <h2 id="kentaro-harness-title">The stories show Kentaro in trouble.<br /><span className="kentaro-harness__title-highlight" style={{ color: 'hsl(var(--lime))' }}>The Harness changes the collaboration.</span></h2>
              <p>Open-source, MIT-licensed and made for people and agents to work from shared context.</p>
            </div>
            <div className="kentaro-harness__copy">
              <p>Kentaro is the open-source Agentic Maysano Harness for governed local execution. Phase 3 adds Codex, Claude Code and OpenCode as agent-client integrations on the same Kentaro core.</p>
              <p>The Harness requires a Maysano Platform API key in every version. v0.1 uses the API read-only; v0.2 adds tested synchronisation of products, objectives and use cases.</p>
              <p>The episodes show what happens when Kentaro has to infer human intent alone. The Harness helps lift that friction by giving people and the agent the same business context, structured artefacts, working rules, approved tools and human approval boundaries.</p>
              <ul className="kentaro-harness__principles">
                <li><strong>Start from the same context</strong><span>Objectives, use cases, data products and evidence travel with the agent.</span></li>
                <li><strong>Make decisions explicit</strong><span>Working rules, approved tools and human approval remain clear to people and the agent.</span></li>
                <li><strong>Keep collaboration reviewable</strong><span>Maysano provides the user-facing platform, portfolio view and platform-hosted agents above the local Harness.</span></li>
              </ul>
              <p className="kentaro-harness__contribute"><strong>You can help too.</strong> Kentaro is open source, and contributions are welcome.</p>
              <a className="button button--light" href={kentaroHarnessUrl} target="_blank" rel="noreferrer" aria-label="Contribute to Kentaro on GitHub">Contribute to Kentaro on GitHub <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>
        <section className="section" aria-labelledby="kentaro-roadmap-title" style={{ background: 'hsl(var(--secondary))' }}>
          <div className="container">
            <div className="section-intro">
              <p className="eyebrow">KENTARO HARNESS ROADMAP</p>
              <h2 id="kentaro-roadmap-title">From a business objective to evidence-backed delivery.</h2>
              <p className="section-copy">Kentaro harness starts as a local harness that turns products, objectives, and use cases into governed execution packages. Each next phase extends that proven foundation, first into Maysano, then into agent clients and approved execution runtimes.</p>
            </div>
            <ol className="kentaro-roadmap-grid kentaro-episode-grid" aria-label="Kentaro delivery roadmap" style={{ margin: 0, padding: 0, listStyle: 'none' }}>
              {kentaroRoadmap.map((phase) => (
                <li key={phase.phase} className="kentaro-roadmap-card kentaro-episode-card" style={phase.active ? { borderColor: 'hsl(var(--primary))', background: 'hsl(var(--accent))' } : undefined}>
                  <div className="kentaro-episode-card__content">
                    <p className="kentaro-episode-card__number">{phase.phase}</p>
                    <h3>{phase.title}</h3>
                    <p>{phase.summary}</p>
                    <div className="kentaro-episode-card__meta"><span>{phase.status}</span></div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
        <section className="kentaro-follow" aria-labelledby="kentaro-follow-title">
          <style>{kentaroFollowPanelStyles}</style>
          <div className="container kentaro-harness__grid kentaro-follow__grid">
            <div className="kentaro-follow__column kentaro-follow__column--updates" style={{ display: 'flex', flexDirection: 'column' }}>
              <p className="eyebrow">KEEP UP WITH KENTARO</p>
              <div className="kentaro-harness__copy" style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
                <h2 id="kentaro-follow-title">Follow Kentaro’s next assignment.</h2>
                <p style={{ marginTop: 'auto' }}>New Kentaro stories and Harness development updates. Same reasonable questions.</p>
                <KentaroUpdatesForm />
                <small>A series by Maysano.</small>
              </div>
            </div>
            <div className="kentaro-follow__column kentaro-follow__column--harness" style={{ display: 'flex', flexDirection: 'column' }}>
              <p className="eyebrow">THE KENTARO HARNESS</p>
              <div className="kentaro-harness__copy" style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
                <h2>Help build the Harness.</h2>
                <p style={{ marginTop: 'auto' }}>Kentaro is open source, and contributions are welcome. Explore the Agentic Maysano Harness and help make human–agent collaboration clearer.</p>
                <a className="button button--light" href={kentaroHarnessUrl} target="_blank" rel="noreferrer">Contribute on GitHub <span aria-hidden="true">↗</span></a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

const kentaroEpisodePageStyles = `
  .kentaro-episode-page__hero { padding: clamp(42px, 6vw, 84px) 0; }
  .kentaro-episode-page__hero-grid { display: grid; grid-template-columns: minmax(0, .9fr) minmax(320px, .78fr); align-items: center; gap: clamp(44px, 8vw, 120px); }
  .kentaro-episode-page__hero-copy { max-width: 650px; }
  .kentaro-episode-page__hero .kentaro-back::before { content: none; }
  .kentaro-episode-page__hero .kentaro-back { margin-bottom: clamp(38px, 6vw, 72px); }
  .kentaro-episode-page__hero h1 { max-width: 630px; margin-bottom: 20px; font-size: clamp(3.2rem, 5.4vw, 5.8rem); }
  .kentaro-episode-page__summary { max-width: 570px; margin: 0; color: hsl(var(--navy-foreground) / .8); font-size: clamp(1.06rem, 1.5vw, 1.22rem); line-height: 1.58; }
  .kentaro-episode-page__video { width: min(100%, 440px); justify-self: end; }
  .kentaro-episode-page__video .kentaro-episode-media { width: 100%; }
  .kentaro-episode-media--poster { position: relative; overflow: hidden; margin: 0; border: 1px solid hsl(var(--navy-foreground) / .24); border-radius: 9px; background: hsl(var(--navy) / .5); }
  .kentaro-episode-media--poster img { display: block; width: 100%; height: 100%; object-fit: cover; }
  .kentaro-episode-media--poster figcaption { position: absolute; right: 14px; bottom: 14px; padding: 8px 10px; background: hsl(var(--navy) / .88); color: hsl(var(--lime)); font-size: .68rem; font-weight: 700; letter-spacing: .09em; text-transform: uppercase; }
  .kentaro-episode-page__story-section { padding: clamp(68px, 9vw, 128px) 0; }
  .kentaro-episode-page__story-section--paper { background: hsl(var(--secondary)); }
  .kentaro-episode-page__story-section--navy { background: hsl(var(--navy)); color: hsl(var(--navy-foreground)); }
  .kentaro-episode-page__story-grid { display: grid; grid-template-columns: minmax(220px, .66fr) minmax(0, 1fr); align-items: start; gap: clamp(48px, 10vw, 170px); }
  .kentaro-episode-page__story-heading { max-width: 390px; }
  .kentaro-episode-page__story-heading .eyebrow { margin-bottom: 17px; color: hsl(var(--primary)); }
  .kentaro-episode-page__story-section--navy .eyebrow { color: hsl(var(--lime)); }
  .kentaro-episode-page__story-heading h2 { margin: 0; color: hsl(var(--heading)); font-size: clamp(2.3rem, 4vw, 4.1rem); letter-spacing: -.065em; line-height: .96; }
  .kentaro-episode-page__story-section--navy .kentaro-episode-page__story-heading h2 { color: hsl(var(--navy-foreground)); }
  .kentaro-episode-page__story-copy { max-width: 720px; }
  .kentaro-episode-page__story-copy p { margin: 0 0 20px; color: hsl(var(--muted-foreground)); font-size: 1.04rem; line-height: 1.76; }
  .kentaro-episode-page__story-copy p:last-child { margin-bottom: 0; }
  .kentaro-episode-page__story-section--navy .kentaro-episode-page__story-copy p { color: hsl(var(--navy-foreground) / .8); }
  .kentaro-episode-page__principle-statement { margin: 0 0 25px !important; padding: clamp(24px, 3vw, 36px); border-left: 3px solid hsl(var(--primary)); background: hsl(var(--accent)); color: hsl(var(--heading)) !important; font-size: clamp(1.3rem, 2.1vw, 1.82rem) !important; font-weight: 700; letter-spacing: -.045em; line-height: 1.18 !important; }
  .kentaro-episode-page__harness-cta { display: inline-flex; align-items: center; gap: 9px; margin-top: 14px; color: hsl(var(--lime)); font-size: .92rem; font-weight: 700; text-decoration: none; }
  .kentaro-episode-page__harness-cta:hover { text-decoration: underline; text-underline-offset: 5px; }
  .kentaro-episode-continue { padding: clamp(62px, 8vw, 110px) 0; background: hsl(var(--navy)); }
  .kentaro-episode-continue__grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); border-top: 1px solid hsl(var(--navy-foreground) / .22); border-bottom: 1px solid hsl(var(--navy-foreground) / .22); }
  .kentaro-episode-continue__item { display: grid; gap: 10px; min-height: 144px; align-content: center; padding: 24px clamp(20px, 3vw, 42px); border-left: 1px solid hsl(var(--navy-foreground) / .22); color: hsl(var(--navy-foreground)); text-decoration: none; }
  .kentaro-episode-continue__item:first-child { border-left: 0; }
  .kentaro-episode-continue__item small { color: hsl(var(--lime)); font-size: .68rem; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; }
  .kentaro-episode-continue__item strong { font-size: clamp(1.15rem, 1.65vw, 1.5rem); letter-spacing: -.045em; line-height: 1.1; }
  .kentaro-episode-continue__item:not([aria-disabled="true"]):hover { background: hsl(var(--navy-foreground) / .07); }
  .kentaro-episode-continue__item[aria-disabled="true"] { opacity: .56; }
  @media (max-width: 900px) {
    .kentaro-episode-page__hero-grid, .kentaro-episode-page__story-grid { grid-template-columns: 1fr; gap: 30px; }
    .kentaro-episode-page__video { width: min(100%, 500px); justify-self: start; }
    .kentaro-episode-page__story-heading { max-width: 620px; }
  }
  @media (max-width: 680px) {
    .kentaro-episode-page__hero { padding: 30px 0 62px; }
    .kentaro-episode-page__hero h1 { font-size: clamp(2.8rem, 13vw, 4.3rem); }
    .kentaro-episode-page__story-heading h2 { font-size: clamp(2.25rem, 10vw, 3.2rem); }
    .kentaro-episode-page__story-copy p { font-size: .98rem; line-height: 1.7; }
    .kentaro-episode-continue__grid { grid-template-columns: 1fr; }
    .kentaro-episode-continue__item { min-height: 0; padding: 22px 0; border-top: 1px solid hsl(var(--navy-foreground) / .22); border-left: 0; }
    .kentaro-episode-continue__item:first-child { border-top: 0; }
  }
`

function KentaroEpisodePage({ episode }: { episode: KentaroEpisode }) {
  const index = publishedKentaroEpisodes.findIndex((item) => item.id === episode.id)
  const previous = index > 0 ? publishedKentaroEpisodes[index - 1] : null
  const next = index >= 0 && index < publishedKentaroEpisodes.length - 1 ? publishedKentaroEpisodes[index + 1] : null

  return (
    <>
      <KentaroStructuredData episode={episode} />
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header activePath="kentaro" />
      <main id="main-content">
        <article className="kentaro-episode-page">
          <style>{kentaroEpisodePageStyles}</style>
          <header className="kentaro-episode-page__hero">
            <div className="container kentaro-episode-page__hero-grid">
              <div className="kentaro-episode-page__hero-copy">
                <a className="kentaro-back" href={kentaroBaseUrl}>Back to Kentaro at Work <span aria-hidden="true">→</span></a>
                <p className="eyebrow">{episodeNumber(episode)}</p>
                <h1>{episode.title}</h1>
                <p className="kentaro-episode-page__summary">{episode.description}</p>
              </div>
              <div className="kentaro-episode-page__video">
                <EpisodeMedia episode={episode} playable />
              </div>
            </div>
          </header>
          <section className="kentaro-episode-page__story-section kentaro-episode-page__story-section--paper" aria-labelledby="episode-situation-title">
            <div className="container kentaro-episode-page__story-grid">
              <div className="kentaro-episode-page__story-heading"><p className="eyebrow">THE SITUATION</p><h2 id="episode-situation-title">What happened</h2></div>
              <div className="kentaro-episode-page__story-copy"><p>{episode.story.situation}</p></div>
            </div>
          </section>
          <section className="kentaro-episode-page__story-section" aria-labelledby="episode-tension-title">
            <div className="container kentaro-episode-page__story-grid">
              <div className="kentaro-episode-page__story-heading"><p className="eyebrow">THE WORK TENSION</p><h2 id="episode-tension-title">What went wrong</h2></div>
              <div className="kentaro-episode-page__story-copy"><p>{episode.story.tension[0]}</p><p>{episode.story.tension[1]}</p></div>
            </div>
          </section>
          <section className="kentaro-episode-page__story-section kentaro-episode-page__story-section--paper" aria-labelledby="episode-principle-title">
            <div className="container kentaro-episode-page__story-grid">
              <div className="kentaro-episode-page__story-heading"><p className="eyebrow">THE PRINCIPLE</p><h2 id="episode-principle-title">{episode.story.principleTitle}</h2></div>
              <div className="kentaro-episode-page__story-copy"><p className="kentaro-episode-page__principle-statement">“{episode.story.principleStatement}”</p><p>{episode.story.principleExplanation}</p></div>
            </div>
          </section>
          <section className="kentaro-episode-page__story-section kentaro-episode-page__story-section--navy" aria-labelledby="episode-harness-title">
            <div className="container kentaro-episode-page__story-grid">
              <div className="kentaro-episode-page__story-heading"><p className="eyebrow">FROM STORY TO HARNESS</p><h2 id="episode-harness-title">How Kentaro Harness reduces this friction</h2></div>
              <div className="kentaro-episode-page__story-copy"><p>{episode.story.harness}</p><a className="kentaro-episode-page__harness-cta" href={`${kentaroBaseUrl}#kentaro-harness`}>Explore Kentaro Harness <span aria-hidden="true">→</span></a></div>
            </div>
          </section>
          <section className="kentaro-episode-continue" aria-label="Continue watching Kentaro stories">
            <nav className="container kentaro-episode-continue__grid" aria-label="Adjacent episodes">
              {previous ? <a className="kentaro-episode-continue__item" href={episodeHref(previous)}><small>Previous story</small><strong>{previous.title}</strong></a> : <span className="kentaro-episode-continue__item" aria-disabled="true"><small>Previous story</small><strong>No earlier story</strong></span>}
              {next ? <a className="kentaro-episode-continue__item" href={episodeHref(next)}><small>Next story</small><strong>{next.title}</strong></a> : <span className="kentaro-episode-continue__item" aria-disabled="true"><small>Next story</small><strong>No later story</strong></span>}
              <a className="kentaro-episode-continue__item" href={kentaroBaseUrl}><small>Continue watching</small><strong>Back to all Kentaro stories</strong></a>
            </nav>
          </section>
        </article>
      </main>
      <Footer />
    </>
  )
}

export function KentaroPage({ pathname }: { pathname: string }) {
  const match = pathname.match(/^\/kentaro\/episodes\/([^/]+)$/)
  const episode = match ? getKentaroEpisode(match[1]) : undefined

  if (episode) return <KentaroEpisodePage episode={episode} />
  return <KentaroHome />
}

export const kentaroRoutePaths = [
  '/kentaro/',
  ...kentaroEpisodes.map((episode) => `/kentaro/episodes/${episode.slug}/`),
]
