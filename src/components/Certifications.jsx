import React from 'react';
import { motion } from 'framer-motion';

const certifications = [
  {
    title: 'Associate AI Engineer',
    issuer: 'DataCamp',
    year: '2026',
    description:
      'Completed the AI Engineer track — covering LLMs, prompt engineering, building and deploying AI-powered applications, and working with modern generative AI tooling.',
    skills: ['LLMs', 'Generative AI', 'Prompt Engineering', 'AI Applications'],
    link: '/Ai_Engineer.pdf',
  },
  {
    title: 'AI Fluency',
    issuer: 'Anthropic',
    year: '2025',
    description:
      'Completed Anthropic\u2019s AI Fluency program — a framework for working effectively, efficiently, and responsibly with AI systems and large language models.',
    skills: ['AI Collaboration', 'Prompt Engineering', 'Responsible AI', 'Working with Claude'],
    link: '/AI_Fluency.pdf',
  },
  {
    title: 'Data Structures & Algorithms',
    issuer: 'Smart Interviews',
    year: '2025',
    description:
      'Completed the Smart Interviews DSA program — mastering data structures, algorithms, and problem solving through rigorous coding practice and assessments.',
    skills: ['DSA', 'Problem Solving', 'Algorithms', 'Competitive Coding'],
    link: '/DSA_Certification.pdf',
  },
];

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="relative w-full bg-brand-light py-20 md:py-28 px-6 md:px-12 overflow-hidden font-sans"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-12 md:mb-16 max-w-2xl"
        >
          <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-sm text-gray-600 font-bold mb-6 shadow-sm bg-white">
            Credentials
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-dark leading-[1.1] tracking-tight mb-5">
            Certifications
          </h2>
          <p className="text-brand-medium text-base md:text-lg font-medium leading-relaxed">
            Formal training and credentials that back up the work.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.12 }}
              whileHover={{ y: -8 }}
              className="group relative flex flex-col bg-white border border-black/5 rounded-3xl p-8 shadow-[0_15px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_60px_rgba(194,159,116,0.18)] transition-shadow duration-500 overflow-hidden"
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-accent/10 rounded-bl-[3rem] pointer-events-none" />

              {/* Badge icon */}
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-dark mb-6 shadow-lg">
                <svg className="w-7 h-7 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>

              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold uppercase tracking-widest text-brand-accent">
                  {cert.issuer}
                </span>
                <span className="text-xs font-bold text-gray-400">{cert.year}</span>
              </div>

              <h3 className="text-2xl font-black text-gray-900 mb-3 tracking-tight">
                {cert.title}
              </h3>

              <p className="text-sm text-gray-500 leading-relaxed font-medium mb-6 flex-1">
                {cert.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {cert.skills.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1 text-[11px] font-semibold text-gray-600 bg-black/[0.03] border border-black/5 rounded-full"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-gray-900 group-hover:text-brand-accent transition-colors duration-300 w-fit"
                >
                  View Certificate
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
