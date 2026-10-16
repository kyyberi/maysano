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

// This is the single content collection for the Kentaro series. Add real media
// metadata here as each episode is ready; the UI intentionally treats null as unavailable.
export const kentaroEpisodes: KentaroEpisode[] = [
  {
    id: 'kentaro-01',
    episodeNumber: 1,
    slug: 'ownership-apparently',
    title: 'Ownership, Apparently',
    description: 'Kentaro is told to take ownership. Nobody gives him authority to decide.',
    status: 'published',
    publicationDate: null,
    duration: null,
    thumbnail: null,
    thumbnailAlt: null,
    youtubeVideoId: null,
    videoAspectRatio: '4 / 5',
    topics: ['business-context', 'office-life'],
    transcript: null,
    behindTheEpisode: null,
  },
  {
    id: 'kentaro-02',
    episodeNumber: 2,
    slug: 'meeting-he-wasnt-in',
    title: 'The Meeting He Wasn’t In',
    description: 'The answer exists. It was discussed in a meeting Kentaro never attended.',
    status: 'published',
    publicationDate: null,
    duration: null,
    thumbnail: null,
    thumbnailAlt: null,
    youtubeVideoId: null,
    videoAspectRatio: '4 / 5',
    topics: ['business-context', 'governance'],
    transcript: null,
    behindTheEpisode: null,
  },
  {
    id: 'kentaro-03',
    episodeNumber: 3,
    slug: 'brief-that-wasnt',
    title: 'The Brief That Wasn’t',
    description: 'Kentaro has data, tools, and a deadline. He still does not know what success means.',
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
    slug: 'can-you-fix-it',
    title: 'Can You Fix It?',
    description: 'Everyone agrees Kentaro’s output is wrong. Nobody can explain what the right answer is.',
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
    slug: 'approved-by-nobody',
    title: 'Approved by Nobody',
    description: 'A recommendation turns into a decision because the responsible owner is absent.',
    status: 'published',
    publicationDate: null,
    duration: null,
    thumbnail: null,
    thumbnailAlt: null,
    youtubeVideoId: null,
    videoAspectRatio: '4 / 5',
    topics: ['governance', 'business-context'],
    transcript: null,
    behindTheEpisode: null,
  },
  {
    id: 'kentaro-06',
    episodeNumber: 6,
    slug: 'one-small-extra-thing',
    title: 'One Small Extra Thing',
    description: 'A small request becomes a large task, but Kentaro’s mandate never changes.',
    status: 'published',
    publicationDate: null,
    duration: null,
    thumbnail: null,
    thumbnailAlt: null,
    youtubeVideoId: null,
    videoAspectRatio: '4 / 5',
    topics: ['business-context', 'office-life'],
    transcript: null,
    behindTheEpisode: null,
  },
  {
    id: 'kentaro-07',
    episodeNumber: 7,
    slug: 'the-data-is-there',
    title: 'The Data Is There',
    description: 'Kentaro has access to the data. He does not know why the business needs it.',
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
    id: 'kentaro-08',
    episodeNumber: 8,
    slug: 'new-team-member',
    title: 'The New Team Member',
    description: 'Kentaro has joined the team. The team has not agreed what role he has.',
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
]

export const publishedKentaroEpisodes = kentaroEpisodes
  .filter((episode) => episode.status === 'published')
  .sort((a, b) => a.episodeNumber - b.episodeNumber)

export const kentaroTopicLabel = (topic: KentaroTopic) => kentaroTopics.find((item) => item.id === topic)?.label ?? topic

export const getKentaroEpisode = (slug: string) => kentaroEpisodes.find((episode) => episode.slug === slug)
