import React from 'react';

const socials = [
  { label: 'GitHub', href: 'https://github.com/YashhCanCode' },
  { label: 'Email', href: 'mailto:yashwanthkonnuru@gmail.com' },
  { label: 'Projects', href: '#projects' },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#111111] text-[#d4d4d4] py-16 px-6 md:px-12 w-full font-mono text-[10px] md:text-xs tracking-widest flex flex-col justify-between min-h-[50vh]">

      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full font-medium">
        <div className="flex flex-col gap-1">
          <p>AI Engineering &amp; Backend Systems</p>
          <p>LLMs, RAG, On-device AI</p>
          <p>Full-Stack Development</p>
        </div>

        <div className="flex flex-col gap-1 md:items-center">
          <p>Based in Hyderabad, India</p>
          <a href="#projects" className="underline hover:text-white transition-colors mt-1 underline-offset-4 decoration-1">View Work</a>
        </div>

        <div className="flex flex-col gap-1 md:items-end">
          <p>Open to Opportunities</p>
          <p>{year}</p>
        </div>
      </div>

      {/* Middle Huge Text */}
      <div className="w-full flex justify-center items-center py-20 md:py-24 overflow-hidden">
        <h2 className="text-[18vw] md:text-[16vw] leading-none font-sans font-bold tracking-tighter lowercase select-none text-[#f4f4f4] w-full text-center">
          yash
        </h2>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full items-end font-medium">
        <div className="flex flex-col gap-6">
          <a href="#contact" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 font-bold">Contact</a>
          <p className="text-white/60 font-mono text-[9px] md:text-[10px]">
            &copy; {year} Konnuru Yashwanth &middot; Built with care
          </p>
        </div>

        <div className="flex flex-col gap-1 md:items-center">
          <a href="mailto:yashwanthkonnuru@gmail.com" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 lowercase">yashwanthkonnuru@gmail.com</a>
        </div>

        <div className="flex flex-row gap-5 md:justify-end md:items-end">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="underline hover:text-white transition-colors underline-offset-4 decoration-1"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
