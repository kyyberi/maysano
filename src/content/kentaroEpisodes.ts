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

export type KentaroEpisodeStory = {
  situation: string
  tension: [string, string]
  principleTitle: string
  principleStatement: string
  principleExplanation: string
  harness: string
}

export type KentaroClarityItems = {
  role: string
  scope: string
  approvalPoints: string
  accountableOwner: string
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
  story: KentaroEpisodeStory
  videoUrl: string | null
  videoPoster: string | null
  sceneHeading: string
  sceneDialogueBusinessOwner: string
  sceneDialogueKentaro: string
  problemHeading: string
  problemText: [string, string]
  pullQuote: string
  clarityItems: KentaroClarityItems
  harnessHeading: string
  harnessTopics: string[]
  previousEpisode: string | null
  nextEpisode: string | null
  socialImage: string
  metaDescription: string
}

type KentaroEpisodeDraft = Omit<KentaroEpisode, 'videoUrl' | 'videoPoster' | 'sceneHeading' | 'sceneDialogueBusinessOwner' | 'sceneDialogueKentaro' | 'problemHeading' | 'problemText' | 'pullQuote' | 'clarityItems' | 'harnessHeading' | 'harnessTopics' | 'previousEpisode' | 'nextEpisode' | 'socialImage' | 'metaDescription'>

