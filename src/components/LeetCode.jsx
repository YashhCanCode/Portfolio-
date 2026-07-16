import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const USER = 'Yashcancode';
const PROFILE = 'https://leetcode.com/u/Yashcancode/';
const API = 'https://leetcode-api-faisalshohag.vercel.app';
const CACHE_KEY = 'lc_yashcancode_v2';

const readCache = () => {
  try {
    const c = typeof window !== 'undefined' && window.localStorage.getItem(CACHE_KEY);
    return c ? JSON.parse(c) : null;
  } catch {
    return null;
  }
};

const timeAgo = (secs) => {
  const d = new Date(Number(secs) * 1000);
  const now = new Date();
  const same =
    d.getFullYear() === now.getFullYear() &&
    d.getMonth() === now.getMonth() &&
    d.getDate() === now.getDate();
  if (same) return 'Today';
  const diff = Math.floor((now - d) / 86400000);
  if (diff <= 1) return 'Yesterday';
  if (diff < 7) return `${diff}d ago`;
  return d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
};

const Bar = ({ label, solved, total, color }) => (
  <div>
    <div className="flex items-center justify-between text-sm mb-1.5">
      <span className="font-semibold" style={{ color }}>{label}</span>
      <span className="font-bold text-brand-dark">
        {solved}
        <span className="text-gray-400 font-medium"> / {total}</span>
      </span>
    </div>
    <div className="h-2 rounded-full bg-black/[0.06] overflow-hidden">
      <div
        className="h-full rounded-full"
        style={{ width: `${total ? Math.min(100, (solved / total) * 100) : 0}%`, background: color }}
      />
    </div>
  </div>
);

