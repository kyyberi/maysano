import { useEffect, useMemo, useState } from 'react'
import kentaroBadgeImage from '../assets/kentaro/kentaro-badge.png'
import kentaroPaperMountainImage from '../assets/kentaro/kentaro-paper-mountain.png'
import { siteConfig } from '../config/site'
import {
  getKentaroEpisode,
  kentaroEpisodes,
  kentaroTopicLabel,
  kentaroTopics,
  publishedKentaroEpisodes,
  type KentaroEpisode,
  type KentaroTopic,
} from '../content/kentaroEpisodes'
import { Footer } from './Footer'
import { Header } from './Header'

const pageSize = 9
const kentaroBaseUrl = `${siteConfig.siteUrl}kentaro/`
const kentaroHarnessUrl = 'https://github.com/Maysano/Kentaro'
const episodeHref = (episode: KentaroEpisode) => `${kentaroBaseUrl}episodes/${episode.slug}/`
const episodeNumber = (episode: KentaroEpisode) => `Episode ${String(episode.episodeNumber).padStart(2, '0')}`

type SortOrder = 'newest' | 'oldest'

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
  const [query, setQuery] = useState('')
  const [topic, setTopic] = useState<KentaroTopic | 'all'>('all')
  const [sort, setSort] = useState<SortOrder>('newest')
  const [page, setPage] = useState(1)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const topicParam = params.get('topic')
    const validTopic = kentaroTopics.some((item) => item.id === topicParam)
    setQuery(params.get('q') ?? '')
    setTopic(validTopic ? topicParam as KentaroTopic : 'all')
    setSort(params.get('sort') === 'oldest' ? 'oldest' : 'newest')
    setPage(Math.max(1, Number(params.get('page')) || 1))
    setIsReady(true)
  }, [])

  useEffect(() => {
    if (!isReady) return
    const params = new URLSearchParams()
    if (query) params.set('q', query)
    if (topic !== 'all') params.set('topic', topic)
    if (sort !== 'newest') params.set('sort', sort)
    if (page > 1) params.set('page', String(page))
    const search = params.toString()
    window.history.replaceState(null, '', `${window.location.pathname}${search ? `?${search}` : ''}`)
  }, [isReady, page, query, sort, topic])

  const matchingEpisodes = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    return kentaroEpisodes
      .filter((episode) => episode.status !== 'draft')
      .filter((episode) => topic === 'all' || episode.topics.includes(topic))
      .filter((episode) => !normalizedQuery || [episode.title, episode.description, ...episode.topics.map(kentaroTopicLabel)]
        .join(' ')
        .toLowerCase()
        .includes(normalizedQuery))
      .sort((a, b) => {
        const statusOrder = Number(a.status === 'comingSoon') - Number(b.status === 'comingSoon')
        if (statusOrder) return statusOrder
        return sort === 'newest' ? b.episodeNumber - a.episodeNumber : a.episodeNumber - b.episodeNumber
      })
  }, [query, sort, topic])

  const pageCount = Math.ceil(matchingEpisodes.length / pageSize)
  const safePage = Math.min(page, Math.max(pageCount, 1))
  const visibleEpisodes = matchingEpisodes.slice((safePage - 1) * pageSize, safePage * pageSize)
  const resetFilters = () => {
    setQuery('')
    setTopic('all')
    setSort('newest')
    setPage(1)
  }

  return (
    <section className="kentaro-library section" id="episodes" aria-labelledby="kentaro-episodes-title">
      <div className="container">
        <div className="kentaro-library__heading">
          <div className="section-intro">
            <p className="eyebrow">EPISODE LIBRARY</p>
            <h2 id="kentaro-episodes-title">The episodes</h2>
            <p className="section-copy">The instructions were clear. Apparently.</p>
          </div>
          <label className="kentaro-search">
            <span>Search episodes</span>
            <input
              type="search"
              value={query}
              placeholder="Search titles, descriptions, topics"
              onChange={(event) => { setQuery(event.target.value); setPage(1) }}
            />
          </label>
        </div>

        <div className="kentaro-library__controls">
          <div className="kentaro-topic-filters" role="group" aria-label="Filter episodes by topic">
            <button className={topic === 'all' ? 'is-active' : ''} type="button" onClick={() => { setTopic('all'); setPage(1) }}>All episodes</button>
            {kentaroTopics.map((item) => (
              <button key={item.id} className={topic === item.id ? 'is-active' : ''} type="button" onClick={() => { setTopic(item.id); setPage(1) }}>{item.label}</button>
            ))}
          </div>
          <label className="kentaro-sort">
            <span>Sort episodes</span>
            <select value={sort} onChange={(event) => { setSort(event.target.value as SortOrder); setPage(1) }}>
              <option value="newest">Newest first</option>
              <option value="oldest">Oldest first</option>
            </select>
          </label>
        </div>

        {visibleEpisodes.length ? (
          <>
            <div className="kentaro-episode-grid">
              {visibleEpisodes.map((episode) => <EpisodeCard key={episode.id} episode={episode} />)}
            </div>
            {pageCount > 1 && (
              <nav className="kentaro-pagination" aria-label="Episode pagination">
                <button type="button" disabled={safePage === 1} onClick={() => setPage(safePage - 1)}>Previous</button>
                <span>Page {safePage} of {pageCount}</span>
                <button type="button" disabled={safePage === pageCount} onClick={() => setPage(safePage + 1)}>Next</button>
              </nav>
            )}
          </>
        ) : (
          <div className="kentaro-empty-state">
            <h3>No episodes match those filters.</h3>
            <p>Try another search or return to the full episode library.</p>
            <button className="button" type="button" onClick={resetFilters}>Reset filters</button>
          </div>
        )}
      </div>
    </section>
  )
}

