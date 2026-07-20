import { motion } from 'framer-motion';
import sticker from '../assets/about/sticker.webp';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: d },
  }),
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen bg-brand-light overflow-hidden font-sans pt-28 md:pt-32 pb-16"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

        {/* ---- LEFT: copy ---- */}
        <div className="relative z-10">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0} className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-brand-accent" />
            <span className="text-xs uppercase tracking-[0.3em] text-brand-medium font-semibold">
              Konnuru Yashwanth · Open to Opportunities
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
            className="text-brand-dark font-black tracking-tight leading-[0.98] text-5xl sm:text-6xl lg:text-7xl mb-8"
          >
            I build things that work &mdash;
            <br />
            and things that{' '}
            <span className="relative inline-block text-brand-accent">
              think.
              <svg className="absolute -bottom-2 left-0 w-full" height="14" viewBox="0 0 160 14" fill="none" preserveAspectRatio="none">
                <path d="M2 9C35 4 110 3 158 7" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="text-brand-medium text-base md:text-lg leading-relaxed max-w-md mb-10"
          >
            AI Product Builder — I turn ideas into intelligent products, from
            retrieval-augmented systems to on-device language models.
          </motion.p>

          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.3} className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="px-8 py-3.5 rounded-full bg-brand-dark text-white text-sm font-semibold hover:bg-brand-accent hover:text-brand-dark transition-all duration-300 shadow-lg"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-full border border-brand-dark/20 text-brand-dark text-sm font-semibold hover:border-brand-dark hover:bg-white transition-all duration-300"
            >
              Get in Touch
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.4}
            className="flex items-center gap-5 mt-8"
          >
            <span className="text-[11px] uppercase tracking-[0.25em] text-brand-medium/60 font-semibold">Follow</span>
            <span className="h-4 w-px bg-brand-dark/15" />
            <a href="https://github.com/YashhCanCode" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-brand-dark/60 hover:text-brand-dark transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.02 11.02 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14 0 1.55-.01 2.8-.01 3.18 0 .31.21.68.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" /></svg>
            </a>
            <a href="https://www.linkedin.com/in/yashwanth-konnuru" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-brand-dark/60 hover:text-brand-dark transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" /></svg>
            </a>
            <a href="https://www.instagram.com/yashhcancode" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-brand-dark/60 hover:text-brand-dark transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.31-1.46.72-2.13 1.38C1.35 2.68.94 3.35.63 4.14.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.72 1.46 1.38 2.13.67.66 1.34 1.07 2.13 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.79-.31 1.46-.72 2.13-1.38.66-.67 1.07-1.34 1.38-2.13.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91-.31-.79-.72-1.46-1.38-2.13C21.32 1.35 20.65.94 19.86.63 19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.41-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" /></svg>
            </a>
            <a href="https://leetcode.com/u/Yashcancode/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode" className="text-brand-dark/60 hover:text-brand-dark transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" /></svg>
            </a>
          </motion.div>
        </div>

        {/* ---- RIGHT: sticker cutout + accent cards ---- */}
        <div className="relative h-[460px] sm:h-[540px] lg:h-[580px] w-full">
          {/* soft accent glow behind the sticker */}

          {/* dashed connector path (draws once, then static) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 500 580" fill="none" preserveAspectRatio="none">
            <motion.path
              d="M110 480 C 30 390, 80 300, 200 300 S 430 250, 440 130"
              stroke="#9c8264"
              strokeWidth="2"
              strokeDasharray="6 8"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.45 }}
              transition={{ duration: 1.6, ease: 'easeInOut', delay: 0.5 }}
            />
          </svg>

          {/* Sticker cutout */}
          <motion.img
            src={sticker}
            alt="Konnuru Yashwanth"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.35}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[80%] w-auto object-contain object-bottom z-10 [filter:drop-shadow(0_20px_30px_rgba(29,19,12,0.3))]"
          />



          {/* "that's me" sticky note tacked to the thread */}
          <div className="absolute top-[19%] right-0 sm:right-2 z-20 rotate-[-6deg]">
            <div className="relative bg-white rounded-xl px-3.5 py-2.5 shadow-[0_14px_35px_rgba(29,19,12,0.16)]">
              <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-brand-accent shadow-sm" />
              <p className="font-script text-lg text-brand-dark leading-none whitespace-nowrap">Yuppp that's me</p>
            </div>
            <svg className="absolute -bottom-5 -left-8 w-10 h-10 text-brand-accent/80" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M23 4 C 15 8, 8 13, 4 23 M4 23 l 1 -6 M4 23 l 6 1" />
            </svg>
          </div>

          {/* Status accent card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.85}
            className="absolute bottom-10 right-0 sm:right-4 z-20 rotate-[3deg]"
          >
            <div className="flex items-center gap-3 bg-white rounded-2xl px-4 py-3 shadow-[0_18px_45px_rgba(29,19,12,0.16)]">
              <span className="inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              <div className="leading-tight">
                <p className="text-xs font-bold text-brand-dark">AI Engineer Intern @ Fly Rank AI</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>


    </section>
  );
};

export default Hero;