// This is the single content collection for the Kentaro series. Add real media
// metadata here as each episode is ready; the UI intentionally treats null as unavailable.
const kentaroEpisodeDrafts: KentaroEpisodeDraft[] = [
  {
    id: 'kentaro-01',
    episodeNumber: 1,
    slug: 'i-expected-context',
    title: 'I Expected Context… | Kentaro at Work #01',
    description: 'Kentaro has the data, tools and task. He still does not know why the business needs the work.',
    status: 'published',
    publicationDate: null,
    duration: null,
    thumbnail: null,
    thumbnailAlt: null,
    youtubeVideoId: 'NNZFI4adQHI',
    videoAspectRatio: '4 / 5',
    topics: ['business-context', 'data-semantics'],
    transcript: null,
    behindTheEpisode: 'This is a common failure in AI-agent work. Data alone does not tell an agent what decision matters, what outcome counts as success or which trade-offs the business accepts. Kentaro at Work is a short story series about the friction between business people and AI agents. Kentaro Harness is being built to give agents the business context, mandate and review path they need for real work.',
    story: {
      situation: 'Kentaro receives access to the data, the tools and the task. He can inspect the records, run the analysis and prepare an answer. What he cannot find is why the business needs the work, which decision it should support or what outcome would count as useful. Kentaro asks for that context. People point back to the data and repeat the task. He produces several reasonable ways to analyse the material, but each leads to a different recommendation. The problem is not missing effort or missing data. The business purpose was never made part of the assignment.',
      tension: [
        'Data alone does not tell an agent what decision matters, what outcome counts as success or which trade-offs the business accepts.',
        'When that business context is missing, an agent can produce accurate work that does not help the decision the team actually needs to make.',
      ],
      principleTitle: 'Start with the business purpose.',
      principleStatement: 'An agent needs business context, not just data, tools and a task.',
      principleExplanation: 'Define the decision, the outcome that matters and the trade-offs the business accepts before asking an agent to act.',
      harness: 'Kentaro Harness is being built to carry the business context, mandate and review path with the work. Kentaro can then act for a defined purpose instead of inferring one from the available data.',
    },
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
    story: {
      situation: 'A team asks Kentaro for the answer to a question that has already delayed a project. He searches the shared documents, reads the requirements and checks the available data. The answer is nowhere. A colleague tells him that it was agreed in last Tuesday’s meeting. Kentaro was not invited, the notes were never published, and the decision was not linked to the work. He offers the best answer supported by the material he can see. The team immediately corrects him: everyone knows the direction was settled last week. Kentaro does not know it, because the decision exists only in the memories of the people who were in the room.',
      tension: [
        'A decision that is not recorded in the working context is not available to the people or agents who need to carry it forward. Access to documents is not the same as access to the decision trail.',
        'The agent is blamed for missing an answer that was never made part of the work. The real gap is between a conversation being held and a decision being usable.',
      ],
      principleTitle: 'Make decisions available to the work.',
      principleStatement: 'An agent needs recorded decisions, not access to the aftermath.',
      principleExplanation: 'Capture the decision, its rationale, its owner and what it changes. Link it to the objective or use case that depends on it.',
      harness: 'Kentaro Harness can carry approved decisions and their evidence with the work package. That gives the agent a shared point of reference and a correction path when new information changes the decision.',
    },
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
    story: {
      situation: 'Kentaro receives a folder of data, access to the usual tools and a deadline for Friday. The message says the team needs a brief. He asks what the brief is meant to decide, who will use it and what a useful outcome looks like. The answers arrive as examples from previous work, a list of possible audiences and a request to make it “strategic.” Kentaro produces a careful summary, then a more visual version, then a set of options. Each draft is reasonable. Each is rejected for a different reason. By Thursday afternoon, the team realises that nobody has agreed whether they need a recommendation, a status update, a business case or a decision paper.',
      tension: [
        'The team supplied inputs, tools and urgency, but not an outcome. A deliverable is not a definition of success, and examples from old work cannot silently become the new requirement.',
        'Kentaro can generate many plausible briefs. He cannot know which one matters unless the business purpose and decision are stated.',
      ],
      principleTitle: 'Define success before requesting output.',
      principleStatement: 'An agent needs a definition of success, not a deadline and a tool.',
      principleExplanation: 'State the decision the work should support, the audience, the criteria for usefulness and the evidence needed to stand behind it.',
      harness: 'Kentaro Harness connects an assignment to its objective, use case, expected evidence and reviewer. It gives Kentaro a test for whether a brief is ready, rather than asking him to infer success from format alone.',
    },
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
    story: {
      situation: 'Kentaro presents the analysis the team asked for. The numbers are correct, the sources are documented and the calculation follows the instructions he received. A manager looks at the result and says, “Can you fix it?” Kentaro asks what is wrong. The manager says it does not feel right. Another person says the totals should be more useful. A third says the data is technically fine but does not answer the question they had in mind. Kentaro opens the brief again. It says to provide the metric, not what the metric is meant to show, which exceptions matter, or how the team will judge a good answer.',
      tension: [
        'The team is reacting to a result without being able to name the criterion that makes it wrong. “Fix it” is feedback on a feeling, not a correction instruction.',
        'When success criteria stay implicit, every revision becomes a new guess. The agent can improve the output only after the business meaning of correct is made explicit.',
      ],
      principleTitle: 'Make the correction test visible.',
      principleStatement: 'An agent needs a correction criterion, not feedback that something feels wrong.',
      principleExplanation: 'Define the business question, the expected interpretation, the exceptions that matter and who can decide that the result is fit for use.',
      harness: 'Kentaro Harness can attach the business objective, data meaning and review criteria to the work. A reviewer can then point to the missing condition, and Kentaro can correct against evidence instead of restarting from an impression.',
    },
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
    story: {
      situation: 'Kentaro is asked to compare options for a supplier change. He gathers the evidence, describes the risks and recommends the option that best matches the stated priorities. The person who usually approves the decision is away. Someone replies “looks good” in the chat. Another person starts telling the wider team that the change has been approved. Kentaro asks whether the recommendation is now a decision and who authorised it. The room goes quiet. Everyone assumed somebody else had done it. The change is delayed, not because Kentaro failed to analyse it, but because nobody had defined how a recommendation becomes an approved action.',
      tension: [
        'A recommendation and a decision are different things. When the approval route is invisible, casual agreement can be mistaken for authority.',
        'The agent cannot safely bridge that gap by itself. It needs to know which person or role can approve, what evidence they need and what to do when that person is unavailable.',
      ],
      principleTitle: 'Separate recommendation from approval.',
      principleStatement: 'An agent needs an approval route, not a silent room.',
      principleExplanation: 'Name the approver, the evidence required, the decision deadline and the escalation path when the accountable person is absent.',
      harness: 'Kentaro Harness can record the decision gate with the work, keep the recommendation reviewable and route an unresolved approval to the right owner. Kentaro does not need to turn a chat reaction into authority.',
    },
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
    story: {
      situation: 'Kentaro is preparing a short update for a project review. Just before he finishes, someone asks for one small extra thing: add a comparison, check three regional exceptions, include the legal wording and make it ready for the board. Kentaro adds each piece because every request sounds connected to the original task. The short update becomes research, analysis, review and a new decision paper. At the meeting, the team wonders why it took so long. Kentaro points to the list of additions. The team says they were only minor. What changed was not the number of requests. It was the mandate, without anyone saying so.',
      tension: [
        'Scope change often arrives disguised as a small addition. The request is not only longer; it can require new sources, different review, higher stakes and a different owner.',
        'An agent that follows every addition literally may produce more work than the original mandate allowed. An agent that refuses needs a clear way to ask whether the work has changed.',
      ],
      principleTitle: 'Renew the mandate when scope changes.',
      principleStatement: 'An agent needs a renewed mandate when a small request changes the work.',
      principleExplanation: 'Define the original outcome, the boundaries of the task and the threshold at which added work needs a new owner, timeline or approval.',
      harness: 'Kentaro Harness can keep the original mandate visible, compare a requested change against it and create a review point before the agent absorbs new work. That turns scope change into an explicit decision instead of a quiet accumulation.',
    },
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
    story: {
      situation: 'Kentaro is given access to a large data set and asked to find the insight. He can see transactions, dates, product codes and customer records. He creates summaries, spots anomalies and identifies several patterns. The team is not impressed. One person wanted to understand a drop in renewals. Another wanted a case for investment. A third was checking whether a new policy was working. All of them assumed the data would make the right question obvious. Kentaro has the numbers, but no shared purpose for using them. Every plausible insight points in a different direction, and none can be called the answer without knowing what decision it should support.',
      tension: [
        'Data access gives an agent material to analyse, not a reason to analyse it. The same data can support different questions, measures and recommendations depending on the business decision at stake.',
        'When the purpose is missing, an agent may produce accurate findings that are irrelevant. The problem is not that the data is absent; it is that the question is undefined.',
      ],
      principleTitle: 'Start with the business question.',
      principleStatement: 'An agent needs a business question, not just data access.',
      principleExplanation: 'State the decision, the audience, the time horizon and the measure that matters before asking for analysis or insight.',
      harness: 'Kentaro Harness links the data work to its objective, use case and evidence expectations. Kentaro can then select and interpret data in service of a known decision, with a visible route to challenge the result.',
    },
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
    story: {
      situation: 'Kentaro is invited into a business team’s work. He receives access to documents, data and meetings. People ask him to prepare summaries, answer questions and suggest next steps. One person assumes Kentaro is an assistant. Another treats him as an analyst. A third expects him to make decisions when nobody is available. Kentaro tries to help all of them. The problem is that the team has never agreed what he is there to do, where his authority ends, or who takes responsibility for the work that follows.',
      tension: [
        'The team added an agent before defining its role. Access to information does not establish a mandate. An agent needs to know whether it is preparing work, recommending a direction, carrying out an approved action or escalating a decision to a person.',
        'Without that agreement, every request carries a different expectation. Kentaro is not being difficult when he asks. He is exposing the role the team never defined.',
      ],
      principleTitle: 'Define the agent’s role in the team.',
      principleStatement: 'An agent needs a defined role, not an assumed place in the team.',
      principleExplanation: 'Before an agent joins a business workflow, define its purpose, scope, decision rights, approval points and accountable business owner.',
      harness: 'Kentaro Harness gives this relationship a working structure. It connects the agent to the relevant business context and makes its mandate, boundaries, approvals and escalation route explicit.',
    },
  },
]