function KentaroHome() {
  const latestEpisode = publishedKentaroEpisodes[publishedKentaroEpisodes.length - 1]

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
              <p className="kentaro-hero__lead">Kentaro has a job, colleagues and increasingly specific questions.</p>
              <p className="kentaro-hero__supporting">One-minute stories about working with humans.</p>
              <div className="kentaro-hero__actions">
                {latestEpisode?.youtubeVideoId ? <a className="button button--light" href={episodeHref(latestEpisode)}>Watch latest episode</a> : <button className="button button--light" type="button" disabled title="The latest episode video has not been configured">Watch latest episode</button>}
                <a className="text-link text-link--light" href="#episodes">Browse episodes <span aria-hidden="true">↓</span></a>
              </div>
              {!latestEpisode?.youtubeVideoId && <p className="kentaro-hero__availability">Latest episode video pending.</p>}
            </div>
            <figure className="kentaro-hero__image">
              <img src={kentaroPaperMountainImage} alt="Kentaro looks worried beside a towering stack of office paperwork." width="1448" height="1086" />
            </figure>
          </div>
        </section>
        <section className="kentaro-purpose section" aria-labelledby="kentaro-purpose-title">
          <div className="container kentaro-purpose__grid">
            <div className="kentaro-purpose__heading">
              <p className="eyebrow">WHY KENTARO EXISTS</p>
              <h2 id="kentaro-purpose-title">The work starts before the prompt.</h2>
            </div>
            <div className="kentaro-purpose__copy">
              <p>AI agents are entering ordinary work. They meet unclear requirements, competing priorities, old documents and words that mean different things to different people.</p>
              <p>The result is often blamed on the agent.</p>
              <p>Kentaro shows the other side. He takes workplace language seriously. When BO says everything is Priority One, Kentaro starts everything. When BO asks for speed, Kentaro optimises the number. When BO says “use your judgment,” Kentaro asks which judgment is approved.</p>
              <p>The stories raise these tensions to the surface through office comedy. Each episode ends with one practical principle for working with agents.</p>
              <ul className="kentaro-purpose__principles">
                <li>Agents need business context, not missing history.</li>
                <li>Agents need a definition of success, not a KPI.</li>
                <li>Agents need trade-offs, not priority labels.</li>
              </ul>
              <p>Kentaro exists because better agent work starts before the prompt. It starts when people make the objective, decision, rules, data and evidence clear enough to act on.</p>
              <p className="kentaro-purpose__credit">A series by Maysano.</p>
            </div>
          </div>
        </section>
        <EpisodeLibrary />
        <section className="kentaro-harness section" aria-labelledby="kentaro-harness-title">
          <div className="container kentaro-harness__grid">
            <div className="kentaro-harness__heading">
              <p className="eyebrow">THE KENTARO HARNESS</p>
              <h2 id="kentaro-harness-title">The stories show the friction. The Harness helps avoid it.</h2>
              <p>Open-source, MIT-licensed and made for work that needs shared context.</p>
            </div>
            <div className="kentaro-harness__copy">
              <p>Kentaro is the open-source Agentic Maysano Harness for working with Maysano through Codex, Claude Code and OpenCode.</p>
              <p>The episodes show what happens when an agent has to guess. The Harness helps people and agents start from the same understanding: business context, structured artefacts, working rules, approved tools and human approval boundaries.</p>
              <ul className="kentaro-harness__principles">
                <li><strong>Less missing context</strong><span>Objectives, use cases, data products and evidence travel with the agent.</span></li>
                <li><strong>Less ambiguous action</strong><span>Working rules, approved tools and human approval remain explicit.</span></li>
                <li><strong>Less friction over time</strong><span>Maysano Platform keeps the shared context, workflow state, approvals, evidence and audit trail.</span></li>
              </ul>
              <a className="button button--light" href={kentaroHarnessUrl} target="_blank" rel="noreferrer" aria-label="Explore the Kentaro Harness on GitHub">Explore the Kentaro Harness on GitHub <span aria-hidden="true">↗</span></a>
            </div>
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
        <section className="kentaro-follow" aria-labelledby="kentaro-follow-title">
          <div className="container">
            <p className="eyebrow">KEEP UP WITH KENTARO</p>
            <h2 id="kentaro-follow-title">Follow Kentaro’s next assignment.</h2>
            <p>New episodes. Same reasonable questions.</p>
            <small>A series by Maysano.</small>
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
