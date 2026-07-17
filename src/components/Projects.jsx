import { useState } from 'react';
import { motion } from 'framer-motion';

const featured = [
  {
    title: 'CodeRAG',
    tag: 'Retrieval-Augmented Generation',
    description:
      'A Retrieval-Augmented Generation system that indexes codebases and answers questions grounded in real source code — combining vector search with LLM reasoning for accurate, context-aware answers.',
    tech: ['Python', 'RAG', 'Vector DB', 'LLMs', 'Embeddings'],
    link: 'https://github.com/YashhCanCode/Project-CodeRAG',
    status: null,
  },
  {
    title: 'AI Agent',
    tag: 'Autonomous Agent',
    description:
      'An autonomous agent that plans and executes multi-step tasks using LLM reasoning and tool use, chaining actions to reach a goal.',
    tech: ['AI Agents', 'LLMs', 'Tool Use'],
    link: 'https://github.com/YashhCanCode/Ai-Agent',
    status: null,
  },
  {
    title: 'Local SLM App',
    tag: 'On-device AI',
    description:
      'A fully local Small Language Model app on Ollama — private, offline inference with no external API calls.',
    tech: ['Ollama', 'SLMs', 'Python'],
    link: 'https://github.com/YashhCanCode/Local-SLM-App-with-Ollama',
    status: null,
  },
  {
    title: 'Job Co-Pilot',
    tag: 'AI Career Assistant',
    description:
      'An AI assistant that streamlines the job search — tailoring applications and surfacing relevant roles. In active development.',
    tech: ['AI Agents', 'LLMs', 'Full-Stack'],
    link: null,
    status: 'In Progress',
  },
  {
    title: 'Evolve',
    tag: 'Personal Project',
    description:
      'A personal project exploring intelligent, adaptive experiences — thoughtful AI tooling built from the ground up.',
    tech: ['React', 'Node.js', 'AI'],
    link: 'https://github.com/YashhCanCode/Project-Evolve',
    status: null,
  },
];

const dataProjects = [
  {
    title: 'MNIST Classifier',
    tag: 'Deep Learning',
    description: 'A neural network that recognizes handwritten digits from the MNIST dataset.',
    tech: ['Python', 'CNN', 'NumPy'],
    link: 'https://github.com/YashhCanCode/MNIST_Klassifier',
  },
  {
    title: 'Price Prediction',
    tag: 'Regression',
    description: 'An ML regression model predicting prices from historical data with feature engineering.',
    tech: ['Python', 'scikit-learn', 'Pandas'],
    link: 'https://github.com/YashhCanCode/Price_Prediction',
  },
  {
    title: 'Spam Classifier',
    tag: 'NLP',
    description: 'A natural-language model classifying messages as spam or ham via text vectorization.',
    tech: ['Python', 'NLP', 'scikit-learn'],
    link: 'https://github.com/YashhCanCode/Spam_Classifier',
  },
  {
    title: 'Netflix Analysis',
    tag: 'Exploratory Analysis',
    description: 'Exploratory analysis of the Netflix catalog — trends across genres, years, and content types.',
    tech: ['Python', 'Pandas', 'Matplotlib'],
    link: 'https://github.com/YashhCanCode/Netflix-Analysis',
  },
  {
    title: 'E-Commerce Analysis',
    tag: 'Data Analysis',
    description: 'Digging into e-commerce sales and customer behavior to surface actionable insights.',
    tech: ['Python', 'Pandas', 'Data Viz'],
    link: 'https://github.com/YashhCanCode/E-Commerce-Analysis',
  },
];

const groups = {
  featured: { label: 'Featured' },
  data: { label: 'Data & ML' },
};

const GitHubIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.02 11.02 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14 0 1.55-.01 2.8-.01 3.18 0 .31.21.68.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
  </svg>
);

const Arrow = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

