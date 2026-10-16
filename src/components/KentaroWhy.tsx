import { siteConfig } from '../config/site'
import '../styles/kentaro.css'
import { Footer } from './Footer'
import { Header } from './Header'

const kentaroBaseUrl = `${siteConfig.siteUrl}kentaro/`
const kentaroHarnessUrl = 'https://github.com/Maysano/Kentaro'

type BackgroundSectionProps = {
  eyebrow: string
  title: string
  children: React.ReactNode
  tone?: 'paper' | 'navy'
  visual?: React.ReactNode
}

function BackgroundSection({ eyebrow, title, children, tone = 'paper', visual }: BackgroundSectionProps) {
  const isNavy = tone === 'navy'
  return (
    <section className={`section ${isNavy ? 'kentaro-harness' : 'kentaro-purpose'}`}>
      <div className={`container ${isNavy ? 'kentaro-harness__grid' : 'kentaro-purpose__grid'}`}>
        <div className={isNavy ? 'kentaro-harness__heading' : 'kentaro-purpose__heading'}>
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          {visual}
        </div>
        <div className={isNavy ? 'kentaro-harness__copy' : 'kentaro-purpose__copy'}>{children}</div>
      </div>
    </section>
  )
}

function KentaroBackgroundStructuredData() {
  const url = `${kentaroBaseUrl}why-kentaro-exists/`
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${url}#article`,
    url,
    headline: 'Why Kentaro Exists',
    description: 'A background exploration of how business people and AI agents can work together with clearer context, authority, and accountability.',
    image: `${siteConfig.siteUrl}og/kentaro-business-experience.jpg`,
    isPartOf: { '@id': `${siteConfig.siteUrl}#website` },
    publisher: { '@type': 'Organization', name: 'Maysano' },
    inLanguage: 'en',
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

function RelationshipIllustration() {
  return (
    <figure className="kentaro-relationship" aria-labelledby="kentaro-relationship-caption">
      <div className="kentaro-relationship__person"><span>Human</span><small>Intent · judgement · accountability</small></div>
      <div className="kentaro-relationship__harness"><span>Kentaro<br />Harness</span><small>Working relationship</small></div>
      <div className="kentaro-relationship__person"><span>Agent</span><small>Capability · analysis · action</small></div>
      <figcaption id="kentaro-relationship-caption">One work relationship, made explicit.</figcaption>
    </figure>
  )
}

export function KentaroWhyPage() {
  return (
    <>
      <KentaroBackgroundStructuredData />
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header activePath="kentaro" />
      <main id="main-content" className="kentaro-background">
        <header className="kentaro-episode-page__hero">
          <div className="container">
            <a className="kentaro-back" href={kentaroBaseUrl}>Back to Kentaro at Work</a>
            <p className="eyebrow">THE BACKGROUND STORY</p>
            <h1>Why Kentaro Exists</h1>
            <p>AI agents are entering workplaces built around human relationships. The question is not only what they can do. It is how business people and agents should work together.</p>
          </div>
        </header>

        <BackgroundSection eyebrow="WHY THIS TOPIC HAS RETURNED" title="The agent is not the whole story.">
          <p>There is renewed interest in what sits behind a new technology: the working conditions that make it useful, risky, frustrating, or trusted. Taking the lead for Maysano’s AI agent layer brought that question into focus. The immediate work is Kentaro Harness: a way for Codex and similar agents to work with Maysano through dialogue-based environments, alongside the conventional graphical interface.</p>
          <p>The GUI still matters. It is often the right place to compare a portfolio, inspect a record, or make a decision visible to a group. But more work will move through intent, dialogue, review, approval, and bounded execution across tools. That pattern is already reaching beyond developer tools into services such as banking.</p>
          <p>The technical shift is real. The more interesting question is social: what happens when an AI agent enters a workplace built around human relationships?</p>
        </BackgroundSection>

        <BackgroundSection eyebrow="THE HARDER RELATIONSHIP" title="Business owner and agent." tone="navy">
          <p>Maysano connects business work to data. In many organisations, the weak point is not access to another dataset or model. It is the missing decision context between a business request and the work that follows.</p>
          <p>Developer–agent collaboration matters, but developers already work with repositories, tests, reviews, issue trackers, release gates, and monitoring. Those structures do not remove ambiguity, but they give it somewhere to go. The harder relationship is between a business owner and an agent: the person who can name an outcome, recognise a trade-off, and remains accountable for the decision.</p>
          <p>Connecting an agent to a system is usually not the difficult part. Defining the relationship is.</p>
        </BackgroundSection>

        <BackgroundSection eyebrow="THE HUMAN WORKPLACE" title="Every workplace already has an unwritten contract.">
          <p>Human work relies on roles, authority, professional status, trust, informal coordination, and accountability. Colleagues carry organisational memory. They recognise that a stated objective may be an early idea, a political signal, a request for analysis, or a genuine commitment — even when none of that is written down.</p>
          <p>This is a social contract, not a legal one. An agent cannot reliably infer those distinctions from a sentence. A prompt starts a conversation. It does not establish a mandate.</p>
          <p>The <a href="https://doi.org/10.6028/NIST.AI.100-1" target="_blank" rel="noreferrer">NIST AI Risk Management Framework</a> frames trustworthy AI as an organisational concern across design, deployment, and use. Kentaro starts from the same premise: reliability is not only a model property. It also depends on who is responsible for what.</p>
        </BackgroundSection>

        <BackgroundSection eyebrow="THE MISSING DESIGN OBJECT" title="Agents need a mandate." tone="navy">
          <p>A mandate is explicit authority to act toward an outcome. It holds the business outcome, decision context, scope, authority limits, approval rights, evidence expected, route for challenge, and escalation path. It says enough about the work relationship for both person and agent to know where they stand.</p>
          <p>A mandate is not a task brief. A task brief says what to do; it may still leave the purpose, decision owner, and acceptable trade-offs unstated. Nor is a mandate a legal contract. It does not transfer human accountability to an agent.</p>
          <blockquote className="kentaro-background__callout"><strong>A task brief says what to do.</strong><span>A mandate says why it matters, what authority exists, what remains human, and how the result will be judged.</span></blockquote>
          <p>Without this object, teams tend toward two failure modes. They over-constrain an agent until it can do little more than replay a checklist, or they grant broad access without clear ownership and ask people to repair the consequences later.</p>
        </BackgroundSection>

        <BackgroundSection eyebrow="BOUNDARIES AND TRUST" title="Capability does not decide who has authority.">
          <p>Andrew Abbott’s work on professional jurisdiction is useful here: expertise is never only a matter of capability. It is also a claim over who may interpret, decide, and be held responsible. The arrival of AI in radiology makes the point plainly. An AI output is not the same thing as authority to interpret it or decide what follows.</p>
          <p>A business agent may identify an opportunity, prepare a recommendation, or surface a risk. People still need to define who may treat that output as a decision. Trust is therefore a coordination issue: what the agent knows, what it may do, how it reaches an output, and what happens when it is wrong.</p>
          <p>Recent human–AI communication research also suggests that ambiguous misunderstandings can damage trust more than simple missing information. That is a reason to make assumptions, correction routes, and uncertainty visible instead of smoothing them away.</p>
          <p className="kentaro-background__source-links"><a href="https://press.uchicago.edu/ucp/books/book/chicago/S/bo5965590.html" target="_blank" rel="noreferrer">Abbott, <em>The System of Professions</em></a><a href="https://doi.org/10.1111/1467-9566.13702" target="_blank" rel="noreferrer">Lombi and Cardano on radiology and AI</a><a href="https://doi.org/10.3389/fpsyg.2025.1637339" target="_blank" rel="noreferrer">Chen and Zhang on misunderstanding and trust</a></p>
        </BackgroundSection>

        <BackgroundSection eyebrow="LESSONS FROM OTHER WORKPLACES" title="Automation increases the need for coordination." tone="navy">
          <p>Aviation’s Crew Resource Management offers a practical lesson. As automation changes the work, human contribution shifts toward intent, judgement, trade-offs, exceptions, decisions, and accountability. That does not make people incidental. It makes coordination more important.</p>
          <p>Human review at the end of an opaque process is not meaningful oversight. Algorithmic management provides the negative example: hidden authority, silent priority changes, and unexplained decisions leave people with the responsibility for an outcome without a credible way to shape it.</p>
          <p>A human–agent work contract should make authority clearer, not less clear. It should help a person see what changed, challenge an output, correct context, and decide when an exception needs human judgement.</p>
          <p className="kentaro-background__source-links"><a href="https://ntrs.nasa.gov/citations/20040089231" target="_blank" rel="noreferrer">Helmreich, Merritt and Wilhelm on Crew Resource Management</a><a href="https://doi.org/10.1177/20539517211020332" target="_blank" rel="noreferrer">Jarrahi et al. on algorithmic management at work</a></p>
        </BackgroundSection>

        <BackgroundSection eyebrow="THE THREE-PART RELATIONSHIP" title="Human. Agent. Harness." visual={<RelationshipIllustration />}>
          <p>The agent brings technical capability: it can retrieve, compare, draft, analyse, and take bounded action. The human brings intent, judgement, values, authority, and accountability. The Harness binds them together through context, mandates, boundaries, permissions, approvals, correction paths, evidence, and responsibility.</p>
          <dl className="kentaro-background__definitions">
            <div><dt>Kentaro Harness</dt><dd>The practical product layer.</dd></div>
            <div><dt>Business-Agent Work Design</dt><dd>The Maysano-specific operating concept.</dd></div>
            <div><dt>Human-Agent Work Design</dt><dd>The wider term for the topic beyond business work.</dd></div>
          </dl>
          <p>This is deliberately not a technical architecture diagram. The point is not to describe a stack. It is to make a work relationship legible.</p>
        </BackgroundSection>

        <BackgroundSection eyebrow="WHY MAYSANO" title="From business intent to data-connected work." tone="navy">
          <p>Maysano connects objectives, decision context, use cases, data products, delivery work, and outcome evidence. It does not replace data platforms, catalogues, engineering tools, or human decision-makers.</p>
          <p>For Kentaro, that means understanding an objective, a use case, the relevant data products, the in-scope decision, and the evidence by which value will be assessed. Kentaro is not another coding agent with a different interface.</p>
          <p>Kentaro Harness keeps its established technical meaning: context, tools, permissions, execution, and feedback. The wider focus is Business-Agent Work Design: the operating relationship that lets those technical elements serve accountable work.</p>
        </BackgroundSection>

        <BackgroundSection eyebrow="WHAT KENTARO EXPLORES" title="The stories make the tension visible.">
          <p>Kentaro’s one-minute office stories put an AI agent and a business owner in recognisable situations: taking ownership without authority; being expected to know a decision from a meeting; receiving data without objective or decision context; being challenged without a correction path; or seeing a recommendation treated as a decision while the accountable owner is absent.</p>
          <p>The stories do not teach theory directly. They surface the contradictions through comedy. Each episode ends with one practical principle for working with agents.</p>
          <a className="text-link" href={`${kentaroBaseUrl}#episodes`}>Watch Kentaro’s stories <span aria-hidden="true">→</span></a>
        </BackgroundSection>

        <BackgroundSection eyebrow="FROM STORIES TO THE HARNESS" title="The solution is a clearer working relationship." tone="navy">
          <p>Kentaro Harness aims to reduce friction in practical work. It needs secure access to the right tools, data, and platform functions. It also needs an explicit working relationship: the objective, permitted information, boundaries, approvals, and accountable owner.</p>
          <p>The goal is not to make Kentaro appear independent. The goal is clearer, safer, more useful collaboration between business people and agents. Kentaro Harness is open source under the MIT licence.</p>
          <p>This is exploration and early work, not a claim that a final operating model already exists. The stories, Harness, and the ideas on this page are a way to learn in public about a problem that will matter well beyond one product.</p>
          <div className="kentaro-background__actions"><a className="button button--light" href={kentaroHarnessUrl} target="_blank" rel="noreferrer">Explore Kentaro Harness <span aria-hidden="true">↗</span></a><a className="text-link text-link--light" href={`${kentaroBaseUrl}#kentaro-follow`}>Join the journey <span aria-hidden="true">→</span></a></div>
        </BackgroundSection>

        <section className="kentaro-purpose section">
          <div className="container kentaro-purpose__grid">
            <div className="kentaro-purpose__heading"><p className="eyebrow">REFERENCES</p><h2>Further reading.</h2></div>
            <ol className="kentaro-background__reference-list">
              <li><a href="https://doi.org/10.6028/NIST.AI.100-1" target="_blank" rel="noreferrer">NIST, <em>Artificial Intelligence Risk Management Framework (AI RMF 1.0)</em></a></li>
              <li><a href="https://press.uchicago.edu/ucp/books/book/chicago/S/bo5965590.html" target="_blank" rel="noreferrer">Andrew Abbott, <em>The System of Professions</em></a></li>
              <li><a href="https://doi.org/10.1111/1467-9566.13702" target="_blank" rel="noreferrer">Linda Lombi and Mario Cardano, <em>How artificial intelligence is reshaping the autonomy and boundary work of radiologists</em></a></li>
              <li><a href="https://doi.org/10.3389/fpsyg.2025.1637339" target="_blank" rel="noreferrer">Chen and Zhang, <em>When misunderstanding meets artificial intelligence</em></a></li>
              <li><a href="https://ntrs.nasa.gov/citations/20040089231" target="_blank" rel="noreferrer">Helmreich, Merritt and Wilhelm, <em>The Evolution of Crew Resource Management Training in Commercial Aviation</em></a></li>
              <li><a href="https://doi.org/10.1177/20539517211020332" target="_blank" rel="noreferrer">Jarrahi et al., <em>Algorithmic management in a work context</em></a></li>
              <li><a href="https://cloud.google.com/discover/agent-harness" target="_blank" rel="noreferrer">Google Cloud, <em>What is an agent harness?</em></a></li>
              <li><a href="https://doi.org/10.3389/fpsyg.2021.589585" target="_blank" rel="noreferrer">Lyons et al., <em>Human–Autonomy Teaming: Definitions, Debates, and Directions</em></a></li>
              <li><a href="https://doi.org/10.1080/0960085X.2025.2475962" target="_blank" rel="noreferrer">Hemmer et al., <em>Complementarity in human-AI collaboration: concept, sources, and evidence</em></a></li>
            </ol>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
