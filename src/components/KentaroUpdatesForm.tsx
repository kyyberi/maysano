import { type CSSProperties, useEffect, useRef, useState } from 'react'

const formId = 'mlb2-47210916'
const formClass = 'ml-subscribe-form-47210916'
const recaptchaScript = 'https://www.google.com/recaptcha/api.js'
const webformsScript = 'https://groot.mailerlite.com/js/w/webforms.min.js?v83147fa8ce2d95cb73ece7f28b469519'
const formStyle: CSSProperties = { width: 'min(100%, 530px)', marginTop: 24 }
const fieldsStyle: CSSProperties = { display: 'flex', flexWrap: 'wrap', gap: 9 }
const emailStyle: CSSProperties = { minWidth: 220, minHeight: 47, flex: '1 1 235px', padding: '0 14px', border: '1px solid hsl(var(--navy-foreground) / 0.35)', borderRadius: 4, background: 'hsl(var(--navy-foreground))', color: 'hsl(var(--navy))', font: '500 0.92rem var(--font-sans)' }
const submitStyle: CSSProperties = { minHeight: 47, padding: '0 20px', border: '1px solid hsl(var(--lime))', borderRadius: 4, background: 'hsl(var(--lime))', color: 'hsl(var(--navy))', font: '700 0.78rem var(--font-sans)', letterSpacing: '0.04em', textTransform: 'uppercase', cursor: 'pointer' }

declare global {
  interface Window {
    ml_webform_success_47210916?: () => void
  }
}

function loadScript(source: string, onLoad?: () => void) {
  const existing = document.querySelector<HTMLScriptElement>(`script[src="${source}"]`)
  if (existing) {
    if (onLoad) {
      if (existing.dataset.loaded === 'true') onLoad()
      else existing.addEventListener('load', onLoad, { once: true })
    }
    return
  }

  const script = document.createElement('script')
  script.src = source
  script.async = true
  script.addEventListener('load', () => {
    script.dataset.loaded = 'true'
    onLoad?.()
  }, { once: true })
  document.head.appendChild(script)
}

export function KentaroUpdatesForm() {
  const formRef = useRef<HTMLDivElement>(null)
  const [loadProvider, setLoadProvider] = useState(false)

  useEffect(() => {
    window.ml_webform_success_47210916 = () => {
      const root = formRef.current
      root?.querySelector<HTMLElement>('.row-form')?.setAttribute('hidden', '')
      root?.querySelector<HTMLElement>('.row-success')?.removeAttribute('hidden')
    }

    return () => {
      delete window.ml_webform_success_47210916
    }
  }, [])

  useEffect(() => {
    if (loadProvider) {
      loadScript(recaptchaScript, () => loadScript(webformsScript))
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
    <div ref={formRef} id={formId} className={`ml-form-embedContainer ml-subscribe-form ${formClass}`} style={formStyle} onFocusCapture={() => setLoadProvider(true)}>
      <div className="row-form">
        <form
          className="ml-block-form"
          action="https://assets.mailerlite.com/jsonp/2642436/forms/201458879917196911/subscribe"
          data-code=""
          method="post"
          target="_blank"
        >
          <label className="sr-only" htmlFor="kentaro-updates-email">Email address</label>
          <div style={fieldsStyle}>
            <input id="kentaro-updates-email" type="email" name="fields[email]" placeholder="Your email address" autoComplete="email" required style={emailStyle} />
            <button type="submit" style={submitStyle}>Join the Kentaro list</button>
          </div>
          <p style={{ margin: '10px 0 0', color: 'hsl(var(--navy-foreground) / 0.62)', fontSize: '0.76rem', lineHeight: 1.4 }}>No noise. Unsubscribe whenever you want.</p>
          <div className="ml-form-recaptcha ml-validate-required" style={{ marginTop: 16 }}>
            <div className="g-recaptcha" data-sitekey="6Lf1KHQUAAAAAFNKEX1hdSWCS3mRMv4FlFaNslaD" />
          </div>
          <input type="hidden" name="ml-submit" value="1" />
          <input type="hidden" name="anticsrf" value="true" />
        </form>
      </div>
      <div className="row-success" hidden aria-live="polite" style={{ color: 'hsl(var(--lime))', fontSize: '0.95rem', lineHeight: 1.5 }}>
        <p style={{ margin: 0 }}>Thank you. Please check your inbox to confirm your subscription.</p>
      </div>
    </div>
  )
}
