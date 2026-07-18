import { useEffect, useRef, useState } from 'react';

const CMD = 'yash --verify';

const TerminalSeam = () => {
  const ref = useRef(null);
  const [typed, setTyped] = useState('');
  const [done, setDone] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStarted(true); io.disconnect(); } },
      { threshold: 0.4 }
    );
    if (el) io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const iv = setInterval(() => {
      i += 1;
      setTyped(CMD.slice(0, i));
      if (i >= CMD.length) { clearInterval(iv); setTimeout(() => setDone(true), 350); }
    }, 90);
    return () => clearInterval(iv);
  }, [started]);

  return (
    <div ref={ref} className="relative z-20 md:h-0">
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative flex justify-center md:block py-6 md:py-0">
        <div className="md:absolute md:right-2 md:-top-14 w-[280px]">
          <div className="rounded-lg bg-[#1d130c] shadow-[0_18px_40px_rgba(29,19,12,0.28)] overflow-hidden">
            <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/10">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
              <span className="ml-2 text-white/35 text-[10px] font-mono">yash — zsh</span>
            </div>
            <div className="p-3 font-mono text-[12px] leading-relaxed min-h-[64px]">
              <p className="text-white/90">
                <span className="text-brand-accent">$</span> {typed}
                {!done && <span className="animate-pulse">▌</span>}
              </p>
              {done && (
                <p className="text-[#27c93f] mt-1">
                  skills: legit ✓ <span className="text-white/55">— certificates below ↓</span>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminalSeam;
