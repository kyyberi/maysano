import { useEffect, useState } from 'react'
import { siteConfig } from '../config/site'
import { Brand } from './Brand'

const navItems = [
  ['Platform', '#platform'],
  ['Data Products', '#data-products'],
  ['Governance', '#governance'],
  ['AI Agents', '#agents'],
  ['Standards', '#standards'],
]

export function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const close = () => setOpen(false)
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
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
          {navItems.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a className="button button--small" href={siteConfig.bookingUrl}>Book a Demo</a>
        </nav>
      </div>
    </header>
  )
}