// Quiet supporting card
const SmallCard = ({ p }) => (
  <div className="rounded-2xl bg-white border border-black/[0.07] p-6 hover:border-black/20 transition-colors duration-300 flex flex-col">
    <div className="flex items-center justify-between mb-3">
      <span className="text-[11px] font-bold uppercase tracking-widest text-brand-accent">{p.tag}</span>
      {p.status && <span className="text-[10px] font-bold uppercase tracking-wider text-brand-medium">{p.status}</span>}
    </div>
    <h3 className="text-xl font-black text-brand-dark tracking-tight mb-2">{p.title}</h3>
    <p className="text-sm text-gray-500 leading-relaxed font-medium mb-5 flex-1">{p.description}</p>
    <div className="flex flex-wrap gap-1.5 mb-5">
      {p.tech.map((t) => (
        <span key={t} className="px-2.5 py-1 text-[11px] font-semibold text-gray-500 bg-black/[0.03] rounded-full">{t}</span>
      ))}
    </div>
    {p.link ? (
      <a href={p.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-brand-dark hover:text-brand-accent transition-colors">
        <GitHubIcon className="w-4 h-4" /> GitHub <Arrow className="w-4 h-4" />
      </a>
    ) : (
      <span className="text-sm font-bold text-gray-400">Coming soon</span>
    )}
  </div>
);

const Projects = () => {
  const [tab, setTab] = useState('featured');

  return (
    <section id="projects" className="relative w-full bg-brand-light py-24 md:py-36 px-6 md:px-12 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header — given room to breathe */}
        <div className="max-w-2xl mb-10">
          <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-sm text-gray-600 font-bold mb-6 bg-white">
            Selected Work
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-brand-dark leading-[1.05] tracking-tight mb-5">
            Projects I&apos;ve Built
          </h2>
          <p className="text-brand-medium text-base md:text-lg font-medium leading-relaxed">
            From retrieval-augmented systems to machine-learning models.
          </p>
        </div>

        {/* Toggle */}
        <div className="inline-flex bg-black/[0.05] rounded-full p-1 mb-12">
          {Object.entries(groups).map(([key, g]) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`relative px-5 py-2 rounded-full text-sm font-bold transition-colors duration-300 ${tab === key ? 'text-white' : 'text-brand-medium hover:text-brand-dark'}`}
            >
              {tab === key && (
                <motion.span layoutId="projectTab" className="absolute inset-0 bg-brand-dark rounded-full" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />
              )}
              <span className="relative z-10">{g.label}</span>
            </button>
          ))}
        </div>

        {/* FEATURED — one large card, then quieter supporting cards (varied rhythm) */}
        {tab === 'featured' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {featured.map((p) => (
              <SmallCard key={p.title} p={p} />
            ))}
          </div>
        )}

        {/* DATA — a tight list, not another card grid */}
        {tab === 'data' && (
          <div className="border-t border-black/10">
            {dataProjects.map((p) => (
              <a
                key={p.title}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-6 py-6 border-b border-black/10 hover:px-2 transition-[padding] duration-300"
              >
                <div className="min-w-0">
                  <div className="flex items-baseline gap-3 mb-1">
                    <h3 className="text-xl md:text-2xl font-black text-brand-dark tracking-tight group-hover:text-brand-accent transition-colors">
                      {p.title}
                    </h3>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-accent">{p.tag}</span>
                  </div>
                  <p className="text-sm text-gray-500 font-medium max-w-xl">{p.description}</p>
                </div>
                <div className="flex items-center gap-4 shrink-0">
                  <div className="hidden md:flex flex-wrap gap-1.5 justify-end max-w-[220px]">
                    {p.tech.map((t) => (
                      <span key={t} className="px-2.5 py-1 text-[11px] font-semibold text-gray-500 bg-black/[0.03] rounded-full">{t}</span>
                    ))}
                  </div>
                  <Arrow className="w-5 h-5 text-brand-dark transform group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
