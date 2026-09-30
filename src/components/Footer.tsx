import { siteConfig } from '../config/site'
import { Brand } from './Brand'

const footerNav = [
  ['Product', '#product'],
  ['How It Works', '#how-it-works'],
  ['AI Agents', '#agents'],
  ['Open Standards', '#standards'],
  ['Resources', '#evidence'],
  ['About', '#enterprise'],
]

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div><Brand /><p>The connected business layer between strategy and the enterprise data estate.</p></div>
        <nav className="footer-nav" aria-label="Footer navigation">
          {footerNav.map(([label, href]) => <a href={href} key={label}>{label}</a>)}
        </nav>
        <div className="footer-links">
          {siteConfig.linkedInUrl && <a href={siteConfig.linkedInUrl} target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>}
          {siteConfig.githubUrl && <a href={siteConfig.githubUrl} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>}
          <a href="mailto:privacy@maysano.com">Privacy</a>
        </div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} {siteConfig.companyName}</span><span>Connect data directly to business.</span></div>
    </footer>
  )
}
