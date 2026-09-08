// A quiet nod to the PDE streamlines in the research: a family of curved
// flow lines that bend around a central vortex. Pure SVG, colours off the
// accent token, and it slowly drifts unless the visitor prefers reduced motion.
export default function FlowMotif({ className = '' }) {
  const rows = 13
  const lines = Array.from({ length: rows }, (_, i) => {
    const y = 20 + (i * 460) / (rows - 1)
    const bend = 70 * Math.sin((i / (rows - 1)) * Math.PI)
    return `M -40 ${y} C 110 ${y - bend}, 250 ${y + bend}, 440 ${y - bend / 2}`
  })

  return (
    <svg
      className={className}
      viewBox="0 0 400 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <g className="text-accent" stroke="currentColor" fill="none" strokeLinecap="round">
        {lines.map((d, i) => (
          <path
            key={i}
            d={d}
            strokeWidth={i % 3 === 0 ? 1.4 : 0.9}
            opacity={0.18 + 0.5 * (1 - Math.abs(i - (rows - 1) / 2) / ((rows - 1) / 2))}
            className="flow-line"
            style={{ animationDelay: `${i * 0.18}s` }}
          />
        ))}
      </g>
      <style>{`
        .flow-line {
          stroke-dasharray: 6 10;
          animation: flow-drift 9s linear infinite;
        }
        @keyframes flow-drift { to { stroke-dashoffset: -160; } }
        @media (prefers-reduced-motion: reduce) {
          .flow-line { animation: none; stroke-dasharray: none; }
        }
      `}</style>
    </svg>
  )
}
