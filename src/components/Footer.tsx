import { siteConfig } from '../config/site'
import { Brand } from './Brand'

const footerNav = [
  ['Product', '#product'],
  ['How It Works', '#how-it-works'],
  ['AI Agents', '#agents'],
  ['Open Standards', '#standards'],
  ['Proof & References', '#evidence'],
  ['Enterprise', '#enterprise'],
]

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div><Brand /><p>The connected business layer between strategy and the enterprise data estate.</p></div>
        <nav className="footer-nav" aria-label="Footer navigation">
          {footerNav.map(([label, href]) => <a href={href} key={label}>{label}</a>)}
        </nav>
        <address className="footer-company">
          <strong>Company Details</strong>
          <span>Data Maestro Academy FZE LLC</span>
          <span>Business-ID: 262443655888</span>
          <span>Amber Gem Tower, 26th Floor, Ajman</span>
          <span>United Arab Emirates</span>
        </address>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} {siteConfig.companyName}</span><span>Connect data directly to business.</span></div>
    </footer>
  )
}
