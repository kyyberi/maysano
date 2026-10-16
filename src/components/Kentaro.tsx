import { useState } from 'react'
import kentaroBadgeImage from '../assets/kentaro/kentaro-badge.png'
import kentaroPaperMountainImage from '../assets/kentaro/kentaro-paper-mountain.png'
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

  if (!episode.youtubeVideoId) {
    return (
      <div className={`kentaro-episode-media kentaro-episode-media--unavailable kentaro-episode-media--${presentation}`} style={{ aspectRatio: episode.videoAspectRatio }}>
        <span>{episodeNumber(episode)}</span>
        <strong>Video not yet available</strong>
        <small>Playback will be added when the episode video is configured.</small>
      </div>
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
        {episode.thumbnail ? <img src={episode.thumbnail} alt={episode.thumbnailAlt ?? ''} /> : <span>{episodeNumber(episode)}</span>}
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
            <span className="kentaro-thumbnail-pending" role="img" aria-label={`Thumbnail pending for ${episode.title}`}>
              <small>{episodeNumber(episode)}</small>
              <strong>Thumbnail pending</strong>
            </span>
          )}
        </a>
      )}
      <div className="kentaro-episode-card__content">
        <p className="kentaro-episode-card__number">{episodeNumber(episode)}</p>
        <h3>{isPublished ? <a href={episodeHref(episode)}>{episode.title}</a> : episode.title}</h3>
        {episode.description && <p>{episode.description}</p>}
        <div className="kentaro-episode-card__meta">
          {episode.duration && <span>{episode.duration}</span>}
          {episode.status === 'comingSoon' ? <span>Coming soon</span> : !episode.youtubeVideoId && <span>Video pending</span>}
        </div>
      </div>
    </article>
  )
}

function EpisodeLibrary() {
  const featuredEpisodes = [...publishedKentaroEpisodes]
    .sort((a, b) => b.episodeNumber - a.episodeNumber)
    .slice(0, 3)

  return (
    <section className="kentaro-library section" id="episodes" aria-labelledby="kentaro-episodes-title">
      <div className="container">
        <div className="section-intro">
          <p className="eyebrow">ONE-MINUTE STORIES</p>
          <h2 id="kentaro-episodes-title">Stories about business people and AI agents.</h2>
          <p className="section-copy">Kentaro works through everyday business situations where instructions are incomplete, context is missing, and nobody is clear about authority or accountability. Each story reveals one problem. The Kentaro Harness is being built to make this work clearer.</p>
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
              <img src={kentaroPaperMountainImage} alt="Kentaro looks worried beside a towering stack of office paperwork." width="1448" height="1086" />
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
              <h2 id="kentaro-character-title">He means well. He also has questions.</h2>
              <p>Kentaro is curious, earnest and quietly stubborn. He wants to do useful work and takes instructions seriously, sometimes too seriously. He remembers what everyone agreed last Tuesday, which makes him an uncomfortable addition to Thursday’s meeting.</p>
              <p>Before a difficult conversation, he straightens his purple badge. When he tilts his head, someone is about to explain an assumption they forgot to mention.</p>
              <blockquote>“I found the single source of truth. There are four.”</blockquote>
            </div>
          </div>
        </section>
        <section className="kentaro-purpose section" aria-labelledby="kentaro-purpose-title">
          <div className="container kentaro-purpose__grid">
            <div className="kentaro-purpose__heading">
              <p className="eyebrow">WHY KENTARO EXISTS</p>
              <h2 id="kentaro-purpose-title">The work starts before the prompt.</h2>
            </div>
            <div className="kentaro-purpose__copy">
              <p>Kentaro is an agent in trouble. AI agents are entering ordinary work, where they meet unclear requirements, competing priorities, old documents and words that mean different things to different people.</p>
              <p>The result is often blamed on the agent.</p>
              <p>Kentaro shows the other side. He takes workplace language seriously. When the business owner says everything is Priority One, Kentaro starts everything. When the business owner asks for speed, Kentaro optimises the number. When the business owner says “use your judgment,” Kentaro asks which judgment is approved.</p>
              <p>The stories raise these tensions to the surface through office comedy. Each episode ends with one practical principle for working with agents.</p>
              <ul className="kentaro-purpose__principles">
                <li>Agents need business context, not missing history.</li>
                <li>Agents need a definition of success, not a KPI.</li>
                <li>Agents need trade-offs, not priority labels.</li>
                <li><span>Agents need a <a href="#kentaro-harness">context harness</a>. That is what we offer as open source.</span></li>
              </ul>
              <p>Kentaro exists because better agent work starts before the prompt. It starts when people make the objective, decision, rules, data and evidence clear enough to act on.</p>
              <p className="kentaro-purpose__credit">A series by Maysano.</p>
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

function KentaroEpisodePage({ episode }: { episode: KentaroEpisode }) {
  const index = publishedKentaroEpisodes.findIndex((item) => item.id === episode.id)
  const previous = index > 0 ? publishedKentaroEpisodes[index - 1] : null
  const next = index >= 0 && index < publishedKentaroEpisodes.length - 1 ? publishedKentaroEpisodes[index + 1] : null
  const related = publishedKentaroEpisodes.filter((item) => item.id !== episode.id && item.topics.some((topic) => episode.topics.includes(topic))).slice(0, 3)

  return (
    <>
      <KentaroStructuredData episode={episode} />
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header activePath="kentaro" />
      <main id="main-content">
        <article className="kentaro-episode-page">
          <header className="kentaro-episode-page__hero">
            <div className="container">
              <a className="kentaro-back" href={kentaroBaseUrl}>Back to Kentaro</a>
              <p className="eyebrow">{episodeNumber(episode)}</p>
              <h1>{episode.title}</h1>
              <p>{episode.description}</p>
            </div>
          </header>
          <div className="container kentaro-episode-page__content">
            <EpisodeMedia episode={episode} playable />
            {!episode.youtubeVideoId && <p className="kentaro-episode-page__notice">This episode is listed, but its video URL has not yet been configured.</p>}
            {episode.transcript && <section className="kentaro-episode-page__text"><h2>Transcript</h2><p>{episode.transcript}</p></section>}
            {episode.behindTheEpisode && <section className="kentaro-episode-page__text"><h2>Behind the episode</h2><p>{episode.behindTheEpisode}</p></section>}
            {episode.relatedLink && <p className="kentaro-episode-page__related-link"><a href={episode.relatedLink.href}>{episode.relatedLink.label} <span aria-hidden="true">→</span></a></p>}
          </div>
          {(previous || next) && (
            <nav className="container kentaro-episode-navigation" aria-label="Adjacent episodes">
              {previous ? <a href={episodeHref(previous)}><small>Previous episode</small><strong>{previous.title}</strong></a> : <span />}
              {next ? <a href={episodeHref(next)}><small>Next episode</small><strong>{next.title}</strong></a> : <span />}
            </nav>
          )}
          {related.length > 0 && (
            <section className="kentaro-related section" aria-labelledby="kentaro-related-title">
              <div className="container">
                <div className="section-intro"><p className="eyebrow">KEEP WATCHING</p><h2 id="kentaro-related-title">Related episodes</h2></div>
                <div className="kentaro-episode-grid">{related.map((item) => <EpisodeCard key={item.id} episode={item} />)}</div>
              </div>
            </section>
          )}
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
