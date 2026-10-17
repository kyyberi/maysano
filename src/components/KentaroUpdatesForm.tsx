import { type CSSProperties, useEffect, useRef, useState } from 'react'

const formId = 'kentaro-updates-form'
const subscribeSectionId = 'kentaro-subscribe'
const formStyle: CSSProperties = { width: 'min(100%, 530px)', marginTop: 24 }
const universalScript = 'https://assets.mailerlite.com/js/universal.js'
const accountId = '2719624'
const mailerLiteTheme = `
#kentaro-updates-form #mlb2-47253004.ml-form-embedContainer { display: block !important; width: 100% !important; margin: 0 !important; }
#kentaro-updates-form #mlb2-47253004 .ml-form-align-center { display: block !important; text-align: left !important; }
#kentaro-updates-form #mlb2-47253004 .ml-form-embedWrapper.embedForm { display: block !important; width: 100% !important; max-width: none !important; margin: 0 !important; padding: 0 !important; border: 0 !important; border-radius: 0 !important; background: transparent !important; }
#kentaro-updates-form #mlb2-47253004 .ml-form-embedBody { padding: 0 !important; }
#kentaro-updates-form #mlb2-47253004 .ml-form-embedContent { display: none !important; }
#kentaro-updates-form #mlb2-47253004 .ml-block-form { display: flex !important; flex-wrap: wrap !important; align-items: flex-start !important; gap: 9px !important; }
#kentaro-updates-form #mlb2-47253004 .ml-form-formContent { flex: 1 1 235px !important; width: auto !important; margin: 0 !important; }
#kentaro-updates-form #mlb2-47253004 .ml-form-fieldRow { margin: 0 !important; }
#kentaro-updates-form #mlb2-47253004 .ml-form-fieldRow input { min-height: 47px !important; padding: 0 14px !important; border: 1px solid hsl(var(--navy-foreground) / 0.35) !important; border-radius: 4px !important; background: hsl(var(--navy-foreground)) !important; color: hsl(var(--navy)) !important; font: 500 0.92rem var(--font-sans) !important; }
#kentaro-updates-form #mlb2-47253004 .ml-form-embedSubmit { order: 1; flex: 0 0 auto; width: auto !important; margin: 0 !important; }
#kentaro-updates-form #mlb2-47253004 .ml-form-embedSubmit button.primary { min-height: 47px !important; padding: 0 20px !important; border: 1px solid hsl(var(--lime)) !important; border-radius: 4px !important; background: hsl(var(--lime)) !important; color: hsl(var(--navy)) !important; font: 700 0.78rem var(--font-sans) !important; letter-spacing: 0.04em !important; text-transform: uppercase !important; font-size: 0 !important; }
#kentaro-updates-form #mlb2-47253004 .ml-form-embedSubmit button.primary:hover { background: hsl(var(--lime) / 0.88) !important; }
#kentaro-updates-form #mlb2-47253004 .ml-form-embedSubmit button.primary::after { content: 'Join the Kentaro list'; font-size: 0.78rem; }
#kentaro-updates-form #mlb2-47253004 .ml-block-form::after { content: 'No noise. Unsubscribe whenever you want.'; order: 2; flex-basis: 100%; margin-top: 1px; color: hsl(var(--navy-foreground) / 0.62); font-size: 0.76rem; line-height: 1.4; }
#kentaro-updates-form #mlb2-47253004 .ml-form-recaptcha { order: 3; flex-basis: 100%; margin: 0 !important; }
#kentaro-updates-form #mlb2-47253004 input[type='hidden'] { display: none !important; }
#kentaro-updates-form #mlb2-47253004 .ml-form-successBody { padding: 0 !important; }
#kentaro-updates-form #mlb2-47253004 .ml-form-successContent h4,
#kentaro-updates-form #mlb2-47253004 .ml-form-successContent p { color: hsl(var(--lime)) !important; font-family: var(--font-sans) !important; }
`

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
    <div ref={formRef} id={formId} className="kentaro-updates-form" style={formStyle}>
      <div className="ml-embedded" data-form="NdGxdW" />
      <style>{mailerLiteTheme}</style>
    </div>
  )
}
