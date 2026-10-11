import { siteConfig } from '../config/site'

type BrandProps = {
  className?: string
  compact?: boolean
}

export function Brand({ className = '', compact = false }: BrandProps) {
  // Static prerendering rewrites this relative source for each output depth.
  // After hydration, root-relative keeps the logo valid on nested article routes.
  const logoSrc = typeof window === 'undefined' ? `${import.meta.env.BASE_URL}logo.webp` : '/logo.webp'

  return (
    <a className={`brand ${compact ? 'brand--compact' : ''} ${className}`} href={siteConfig.siteUrl} aria-label="Maysano home">
      {compact ? (
        <>
          <span className="brand-mark" aria-hidden="true">
            <img src={logoSrc} alt="" width="320" height="353" />
          </span>
          <span className="brand-word">MAYSĀNO</span>
        </>
      ) : (
        <img src={logoSrc} alt={siteConfig.companyName} width="320" height="353" />
      )}
    </a>
  )
}
