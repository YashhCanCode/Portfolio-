import React from 'react';
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useSpring,
  useTransform,
} from 'framer-motion';

const projects = [
  {
    title: 'CodeRAG',
    tag: 'Retrieval-Augmented Generation',
    description:
      'A Retrieval-Augmented Generation system that indexes codebases and answers questions grounded in real source code, combining vector search with LLM reasoning for accurate, context-aware responses.',
    tech: ['Python', 'RAG', 'Vector DB', 'LLMs', 'Embeddings'],
    link: 'https://github.com/YashhCanCode/Project-CodeRAG',
    status: null,
  },
  {
    title: 'Local SLM App',
    tag: 'On-device AI · Ollama',
    description:
      'A fully local Small Language Model application built on Ollama, running inference entirely on-device for private, offline AI chat with no external API calls.',
    tech: ['Ollama', 'SLMs', 'Python', 'Local Inference'],
    link: 'https://github.com/YashhCanCode/Local-SLM-App-with-Ollama',
    status: null,
  },
  {
    title: 'Job Co-Pilot',
    tag: 'AI Career Assistant',
    description:
      'An AI-powered assistant that streamlines the job search — tailoring applications, surfacing relevant roles, and guiding candidates through the process. Currently in active development.',
    tech: ['AI Agents', 'LLMs', 'Full-Stack'],
    link: null,
    status: 'In Progress',
  },
  {
    title: 'Evolve',
    tag: 'Personal Project',
    description:
      'A personal project exploring intelligent, adaptive experiences — building thoughtful AI tooling from the ground up.',
    tech: ['React', 'Node.js', 'AI'],
    link: 'https://github.com/YashhCanCode/Project-Evolve',
    status: null,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay: i * 0.12 },
  }),
};

const GitHubIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.02 11.02 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14 0 1.55-.01 2.8-.01 3.18 0 .31.21.68.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
  </svg>
);

const ROTATION = 9; // max tilt in degrees

const ProjectCard = ({ project, index }) => {
  // Normalized pointer position (-0.5 .. 0.5) relative to card center
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  // Raw pointer position in px for the spotlight
  const spotX = useMotionValue(0);
  const spotY = useMotionValue(0);

  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [ROTATION, -ROTATION]), {
    stiffness: 150,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-ROTATION, ROTATION]), {
    stiffness: 150,
    damping: 18,
  });

  const spotlight = useMotionTemplate`radial-gradient(320px circle at ${spotX}px ${spotY}px, rgba(194,159,116,0.18), transparent 70%)`;

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const localX = e.clientX - rect.left;
    const localY = e.clientY - rect.top;
    px.set(localX / rect.width - 0.5);
    py.set(localY / rect.height - 0.5);
    spotX.set(localX);
    spotY.set(localY);
  };

  const handleLeave = () => {
    px.set(0);
    py.set(0);
  };

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      style={{ perspective: 1000 }}
      className="h-full"
    >
      <motion.div
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        whileHover={{ scale: 1.02 }}
        transition={{ scale: { duration: 0.3, ease: 'easeOut' } }}
        className="group relative h-full flex flex-col rounded-3xl bg-white border border-black/5 p-8 shadow-[0_15px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_70px_rgba(194,159,116,0.22)] transition-shadow duration-500 overflow-hidden"
      >
        {/* Spotlight glare — follows the cursor */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: spotlight }}
        />
        {/* Gold border that lights up on hover */}
        <div className="pointer-events-none absolute inset-0 rounded-3xl border border-brand-accent/0 group-hover:border-brand-accent/30 transition-colors duration-500" />

        {/* Content lifted forward in 3D space */}
        <div
          className="relative z-10 flex flex-col h-full"
          style={{ transform: 'translateZ(45px)', transformStyle: 'preserve-3d' }}
        >
          {/* Top row */}
          <div className="flex items-center justify-between mb-5">
            <span className="text-[11px] font-bold uppercase tracking-widest text-brand-accent">
              {project.tag}
            </span>
            {project.status && (
              <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-brand-medium bg-brand-accent/10 border border-brand-accent/20 rounded-full px-3 py-1">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
                {project.status}
              </span>
            )}
          </div>

          <h3 className="text-2xl font-black text-gray-900 mb-3 tracking-tight">
            {project.title}
          </h3>

          <p className="text-sm text-gray-500 leading-relaxed font-medium mb-6 flex-1">
            {project.description}
          </p>

          {/* Tech pills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 text-[11px] font-semibold text-gray-600 bg-black/[0.03] border border-black/5 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Link */}
          <div className="mt-auto">
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-gray-900 group-hover:text-brand-accent transition-colors duration-300 w-fit"
              >
                <GitHubIcon className="w-4 h-4" />
                View on GitHub
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 w-fit">
                Coming soon
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section
      id="projects"
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
            Selected Work
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-dark leading-[1.1] tracking-tight mb-5">
            Projects I&apos;ve Built
          </h2>
          <p className="text-brand-medium text-base md:text-lg font-medium leading-relaxed">
            From retrieval-augmented systems to on-device language models &mdash; a
            selection of things I&apos;ve designed, built, and shipped.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>

      {/* Decorative accent blob */}
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-brand-accent/10 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default Projects;
