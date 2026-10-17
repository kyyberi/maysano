import { type CSSProperties, useEffect, useRef, useState } from 'react'

const formId = 'kentaro-updates-form'
const subscribeSectionId = 'kentaro-subscribe'
const formStyle: CSSProperties = { width: 'min(100%, 530px)', marginTop: 24 }
const universalScript = 'https://assets.mailerlite.com/js/universal.js'
const accountId = '2719624'

type MailerLiteCommand = ((...args: unknown[]) => void) & { q?: unknown[][] }

declare global {
  interface Window {
    ml?: MailerLiteCommand
  }
}

function loadMailerLite() {
  if (!window.ml) {
    const queue = ((...args: unknown[]) => {
      queue.q = queue.q || []
      queue.q.push(args)
    }) as MailerLiteCommand
    window.ml = queue
  }

  window.ml('account', accountId)

  if (document.querySelector(`script[src="${universalScript}"]`)) return

  const script = document.createElement('script')
  script.src = universalScript
  script.async = true
  document.head.appendChild(script)
}

export function KentaroUpdatesForm() {
  const formRef = useRef<HTMLDivElement>(null)
  const [loadProvider, setLoadProvider] = useState(false)

  useEffect(() => {
    if (loadProvider) {
      loadMailerLite()
      return
    }

    if (window.location.hash === `#${subscribeSectionId}`) {
      setLoadProvider(true)
      return
    }

    const form = formRef.current
    if (!form || !('IntersectionObserver' in window)) {
      setLoadProvider(true)
      return
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      setLoadProvider(true)
      observer.disconnect()
    }, { rootMargin: '600px 0px' })

    observer.observe(form)
    return () => observer.disconnect()
  }, [loadProvider])

  return (
    <div ref={formRef} id={formId} style={formStyle}>
      <div className="ml-embedded" data-form="NdGxdW" />
    </div>
  )
}
