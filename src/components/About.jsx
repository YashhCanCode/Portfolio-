import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import focus from '../assets/about/polaroid.jpg';
import learn from '../assets/about/learn.jpg';
import positive from '../assets/about/positive.jpg';

/* ---- animated count-up ---- */
const useCountUp = (end, duration = 1400, start = false) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf;
    const t0 = performance.now();
    const tick = (t) => {
      const p = Math.min((t - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(eased * end));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, end, duration]);
  return val;
};

const Stat = ({ end, label, suffix, start }) => {
  const val = useCountUp(end, 1400, start);
  return (
    <div className="flex flex-col">
      <span className="font-display text-4xl md:text-5xl font-light text-brand-dark leading-none">
        {String(val).padStart(2, '0')}
        <span className="text-brand-accent">{suffix}</span>
      </span>
      <span className="font-sans text-[11px] md:text-xs uppercase tracking-[0.2em] text-brand-medium/70 mt-2 font-medium">
        {label}
      </span>
    </div>
  );
};



const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-120px' });

  return (
    <section
      id="about"
      ref={ref}
      className="relative w-full bg-brand-light pt-24 pb-24 md:pb-32 overflow-hidden font-sans"
    >


      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 items-center">

          {/* ---- LEFT: Portrait ---- */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center md:justify-start"
          >
            {/* Decorative gold blob */}
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-brand-accent/20 rounded-full blur-3xl" />

            {/* Polaroid collage */}
            <div className="relative w-full max-w-[300px] sm:max-w-[400px] md:max-w-[470px] h-[380px] sm:h-[450px] md:h-[480px] mx-auto md:mx-0">
              {[
                { src: focus, alt: 'Focus. Grind. Repeat.', cls: 'top-0 left-0 w-[58%] rotate-[-6deg] z-10' },
                { src: learn, alt: 'Learn. Build. Grow.', cls: 'top-[6%] right-0 w-[43%] rotate-[6deg] z-20' },
                { src: positive, alt: 'Always be positive.', cls: 'bottom-[10%] left-[-2%] w-[57%] rotate-[-4deg] z-30' },
              ].map((pic, idx) => (
                <motion.img
                  key={pic.alt}
                  src={pic.src}
                  alt={pic.alt}
                  initial={{ opacity: 0, y: 26 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 + idx * 0.15 }}
                  className={`absolute ${pic.cls} h-auto rounded-[4px] shadow-[0_18px_45px_rgba(29,19,12,0.25)] hover:z-40 hover:scale-[1.04] transition-transform duration-300`}
                />
              ))}
            </div>
          </motion.div>

          {/* ---- RIGHT: Content ---- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-brand-accent" />
              <span className="font-sans text-xs uppercase tracking-[0.35em] text-brand-accent font-medium">
                About Me
              </span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-brand-dark leading-[1.05] tracking-tight mb-6">
              Hi, I&apos;m{' '}
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-medium">
                Yash
              </span>
              .
            </h2>

            <p className="font-sans text-base md:text-lg text-brand-medium leading-relaxed mb-5 max-w-lg">
              I&apos;m <span className="font-semibold text-brand-dark">Konnuru Yashwanth</span>,
              an aspiring AI Engineer based in Hyderabad. I love turning
              hard problems into clean, functional, scalable products — building
              across the stack, from backend systems to LLM-powered applications.
            </p>

            <p className="font-script text-2xl md:text-3xl text-brand-accent mb-10">
              always building, always learning.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-md border-t border-brand-dark/10 pt-8">
              <Stat end={4} suffix="+" label="Projects Built" start={inView} />
              <Stat end={3} suffix="" label="Open-Source Repos" start={inView} />
              <Stat end={1} suffix="" label="AI Internship" start={inView} />
            </div>
          </motion.div>
        </div>
      </div>


    </section>
  );
};

export default About;
