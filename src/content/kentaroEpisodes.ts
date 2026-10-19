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
    slug: 'what-makes-a-good-decision',
    title: 'What Makes a Good Decision? | Kentaro at Work #02',
    description: 'Kentaro is ready to recommend a way forward. The team has not made the decision context clear.',
    status: 'published',
    publicationDate: null,
    duration: null,
    thumbnail: null,
    thumbnailAlt: null,
    youtubeVideoId: 'mY4rwEmn9jU',
    videoAspectRatio: '4 / 5',
    topics: ['business-context', 'governance'],
    transcript: null,
    behindTheEpisode: 'What decision is being made? Who owns it? Which options matter? What evidence counts? What trade-offs are acceptable? A good answer is not the same as a good decision. AI agents need context around the decision, not only access to data and tools. Kentaro at Work is a short story series about the friction between business people and AI agents. Kentaro Harness is being built to give agents the business and decision context, mandate and review path they need for real work.',
    story: {
      situation: 'Kentaro is asked for a recommendation. He has the data, the tools and enough time to prepare a careful answer. What he cannot find is the decision the recommendation is meant to support. One person is trying to choose a direction, another is comparing options, and a third wants reassurance that the current approach is safe. Kentaro asks who owns the decision, which options matter, what evidence counts and which trade-offs the business will accept. The team repeats that they just need a recommendation. Kentaro can produce several good answers, but each reflects a different decision. Without the context around the choice, he cannot know which answer will help the business act.',
      tension: [
        'A good answer is not the same as a good decision. A recommendation needs a defined decision, owner, options, evidence and acceptable trade-offs behind it.',
        'When that decision context is missing, an agent may provide accurate analysis without knowing which path the business is prepared to take.',
      ],
      principleTitle: 'Define the decision before requesting a recommendation.',
      principleStatement: 'An agent needs decision context, not only a request for an answer.',
      principleExplanation: 'State the decision, accountable owner, relevant options, evidence and accepted trade-offs before asking an agent to recommend a path.',
      harness: 'Kentaro Harness is being built to carry the business and decision context, mandate and review path with the work. Kentaro can then prepare a recommendation for a named decision instead of inferring one from the available data.',
    },
  },
  {
    id: 'kentaro-03',
    episodeNumber: 3,
    slug: 'we-need-more-agents',
    title: 'We Need More Agents | Kentaro at Work #03',
    description: 'Kentaro is less convinced: more agents without purpose mean more handovers and unclear responsibility.',
    status: 'published',
    publicationDate: null,
    duration: null,
    thumbnail: null,
    thumbnailAlt: null,
    youtubeVideoId: '6hAAmDy19Ao',
    videoAspectRatio: '4 / 5',
    topics: ['agent-teamwork', 'office-life'],
    transcript: null,
    behindTheEpisode: '“We need more agents” sounds like progress. Kentaro is less convinced. Adding agents before defining their purpose creates more activity, more handovers and more unclear responsibility. Each agent needs a reason to exist, a defined role and a clear relationship with the people and other agents around it. Kentaro at Work is a short story series about the friction between business people and AI agents. Kentaro Harness is being built to give agents purpose, business context, mandate and a clear path for human review.',
    story: {
      situation: 'The team decides it needs more agents. One agent could prepare research, another could analyse it, and a third could help move the work forward. Kentaro asks what each agent is responsible for, where one handover ends and another begins, and which person owns the outcome. The team says they will work it out as they go. Soon, several agents are producing updates, passing work between each other and asking people for decisions. The work is busy, but nobody can tell which agent is there to solve which problem. When a recommendation arrives late, the team blames the agents. Kentaro points out that they were added before anyone defined their purpose, role or relationship to the people already doing the work.',
      tension: [
        'Adding agents before defining their purpose creates more activity, more handovers and more unclear responsibility. More capacity does not automatically make work clearer.',
        'Each agent needs a reason to exist, a defined role and a clear relationship with the people and other agents around it.',
      ],
      principleTitle: 'Give every agent a defined purpose.',
      principleStatement: 'An agent needs a role in the work, not just a place in the workflow.',
      principleExplanation: 'Define why the agent exists, what it owns, where it hands work over and which person remains accountable for the outcome.',
      harness: 'Kentaro Harness is being built to give each agent purpose, business context, mandate and a clear path for human review. That makes agent handovers and accountable ownership explicit before more agents are added.',
    },
  },
  {
    id: 'kentaro-04',
    episodeNumber: 4,
    slug: 'everything-is-priority-one',
    title: 'Everything is priority one | Kentaro at Work #04',
    description: 'When everything is priority one, nothing has a clear path forward.',
    status: 'published',
    publicationDate: null,
    duration: null,
    thumbnail: null,
    thumbnailAlt: 'Kentaro sits at a laptop in an office beside a large priority warning symbol.',
    youtubeVideoId: 'Z-nRoNejwhg',
    videoAspectRatio: '4 / 5',
    topics: ['business-context', 'governance', 'office-life'],
    transcript: null,
    behindTheEpisode: 'When everything is priority one, nothing has a clear path forward. Kentaro takes the instruction literally and starts six workstreams. Soon they compete for the same people, budget and decision time. A priority label is not a decision. Useful AI needs clear business context: what outcome must win, what work waits and who owns the choice. Kentaro Harness is being built to give AI agents the context, boundaries and decision criteria they need before work begins.',
    story: {
      situation: 'Kentaro is told that everything is priority one. He takes the instruction literally and starts six workstreams. Soon they compete for the same people, budget and decision time. Each task has an urgent label, but nobody has named which outcome must win, what work should wait or who owns the trade-off. Kentaro can keep every workstream moving, but he cannot decide which one deserves the team’s limited attention. The problem is not missing effort. A priority label was used where a business decision was needed.',
      tension: [
        'When every request is marked urgent, workstreams compete for the same people, budget and decision time. The label does not tell an agent what should win.',
        'An agent needs to know which outcome matters most, what work can wait and who owns the trade-off. Without that decision, more activity does not create progress.',
      ],
      principleTitle: 'Make the trade-offs explicit.',
      principleStatement: 'An agent needs a priority decision, not every task marked urgent.',
      principleExplanation: 'Name which outcome must win, what work waits and who owns the choice before asking an agent to start.',
      harness: 'Kentaro Harness is being built to give AI agents the context, boundaries and decision criteria they need before work begins. Kentaro can then follow an explicit priority decision instead of treating every request as equal.',
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
  'what-makes-a-good-decision': {
    sceneHeading: 'A recommendation without a decision.',
    sceneDialogueBusinessOwner: 'Please give us your recommendation.',
    sceneDialogueKentaro: 'Which decision should it support, and who owns it?',
    problemHeading: 'A good answer is not a decision context.',
    problemText: [
      'The team asks Kentaro for a recommendation without defining the decision it should support. A recommendation only becomes useful when the owner, options, evidence and acceptable trade-offs are clear.',
      'Without that context, Kentaro can offer several reasonable answers. None is necessarily the answer the business needs to act on.',
    ],
    pullQuote: 'An agent needs decision context, not only a request for an answer.',
    clarityItems: { role: 'Prepare a recommendation for one named decision.', scope: 'Compare the agreed options against stated evidence and trade-offs.', approvalPoints: 'Confirm the owner, decision and review criteria before recommending a path.', accountableOwner: 'Name the business owner accountable for the decision.' },
    harnessHeading: 'Carry decision context with the work.',
    harnessTopics: ['Decision owner', 'Trade-offs', 'Review path'],
    metaDescription: 'Kentaro is asked for a recommendation without the decision context it needs. A workplace story about accountable choices.',
  },
  'we-need-more-agents': {
    sceneHeading: 'More agents, unclear work.',
    sceneDialogueBusinessOwner: 'We need more agents.',
    sceneDialogueKentaro: 'What purpose, role and handover should each agent have?',
    problemHeading: 'More agents do not create clarity.',
    problemText: [
      'Adding agents before defining their purpose creates more activity, more handovers and more unclear responsibility. More capacity does not automatically make work clearer.',
      'Each agent needs a reason to exist, a defined role and a clear relationship with the people and other agents around it.',
    ],
    pullQuote: 'An agent needs a role in the work, not just a place in the workflow.',
    clarityItems: { role: 'State why each agent exists and what it is responsible for.', scope: 'Set the work, tools and decisions each agent may handle.', approvalPoints: 'Define the human review and handover points between agents.', accountableOwner: 'Name the person accountable for the outcome across the workflow.' },
    harnessHeading: 'Make agent roles and handovers explicit.',
    harnessTopics: ['Purpose', 'Mandate', 'Accountable ownership'],
    metaDescription: 'Kentaro questions a plan for more agents without defined roles. A workplace story about purpose, handovers and accountability.',
  },
  'everything-is-priority-one': {
    sceneHeading: 'Six priority-one workstreams.',
    sceneDialogueBusinessOwner: 'Everything is priority one. Please get started.',
    sceneDialogueKentaro: 'Which outcome takes precedence, what work waits, and who owns the trade-off?',
    problemHeading: 'Priority labels do not make the trade-off.',
    problemText: [
      'When everything is priority one, workstreams compete for the same people, budget and decision time. A priority label is not a decision.',
      'Kentaro needs to know what outcome must win, what work waits and who owns the choice. Without those trade-offs, every workstream keeps moving but none has a clear path forward.',
    ],
    pullQuote: 'An agent needs a priority decision, not every task marked urgent.',
    clarityItems: { role: 'Prepare work against the highest-value outcome.', scope: 'Start the agreed priority; hold work that does not yet have a trade-off decision.', approvalPoints: 'Confirm the winning outcome and deferred work before starting competing requests.', accountableOwner: 'Name the business owner who chooses the trade-off.' },
    harnessHeading: 'Turn urgency into a priority decision.',
    harnessTopics: ['Business outcome', 'Trade-offs', 'Accountable ownership'],
    metaDescription: 'Kentaro receives six priority-one tasks without the trade-offs needed to move work forward. A workplace story about priorities and business context.',
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