const LeetCode = () => {
  const [info, setInfo] = useState(readCache);
  const [loading, setLoading] = useState(() => !readCache());

  useEffect(() => {
    let alive = true;
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 12000);
    (async () => {
      try {
        const res = await fetch(`${API}/${USER}`, { signal: ctrl.signal });
        const j = await res.json();
        const seen = new Set();
        const recent = (Array.isArray(j.recentSubmissions) ? j.recentSubmissions : [])
          .filter((s) => s.statusDisplay === 'Accepted')
          .filter((s) => (seen.has(s.titleSlug) ? false : seen.add(s.titleSlug)))
          .slice(0, 6);
        const next = {
          total: j.totalSolved ?? 0,
          easy: j.easySolved ?? 0,
          easyTotal: j.totalEasy ?? 0,
          medium: j.mediumSolved ?? 0,
          mediumTotal: j.totalMedium ?? 0,
          hard: j.hardSolved ?? 0,
          hardTotal: j.totalHard ?? 0,
          recent,
        };
        if (alive) {
          setInfo(next);
          try { window.localStorage.setItem(CACHE_KEY, JSON.stringify(next)); } catch { /* ignore */ }
        }
      } catch { /* keep cache */ }
      finally {
        if (alive) setLoading(false);
        clearTimeout(timer);
      }
    })();
    return () => {
      alive = false;
      ctrl.abort();
      clearTimeout(timer);
    };
  }, []);

  const recent = info?.recent ?? (loading ? null : []);

  return (
    <section
      id="leetcode"
      className="relative w-full bg-white py-20 md:py-28 px-6 md:px-12 overflow-hidden font-sans"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-2xl mb-12 md:mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-brand-accent" />
            <span className="text-xs uppercase tracking-[0.35em] text-brand-accent font-medium">
              Sharpening the Axe
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-brand-dark leading-[1.05] tracking-tight mb-5">
            My LeetCode{' '}
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-medium">
              grind
            </span>
            .
          </h2>
          <p className="text-brand-medium text-base md:text-lg leading-relaxed">
            Live from my profile — total problems solved by difficulty, and what
            I&apos;ve been solving lately.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-stretch">
          {/* Stats card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="bg-brand-light rounded-3xl p-6 md:p-8 border border-black/5 shadow-[0_15px_40px_rgba(0,0,0,0.05)] flex flex-col"
          >
            <div className="mb-8">
              <p className="font-display text-5xl md:text-6xl font-light text-brand-dark leading-none">
                {info ? info.total : '—'}
                {info ? <span className="text-brand-accent text-2xl align-top"> solved</span> : null}
              </p>
              <p className="text-[11px] uppercase tracking-[0.2em] text-brand-medium/70 font-semibold mt-2">
                Problems on LeetCode
              </p>
            </div>

            {info ? (
              <div className="space-y-5">
                <Bar label="Easy" solved={info.easy} total={info.easyTotal} color="#10b981" />
                <Bar label="Medium" solved={info.medium} total={info.mediumTotal} color="#f59e0b" />
                <Bar label="Hard" solved={info.hard} total={info.hardTotal} color="#ef4444" />
              </div>
            ) : loading ? (
              <div className="space-y-5">
                {[0, 1, 2].map((k) => (
                  <div key={k} className="h-8 rounded-xl bg-black/[0.04] animate-pulse" />
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500 font-medium">
                Couldn&apos;t load live stats right now.{' '}
                <a href={PROFILE} target="_blank" rel="noopener noreferrer" className="text-brand-accent font-semibold underline">
                  View on LeetCode →
                </a>
              </p>
            )}

            {/* Vintage motto — side by side, fills the card */}
            <div className="mt-auto pt-8 border-t border-black/5">
              <div className="flex items-baseline justify-between gap-2">
                <span style={{ fontFamily: "'Rye', serif" }} className="text-2xl sm:text-3xl lg:text-4xl text-brand-dark whitespace-nowrap">
                  Stay<span className="text-brand-accent">.</span>
                </span>
                <span style={{ fontFamily: "'Alfa Slab One', serif" }} className="text-2xl sm:text-3xl lg:text-4xl text-brand-medium whitespace-nowrap">
                  Sharp<span className="text-brand-accent">.</span>
                </span>
                <span style={{ fontFamily: "'Abril Fatface', serif" }} className="text-2xl sm:text-3xl lg:text-4xl text-brand-dark whitespace-nowrap">
                  Strong<span className="text-brand-accent">.</span>
                </span>
              </div>
            </div>
          </motion.div>

          {/* Recently solved */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
            className="bg-brand-light rounded-3xl p-6 border border-black/5 shadow-[0_15px_40px_rgba(0,0,0,0.05)] flex flex-col"
          >
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-sm font-black uppercase tracking-widest text-brand-dark">
                Recently Solved
              </h3>
              <span className="w-2 h-2 rounded-full bg-green-500" />
            </div>

            {recent === null && (
              <div className="space-y-3">
                {[0, 1, 2, 3].map((k) => (
                  <div key={k} className="h-10 rounded-xl bg-black/[0.04] animate-pulse" />
                ))}
              </div>
            )}

            {recent && recent.length > 0 && (
              <ul className="divide-y divide-black/5">
                {recent.map((s, i) => (
                  <li key={i}>
                    <a
                      href={`https://leetcode.com/problems/${s.titleSlug}/`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between gap-3 py-3 group"
                    >
                      <span className="min-w-0">
                        <span className="block text-sm font-semibold text-brand-dark truncate group-hover:text-brand-accent transition-colors">
                          {s.title}
                        </span>
                        {s.lang && (
                          <span className="block text-[10px] text-gray-400 font-medium uppercase tracking-wider mt-0.5">
                            {s.lang}
                          </span>
                        )}
                      </span>
                      <span
                        className={`shrink-0 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full ${
                          timeAgo(s.timestamp) === 'Today'
                            ? 'bg-brand-accent/15 text-brand-medium'
                            : 'bg-black/[0.04] text-gray-400'
                        }`}
                      >
                        {timeAgo(s.timestamp)}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            )}

            {recent && recent.length === 0 && (
              <p className="text-sm text-gray-500 font-medium">
                Live feed is catching its breath.{' '}
                <a href={PROFILE} target="_blank" rel="noopener noreferrer" className="text-brand-accent font-semibold underline">
                  See it on LeetCode →
                </a>
              </p>
            )}

            <a
              href={PROFILE}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto pt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-dark hover:text-brand-accent transition-colors"
            >
              View full profile
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H8M17 7v9" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeetCode;
