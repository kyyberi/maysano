import { useState } from 'react'
import '../styles/kentaro.css'
import kentaroBadgeImage from '../assets/kentaro/kentaro-badge.webp'
import kentaroHarnessOfficeImage from '../assets/kentaro/kentaro-harness-office.webp'
import kentaroPaperMountainImage from '../assets/kentaro/kentaro-paper-mountain.webp'
import kentaroWorkplaceUncertaintyImage from '../assets/kentaro/kentaro-workplace-uncertainty.webp'
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
const kentaroSocialImageUrl = `${siteConfig.siteUrl}og/kentaro-business-experience.jpg`
const kentaroSocialImageAlt = 'Kentaro, an AI agent, and a business owner working together in an office.'
const episodeHref = (episode: KentaroEpisode) => `${kentaroBaseUrl}episodes/${episode.slug}/`
const episodeNumber = (episode: KentaroEpisode) => `Episode ${String(episode.episodeNumber).padStart(2, '0')}`
const episodeStill = (episode: KentaroEpisode) => episode.thumbnail ?? (episode.episodeNumber % 2 === 0 ? kentaroPaperMountainImage : kentaroBadgeImage)
const episodeStillAlt = (episode: KentaroEpisode) => episode.thumbnailAlt ?? 'Kentaro at work in an office.'
const episodeFrictionLabels: Record<string, string> = {
  'new-team-member': 'Friction: undefined role',
  'the-data-is-there': 'Friction: data without purpose',
  'one-small-extra-thing': 'Friction: scope without a renewed mandate',
}

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
  const page = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: episode ? `${episode.title} | Kentaro at Work` : 'Kentaro | Maysano',
    description: episode?.metaDescription ?? 'One-minute stories about an AI agent working with humans.',
    image: episode?.socialImage ?? kentaroSocialImageUrl,
    about: { '@type': 'Thing', name: 'Human-agent collaboration' },
    isPartOf: { '@id': `${siteConfig.siteUrl}#website` },
    inLanguage: 'en',
  }

  if (!episode) return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(page) }} />

  const article = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    headline: episode.title,
    description: episode.metaDescription,
    image: episode.socialImage,
    mainEntityOfPage: { '@id': `${url}#webpage` },
    isPartOf: { '@id': `${kentaroBaseUrl}#webpage` },
    publisher: { '@type': 'Organization', name: 'Maysano' },
    inLanguage: 'en',
  }
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Kentaro at Work', item: kentaroBaseUrl },
      { '@type': 'ListItem', position: 3, name: episode.title, item: url },
    ],
  }
  const video = episode.youtubeVideoId && episode.publicationDate && episode.duration && episode.videoPoster
    ? {
        '@context': 'https://schema.org',
        '@type': 'VideoObject',
        name: episode.title,
        description: episode.metaDescription,
        thumbnailUrl: episode.videoPoster,
        uploadDate: episode.publicationDate,
        duration: episode.duration,
        embedUrl: `https://www.youtube-nocookie.com/embed/${episode.youtubeVideoId}`,
        contentUrl: episode.videoUrl,
      }
    : null

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([page, article, breadcrumb, video].filter(Boolean)) }} />
}

function EpisodeMedia({ episode, playable = false, presentation = 'detail' }: { episode: KentaroEpisode; playable?: boolean; presentation?: 'detail' | 'card' }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const still = episodeStill(episode)
  const stillAlt = episodeStillAlt(episode)

  if (!episode.youtubeVideoId) {
    return (
      <figure className={`kentaro-episode-media kentaro-episode-media--poster kentaro-episode-media--${presentation}`} style={{ aspectRatio: episode.videoAspectRatio }}>
        <img src={still} alt={stillAlt} loading={presentation === 'detail' ? 'eager' : 'lazy'} />
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
        <img src={still} alt={stillAlt} loading={presentation === 'detail' ? 'eager' : 'lazy'} />
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
  const frictionLabel = episodeFrictionLabels[episode.slug]

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
            <img src={episode.thumbnail} alt={episode.thumbnailAlt ?? ''} loading="lazy" />
          ) : (
            <img src={episodeStill(episode)} alt={episodeStillAlt(episode)} loading="lazy" />
          )}
        </a>
      )}
      <div className="kentaro-episode-card__content">
        <p className="kentaro-episode-card__number">{episodeNumber(episode)}</p>
        <h3>{isPublished ? <a href={episodeHref(episode)}>{episode.title}</a> : episode.title}</h3>
        {frictionLabel && <p className="kentaro-episode-card__friction">{frictionLabel}</p>}
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

function ClarityIcon({ item }: { item: keyof KentaroEpisode['clarityItems'] }) {
  if (item === 'role') return <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><circle cx="16" cy="10" r="4" /><path d="M8 27c.8-5 3.5-7.5 8-7.5s7.2 2.5 8 7.5" /></svg>
  if (item === 'scope') return <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="6" y="6" width="20" height="20" rx="2" /><path d="M11 16h10M16 11v10" /></svg>
  if (item === 'approvalPoints') return <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><circle cx="16" cy="16" r="10" /><path d="m11 16 3.2 3.2L21.5 12" /></svg>
  return <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><circle cx="16" cy="10" r="4" /><path d="M8 27c.8-5 3.5-7.5 8-7.5s7.2 2.5 8 7.5M23 8v8M19 12h8" /></svg>
}

