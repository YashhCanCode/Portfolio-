import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import run1 from '../assets/run/run1.jpg';
import run2 from '../assets/run/run2.jpg';
import run3 from '../assets/run/run3.jpg';

const runImages = [run1, run2, run3];

const RunGallery = () => {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);
  const next = () => setIdx((i) => (i + 1) % runImages.length);
  const prev = () => setIdx((i) => (i - 1 + runImages.length) % runImages.length);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      {/* Compact trigger — stacked thumbnails, does not grow the card */}
      <button onClick={() => { setIdx(0); setOpen(true); }} className="group flex items-center gap-4 mb-6">
        <div className="relative w-16 h-14 shrink-0">
          {runImages.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              className={`absolute top-0 left-0 w-12 h-12 object-cover rounded-lg border-2 border-white shadow-md transition-transform duration-300 ${
                i === 0 ? '-rotate-6' : i === 1 ? 'rotate-3 translate-x-2' : 'rotate-[10deg] translate-x-4'
              }`}
              style={{ zIndex: runImages.length - i }}
            />
          ))}
        </div>
        <span className="text-sm font-bold text-brand-dark group-hover:text-brand-accent transition-colors inline-flex items-center gap-1">
          See my runs
          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </span>
      </button>

      {/* Lightbox */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
          >
            {/* Close */}
            <button onClick={() => setOpen(false)} aria-label="Close" className="absolute top-5 right-5 text-white/70 hover:text-white">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            {/* Prev */}
            <button onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous" className="absolute left-3 md:left-8 text-white/70 hover:text-white p-2">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            </button>
            {/* Image */}
            <AnimatePresence mode="wait">
              <motion.img
                key={idx}
                src={runImages[idx]}
                alt={`Run ${idx + 1}`}
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="max-h-[55vh] sm:max-h-[60vh] max-w-[62vw] object-contain rounded-xl shadow-2xl"
              />
            </AnimatePresence>
            {/* Next */}
            <button onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next" className="absolute right-3 md:right-8 text-white/70 hover:text-white p-2">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </button>
            {/* Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {runImages.map((_, i) => (
                <button key={i} onClick={(e) => { e.stopPropagation(); setIdx(i); }} aria-label={`Run ${i + 1}`} className={`h-2 rounded-full transition-all duration-300 ${i === idx ? 'w-5 bg-white' : 'w-2 bg-white/40 hover:bg-white/70'}`} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const OffClock = () => {
  return (
    <section
      id="life"
      className="relative w-full bg-brand-light py-20 md:py-28 px-6 md:px-12 overflow-hidden font-sans"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="max-w-2xl mb-12 md:mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-brand-accent" />
            <span className="text-xs uppercase tracking-[0.35em] text-brand-accent font-medium">
              Off the Clock
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-brand-dark leading-[1.05] tracking-tight mb-5">
            When I&apos;m not{' '}
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-medium">
              coding
            </span>
            .
          </h2>
          <p className="text-brand-medium text-base md:text-lg leading-relaxed">
            Discipline off the keyboard is what keeps me sharp on it. Two things
            I&apos;m weirdly serious about:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Running card */}
          <motion.div
            whileHover={{ y: -8 }}
            className="relative bg-white rounded-3xl p-8 border border-black/5 shadow-[0_15px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_14px_32px_rgba(0,0,0,0.06)] transition-shadow duration-500 overflow-hidden"
          >
            <div className="text-4xl mb-5">🏃‍♂️</div>
            <h3 className="text-2xl font-black text-brand-dark tracking-tight mb-2">
              I run. A lot.
            </h3>
            <p className="text-sm text-gray-500 font-medium leading-relaxed mb-6">
              Long runs are my reset button — where half my best debugging ideas
              actually show up.
            </p>

            <RunGallery />

            <div className="grid grid-cols-3 gap-3 mb-6">
              {[
                { n: '100', u: 'km', l: 'in 3 months' },
                { n: '10', u: 'km', l: 'longest run' },
                { n: '22', u: 'km', l: 'goal @ 22nd bday' },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl bg-brand-light p-4 text-center">
                  <p className="font-display text-3xl font-light text-brand-dark leading-none">
                    {s.n}
                    <span className="text-brand-accent text-lg">{s.u}</span>
                  </p>
                  <p className="text-[10px] uppercase tracking-wider text-brand-medium/70 font-semibold mt-2">
                    {s.l}
                  </p>
                </div>
              ))}
            </div>

            <p className="font-script text-xl text-brand-accent mb-6">
              turning 22 with a 22K — that&apos;s the plan. 🎂
            </p>
            <a
              href="https://strava.app.link/edvB8Q85O4b"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-dark hover:text-[#fc4c02] transition-colors"
            >
              Follow me on Strava
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H8M17 7v9" />
              </svg>
            </a>
          </motion.div>

          {/* Chess card */}
          <motion.div
            whileHover={{ y: -8 }}
            className="relative bg-white rounded-3xl p-8 border border-black/5 shadow-[0_15px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_14px_32px_rgba(0,0,0,0.06)] transition-shadow duration-500 overflow-hidden"
          >
            <div className="text-4xl mb-5">♟️</div>
            <h3 className="text-2xl font-black text-brand-dark tracking-tight mb-2">
              1100+ on Chess.com
            </h3>
            <p className="text-sm text-gray-500 font-medium leading-relaxed mb-6">
              Thinking three moves ahead — on the board and in the codebase.
            </p>

            <div className="rounded-2xl bg-brand-light p-5 mb-6">
              <p className="font-display text-5xl font-light text-brand-dark leading-none">
                1100<span className="text-brand-accent text-2xl">+</span>
              </p>
              <p className="text-[10px] uppercase tracking-wider text-brand-medium/70 font-semibold mt-2">
                Chess.com rating
              </p>
            </div>

            <p className="font-script text-xl text-brand-accent mb-6">
              I play chess — so you already know I&apos;m good at problem solving. 😏
            </p>
            <a
              href="https://www.chess.com/member/yashhcanplay"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-dark hover:text-brand-accent transition-colors"
            >
              Play me on Chess.com
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H8M17 7v9" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Decorative accent blob */}
    </section>
  );
};

export default OffClock;
