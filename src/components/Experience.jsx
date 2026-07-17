import { motion } from 'framer-motion';

const timeline = [
  {
    role: 'Backend AI Engineer — Intern',
    org: 'Fly Rank AI',
    period: 'Jul 2026 — Present',
    description:
      'Building and scaling backend systems for AI-powered products — designing APIs, integrating LLM pipelines, and optimizing services for reliability and performance.',
    tags: ['Backend', 'AI Systems', 'APIs', 'LLMs'],
    accent: true,
  },
];

const openSource = [
  {
    name: 'freeCodeCamp',
    description: 'Contributed to one of the largest open-source learning platforms.',
    url: 'https://github.com/freeCodeCamp/freeCodeCamp',
  },
  {
    name: 'Supabase',
    description: 'Contributed to the open-source Firebase alternative.',
    url: 'https://github.com/supabase/supabase',
  },
  {
    name: 'cBioPortal',
    description: 'Contributed to the open-source cancer genomics platform.',
    url: 'https://github.com/cBioPortal/cbioportal',
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative w-full bg-gradient-to-b from-brand-light via-white to-white py-20 md:py-28 px-6 md:px-12 overflow-hidden font-sans"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="mb-14 md:mb-16 max-w-2xl"
        >
          <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-sm text-gray-600 font-bold mb-6 shadow-sm bg-white">
            Where I&apos;ve Worked
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-dark leading-[1.1] tracking-tight mb-5">
            Experience
          </h2>
          <p className="text-gray-500 text-base md:text-lg font-medium leading-relaxed">
            Professional roles and open-source work where I&apos;ve contributed to
            real products used by real people.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l-2 border-brand-accent/20 ml-2 md:ml-4 space-y-12 mb-20">
          {timeline.map((item) => (
            <motion.div
              key={item.org}
              className="relative pl-8 md:pl-12"
            >
              {/* Node */}
              <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-brand-accent border-4 border-white shadow-[0_0_0_3px_rgba(194,159,116,0.25)]" />

              <div className="bg-brand-light/60 border border-black/5 rounded-3xl p-7 md:p-8 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-shadow duration-500">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <h3 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight">
                    {item.role}
                  </h3>
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-accent whitespace-nowrap">
                    {item.period}
                  </span>
                </div>
                <p className="text-base font-bold text-brand-medium mb-4">
                  {item.org}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed font-medium mb-5">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-[11px] font-semibold text-gray-600 bg-white border border-black/5 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Open Source */}
        <motion.div
        >
          <div className="flex items-center gap-3 mb-8">
            <h3 className="text-2xl md:text-3xl font-black text-brand-dark tracking-tight">
              Open Source Contributions
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {openSource.map((repo) => (
              <a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col bg-white border border-black/5 rounded-2xl p-6 hover:border-brand-accent/30 hover:shadow-[0_14px_32px_rgba(0,0,0,0.06)] transition-all duration-400"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-black text-gray-900 group-hover:text-brand-accent transition-colors">
                    {repo.name}
                  </h4>
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-brand-accent transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H8M17 7v9" />
                  </svg>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">
                  {repo.description}
                </p>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