function EpisodeLibrary() {
  const featuredEpisodes = [...publishedKentaroEpisodes]
    .sort((a, b) => b.episodeNumber - a.episodeNumber)

  return (
    <section className="kentaro-library section" id="episodes" aria-labelledby="kentaro-episodes-title">
      <div className="container">
        <div className="section-intro">
          <p className="eyebrow">THE FRICTION, EPISODE BY EPISODE</p>
          <h2 id="kentaro-episodes-title" className="kentaro-section-title">One-minute stories about work that was never made clear.</h2>
          <p className="section-copy">Kentaro does not fail because he lacks effort. He fails because the work arrives without the context, mandate or decision path it needs. Each episode makes one of those gaps visible.</p>
          <a className="kentaro-library__harness-link" href="#kentaro-harness">See how Kentaro Harness is being built to reduce this friction <span aria-hidden="true">→</span></a>
        </div>
        <p className="eyebrow kentaro-library__grid-label">THE WORKPLACE PROBLEMS KENTARO EXPOSES</p>
        <div className="kentaro-episode-grid">
          {featuredEpisodes.map((episode) => <EpisodeCard key={episode.id} episode={episode} />)}
        </div>
      </div>
    </section>
  )
}

const kentaroPurposeStyles = `
  .kentaro-section-title.kentaro-section-title { margin: 0 0 24px; font-size: clamp(2.5rem, 3.6vw, 3.75rem); font-weight: 600; letter-spacing: -.06em; line-height: .96; }
  .kentaro-purpose { padding: clamp(72px, 9vw, 142px) 0; background: hsl(var(--secondary)); }
  .kentaro-purpose > .container { width: min(1400px, calc(100% - 64px)); }
  .kentaro-purpose__layout { display: grid; grid-template-columns: minmax(360px, .75fr) minmax(0, 1fr); align-items: start; gap: clamp(54px, 8vw, 132px); max-width: 1400px; }
  .kentaro-purpose__image { margin: 0; overflow: hidden; border-radius: 10px; background: hsl(var(--navy)); }
  .kentaro-purpose__image img { display: block; width: 100%; min-height: 640px; height: 100%; object-fit: cover; object-position: center; }
  .kentaro-purpose__content { max-width: 785px; }
  .kentaro-purpose__content .eyebrow { margin-bottom: 19px; color: hsl(var(--primary)); }
  .kentaro-purpose__content h2 { max-width: 710px; color: hsl(var(--heading)); }
  .kentaro-purpose__intro, .kentaro-purpose__bridge { max-width: 740px; margin: 0; color: hsl(var(--muted-foreground)); font-size: clamp(1.08rem, 1.7vw, 1.33rem); line-height: 1.55; }
  .kentaro-purpose__comparison { margin: 42px 0 30px; border-top: 1px solid hsl(var(--border)); }
  .kentaro-purpose__comparison-labels, .kentaro-purpose__comparison-row { display: grid; grid-template-columns: minmax(180px, .82fr) minmax(0, 1fr); column-gap: 36px; }
  .kentaro-purpose__comparison-labels { padding: 18px 0 13px; }
  .kentaro-purpose__comparison-labels span { color: hsl(var(--muted-foreground)); font-size: .68rem; font-weight: 700; letter-spacing: .14em; line-height: 1.3; text-transform: uppercase; }
  .kentaro-purpose__comparison-row { min-height: 74px; align-items: center; border-top: 1px solid hsl(var(--border)); }
  .kentaro-purpose__comparison-row:first-of-type { border-top: 0; }
  .kentaro-purpose__comparison-row > dt, .kentaro-purpose__comparison-row > dd { display: flex; align-items: center; gap: 16px; min-width: 0; margin: 0; color: hsl(var(--heading)); font-size: clamp(1rem, 1.35vw, 1.2rem); letter-spacing: -.02em; line-height: 1.32; }
  .kentaro-purpose__comparison-row > dd { padding-left: 36px; border-left: 1px solid hsl(var(--border)); }
  .kentaro-purpose__speech { width: 27px; height: 27px; flex: 0 0 auto; color: hsl(var(--heading)); }
  .kentaro-purpose__question { display: grid; width: 38px; height: 38px; flex: 0 0 auto; place-items: center; border-radius: 50%; background: hsl(var(--lime)); color: hsl(var(--heading)); font-size: 1.12rem; font-weight: 700; }
  .kentaro-purpose__bridge { margin-bottom: 28px; font-size: 1.05rem; }
  .kentaro-purpose__paths { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px; }
  .kentaro-purpose__path { display: grid; grid-template-columns: 44px minmax(0, 1fr) 34px; gap: 14px; align-items: center; min-height: 126px; padding: 20px; border: 1px solid hsl(var(--border)); border-radius: 8px; background: hsl(var(--background) / .72); color: inherit; text-decoration: none; transition: border-color .2s ease, background-color .2s ease; }
  .kentaro-purpose__path:hover { border-color: hsl(var(--primary)); background: hsl(var(--accent)); }
  .kentaro-purpose__path-icon { display: grid; width: 44px; height: 44px; place-items: center; color: hsl(var(--primary)); }
  .kentaro-purpose__path-icon svg { width: 100%; height: 100%; }
  .kentaro-purpose__path-copy { display: grid; gap: 5px; }
  .kentaro-purpose__path strong { color: hsl(var(--heading)); font-size: 1rem; letter-spacing: -.035em; line-height: 1.18; }
  .kentaro-purpose__path span { color: hsl(var(--muted-foreground)); font-size: .84rem; line-height: 1.45; }
  .kentaro-purpose__path-arrow { display: grid; width: 32px; height: 32px; place-items: center; border-radius: 50%; background: hsl(var(--lime)); color: hsl(var(--heading)); font-size: 1.15rem; transition: transform .2s ease; }
  .kentaro-purpose__path:hover .kentaro-purpose__path-arrow { transform: translateX(3px); }
  @media (max-width: 1050px) { .kentaro-purpose__layout { grid-template-columns: minmax(300px, .72fr) minmax(0, 1fr); gap: 48px; } .kentaro-purpose__image img { min-height: 580px; } .kentaro-purpose__comparison-labels, .kentaro-purpose__comparison-row { column-gap: 22px; } .kentaro-purpose__comparison-row > dd { padding-left: 22px; } }
  @media (max-width: 820px) { .kentaro-purpose__layout { grid-template-columns: 1fr; gap: 38px; } .kentaro-purpose__image { width: min(100%, 680px); } .kentaro-purpose__image img { min-height: 0; aspect-ratio: 4 / 3; } .kentaro-purpose__content { max-width: 760px; } }
  @media (max-width: 620px) { .kentaro-section-title.kentaro-section-title { font-size: clamp(2.35rem, 10vw, 3.15rem); } .kentaro-purpose { padding: 74px 0; } .kentaro-purpose__intro { font-size: 1.02rem; } .kentaro-purpose__comparison { margin-top: 34px; } .kentaro-purpose__comparison-labels { display: none; } .kentaro-purpose__comparison-row { grid-template-columns: 1fr; gap: 12px; padding: 18px 0; } .kentaro-purpose__comparison-row > dt, .kentaro-purpose__comparison-row > dd { font-size: 1rem; } .kentaro-purpose__comparison-row > dd { padding-left: 0; border-left: 0; } .kentaro-purpose__paths { grid-template-columns: 1fr; } .kentaro-purpose__path { min-height: 112px; } }
`

