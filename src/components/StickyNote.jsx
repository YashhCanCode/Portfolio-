
// Sticky note tucked into the seam between two sections.
// Desktop (lg+): zero-height, absolute right/left overlay — adds no vertical space.
// Mobile/tablet: sits centered in normal flow with a little breathing room (no overlap).
const StickyNote = ({
  side = 'right',
  rotate = '4deg',
  color = '#fdf0a3',
  foldColor = '#e9d98c',
  children,
}) => (
  <div className="relative z-30 lg:h-0">
    <div className="max-w-6xl mx-auto px-6 md:px-12 relative flex justify-center lg:block py-6 lg:py-0">
      <div
        className={`w-[240px] sm:w-[260px] lg:absolute lg:-top-10 ${
          side === 'right' ? 'lg:right-8' : 'lg:left-8'
        }`}
        style={{ transform: `rotate(${rotate})` }}
      >
        {/* tape */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-white/60 backdrop-blur-sm rotate-[-5deg] shadow-sm border border-white/50 z-10" />

        {/* note */}
        <div className="relative p-5 pt-7 shadow-[0_18px_38px_rgba(29,19,12,0.2)]" style={{ background: color }}>
          {children}
          {/* folded corner */}
          <div className="absolute bottom-0 right-0 w-7 h-7" style={{ background: foldColor, clipPath: 'polygon(100% 0, 0 100%, 100% 100%)' }} />
        </div>
      </div>
    </div>
  </div>
);

export default StickyNote;
