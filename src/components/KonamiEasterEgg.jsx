import { useEffect, useState } from 'react';

const SEQ = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
const EMOJIS = ['🏃‍♂️', '♟️', '🤖', '🚀', '☕', '🏆', '💻', '🎉'];

const KonamiEasterEgg = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    let pos = 0;
    const onKey = (e) => {
      const k = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      if (k === SEQ[pos]) {
        pos += 1;
        if (pos === SEQ.length) {
          pos = 0;
          setActive(true);
          setTimeout(() => setActive(false), 6000);
        }
      } else {
        pos = k === SEQ[0] ? 1 : 0;
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  if (!active) return null;

  return (
    <div className="fixed inset-0 z-[200] pointer-events-none overflow-hidden">
      {Array.from({ length: 26 }).map((_, i) => (
        <span
          key={i}
          className="emoji-fall absolute text-3xl"
          style={{ left: `${(i * 3.9) % 100}%`, top: 0, animationDelay: `${(i % 9) * 0.25}s` }}
        >
          {EMOJIS[i % EMOJIS.length]}
        </span>
      ))}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-brand-dark text-white px-6 py-4 rounded-2xl shadow-2xl text-center pointer-events-auto">
        <p className="font-bold text-base">🎉 You found the secret!</p>
        <p className="text-sm text-white/70 mt-1">P.S. I&apos;m genuinely open to work — let&apos;s talk.</p>
      </div>
    </div>
  );
};

export default KonamiEasterEgg;
