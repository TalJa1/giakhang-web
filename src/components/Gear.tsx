/** Builds a gear outline: `teeth` trapezoid teeth around a ring, as one SVG path in a 200×200 box. */
function gearPath(teeth: number, outer = 96, inner = 80): string {
  const step = (Math.PI * 2) / teeth
  const pts: string[] = []
  for (let i = 0; i < teeth; i++) {
    const a = i * step
    const corners: [number, number][] = [
      [inner, a],
      [outer, a + step * 0.12],
      [outer, a + step * 0.42],
      [inner, a + step * 0.54],
    ]
    for (const [r, t] of corners) pts.push(`${(100 + r * Math.cos(t)).toFixed(2)} ${(100 + r * Math.sin(t)).toFixed(2)}`)
  }
  return `M${pts.join('L')}Z`
}

const PATHS = new Map<number, string>()

/** Decorative engineering gear (line drawing). */
export default function Gear({ teeth = 14, className = '' }: { teeth?: number; className?: string }) {
  if (!PATHS.has(teeth)) PATHS.set(teeth, gearPath(teeth))
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" aria-hidden="true" focusable="false">
      <path d={PATHS.get(teeth)} stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="100" cy="100" r="54" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="100" cy="100" r="18" stroke="currentColor" strokeWidth="1.5" />
      {[0, 60, 120, 180, 240, 300].map((deg) => (
        <circle
          key={deg}
          cx={100 + 36 * Math.cos((deg * Math.PI) / 180)}
          cy={100 + 36 * Math.sin((deg * Math.PI) / 180)}
          r="7"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      ))}
    </svg>
  )
}
