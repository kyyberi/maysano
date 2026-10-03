import { siteConfig } from '../config/site'
import { Brand } from './Brand'

const footerNav = [
  ['Product', '#product'],
  ['How It Works', '#how-it-works'],
  ['AI Agents', '#agents'],
]

const footerExplore = [
  ['Product Demos', '#demos'],
  ['Governance', '#governance'],
  ['Open Standards', '#standards'],
  ['Proof & References', '#evidence'],
  ['Who Built Maysano', '#creator'],
  ['Enterprise', '#enterprise'],
  ['FAQ', '#faq'],
]

const connectedContext = [
  ['01', 'Business objectives'],
  ['02', 'Business use cases'],
  ['03', 'Data products'],
  ['04', 'Governance & lifecycle'],
]

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <Brand compact />
          <p className="footer-brand__lead">Connecting data products to business strategy</p>
          <p>From objectives to outcomes, Maysano connects enterprise data to the work that creates value.</p>
          <span className="footer-signoff">From data to what matters</span>
        </div>

        <nav className="footer-column" aria-label="Product links">
          <strong>Product</strong>
          {footerNav.map(([label, href]) => <a href={href} key={label}>{label}</a>)}
        </nav>

        <nav className="footer-column" aria-label="Explore links">
          <strong>Explore</strong>
          {footerExplore.map(([label, href]) => <a href={href} key={label}>{label}</a>)}
        </nav>

        <address className="footer-column footer-company">
          <strong>Company details</strong>
          <span>Data Maestro Academy FZE LLC</span>
          <span>Business-ID: 262443655888</span>
          <span>Amber Gem Tower, 26th Floor</span>
          <span>Ajman, United Arab Emirates</span>
        </address>

        <div className="footer-contact">
          <strong>Start a conversation</strong>
          <p>See how Maysano connects objectives, use cases and data products in one governed operating model.</p>
          <a className="footer-demo" href={siteConfig.bookingUrl}>
            Book a 30-Minute Demo
            <span aria-hidden="true">&#8599;</span>
          </a>
        </div>
      </div>

      <div className="container footer-context" aria-label="Maysano connected context">
        <span className="footer-context__label">Connected context</span>
        <div className="footer-context__items">
          {connectedContext.map(([number, label]) => (
            <span className="footer-context__item" key={label}>
              <small>{number}</small>
              {label}
            </span>
          ))}
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {siteConfig.companyName}. All rights reserved.</span>
        <span>Connect data directly to business</span>
      </div>
    </footer>
  )
}
