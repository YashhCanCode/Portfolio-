import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Experience', 'Projects', 'LeetCode', 'Skills', 'Certifications', 'Space', 'Life', 'Contact'];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isOpen
          ? 'bg-brand-dark py-4'
          : isScrolled
          ? 'bg-brand-light/80 backdrop-blur-xl py-3 border-b border-brand-dark/10 shadow-[0_4px_30px_rgba(0,0,0,0.04)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          className={`text-2xl font-black tracking-tight transition-colors duration-300 ${
            isOpen ? 'text-white' : 'text-brand-dark'
          }`}
        >
          Yash<span className="text-brand-accent">.</span>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex space-x-5 xl:space-x-6">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-semibold text-sm tracking-wide relative group text-brand-dark/70 hover:text-brand-dark transition-colors duration-300"
            >
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brand-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:block">
          <a
            href="#contact"
            className="px-6 py-2.5 rounded-full text-sm font-bold bg-brand-dark text-white hover:bg-brand-accent hover:text-brand-dark transition-all duration-300 shadow-sm"
          >
            Hire Me
          </a>
        </div>

        {/* Hamburger */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`focus:outline-none p-2 transition-colors duration-300 ${
              isOpen ? 'text-white' : 'text-brand-dark'
            }`}
            aria-label="Toggle navigation menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[500px] py-6 opacity-100 bg-brand-dark shadow-2xl' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col px-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-white/90 hover:text-brand-accent font-bold text-base border-b border-white/10 pb-2.5 transition-colors"
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="inline-block mt-2 px-6 py-3 rounded-full bg-white text-brand-dark font-black hover:bg-brand-accent transition-all duration-300 w-full text-center shadow-xl"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
