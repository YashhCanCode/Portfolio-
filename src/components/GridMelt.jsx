// Transition band: white → cream blend, with a live "currently exploring" strip.
const GridMelt = () => (
  <div className="w-full -mt-px bg-gradient-to-b from-white to-brand-light py-12 md:py-16 px-6 flex items-center justify-center">
    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-center">
      <span className="flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-brand-medium/70 font-bold whitespace-nowrap">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
        </span>
        Currently exploring
      </span>
      <span className="hidden sm:inline text-brand-dark/20">—</span>
      <span className="font-display italic text-lg md:text-2xl text-brand-dark">
        Agentic AI · RAG evals · System design
      </span>
    </div>
  </div>
);

export default GridMelt;
