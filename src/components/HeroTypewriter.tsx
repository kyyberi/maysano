import type { CSSProperties } from 'react'

type HeroTypewriterProps = {
  text: string
}

/**
 * Types `text` in letter by letter, once, on page load (CSS only, no JS timers).
 *
 * - Screen readers get the plain text once (.hero-type__label); the animated
 *   letters are aria-hidden, so nothing is announced letter by letter.
 * - Every letter is in the layout from the first paint (only invisible), so the
 *   line wraps to its final shape straight away: no layout shift at any width.
 * - Works without JS and in the prerendered HTML: the animation is pure CSS.
 * - prefers-reduced-motion: the text is shown at once, with no caret.
 */
export function HeroTypewriter({ text }: HeroTypewriterProps) {
  let index = 0
  const words = text.split(' ')

  return (
    <span className="hero-type">
      <span className="hero-type__label">{text}</span>
      <span className="hero-type__letters" aria-hidden="true">
        {words.map((word, wordIndex) => (
          <span key={wordIndex}>
            <span className="hero-type__word">
              {Array.from(word).map((char) => {
                const i = index++
                return (
                  <span key={i} className="hero-type__char" style={{ '--i': i } as CSSProperties}>
                    {char}
                  </span>
                )
              })}
            </span>
            {wordIndex < words.length - 1 && (() => {
              const i = index++
              return (
                <span className="hero-type__char" style={{ '--i': i } as CSSProperties}>
                  {' '}
                </span>
              )
            })()}
          </span>
        ))}
      </span>
    </span>
  )
}
