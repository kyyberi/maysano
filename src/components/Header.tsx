import { useEffect, useRef, useState } from 'react'
import { siteConfig } from '../config/site'
import { Brand } from './Brand'

const navItems = [
  ['Product', `${siteConfig.siteUrl}#product`, 'product'],
  ['How It Works', `${siteConfig.siteUrl}#how-it-works`, 'how-it-works'],
  ['Architecture', `${siteConfig.siteUrl}architecture/`, 'architecture'],
  ['AI Agents', `${siteConfig.siteUrl}#agents`, 'agents'],
  ['Kentaro', `${siteConfig.siteUrl}kentaro/`, 'kentaro'],
  ['Insights', `${siteConfig.siteUrl}insights/`, 'insights'],
]

// Shown only in the mobile menu; on desktop these stay reachable from the footer.
const secondaryNavItems = [
  ['Deployment Models', `${siteConfig.siteUrl}#deployment`],
  ['Open Standards', `${siteConfig.siteUrl}#standards`],
  ['Proof & References', `${siteConfig.siteUrl}#evidence`],
  ['Enterprise', `${siteConfig.siteUrl}#enterprise`],
]

type Tone = 'light' | 'dark'

// Parses a computed "rgb(r, g, b)" / "rgba(r, g, b, a)" string. Returns null for transparent.
function parseRgb(color: string) {
  const parts = color.match(/[\d.]+/g)?.map(Number)
  if (!parts || parts.length < 3 || parts[3] === 0) return null
  return parts.slice(0, 3)
}

// WCAG relative luminance: below ~0.4 the surface needs light text.
function toneFor([r, g, b]: number[]): Tone {
  const [R, G, B] = [r, g, b].map((v) => {
    const c = v / 255
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4
  })
  return 0.2126 * R + 0.7152 * G + 0.0722 * B < 0.4 ? 'dark' : 'light'
}

// First opaque background behind the point, ignoring the header itself.
function backgroundAt(x: number, y: number, header: HTMLElement) {
  for (const element of document.elementsFromPoint(x, y)) {
    if (header.contains(element)) continue
    const color = getComputedStyle(element).backgroundColor
    const rgb = parseRgb(color)
    if (rgb) return { color, rgb }
  }
  return null
}

export function Header({ activePath }: { activePath?: string }) {
  const [open, setOpen] = useState(false)
  const [tone, setTone] = useState<Tone>('light')
  const headerRef = useRef<HTMLElement>(null)

  // Match the header to whatever is directly beneath its bottom edge. Probing at the
  // left gutter hits section backgrounds rather than cards, and works on every page.
  useEffect(() => {
    const header = headerRef.current
    if (!header) return
    let frame = 0

    const update = () => {
      frame = 0
      const found = backgroundAt(4, header.getBoundingClientRect().bottom + 1, header)
      if (!found) return
      header.style.setProperty('--nav-bg', found.color)
      setTone(toneFor(found.rgb))
    }

    const schedule = () => { if (!frame) frame = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }, [])

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
    <header ref={headerRef} className="site-header" data-tone={tone}>
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
