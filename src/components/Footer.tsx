import { siteConfig } from '../config/site'
import { Brand } from './Brand'

const footerNav = [
  ['Platform', '#platform'],
  ['Data Products', '#data-products'],
  ['AI Agents', '#agents'],
  ['Governance', '#governance'],
  ['Open Standards', '#standards'],
  ['Contact', siteConfig.bookingUrl],
]

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div><Brand /><p>The business and product layer for the enterprise data ecosystem.</p></div>
        <nav className="footer-nav" aria-label="Footer navigation">
          {footerNav.map(([label, href]) => <a href={href} key={label}>{label}</a>)}
        </nav>
        <div className="footer-links">
          {siteConfig.linkedInUrl && <a href={siteConfig.linkedInUrl} target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>}
          {siteConfig.githubUrl && <a href={siteConfig.githubUrl} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>}
          <a href="mailto:privacy@maysano.com">Privacy</a>
        </div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} {siteConfig.companyName}</span><span>Connect business directly to data.</span></div>
    </footer>
  )
}