const kentaroEpisodeDetails: Record<string, Omit<KentaroEpisode, keyof KentaroEpisodeDraft | 'videoUrl' | 'videoPoster' | 'previousEpisode' | 'nextEpisode' | 'socialImage'>> = {
  'i-expected-context': {
    sceneHeading: 'Data without the reason for it.',
    sceneDialogueBusinessOwner: 'You have the data, tools and task. Please get started.',
    sceneDialogueKentaro: 'Which decision should this work support, and what outcome matters?',
    problemHeading: 'Data access does not establish the business purpose.',
    problemText: [
      'Data alone does not tell an agent what decision matters, what outcome counts as success or which trade-offs the business accepts.',
      'When the business purpose is missing, an agent can produce accurate work that does not help the decision the team actually needs to make.',
    ],
    pullQuote: 'An agent needs business context, not just data, tools and a task.',
    clarityItems: { role: 'Analyse the information for one stated business decision.', scope: 'Use the agreed data, measures and time horizon.', approvalPoints: 'Confirm the business purpose before selecting analysis or recommendations.', accountableOwner: 'Name the business owner who will use the outcome.' },
    harnessHeading: 'Carry the business purpose with the work.',
    harnessTopics: ['Business context', 'Mandate', 'Review path'],
    metaDescription: 'Kentaro has the data, tools and task but not the business context. A workplace story about purpose and decision-making.',
  },
  'meeting-he-wasnt-in': {
    sceneHeading: 'The decision is somewhere else.',
    sceneDialogueBusinessOwner: 'The answer was agreed last Tuesday.',
    sceneDialogueKentaro: 'Where can I find that decision and what did it change?',
    problemHeading: 'A remembered decision is not working context.',
    problemText: [
      'A decision that is not recorded in the working context is not available to the people or agents who need to carry it forward. Access to documents is not the same as access to the decision trail.',
      'The agent is blamed for missing an answer that was never made part of the work. The real gap is between a conversation being held and a decision being usable.',
    ],
    pullQuote: 'An agent needs recorded decisions, not access to the aftermath.',
    clarityItems: { role: 'Use the agreed direction to prepare the next piece of work.', scope: 'Work only from decisions linked to the assignment.', approvalPoints: 'Confirm a new or changed decision before replacing the record.', accountableOwner: 'Name the decision owner and the person responsible for recording it.' },
    harnessHeading: 'Carry decisions with the work.',
    harnessTopics: ['Business context', 'Decision record', 'Correction path'],
    metaDescription: 'Kentaro misses an answer agreed in a meeting he never attended. A workplace story about decision trails and shared context.',
  },
  'brief-that-wasnt': {
    sceneHeading: 'A brief without a decision.',
    sceneDialogueBusinessOwner: 'We need a strategic brief by Friday.',
    sceneDialogueKentaro: 'What decision should it support, and how will the reader use it?',
    problemHeading: 'A deliverable is not a definition of success.',
    problemText: [
      'The team supplied inputs, tools and urgency, but not an outcome. A deliverable is not a definition of success, and examples from old work cannot silently become the new requirement.',
      'Kentaro can generate many plausible briefs. He cannot know which one matters unless the business purpose and decision are stated.',
    ],
    pullQuote: 'An agent needs a definition of success, not a deadline and a tool.',
    clarityItems: { role: 'Prepare a decision-ready brief.', scope: 'Use the agreed audience, evidence and question only.', approvalPoints: 'Review the intended decision and success criteria before drafting.', accountableOwner: 'Name the person who will use and judge the brief.' },
    harnessHeading: 'Connect the brief to its purpose.',
    harnessTopics: ['Business context', 'Expected evidence', 'Review'],
    metaDescription: 'Kentaro receives data, tools and a deadline but no definition of success. A workplace story about useful briefs.',
  },
  'can-you-fix-it': {
    sceneHeading: 'Correct according to what?',
    sceneDialogueBusinessOwner: 'Can you fix it? It does not feel right.',
    sceneDialogueKentaro: 'Which business condition should the result meet?',
    problemHeading: 'Feedback needs a correction test.',
    problemText: [
      'The team is reacting to a result without being able to name the criterion that makes it wrong. “Fix it” is feedback on a feeling, not a correction instruction.',
      'When success criteria stay implicit, every revision becomes a new guess. The agent can improve the output only after the business meaning of correct is made explicit.',
    ],
    pullQuote: 'An agent needs a correction criterion, not feedback that something feels wrong.',
    clarityItems: { role: 'Analyse the metric against the business question.', scope: 'Use agreed definitions and named exceptions.', approvalPoints: 'Confirm the correction criterion before recalculating.', accountableOwner: 'Name the reviewer who decides the result is fit for use.' },
    harnessHeading: 'Make review criteria usable.',
    harnessTopics: ['Data meaning', 'Review criteria', 'Correction path'],
    metaDescription: 'Kentaro is told to fix a correct analysis without a usable correction criterion. A workplace story about feedback.',
  },
  'approved-by-nobody': {
    sceneHeading: 'A recommendation becomes a decision.',
    sceneDialogueBusinessOwner: 'Looks good. Let’s move ahead.',
    sceneDialogueKentaro: 'Has the accountable approver authorised this change?',
    problemHeading: 'Agreement is not approval.',
    problemText: [
      'A recommendation and a decision are different things. When the approval route is invisible, casual agreement can be mistaken for authority.',
      'The agent cannot safely bridge that gap by itself. It needs to know which person or role can approve, what evidence they need and what to do when that person is unavailable.',
    ],
    pullQuote: 'An agent needs an approval route, not a silent room.',
    clarityItems: { role: 'Compare options and prepare a recommendation.', scope: 'Do not execute a supplier change.', approvalPoints: 'Route the recommendation to the named approver with evidence.', accountableOwner: 'Name the business owner who can authorise the decision.' },
    harnessHeading: 'Keep recommendation and approval distinct.',
    harnessTopics: ['Approval route', 'Authority', 'Escalation'],
    metaDescription: 'Kentaro sees a recommendation mistaken for approval. A workplace story about decision authority and escalation.',
  },
  'one-small-extra-thing': {
    sceneHeading: 'The small request that changed the work.',
    sceneDialogueBusinessOwner: 'Could you add one small extra thing?',
    sceneDialogueKentaro: 'Does this change the outcome, review or approval needed?',
    problemHeading: 'Small additions can change the mandate.',
    problemText: [
      'Scope change often arrives disguised as a small addition. The request is not only longer; it can require new sources, different review, higher stakes and a different owner.',
      'An agent that follows every addition literally may produce more work than the original mandate allowed. An agent that refuses needs a clear way to ask whether the work has changed.',
    ],
    pullQuote: 'An agent needs a renewed mandate when a small request changes the work.',
    clarityItems: { role: 'Deliver the agreed project update.', scope: 'Flag added research, legal review or board material as scope change.', approvalPoints: 'Confirm a revised mandate before absorbing new work.', accountableOwner: 'Name the owner who accepts the new outcome, time and risk.' },
    harnessHeading: 'Make scope change an explicit decision.',
    harnessTopics: ['Scope', 'Mandate', 'Review point'],
    metaDescription: 'Kentaro receives one small extra thing that changes the whole assignment. A workplace story about scope and mandate.',
  },
  'the-data-is-there': {
    sceneHeading: 'Data without a business question.',
    sceneDialogueBusinessOwner: 'The data is there. Find the insight.',
    sceneDialogueKentaro: 'Which decision should this analysis help you make?',
    problemHeading: 'Data access does not define the question.',
    problemText: [
      'Data access gives an agent material to analyse, not a reason to analyse it. The same data can support different questions, measures and recommendations depending on the business decision at stake.',
      'When the purpose is missing, an agent may produce accurate findings that are irrelevant. The problem is not that the data is absent; it is that the question is undefined.',
    ],
    pullQuote: 'An agent needs a business question, not just data access.',
    clarityItems: { role: 'Analyse data for one stated decision.', scope: 'Use the agreed measures, audience and time horizon.', approvalPoints: 'Confirm the question before selecting analysis or recommendations.', accountableOwner: 'Name the business owner who will use the finding.' },
    harnessHeading: 'Link data work to its decision.',
    harnessTopics: ['Business context', 'Data meaning', 'Evidence'],
    metaDescription: 'Kentaro has access to the data but not the purpose behind it. A workplace story about business questions.',
  },
  'new-team-member': {
    sceneHeading: 'An agent joins without a role.',
    sceneDialogueBusinessOwner: 'Help the team wherever you can.',
    sceneDialogueKentaro: 'Am I assisting, recommending, acting, or escalating a decision?',
    problemHeading: 'Access does not establish a role.',
    problemText: [
      'The team added an agent before defining its role. Access to information does not establish a mandate. An agent needs to know whether it is preparing work, recommending a direction, carrying out an approved action or escalating a decision to a person.',
      'Without that agreement, every request carries a different expectation. Kentaro is not being difficult when he asks. He is exposing the role the team never defined.',
    ],
    pullQuote: 'An agent needs a defined role, not an assumed place in the team.',
    clarityItems: { role: 'State whether Kentaro assists, analyses, recommends or acts.', scope: 'Set the work, systems and decisions that are in bounds.', approvalPoints: 'Name the points where a person must review or authorise work.', accountableOwner: 'Name the business owner responsible for Kentaro’s outcome.' },
    harnessHeading: 'Give the agent a working role.',
    harnessTopics: ['Mandate', 'Authority', 'Accountable ownership'],
    metaDescription: 'Kentaro joins a team that has not agreed his role. A workplace story about mandate, authority and ownership.',
  },
}

const defaultSocialImage = 'https://maysano.com/og/kentaro-business-experience.jpg'

export const kentaroEpisodes: KentaroEpisode[] = kentaroEpisodeDrafts.map((episode, index, episodes) => ({
  ...episode,
  ...kentaroEpisodeDetails[episode.slug],
  videoUrl: episode.youtubeVideoId ? `https://www.youtube.com/shorts/${episode.youtubeVideoId}` : null,
  videoPoster: episode.thumbnail,
  previousEpisode: episodes[index - 1]?.slug ?? null,
  nextEpisode: episodes[index + 1]?.slug ?? null,
  socialImage: defaultSocialImage,
}))

export const publishedKentaroEpisodes = kentaroEpisodes
  .filter((episode) => episode.status === 'published')
  .sort((a, b) => a.episodeNumber - b.episodeNumber)

export const kentaroTopicLabel = (topic: KentaroTopic) => kentaroTopics.find((item) => item.id === topic)?.label ?? topic

export const getKentaroEpisode = (slug: string) => kentaroEpisodes.find((episode) => episode.slug === slug)
