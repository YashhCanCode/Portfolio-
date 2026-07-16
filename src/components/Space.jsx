import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const reels = [
  'https://www.instagram.com/reel/DaN61pwTATu/',
  'https://www.instagram.com/reel/DaX6qZmTjAr/',
  'https://www.instagram.com/reel/DanZDQizT5k/',
];

const Space = () => {
  useEffect(() => {
    const process = () => window.instgrm && window.instgrm.Embeds.process();
    if (window.instgrm) {
      process();
      return;
    }
    const id = 'instagram-embed-script';
    let script = document.getElementById(id);
    if (!script) {
      script = document.createElement('script');
      script.id = id;
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      script.onload = process;
      document.body.appendChild(script);
    } else {
      process();
    }
  }, []);

  return (
    <section
      id="space"
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
              Beyond the Code
            </span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-brand-dark leading-[1.05] tracking-tight mb-6">
            My corner of the{' '}
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-medium">
              internet
            </span>
            .
          </h2>

          <p className="font-sans text-base md:text-lg text-brand-medium leading-relaxed mb-4">
            When I&apos;m not building, I share the journey — tech I&apos;m
            exploring, projects in progress, and the lifestyle behind it all.
            Here are a few of my latest reels.
          </p>

          <a
            href="https://www.instagram.com/yashhcancode"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 mt-4 px-6 py-3.5 rounded-full text-white text-sm font-semibold shadow-lg transition-transform duration-300 hover:-translate-y-0.5"
            style={{
              background:
                'linear-gradient(90deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
            }}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.31-1.46.72-2.13 1.38C1.35 2.68.94 3.35.63 4.14.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.72 1.46 1.38 2.13.67.66 1.34 1.07 2.13 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.79-.31 1.46-.72 2.13-1.38.66-.67 1.07-1.34 1.38-2.13.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91-.31-.79-.72-1.46-1.38-2.13C21.32 1.35 20.65.94 19.86.63 19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.41-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
            </svg>
            @yashhcancode
          </a>
        </motion.div>

        {/* Reels — embed shows the preview, click layer redirects to Instagram (never plays inline) */}
        <div className="flex flex-col md:flex-row justify-center items-start gap-6 md:gap-5">
          {reels.map((url, i) => (
            <motion.div
              key={url}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.12 }}
              className="relative w-full md:flex-1 md:max-w-[350px] mx-auto"
            >
              <blockquote
                className="instagram-media"
                data-instgrm-permalink={url}
                data-instgrm-version="14"
                style={{
                  background: '#FFF',
                  border: 0,
                  borderRadius: '16px',
                  boxShadow: '0 15px 40px rgba(0,0,0,0.08)',
                  margin: 0,
                  minWidth: '260px',
                  width: '100%',
                }}
              >
                <a href={url} target="_blank" rel="noopener noreferrer">
                  View this reel on Instagram
                </a>
              </blockquote>

              {/* Transparent click layer — intercepts all clicks and opens Instagram
                  so the reel never plays on the site */}
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Watch this reel on Instagram"
                className="absolute inset-0 z-20 cursor-pointer"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative accent blob */}
      <div className="absolute -top-16 -left-16 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default Space;
