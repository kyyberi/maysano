export const kentaroTopics = [
  { id: 'business-context', label: 'Business context' },
  { id: 'data-semantics', label: 'Data and semantics' },
  { id: 'governance', label: 'Governance' },
  { id: 'agent-teamwork', label: 'Agent teamwork' },
  { id: 'office-life', label: 'Office life' },
] as const

export type KentaroTopic = (typeof kentaroTopics)[number]['id']
export type EpisodeStatus = 'draft' | 'comingSoon' | 'published'

export type KentaroRelatedLink = {
  label: string
  href: string
}

export type KentaroEpisode = {
  id: string
  episodeNumber: number
  slug: string
  title: string
  description: string
  status: EpisodeStatus
  publicationDate: string | null
  duration: string | null
  thumbnail: string | null
  thumbnailAlt: string | null
  youtubeVideoId: string | null
  videoAspectRatio: string
  topics: KentaroTopic[]
  transcript: string | null
  behindTheEpisode: string | null
  relatedLink?: KentaroRelatedLink
}

export const kentaroSeries = {
  youtubePlaylistUrl: 'https://www.youtube.com/playlist?list=PLCfcf0t6CobQ',
} as const

// This is the single content collection for the Kentaro series. Add real media
// metadata here as each episode is ready; the UI intentionally treats null as unavailable.
export const kentaroEpisodes: KentaroEpisode[] = [
  {
    id: 'kentaro-01',
    episodeNumber: 1,
    slug: 'first-day-missing-context',
    title: 'First day. Missing context.',
    description: 'Welcome aboard. The owner has left.',
    status: 'published',
    publicationDate: null,
    duration: null,
    thumbnail: 'https://i.ytimg.com/vi/WNAQyOpfjkU/hqdefault.jpg',
    thumbnailAlt: 'Preview image for Kentaro episode 1, First day. Missing context.',
    youtubeVideoId: 'WNAQyOpfjkU',
    videoAspectRatio: '4 / 5',
    topics: ['business-context', 'office-life'],
    transcript: null,
    behindTheEpisode: null,
  },
  {
    id: 'kentaro-02',
    episodeNumber: 2,
    slug: 'processing-time-zero',
    title: 'Processing time: zero.',
    description: 'The KPI improved. The business did not.',
    status: 'published',
    publicationDate: null,
    duration: null,
    thumbnail: 'https://i.ytimg.com/vi/LuufuQPJgEM/hqdefault.jpg',
    thumbnailAlt: 'Preview image for Kentaro episode 2, Processing time: zero.',
    youtubeVideoId: 'LuufuQPJgEM',
    videoAspectRatio: '4 / 5',
    topics: ['business-context', 'governance'],
    transcript: null,
    behindTheEpisode: null,
  },
  {
    id: 'kentaro-03',
    episodeNumber: 3,
    slug: 'we-need-more-agents',
    title: 'We need more agents.',
    description: 'A supervisor for the supervisor.',
    status: 'published',
    publicationDate: null,
    duration: null,
    thumbnail: null,
    thumbnailAlt: null,
    youtubeVideoId: null,
    videoAspectRatio: '4 / 5',
    topics: ['agent-teamwork', 'office-life'],
    transcript: null,
    behindTheEpisode: null,
  },
  {
    id: 'kentaro-04',
    episodeNumber: 4,
    slug: 'it-works-on-my-machine',
    title: 'It works on my machine.',
    description: 'Twelve demo records. Twelve million surprises.',
    status: 'published',
    publicationDate: null,
    duration: null,
    thumbnail: null,
    thumbnailAlt: null,
    youtubeVideoId: null,
    videoAspectRatio: '4 / 5',
    topics: ['data-semantics', 'business-context'],
    transcript: null,
    behindTheEpisode: null,
  },
  {
    id: 'kentaro-05',
    episodeNumber: 5,
    slug: 'coming-soon-05',
    title: 'Coming soon',
    description: '',
    status: 'comingSoon',
    publicationDate: null,
    duration: null,
    thumbnail: null,
    thumbnailAlt: null,
    youtubeVideoId: null,
    videoAspectRatio: '4 / 5',
    topics: [],
    transcript: null,
    behindTheEpisode: null,
  },
  {
    id: 'kentaro-06',
    episodeNumber: 6,
    slug: 'coming-soon-06',
    title: 'Coming soon',
    description: '',
    status: 'comingSoon',
    publicationDate: null,
    duration: null,
    thumbnail: null,
    thumbnailAlt: null,
    youtubeVideoId: null,
    videoAspectRatio: '4 / 5',
    topics: [],
    transcript: null,
    behindTheEpisode: null,
  },
]

export const publishedKentaroEpisodes = kentaroEpisodes
  .filter((episode) => episode.status === 'published')
  .sort((a, b) => a.episodeNumber - b.episodeNumber)

export const kentaroTopicLabel = (topic: KentaroTopic) => kentaroTopics.find((item) => item.id === topic)?.label ?? topic

export const getKentaroEpisode = (slug: string) => kentaroEpisodes.find((episode) => episode.slug === slug)
