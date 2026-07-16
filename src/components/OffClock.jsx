import React from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay: i * 0.15 },
  }),
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
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
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
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            whileHover={{ y: -8 }}
            className="relative bg-white rounded-3xl p-8 border border-black/5 shadow-[0_15px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_60px_rgba(194,159,116,0.18)] transition-shadow duration-500 overflow-hidden"
          >
            <div className="text-4xl mb-5">🏃‍♂️</div>
            <h3 className="text-2xl font-black text-brand-dark tracking-tight mb-2">
              I run. A lot.
            </h3>
            <p className="text-sm text-gray-500 font-medium leading-relaxed mb-6">
              Long runs are my reset button — where half my best debugging ideas
              actually show up.
            </p>

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
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            whileHover={{ y: -8 }}
            className="relative bg-white rounded-3xl p-8 border border-black/5 shadow-[0_15px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_60px_rgba(194,159,116,0.18)] transition-shadow duration-500 overflow-hidden"
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
      <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default OffClock;
