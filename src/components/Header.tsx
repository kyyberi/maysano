import { useEffect, useState } from 'react'
import { siteConfig } from '../config/site'
import { Brand } from './Brand'

const navItems = [
  ['Product', `${siteConfig.siteUrl}#product`, 'product'],
  ['How It Works', `${siteConfig.siteUrl}#how-it-works`, 'how-it-works'],
  ['Architecture', `${siteConfig.siteUrl}architecture/`, 'architecture'],
  ['AI Agents', `${siteConfig.siteUrl}#agents`, 'agents'],
  ['Insights', `${siteConfig.siteUrl}insights/`, 'insights'],
]

// Shown only in the mobile menu; on desktop these stay reachable from the footer.
const secondaryNavItems = [
  ['Deployment Models', `${siteConfig.siteUrl}#deployment`],
  ['Open Standards', `${siteConfig.siteUrl}#standards`],
  ['Proof & References', `${siteConfig.siteUrl}#evidence`],
  ['Enterprise', `${siteConfig.siteUrl}#enterprise`],
]

export function Header({ activePath }: { activePath?: string }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const close = () => setOpen(false)
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') close() }
    window.addEventListener('resize', close)
    window.addEventListener('keydown', closeOnEscape)
    return () => {
      window.removeEventListener('resize', close)
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [])

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Brand compact />
        <button
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="primary-navigation"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
        <nav id="primary-navigation" className={`primary-nav ${open ? 'is-open' : ''}`} aria-label="Primary navigation">
          {navItems.map(([label, href, key]) => (
            <a key={href} className={activePath === key ? 'is-active' : ''} href={href} aria-current={activePath === key ? 'page' : undefined} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <div className="nav-secondary">
            <span>More</span>
            {secondaryNavItems.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
            ))}
          </div>
          <a className="button button--small" href={siteConfig.bookingUrl} onClick={() => setOpen(false)}>Book a Demo</a>
        </nav>
      </div>
    </header>
  )
}
