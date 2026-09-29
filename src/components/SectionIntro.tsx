type SectionIntroProps = {
  eyebrow?: string
  title: string
  copy?: string
  align?: 'left' | 'center'
}

export function SectionIntro({ eyebrow, title, copy, align = 'left' }: SectionIntroProps) {
  return (
    <div className={`section-intro section-intro--${align}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {copy && <p className="section-copy">{copy}</p>}
    </div>
  )
}
