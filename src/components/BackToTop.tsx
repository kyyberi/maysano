import { useEffect, useState } from 'react'

// Floating "Back to top" button, shown once the page's hero has scrolled out of view.
// Each page marks its hero with the data-page-hero attribute.
function findHero() {
  return document.querySelector<HTMLElement>('[data-page-hero]')
}

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const hero = findHero()

    // No hero to watch: fall back to "more than one screen down".
    if (!hero || !('IntersectionObserver' in window)) {
      const onScroll = () => setVisible(window.scrollY > window.innerHeight)
      onScroll()
      window.addEventListener('scroll', onScroll, { passive: true })
      return () => window.removeEventListener('scroll', onScroll)
    }

    // Visible only when the hero is out of view *above* the viewport.
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(!entry.isIntersecting && entry.boundingClientRect.top < 0)
    })
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })

    // Move keyboard and screen-reader focus to the hero, so the next Tab
    // continues from the top of the page instead of the footer.
    const hero = findHero()
    if (hero) {
      if (!hero.hasAttribute('tabindex')) {
        hero.setAttribute('tabindex', '-1')
        hero.addEventListener('blur', () => hero.removeAttribute('tabindex'), { once: true })
      }
      hero.focus({ preventScroll: true })
    }
  }

  return (
    <button
      type="button"
      className={`back-to-top${visible ? ' is-visible' : ''}`}
      aria-label="Back to top"
      title="Back to top"
      onClick={scrollToTop}
    >
      <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">
        <path d="M12 19V5M5 12l7-7 7 7" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  )
}
