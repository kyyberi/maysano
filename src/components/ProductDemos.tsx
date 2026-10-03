import { SectionIntro } from './SectionIntro'

const upcomingDemoSlots = ['02', '03']

const firstDemo = {
  title: 'From Business Discussion to Data Product Candidate',
  youtubeUrl: 'https://youtu.be/Z0wZkZbZv0I',
  embedUrl: 'https://www.youtube-nocookie.com/embed/Z0wZkZbZv0I',
} as const

export function ProductDemos() {
  return (
    <section className="section demos-section" id="demos">
      <div className="container">
        <SectionIntro
          eyebrow="PRODUCT DEMOS"
          title="See Maysano in action"
          copy="Short working stories showing how business context becomes managed data product work."
        />

        <article className="demo-feature">
          <div className="demo-video">
            <iframe
              src={firstDemo.embedUrl}
              title={`Maysano demo: ${firstDemo.title}`}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
            <ol className="demo-story-flow" aria-label="From discussion to managed data product work">
              <li>
                <strong>Business discussion</strong>
                <small>Context is captured</small>
              </li>
              <li>
                <strong>Working note</strong>
                <small>Intent becomes usable</small>
              </li>
              <li>
                <strong>Managed candidate</strong>
                <small>Work enters its lifecycle</small>
              </li>
            </ol>
          </div>
          <div className="demo-feature-copy">
            <p className="demo-number">DEMO 01</p>
            <h3>{firstDemo.title}</h3>
            <p>Most data product work starts before there is a data product. It starts with a business discussion.</p>
            <p>
              A Business Owner and Data Product Manager start with a working note captured from an earlier discussion.
              They use that context to create and review a data product candidate, place it into lifecycle management,
              and connect it back to the business objective and use case.
            </p>
            <p className="demo-story-note">
              This is not a feature tour. It is one practical working story showing how Maysano connects business
              context, use cases and data products in one managed flow.
            </p>
            <a className="text-link demo-watch-link" href={firstDemo.youtubeUrl} target="_blank" rel="noreferrer">
              Watch on YouTube <span aria-hidden="true">↗</span>
            </a>
          </div>
        </article>

        <div className="demo-upcoming">
          <p className="demo-upcoming-label">Next recordings</p>
          <div className="demo-placeholder-grid" aria-label="Upcoming Maysano product demonstrations">
            {upcomingDemoSlots.map((slot) => (
              <article className="demo-placeholder" key={slot}>
                <span>DEMO SLOT {slot}</span>
                <div>
                  <strong>Recording in preparation</strong>
                  <small>Title and scope to be confirmed</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
