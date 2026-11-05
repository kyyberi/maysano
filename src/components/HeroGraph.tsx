import { useId, type CSSProperties, type ReactNode } from 'react'

/**
 * Hero diagram, drawn as SVG so each part can build up once on page load:
 * data sources → flows into Maysano → the Maysano layer → outcomes.
 * Replaces the flat hero-portfolio-flow.webp background image.
 *
 * The animation is pure CSS (global.css, "Hero diagram"), runs once and stops,
 * and is switched off under prefers-reduced-motion. The whole drawing is one
 * image for screen readers (role="img" + <title>/<desc>).
 */

const C = 260 // horizontal centre of the drawing

const outcomes: { x: number; lines: [string, string]; icon: ReactNode }[] = [
  {
    x: C - 170,
    lines: ['Better', 'decisions'],
    icon: <path d="M-7 6V0M-2 6V-4M3 6V-7M8 6V-2" />,
  },
  {
    x: C,
    lines: ['More', 'efficient operations'],
    icon: (
      <>
        <circle cx="-4" cy="-3" r="3" />
        <circle cx="5" cy="-2" r="2.4" />
        <path d="M-10 7c0-4 3-6 6-6s6 2 6 6M3 4c1-2 2-2.5 3-2.5 2.5 0 4 2 4 5" />
      </>
    ),
  },
  {
    x: C + 170,
    lines: ['Greater', 'public value'],
    icon: <path d="M0 8V-1M0 2C-1-3-5-5-9-5c0 4 3 7 9 7M0-1c1-4 4-7 9-7 0 5-4 7-9 7" />,
  },
]

const sources: { label: [string, string?]; icon: ReactNode }[] = [
  {
    label: ['Data', 'Platforms'],
    icon: (
      <>
        <ellipse cx="0" cy="-6" rx="7" ry="2.6" />
        <path d="M-7-6v12c0 1.5 3 2.6 7 2.6s7-1.1 7-2.6V-6M-7 0c0 1.5 3 2.6 7 2.6S7 1.5 7 0" />
      </>
    ),
  },
  {
    label: ['Government', 'Systems'],
    icon: <path d="M-8-3L0-8l8 5zM-6-2v8M-2-2v8M2-2v8M6-2v8M-9 8H9" />,
  },
  {
    label: ['Cloud', 'Sources'],
    icon: <path d="M-6 6h12a4 4 0 0 0 0-8 6 6 0 0 0-11.5-1A4.5 4.5 0 0 0-6 6z" />,
  },
  {
    label: ['Documents'],
    icon: <path d="M-6-8h8l4 4V8H-6zM2-8v4h4M-3 0h6M-3 3.5h6" />,
  },
  {
    label: ['APIs'],
    icon: <path d="M-7-7h5v5h-5zM2-7h5v5H2zM-7 2h5v5h-5zM2 2h5v5H2z" />,
  },
  {
    label: ['Partner', 'Data'],
    icon: (
      <>
        <circle cx="0" cy="-4" r="2.6" />
        <circle cx="-7" cy="-1" r="2" />
        <circle cx="7" cy="-1" r="2" />
        <path d="M-5 7c0-3.5 2-5.5 5-5.5s5 2 5 5.5M-11 7c0-2.5 1.5-4 3.5-4M11 7c0-2.5-1.5-4-3.5-4" />
      </>
    ),
  },
]

const SOURCE_STEP = 86
const SOURCE_TOP = 492
const PANEL = { x: C - 150, y: 168, w: 300, h: 204 }
const PANEL_BOTTOM = PANEL.y + PANEL.h
// Strand colours: teal, blue, lime (kept here rather than in CSS to save bytes)
const strandTones = ['#62c4b4', '#5aa8e3', '#cfe0a3']

function sourceX(i: number) {
  return C + (i - (sources.length - 1) / 2) * SOURCE_STEP
}

/** Point on a cubic Bézier at t, for the dot that sits on each flow. */
function bezierPoint(p: number[][], t: number) {
  const u = 1 - t
  const a = u * u * u
  const b = 3 * u * u * t
  const c = 3 * u * t * t
  const d = t * t * t
  return [
    a * p[0][0] + b * p[1][0] + c * p[2][0] + d * p[3][0],
    a * p[0][1] + b * p[1][1] + c * p[2][1] + d * p[3][1],
  ]
}

const vars = (v: Record<string, number>) => v as CSSProperties

