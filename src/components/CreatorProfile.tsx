import { siteConfig } from '../config/site'

export function CreatorProfile() {
  return (
    <section className="section creator-section" id="creator" aria-labelledby="creator-title">
      <div className="container creator-grid">
        <div>
          <p className="eyebrow">WHO BUILT MAYSANO</p>
          <h2 id="creator-title">Built from data product practice</h2>
        </div>
        <div className="creator-profile">
          <p className="creator-name">{siteConfig.creatorName}</p>
          <p>
            Jarkko shaped Maysano around a practical need: turn business intent and source material into governed data
            product portfolios and operational product systems. His work spans enterprise and government AI and data
            product strategy, portfolio operating models, knowledge graphs and open data product standards.
          </p>
          <a className="text-link" href={siteConfig.creatorMaysanoUrl} target="_blank" rel="author noreferrer">
            Read Jarkko&apos;s Maysano background <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}
