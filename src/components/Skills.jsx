import { motion } from 'framer-motion';

const Skills = () => {
  const skillsData = [
    {
      category: 'Frontend Development',
      skills: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
    },
    {
      category: 'Backend Development',
      skills: ['Node.js', 'Express.js', 'Java', 'Python', 'REST APIs', 'JWT Auth', 'MySQL', 'MongoDB'],
    },
    {
      category: 'AI & Machine Learning',
      skills: ['RAG', 'Machine Learning', 'NLP', 'Generative AI', 'LLMs', 'Prompt Engineering'],
    },
    {
      category: 'Tools & Cloud',
      skills: ['Git', 'GitHub', 'Docker', 'Postman', 'CI/CD', 'AWS', 'Figma', 'Claude', 'ChatGPT'],
    },
  ];

  const SkillCard = ({ category, skills }) => (
    <motion.div
      whileHover={{ y: -6 }}
      className="group relative bg-white border border-black/5 rounded-3xl p-6 h-fit shadow-sm hover:shadow-md transition-all duration-400"
    >
      <h3 className="text-sm font-semibold text-black mb-4 tracking-tight">{category}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1.5 text-xs font-medium text-black bg-black/[0.03] hover:bg-brand-accent/10 border border-black/5 hover:border-brand-accent/20 rounded-full transition-all duration-300 cursor-default select-none hover:text-brand-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="relative w-full bg-white py-16 md:py-20 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">
        <div className="mb-10 md:mb-12">
          <div className="mb-3">
            <span className="inline-block text-xs font-semibold text-black/50 uppercase tracking-widest px-3 py-1.5 bg-black/[0.02] border border-black/5 rounded-full">
              Technical Stack
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-black mb-2 tracking-tight">
            Technologies I Work With
          </h2>
          <p className="text-sm text-black/60 font-normal">
            Full-stack expertise across modern development, AI, and cloud infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {skillsData.map((item) => (
            <SkillCard key={item.category} category={item.category} skills={item.skills} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
