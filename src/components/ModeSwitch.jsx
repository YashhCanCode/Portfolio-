import { useEffect, useState } from 'react';

const ModeSwitch = () => {
  const [life, setLife] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLife(true), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative z-20 md:h-0">
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative flex justify-center md:block py-6 md:py-0">
        <div className="md:absolute md:right-2 md:top-14 flex flex-col items-center md:items-end gap-1.5">
          <div className="flex items-center gap-3 bg-white rounded-full px-4 py-2.5 shadow-[0_14px_35px_rgba(29,19,12,0.14)]">
            <span className={`text-xs font-bold transition-colors ${life ? 'text-gray-400' : 'text-brand-dark'}`}>work mode</span>
            <button
              onClick={() => setLife((v) => !v)}
              aria-label="Toggle mode"
              className={`relative w-11 h-6 rounded-full transition-colors duration-300 ${life ? 'bg-brand-accent' : 'bg-brand-dark/15'}`}
            >
              <span className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-brand-dark transition-transform duration-300 ${life ? 'translate-x-5' : ''}`} />
            </button>
            <span className={`text-xs font-bold transition-colors ${life ? 'text-brand-dark' : 'text-gray-400'}`}>life mode</span>
          </div>
          <p className="font-script text-sm text-brand-medium/70">okay, enough résumé — the real me ↓</p>
        </div>
      </div>
    </div>
  );
};

export default ModeSwitch;
