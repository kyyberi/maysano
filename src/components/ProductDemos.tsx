import { SectionIntro } from './SectionIntro'

const demoSlots = ['01', '02', '03']

export function ProductDemos() {
  return (
    <section className="section demos-section" id="demos">
      <div className="container">
        <SectionIntro
          eyebrow="PRODUCT DEMOS"
          title="See Maysano in action"
          copy="We are preparing a series of focused product walkthroughs. Recordings will be added here as they are completed."
        />
        <div className="demo-placeholder-grid" aria-label="Upcoming Maysano product demonstrations">
          {demoSlots.map((slot) => (
            <article className="demo-placeholder" key={slot}>
              <span>DEMO SLOT {slot}</span>
              <div>
                <strong>Recording in preparation</strong>
                <small>Title and scope to be confirmed</small>
              </div>
            </article>
          ))}
        </div>
        <p className="demo-scope-note">The final title, scope, duration and demonstrated environment will be published with each recording.</p>
      </div>
    </section>
  )
}
