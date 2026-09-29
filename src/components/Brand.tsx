import { siteConfig } from '../config/site'

type BrandProps = {
  className?: string
  compact?: boolean
}

export function Brand({ className = '', compact = false }: BrandProps) {
  return (
    <a className={`brand ${compact ? 'brand--compact' : ''} ${className}`} href="#top" aria-label="Maysano home">
      {compact ? (
        <>
          <span className="brand-mark" aria-hidden="true">
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="" />
          </span>
          <span className="brand-word">MAYSĀNO</span>
        </>
      ) : (
        <img src={`${import.meta.env.BASE_URL}logo.png`} alt={siteConfig.companyName} />
      )}
    </a>
  )
}