const kentaroHarnessAgreementStyles = `
  .kentaro-harness-agreement { padding: clamp(56px, 5vw, 80px) 0; background: hsl(var(--navy)); color: #F4F6EE; }
  .kentaro-harness-agreement > .container { width: min(1400px, calc(100% - 64px)); }
  .kentaro-harness-agreement__layout { display: grid; grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr); gap: clamp(42px, 4vw, 60px); align-items: start; }
  .kentaro-harness-agreement .eyebrow { margin-bottom: 16px; color: #C2D897; }
  .kentaro-harness-agreement .kentaro-section-title { max-width: 610px; margin-bottom: 18px; color: #F4F6EE; }
  .kentaro-harness-agreement__intro { max-width: 600px; margin: 0; color: #B7C0BF; font-size: clamp(1rem, 1.3vw, 1.14rem); line-height: 1.5; }
  .kentaro-harness-agreement__visual { display: grid; grid-template-columns: minmax(340px, 1fr) 198px; gap: 20px; align-items: start; width: min(600px, 100%); margin: 26px 0 0; }
  .kentaro-harness-agreement__image { align-self: start; margin: 0; overflow: hidden; border-radius: 12px; background: #132a3c; }
  .kentaro-harness-agreement__image img { display: block; width: 100%; height: auto; aspect-ratio: 1102 / 1427; object-fit: cover; object-position: center; }
  .kentaro-harness-agreement__agreement { position: relative; display: grid; width: min(100%, 228px); gap: 10px; margin: clamp(48px, 4.5vw, 66px) 0 0; padding: 0 0 0 26px; list-style: none; }
  .kentaro-harness-agreement__agreement::before { position: absolute; top: 37px; bottom: 37px; left: 5px; width: 1px; background: #C2D897; content: ''; }
  .kentaro-harness-agreement__agreement li { position: relative; display: flex; align-items: center; gap: 12px; min-height: 74px; padding: 13px 15px; border: 1px solid #455864; border-radius: 8px; color: #F4F6EE; font-size: clamp(1rem, 1.35vw, 1.16rem); font-weight: 600; letter-spacing: -.03em; }
  .kentaro-harness-agreement__agreement li::before { position: absolute; top: calc(50% - 5px); left: -30px; width: 10px; height: 10px; border-radius: 50%; background: #C2D897; content: ''; }
  .kentaro-harness-agreement__agreement svg { width: 26px; height: 26px; flex: 0 0 auto; color: #C2D897; }
  .kentaro-harness-agreement__body { max-width: 720px; }
  .kentaro-harness-agreement__body > p { max-width: 690px; margin: 0 0 26px; color: #F4F6EE; font-size: clamp(1.08rem, 1.55vw, 1.32rem); line-height: 1.42; }
  .kentaro-harness-agreement__rows { margin: 0; padding: 0; border-top: 1px solid #455864; }
  .kentaro-harness-agreement__rows > div { display: grid; grid-template-columns: 46px minmax(0, 1fr); column-gap: 18px; padding: 21px 0; border-bottom: 1px solid #455864; }
  .kentaro-harness-agreement__row-icon { display: grid; width: 44px; height: 44px; place-items: center; border: 1px solid #607382; border-radius: 50%; color: #C2D897; }
  .kentaro-harness-agreement__row-icon svg { width: 23px; height: 23px; }
  .kentaro-harness-agreement__rows dt { margin: 0 0 5px; color: #F4F6EE; font-size: clamp(1.08rem, 1.45vw, 1.28rem); font-weight: 600; letter-spacing: -.035em; line-height: 1.15; }
  .kentaro-harness-agreement__rows dd { margin: 0; color: #B7C0BF; font-size: .94rem; line-height: 1.45; }
  .kentaro-harness-agreement__roadmap { position: relative; display: block; min-height: 190px; margin-top: 26px; padding: clamp(23px, 2.5vw, 30px); border: 1px solid #455864; border-radius: 9px; background: #243d51; color: inherit; text-decoration: none; transition: border-color .2s ease, background-color .2s ease; }
  .kentaro-harness-agreement__roadmap:hover { border-color: #C2D897; background: #294357; }
  .kentaro-harness-agreement__roadmap .eyebrow { margin: 0 0 9px; }
  .kentaro-harness-agreement__roadmap strong { display: block; color: #F4F6EE; font-size: clamp(1.26rem, 1.85vw, 1.58rem); letter-spacing: -.045em; line-height: 1.1; }
  .kentaro-harness-agreement__roadmap p { max-width: 430px; margin: 8px 0 0; color: #B7C0BF; font-size: .9rem; line-height: 1.45; }
  .kentaro-harness-agreement__progress { display: flex; align-items: center; gap: 0; margin-top: 17px; color: #C2D897; }
  .kentaro-harness-agreement__progress span { display: block; width: 10px; height: 10px; border: 1px solid #C2D897; border-radius: 50%; background: hsl(var(--navy)); }
  .kentaro-harness-agreement__progress span:first-child { background: #C2D897; }
  .kentaro-harness-agreement__progress i { width: min(13vw, 92px); height: 1px; background: #B7C0BF; }
  .kentaro-harness-agreement__roadmap-action { position: absolute; right: clamp(23px, 2.5vw, 30px); bottom: clamp(23px, 2.5vw, 30px); display: flex; align-items: center; gap: 13px; color: #C2D897; font-size: .88rem; font-weight: 700; white-space: nowrap; }
  .kentaro-harness-agreement__arrow { display: grid; width: 50px; height: 50px; flex: 0 0 auto; place-items: center; border-radius: 50%; background: #C2D897; color: hsl(var(--navy)); font-size: 1.75rem; line-height: 1; transition: transform .2s ease; }
  .kentaro-harness-agreement__roadmap:hover .kentaro-harness-agreement__arrow { transform: translateX(4px); }
  @media (max-width: 1180px) { .kentaro-harness-agreement__layout { grid-template-columns: 1fr; gap: 58px; } .kentaro-harness-agreement__left { max-width: 720px; } .kentaro-harness-agreement__visual { width: min(100%, 690px); } .kentaro-harness-agreement__body { max-width: 760px; } }
  @media (max-width: 620px) { .kentaro-harness-agreement { padding: 78px 0; } .kentaro-harness-agreement > .container { width: min(100% - 40px, 1400px); } .kentaro-harness-agreement__visual { grid-template-columns: 1fr; gap: 20px; width: 100%; margin-top: 42px; } .kentaro-harness-agreement__image img { height: min(122vw, 510px); } .kentaro-harness-agreement__agreement { grid-template-columns: repeat(3, minmax(0, 1fr)); width: 100%; gap: 0; margin: 0; padding: 0; } .kentaro-harness-agreement__agreement::before { display: none; } .kentaro-harness-agreement__agreement li { min-height: 0; flex-direction: column; align-items: flex-start; gap: 9px; padding: 16px 10px 12px 19px; border: 0; border-radius: 0; font-size: .94rem; } .kentaro-harness-agreement__agreement li::before { top: 21px; left: 8px; } .kentaro-harness-agreement__agreement li:not(:last-child)::after { position: absolute; top: 25px; right: -4px; bottom: auto; left: auto; width: 8px; height: 1px; background: #C2D897; content: ''; } .kentaro-harness-agreement__agreement svg { width: 24px; height: 24px; } .kentaro-harness-agreement__body > p { margin-bottom: 30px; } .kentaro-harness-agreement__rows > div { grid-template-columns: 36px minmax(0, 1fr); column-gap: 13px; padding: 21px 0; } .kentaro-harness-agreement__row-icon { width: 34px; height: 34px; } .kentaro-harness-agreement__row-icon svg { width: 19px; height: 19px; } .kentaro-harness-agreement__roadmap { min-height: 0; padding: 23px; } .kentaro-harness-agreement__roadmap-action { position: static; justify-content: space-between; margin-top: 20px; } .kentaro-harness-agreement__progress i { width: min(15vw, 64px); } .kentaro-harness-agreement__arrow { width: 48px; height: 48px; font-size: 1.7rem; } }
`

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
                <span className="kentaro-hero__title-line kentaro-hero__title-line--light">An agentic business experience.</span>
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
              <h2 id="kentaro-character-title" className="kentaro-section-title">Kentaro is an AI agent at work.</h2>
              <p>Kentaro is the AI agent at the centre of these one-minute workplace stories. His job is to turn ordinary business instructions, documents and decisions into useful work.</p>
              <p>That sounds simple until the brief is unclear or the authority is missing. Kentaro takes the words literally and asks the questions people hoped would stay unasked.</p>
              <p>Before a difficult conversation, he straightens his purple badge. When he tilts his head, someone is about to explain an assumption they forgot to mention.</p>
              <blockquote>“I found the single source of truth. There are four.”</blockquote>
            </div>
          </div>
        </section>
        <section className="kentaro-purpose" aria-labelledby="kentaro-purpose-title">
          <style>{kentaroPurposeStyles}</style>
          <div className="container kentaro-purpose__layout">
            <figure className="kentaro-purpose__image">
              <img src={kentaroPaperMountainImage} alt="Kentaro looks concerned beside a towering stack of office paperwork." width="1448" height="1086" loading="lazy" />
            </figure>
            <div className="kentaro-purpose__content">
              <p className="eyebrow">WHY THESE STORIES</p>
              <h2 id="kentaro-purpose-title" className="kentaro-section-title">Clear to people.<br />Ambiguous to Kentaro.</h2>
              <p className="kentaro-purpose__intro">Business people work through shared history, informal decisions and assumptions that rarely appear in a brief. Kentaro does not have that social memory.</p>
              <dl className="kentaro-purpose__comparison">
                <div className="kentaro-purpose__comparison-labels" aria-hidden="true"><span>What people say</span><span>What Kentaro needs to know</span></div>
                <div className="kentaro-purpose__comparison-row">
                  <dt><svg className="kentaro-purpose__speech" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M27 15.5c0 6-5 10.5-11.5 10.5-1.8 0-3.4-.3-4.9-1l-5.1 2.2 1.4-4.8C5.7 20.5 5 18.1 5 15.5 5 9.5 10 5 16 5s11 4.5 11 10.5Z" /></svg>Take ownership.</dt>
                  <dd><span className="kentaro-purpose__question" aria-hidden="true">?</span>What decisions am I authorised to make?</dd>
                </div>
                <div className="kentaro-purpose__comparison-row">
                  <dt><svg className="kentaro-purpose__speech" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M27 15.5c0 6-5 10.5-11.5 10.5-1.8 0-3.4-.3-4.9-1l-5.1 2.2 1.4-4.8C5.7 20.5 5 18.1 5 15.5 5 9.5 10 5 16 5s11 4.5 11 10.5Z" /></svg>Use your judgment.</dt>
                  <dd><span className="kentaro-purpose__question" aria-hidden="true">?</span>Which judgment is approved, and by whom?</dd>
                </div>
                <div className="kentaro-purpose__comparison-row">
                  <dt><svg className="kentaro-purpose__speech" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M27 15.5c0 6-5 10.5-11.5 10.5-1.8 0-3.4-.3-4.9-1l-5.1 2.2 1.4-4.8C5.7 20.5 5 18.1 5 15.5 5 9.5 10 5 16 5s11 4.5 11 10.5Z" /></svg>Make it happen.</dt>
                  <dd><span className="kentaro-purpose__question" aria-hidden="true">?</span>What result counts as success?</dd>
                </div>
              </dl>
              <p className="kentaro-purpose__bridge">The stories show this friction. Kentaro Harness gives people and agents a clearer way to work through it.</p>
              <nav className="kentaro-purpose__paths" aria-label="Explore Kentaro stories or Harness">
                <a className="kentaro-purpose__path" href="#episodes">
                  <span className="kentaro-purpose__path-icon" aria-hidden="true"><svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="4.5" y="9" width="39" height="30" rx="3" /><path d="m21 18 10 6-10 6v-12Z" fill="currentColor" stroke="none" /></svg></span>
                  <span className="kentaro-purpose__path-copy"><strong>Watch the stories</strong><span>See the friction play out in one-minute office stories.</span></span>
                  <span className="kentaro-purpose__path-arrow" aria-hidden="true">→</span>
                </a>
                <a className="kentaro-purpose__path" href="#kentaro-harness">
                  <span className="kentaro-purpose__path-icon" aria-hidden="true"><svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M5 7.5h18v30H5z" /><path d="M9 15h10M9 20h10M9 25h6" /><circle cx="32.5" cy="19" r="7" /><path d="m29.5 19 2 2 4-5M32.5 28v10M25 42c1-3.4 3.5-5 7.5-5s6.5 1.6 7.5 5" /></svg></span>
                  <span className="kentaro-purpose__path-copy"><strong>Explore Kentaro Harness</strong><span>See the working layer being built to reduce it.</span></span>
                  <span className="kentaro-purpose__path-arrow" aria-hidden="true">→</span>
                </a>
              </nav>
            </div>
          </div>
        </section>
        <EpisodeLibrary />
        <section id="kentaro-harness" className="kentaro-harness-agreement" aria-labelledby="kentaro-harness-title">
          <style>{kentaroHarnessAgreementStyles}</style>
          <div className="container kentaro-harness-agreement__layout">
            <div className="kentaro-harness-agreement__left">
              <p className="eyebrow">THE KENTARO HARNESS</p>
              <h2 id="kentaro-harness-title" className="kentaro-section-title">A working agreement<br />for people and agents.</h2>
              <p className="kentaro-harness-agreement__intro">Kentaro turns business context into working context for an agent. It is open source, MIT licensed and built to work with Maysano.</p>
              <div className="kentaro-harness-agreement__visual">
                <figure className="kentaro-harness-agreement__image"><img src={kentaroHarnessOfficeImage} alt="Kentaro works calmly at a laptop in an office." width="1102" height="1427" loading="lazy" /></figure>
                <ol className="kentaro-harness-agreement__agreement" aria-label="The Kentaro working agreement">
                  <li><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="7" y="4.5" width="18" height="23" rx="2" /><path d="M11 11h10M11 16h10M11 21h7" /></svg>Context</li>
                  <li><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><circle cx="16" cy="16" r="10" /><circle cx="16" cy="16" r="5" /><path d="m16 16 10-10" /></svg>Mandate</li>
                  <li><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><circle cx="16" cy="10" r="4" /><path d="M8 27c.8-5 3.5-7.5 8-7.5s7.2 2.5 8 7.5M22 21l2.2 2.2L28 18.8" /></svg>Review</li>
                </ol>
              </div>
            </div>
            <div className="kentaro-harness-agreement__body">
              <p>The Kentaro Harness is the working layer between a human business owner and an agent. It gives the agent a defined mandate, the context behind the work and a path for human review.</p>
              <dl className="kentaro-harness-agreement__rows">
                <div><span className="kentaro-harness-agreement__row-icon" aria-hidden="true"><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="7" y="4.5" width="18" height="23" rx="2" /><path d="M11 11h10M11 16h10M11 21h7" /></svg></span><div><dt>Start from shared context</dt><dd>Objectives, use cases, data products and evidence travel with the agent.</dd></div></div>
                <div><span className="kentaro-harness-agreement__row-icon" aria-hidden="true"><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="16" cy="16" r="10" /><circle cx="16" cy="16" r="5" /><path d="m16 16 10-10" /></svg></span><div><dt>Make the mandate explicit</dt><dd>Scope, approved tools, decision rights and escalation stay clear.</dd></div></div>
                <div><span className="kentaro-harness-agreement__row-icon" aria-hidden="true"><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="16" cy="10" r="4" /><path d="M8 27c.8-5 3.5-7.5 8-7.5s7.2 2.5 8 7.5M22 21l2.2 2.2L28 18.8" /></svg></span><div><dt>Keep people accountable</dt><dd>People review consequential work and retain responsibility for the outcome.</dd></div></div>
              </dl>
              <a className="kentaro-harness-agreement__roadmap" href="#kentaro-roadmap">
                <span><span className="eyebrow">NEXT</span><strong>See how Kentaro is being built</strong><p>Follow the roadmap from read-only context to agent-client integration.</p><span className="kentaro-harness-agreement__progress" aria-hidden="true"><span></span><i></i><span></span><i></i><span></span></span></span>
                <span className="kentaro-harness-agreement__roadmap-action"><span>View the Kentaro roadmap</span><span className="kentaro-harness-agreement__arrow" aria-hidden="true">→</span></span>
              </a>
            </div>
          </div>
        </section>
        <section id="kentaro-roadmap" className="section" aria-labelledby="kentaro-roadmap-title" style={{ background: 'hsl(var(--secondary))' }}>
          <div className="container">
            <div className="section-intro">
              <p className="eyebrow">KENTARO HARNESS ROADMAP</p>
              <h2 id="kentaro-roadmap-title" className="kentaro-section-title">From a business objective to evidence-backed delivery.</h2>
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
        <section id="kentaro-follow" className="kentaro-follow" aria-labelledby="kentaro-follow-title">
          <style>{kentaroFollowPanelStyles}</style>
          <div className="container kentaro-harness__grid kentaro-follow__grid">
            <div className="kentaro-follow__column kentaro-follow__column--updates" style={{ display: 'flex', flexDirection: 'column' }}>
              <p className="eyebrow">KEEP UP WITH KENTARO</p>
              <div className="kentaro-harness__copy" style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
                <h2 id="kentaro-follow-title" className="kentaro-section-title">Follow Kentaro’s next assignment.</h2>
                <p style={{ marginTop: 'auto' }}>New Kentaro stories and Harness development updates. Same reasonable questions.</p>
                <KentaroUpdatesForm />
                <small>A series by Maysano.</small>
              </div>
            </div>
            <div className="kentaro-follow__column kentaro-follow__column--harness" style={{ display: 'flex', flexDirection: 'column' }}>
              <p className="eyebrow">THE KENTARO HARNESS</p>
              <div className="kentaro-harness__copy" style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
                <h2 className="kentaro-section-title">Help build the Harness.</h2>
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
  .kentaro-episode-page__hero { padding: clamp(54px, 7vw, 96px) 0; }
  .kentaro-episode-page__hero-grid { display: grid; grid-template-columns: minmax(0, 1.08fr) minmax(440px, .92fr); align-items: start; gap: clamp(54px, 8vw, 130px); }
  .kentaro-episode-page__hero-copy { max-width: 680px; padding-top: 6px; }
  .kentaro-episode-page__hero .kentaro-back::before { content: none; }
  .kentaro-episode-page__hero .kentaro-back { margin-bottom: clamp(32px, 4vw, 56px); }
  .kentaro-episode-page__hero h1 { max-width: 670px; margin-bottom: 20px; font-size: clamp(3.25rem, 5.3vw, 5.8rem); }
  .kentaro-episode-page__summary { max-width: 590px; margin: 0; color: hsl(var(--navy-foreground) / .8); font-size: clamp(1.06rem, 1.5vw, 1.23rem); line-height: 1.58; }
  .kentaro-episode-page__summary::after { display: block; width: 54px; height: 3px; margin-top: 27px; background: #C2D897; content: ''; }
  .kentaro-episode-page__video { width: clamp(440px, 35vw, 520px); justify-self: end; }
  .kentaro-episode-page__video .kentaro-episode-media { width: 100%; }
  .kentaro-episode-media--poster { overflow: hidden; margin: 0; border: 0; border-radius: 12px; background: hsl(var(--navy) / .5); }
  .kentaro-episode-media--poster img { display: block; width: 100%; height: 100%; object-fit: cover; }
  .kentaro-episode-scene, .kentaro-episode-problem { background: hsl(var(--secondary)); }
  .kentaro-episode-scene { padding: clamp(70px, 8vw, 112px) 0 48px; }
  .kentaro-episode-scene__grid { display: grid; grid-template-columns: minmax(300px, .82fr) minmax(0, 1fr); gap: clamp(56px, 9vw, 150px); align-items: start; }
  .kentaro-episode-page__eyebrow { margin-bottom: 16px; color: hsl(var(--primary)); }
  .kentaro-episode-page__heading { max-width: 460px; margin: 0; color: hsl(var(--heading)); font-size: clamp(2.45rem, 4.1vw, 4.35rem); letter-spacing: -.065em; line-height: .96; }
  .kentaro-episode-dialogue { margin: 38px 0 0; border-top: 1px solid hsl(var(--border)); }
  .kentaro-episode-dialogue div { padding: 17px 0; border-bottom: 1px solid hsl(var(--border)); }
  .kentaro-episode-dialogue dt { margin-bottom: 7px; color: hsl(var(--primary)); font-size: .68rem; font-weight: 700; letter-spacing: .13em; text-transform: uppercase; }
  .kentaro-episode-dialogue dd { margin: 0; color: hsl(var(--heading)); font-size: 1rem; line-height: 1.5; }
  .kentaro-episode-scene__copy { max-width: 700px; padding-top: 5px; color: hsl(var(--muted-foreground)); font-size: clamp(1.04rem, 1.4vw, 1.18rem); line-height: 1.75; }
  .kentaro-episode-scene__copy p { margin: 0; }
  .kentaro-episode-problem { padding: 0 0 clamp(72px, 9vw, 120px); }
  .kentaro-episode-problem__inner { max-width: 920px; padding-top: clamp(52px, 6vw, 80px); border-top: 1px solid hsl(var(--border)); }
  .kentaro-episode-problem__copy { max-width: 760px; margin-top: 28px; color: hsl(var(--muted-foreground)); font-size: 1.04rem; line-height: 1.72; }
  .kentaro-episode-problem__copy p { margin: 0 0 17px; }
  .kentaro-episode-pullquote { max-width: 870px; margin: 42px 0 0; padding: 4px 0 4px clamp(22px, 3vw, 38px); border-left: 3px solid #C2D897; color: hsl(var(--heading)); font-size: clamp(1.7rem, 3.1vw, 3rem); font-weight: 600; letter-spacing: -.055em; line-height: 1.06; }
  .kentaro-episode-clarity { padding: clamp(58px, 6vw, 86px) 0; background: hsl(var(--accent)); }
  .kentaro-episode-clarity__header { display: flex; align-items: end; justify-content: space-between; gap: 32px; margin-bottom: 42px; }
  .kentaro-episode-clarity__header .kentaro-episode-page__heading { max-width: 620px; }
  .kentaro-episode-clarity__grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); border-top: 1px solid hsl(var(--border)); border-bottom: 1px solid hsl(var(--border)); }
  .kentaro-episode-clarity__item { min-height: 174px; padding: 24px clamp(18px, 2.3vw, 32px); border-left: 1px solid hsl(var(--border)); }
  .kentaro-episode-clarity__item:first-child { border-left: 0; }
  .kentaro-episode-clarity__item svg { width: 28px; height: 28px; margin-bottom: 23px; color: hsl(var(--primary)); }
  .kentaro-episode-clarity__item h3 { margin: 0 0 8px; color: hsl(var(--heading)); font-size: .72rem; letter-spacing: .1em; text-transform: uppercase; }
  .kentaro-episode-clarity__item p { margin: 0; color: hsl(var(--muted-foreground)); font-size: .9rem; line-height: 1.45; }
  .kentaro-episode-clarity__principle { max-width: 790px; margin: 32px 0 0; color: hsl(var(--heading)); font-size: 1.05rem; line-height: 1.65; }
  .kentaro-episode-harness { padding: clamp(56px, 6vw, 86px) 0; background: hsl(var(--navy)); color: #F4F6EE; }
  .kentaro-episode-harness__grid { display: grid; grid-template-columns: minmax(0, 1.1fr) minmax(260px, .65fr); gap: clamp(42px, 8vw, 120px); align-items: center; }
  .kentaro-episode-harness .kentaro-episode-page__eyebrow { color: #C2D897; }
  .kentaro-episode-harness .kentaro-episode-page__heading { color: #F4F6EE; }
  .kentaro-episode-harness__copy { max-width: 700px; margin: 24px 0 0; color: #B7C0BF; font-size: 1rem; line-height: 1.65; }
  .kentaro-episode-harness__links { display: flex; flex-wrap: wrap; gap: 14px 28px; margin-top: 25px; }
  .kentaro-episode-harness__links a { color: #C2D897; font-size: .9rem; font-weight: 700; text-decoration: none; }
  .kentaro-episode-harness__links a:hover { text-decoration: underline; text-underline-offset: 5px; }
  .kentaro-episode-topics { display: grid; gap: 0; padding-left: 28px; border-left: 1px solid #C2D897; }
  .kentaro-episode-topics span { position: relative; padding: 14px 0 14px 20px; border-bottom: 1px solid #455864; color: #F4F6EE; font-size: clamp(1.1rem, 1.65vw, 1.35rem); font-weight: 600; letter-spacing: -.035em; }
  .kentaro-episode-topics span::before { position: absolute; top: calc(50% - 4px); left: -33px; width: 8px; height: 8px; border-radius: 50%; background: #C2D897; content: ''; }
  .kentaro-episode-continue { padding: clamp(44px, 5vw, 70px) 0; background: hsl(var(--background)); }
  .kentaro-episode-continue__grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); border-top: 1px solid hsl(var(--border)); border-bottom: 1px solid hsl(var(--border)); }
  .kentaro-episode-continue__item { display: grid; gap: 9px; min-height: 116px; align-content: center; padding: 21px clamp(18px, 2.6vw, 34px); border-left: 1px solid hsl(var(--border)); color: hsl(var(--heading)); text-decoration: none; }
  .kentaro-episode-continue__item:first-child { border-left: 0; }
  .kentaro-episode-continue__item small { color: hsl(var(--primary)); font-size: .68rem; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; }
  .kentaro-episode-continue__item strong { font-size: clamp(1.08rem, 1.5vw, 1.32rem); letter-spacing: -.04em; line-height: 1.12; }
  .kentaro-episode-continue__item span { color: hsl(var(--primary)); }
  .kentaro-episode-continue__item:hover { background: hsl(var(--secondary)); }
  @media (max-width: 900px) {
    .kentaro-episode-page__hero-grid, .kentaro-episode-scene__grid, .kentaro-episode-harness__grid { grid-template-columns: 1fr; gap: 32px; }
    .kentaro-episode-page__video { width: min(100%, 500px); justify-self: start; }
    .kentaro-episode-clarity__grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .kentaro-episode-clarity__item:nth-child(odd) { border-left: 0; }
    .kentaro-episode-clarity__item:nth-child(n + 3) { border-top: 1px solid hsl(var(--border)); }
  }
  @media (max-width: 680px) {
    .kentaro-episode-page__hero { padding: 30px 0 62px; }
    .kentaro-episode-page__hero h1 { font-size: clamp(2.8rem, 13vw, 4.3rem); }
    .kentaro-episode-page__video { width: 100%; }
    .kentaro-episode-page__heading { font-size: clamp(2.25rem, 10vw, 3.2rem); }
    .kentaro-episode-scene { padding-bottom: 36px; }
    .kentaro-episode-clarity__header { display: block; margin-bottom: 30px; }
    .kentaro-episode-clarity__grid { grid-template-columns: 1fr; }
    .kentaro-episode-clarity__item { min-height: 0; border-top: 1px solid hsl(var(--border)); border-left: 0; }
    .kentaro-episode-clarity__item:first-child { border-top: 0; }
    .kentaro-episode-topics { max-width: 360px; }
    .kentaro-episode-continue__grid { grid-template-columns: 1fr; }
    .kentaro-episode-continue__item { min-height: 0; padding: 22px 0; border-top: 1px solid hsl(var(--border)); border-left: 0; }
    .kentaro-episode-continue__item:first-child { border-top: 0; }
  }
`

function KentaroEpisodePage({ episode }: { episode: KentaroEpisode }) {
  const previous = episode.previousEpisode ? getKentaroEpisode(episode.previousEpisode) : null
  const next = episode.nextEpisode ? getKentaroEpisode(episode.nextEpisode) : null
  const clarityLabels: Array<[keyof KentaroEpisode['clarityItems'], string]> = [
    ['role', 'Role'],
    ['scope', 'Scope'],
    ['approvalPoints', 'Approval points'],
    ['accountableOwner', 'Accountable owner'],
  ]

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
          <section className="kentaro-episode-scene" aria-labelledby="episode-scene-title">
            <div className="container kentaro-episode-scene__grid">
              <div>
                <p className="eyebrow kentaro-episode-page__eyebrow">THE SCENE</p>
                <h2 id="episode-scene-title" className="kentaro-episode-page__heading">{episode.sceneHeading}</h2>
                <dl className="kentaro-episode-dialogue">
                  <div><dt>Business owner</dt><dd>“{episode.sceneDialogueBusinessOwner}”</dd></div>
                  <div><dt>Kentaro</dt><dd>“{episode.sceneDialogueKentaro}”</dd></div>
                </dl>
              </div>
              <div className="kentaro-episode-scene__copy"><p>{episode.story.situation}</p></div>
            </div>
          </section>
          <section className="kentaro-episode-problem" aria-labelledby="episode-problem-title">
            <div className="container kentaro-episode-problem__inner">
              <p className="eyebrow kentaro-episode-page__eyebrow">THE HIDDEN PROBLEM</p>
              <h2 id="episode-problem-title" className="kentaro-episode-page__heading">{episode.problemHeading}</h2>
              <div className="kentaro-episode-problem__copy"><p>{episode.problemText[0]}</p><p>{episode.problemText[1]}</p></div>
              <blockquote className="kentaro-episode-pullquote">“{episode.pullQuote}”</blockquote>
            </div>
          </section>
          <section className="kentaro-episode-clarity" aria-labelledby="episode-clarity-title">
            <div className="container">
              <div className="kentaro-episode-clarity__header">
                <div><p className="eyebrow kentaro-episode-page__eyebrow">BEFORE THE AGENT STARTS</p><h2 id="episode-clarity-title" className="kentaro-episode-page__heading">{episode.story.principleTitle}</h2></div>
              </div>
              <div className="kentaro-episode-clarity__grid">
                {clarityLabels.map(([key, label]) => <div className="kentaro-episode-clarity__item" key={key}><ClarityIcon item={key} /><h3>{label}</h3><p>{episode.clarityItems[key]}</p></div>)}
              </div>
              <p className="kentaro-episode-clarity__principle">{episode.story.principleExplanation}</p>
            </div>
          </section>
          <section className="kentaro-episode-harness" aria-labelledby="episode-harness-title">
            <div className="container kentaro-episode-harness__grid">
              <div>
                <p className="eyebrow kentaro-episode-page__eyebrow">FROM STORY TO HARNESS</p>
                <h2 id="episode-harness-title" className="kentaro-episode-page__heading">{episode.harnessHeading}</h2>
                <p className="kentaro-episode-harness__copy">{episode.story.harness}</p>
                <div className="kentaro-episode-harness__links">
                  <a href={`${kentaroBaseUrl}#kentaro-harness`}>Explore Kentaro Harness <span aria-hidden="true">→</span></a>
                  <a href={`${kentaroBaseUrl}#kentaro-roadmap`}>See how Kentaro is being built <span aria-hidden="true">→</span></a>
                  <a href={`${kentaroBaseUrl}why-kentaro-exists/`}>Why Kentaro exists <span aria-hidden="true">→</span></a>
                </div>
              </div>
              <div className="kentaro-episode-topics" aria-label="Relevant Kentaro Harness topics">{episode.harnessTopics.map((topic) => <span key={topic}>{topic}</span>)}</div>
            </div>
          </section>
          <section className="kentaro-episode-continue" aria-label="Continue watching Kentaro stories">
            <nav className="container kentaro-episode-continue__grid" aria-label="Adjacent episodes">
              {previous && <a className="kentaro-episode-continue__item" href={episodeHref(previous)}><small>Previous story</small><strong>{previous.title} <span aria-hidden="true">←</span></strong></a>}
              {next && <a className="kentaro-episode-continue__item" href={episodeHref(next)}><small>Next story</small><strong>{next.title} <span aria-hidden="true">→</span></strong></a>}
              <a className="kentaro-episode-continue__item" href={kentaroBaseUrl}><small>All stories</small><strong>Back to Kentaro at Work <span aria-hidden="true">→</span></strong></a>
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
