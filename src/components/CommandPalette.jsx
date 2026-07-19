import { useEffect, useRef, useState } from 'react';

const SECTIONS = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'LeetCode', id: 'leetcode' },
  { label: 'Skills', id: 'skills' },
  { label: 'Certifications', id: 'certifications' },
  { label: 'Instagram', id: 'space' },
  { label: 'Off the Clock', id: 'life' },
  { label: 'Contact', id: 'contact' },
];
const LINKS = [
  { label: 'GitHub', href: 'https://github.com/YashhCanCode' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/yashwanth-konnuru' },
  { label: 'Instagram', href: 'https://www.instagram.com/yashhcancode' },
  { label: 'LeetCode profile', href: 'https://leetcode.com/u/Yashcancode/' },
  { label: 'Email me', href: 'mailto:yashwanthkonnuru@gmail.com' },
];

const isMac = typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform);

const SearchIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <circle cx="11" cy="11" r="7" /><path strokeLinecap="round" d="M21 21l-4.3-4.3" />
  </svg>
);

const CommandPalette = () => {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState('');
  const [active, setActive] = useState(0);
  const inputRef = useRef(null);

  const items = [
    ...SECTIONS.map((s) => ({ ...s, kind: 'go' })),
    ...LINKS.map((l) => ({ ...l, kind: 'link' })),
  ].filter((i) => i.label.toLowerCase().includes(q.toLowerCase()));

  const run = (item) => {
    setOpen(false);
    if (!item) return;
    if (item.kind === 'go') {
      document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.open(item.href, item.href.startsWith('mailto') ? '_self' : '_blank', 'noopener,noreferrer');
    }
  };

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((o) => !o);
        return;
      }
      if (!open) return;
      if (e.key === 'Escape') setOpen(false);
      else if (e.key === 'ArrowDown') { e.preventDefault(); setActive((a) => Math.min(a + 1, items.length - 1)); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); setActive((a) => Math.max(a - 1, 0)); }
      else if (e.key === 'Enter') { e.preventDefault(); run(items[active]); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, items, active]);

  useEffect(() => {
    if (open) {
      setQ('');
      setActive(0);
      document.body.style.overflow = 'hidden';
      setTimeout(() => inputRef.current?.focus(), 20);
    } else {
      document.body.style.overflow = '';
    }
  }, [open]);

  return (
    <>
      {/* discover hint */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Open command menu"
        className="fixed bottom-5 right-5 z-40 hidden md:flex items-center gap-2 bg-brand-dark/90 text-white/90 backdrop-blur rounded-full px-3.5 py-2 text-xs font-semibold shadow-lg hover:bg-brand-dark transition-colors"
      >
        <SearchIcon className="w-3.5 h-3.5" />
        <span className="font-mono">{isMac ? '⌘' : 'Ctrl'} K</span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[300] flex items-start justify-center pt-[14vh] px-4 bg-black/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-black/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 px-4 border-b border-black/10">
              <SearchIcon className="w-4 h-4 text-gray-400" />
              <input
                ref={inputRef}
                value={q}
                onChange={(e) => { setQ(e.target.value); setActive(0); }}
                placeholder="Jump to a section or open a link…"
                className="w-full py-4 text-sm outline-none bg-transparent text-brand-dark placeholder-gray-400"
              />
            </div>
            <ul className="max-h-72 overflow-auto py-2">
              {items.length === 0 && <li className="px-4 py-3 text-sm text-gray-400">No matches</li>}
              {items.map((item, i) => (
                <li key={`${item.kind}:${item.label}`}>
                  <button
                    onMouseEnter={() => setActive(i)}
                    onClick={() => run(item)}
                    className={`w-full flex items-center justify-between px-4 py-2.5 text-sm transition-colors ${i === active ? 'bg-brand-light' : ''}`}
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-[10px] uppercase tracking-wider text-gray-400 w-9 text-left">{item.kind === 'go' ? 'Go' : 'Open'}</span>
                      <span className="font-semibold text-brand-dark">{item.label}</span>
                    </span>
                    {item.kind === 'link' && <span className="text-xs text-gray-400">↗</span>}
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4 px-4 py-2.5 border-t border-black/10 text-[10px] text-gray-400 font-medium">
              <span>↑↓ navigate</span><span>↵ open</span><span>esc close</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CommandPalette;