export function HeroGraph() {
  const id = useId().replace(/:/g, '')
  const titleId = `${id}-title`
  const descId = `${id}-desc`

  return (
    <svg
      className="hero-graph"
      viewBox="0 0 520 600"
      role="img"
      aria-labelledby={`${titleId} ${descId}`}
    >
      <title id={titleId}>How Maysano connects data to business outcomes</title>
      <desc id={descId}>
        Data platforms, government systems, cloud sources, documents, APIs and partner data flow into Maysano,
        the business and product layer. It connects business objectives, business use cases and data products,
        with governance and lifecycle management built in, leading to better decisions, more efficient operations
        and greater public value.
      </desc>

      {/* 1. Data sources */}
      {sources.map((source, i) => {
        const x = sourceX(i)
        return (
          <g key={source.label.join(' ')} className="hg-source" style={vars({ '--i': i })}>
            <rect className="hg-source__tile" x={x - 40} y={SOURCE_TOP + 6} width="80" height="96" rx="6" />
            <g className="hg-icon" transform={`translate(${x} ${SOURCE_TOP + 30})`}>{source.icon}</g>
            <text className="hg-label" x={x} y={SOURCE_TOP + 64} textAnchor="middle">
              <tspan x={x}>{source.label[0]}</tspan>
              {source.label[1] && <tspan x={x} dy="14">{source.label[1]}</tspan>}
            </text>
          </g>
        )
      })}

      {/* 2. Flows from each source into Maysano */}
      {sources.map((_, i) => {
        const x = sourceX(i)
        const target = C + (x - C) * 0.24
        return (
          <g key={i} className="hg-flow" style={vars({ '--i': i })}>
            {strandTones.map((tone, s) => {
              const dx = (s - 1) * 5
              const tx = target + (s - 1) * 2.5
              const pts = [[x + dx, SOURCE_TOP], [x + dx, SOURCE_TOP - 62], [tx, PANEL_BOTTOM + 70], [tx, PANEL_BOTTOM]]
              const d = `M${pts[0].join(' ')}C${pts[1].join(' ')} ${pts[2].join(' ')} ${pts[3].join(' ')}`
              return <path key={tone} className="hg-strand" stroke={tone} d={d} pathLength={1} />
            })}
            {(() => {
              const [cx, cy] = bezierPoint([[x, SOURCE_TOP], [x, SOURCE_TOP - 62], [target, PANEL_BOTTOM + 70], [target, PANEL_BOTTOM]], 0.42 + (i % 3) * 0.12)
              return <circle className="hg-dot" cx={cx.toFixed(1)} cy={cy.toFixed(1)} r="2.6" />
            })()}
          </g>
        )
      })}

      {/* 3. The Maysano layer */}
      <g className="hg-panel">
        <rect className="hg-panel__box" x={PANEL.x} y={PANEL.y} width={PANEL.w} height={PANEL.h} rx="6" />
        <path
          className="hg-panel__head"
          d={`M${PANEL.x} ${PANEL.y + 6}a6 6 0 0 1 6-6h${PANEL.w - 12}a6 6 0 0 1 6 6v42H${PANEL.x}z`}
        />
        <text className="hg-eyebrow hg-eyebrow--on-head" x={C} y={PANEL.y + 18} textAnchor="middle">BUSINESS &amp; PRODUCT LAYER</text>
        <text className="hg-brand" x={C} y={PANEL.y + 37} textAnchor="middle">MAYSANO</text>

        <g className="hg-panel__item" style={vars({ '--i': 0 })}>
          <rect className="hg-pill" x={PANEL.x + 12} y={PANEL.y + 62} width="134" height="30" rx="15" />
          <text className="hg-pill__text" x={PANEL.x + 79} y={PANEL.y + 81} textAnchor="middle">Business Objectives</text>
        </g>
        <g className="hg-panel__item" style={vars({ '--i': 1 })}>
          <rect className="hg-pill" x={PANEL.x + 154} y={PANEL.y + 62} width="134" height="30" rx="15" />
          <text className="hg-pill__text" x={PANEL.x + 221} y={PANEL.y + 81} textAnchor="middle">Business Use Cases</text>
        </g>
        <g className="hg-panel__item" style={vars({ '--i': 2 })}>
          <rect className="hg-pill" x={PANEL.x + 12} y={PANEL.y + 100} width="276" height="30" rx="15" />
          <text className="hg-pill__text" x={C} y={PANEL.y + 119} textAnchor="middle">Data Products</text>
        </g>
        <g className="hg-panel__item" style={vars({ '--i': 3 })}>
          <rect className="hg-governance" x={PANEL.x + 12} y={PANEL.y + 142} width="276" height="48" />
          <rect className="hg-governance__bar" x={PANEL.x + 12} y={PANEL.y + 142} width="3" height="48" />
          <text className="hg-eyebrow" x={PANEL.x + 26} y={PANEL.y + 161}>BUILT IN ACROSS THE PORTFOLIO</text>
          <text className="hg-governance__text" x={PANEL.x + 26} y={PANEL.y + 178}>Governance &amp; Lifecycle Management</text>
        </g>
      </g>

      {/* 4. Outcomes */}
      {outcomes.map((outcome, i) => {
        const fromX = C + (i - 1) * 50
        const d = i === 1
          ? `M${C} ${PANEL.y - 4}V128`
          : `M${fromX} ${PANEL.y - 4}C${fromX} 140 ${outcome.x} 150 ${outcome.x} 128`
        return (
          <g key={outcome.lines.join(' ')} className="hg-outcome" style={vars({ '--i': i })}>
            <path className="hg-arrow" d={d} pathLength={1} />
            <g className="hg-outcome__body">
              <path className="hg-arrowhead" d={`M${outcome.x - 4} 133L${outcome.x} 128L${outcome.x + 4} 133`} />
              <circle className="hg-outcome__ring" cx={outcome.x} cy="46" r="26" />
              <g className="hg-icon hg-icon--lime" transform={`translate(${outcome.x} 46) scale(1.15)`}>{outcome.icon}</g>
              <text className="hg-label hg-label--strong" x={outcome.x} y="96" textAnchor="middle">
                <tspan x={outcome.x}>{outcome.lines[0]}</tspan>
                <tspan x={outcome.x} dy="14">{outcome.lines[1]}</tspan>
              </text>
            </g>
          </g>
        )
      })}
    </svg>
  )
}
