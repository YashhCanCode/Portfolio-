import { useEffect, useRef } from 'react';

// A scratch-off card hidden under the grid — scratch to reveal the line.
const ScratchCard = () => {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);
  const scratching = useRef(false);
  const lastW = useRef(0);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    let w = 0, h = 0, revealed = false;

    const paintCover = () => {
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = '#efe9db';
      ctx.fillRect(0, 0, w, h);
      ctx.strokeStyle = 'rgba(0,0,0,0.07)';
      ctx.lineWidth = 1;
      for (let x = 0; x <= w; x += 26) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke(); }
      for (let y = 0; y <= h; y += 26) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke(); }
      ctx.fillStyle = 'rgba(29,19,12,0.55)';
      ctx.font = '700 22px Caveat, ui-rounded, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('scratch me!!!!', w / 2, h / 2);
      ctx.globalCompositeOperation = 'destination-out';
    };

    const size = () => {
      const cw = wrap.clientWidth;
      const ch = wrap.clientHeight;
      if (!cw || !ch || Math.abs(cw - lastW.current) < 2) return;
      lastW.current = cw;
      w = cw; h = ch;
      canvas.width = cw * dpr;
      canvas.height = ch * dpr;
      canvas.style.width = cw + 'px';
      canvas.style.height = ch + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      revealed = false;
      paintCover();
    };

    const pos = (e) => {
      const r = canvas.getBoundingClientRect();
      return { x: e.clientX - r.left, y: e.clientY - r.top };
    };
    const scratch = (e) => {
      if (!scratching.current || revealed) return;
      const { x, y } = pos(e);
      ctx.beginPath();
      ctx.arc(x, y, 16, 0, Math.PI * 2);
      ctx.fill();
    };
    const down = (e) => { scratching.current = true; canvas.setPointerCapture?.(e.pointerId); scratch(e); };
    const up = () => {
      scratching.current = false;
      if (revealed) return;
      // auto clear the rest once mostly scratched
      const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
      let clear = 0;
      for (let i = 3; i < data.length; i += 40) if (data[i] === 0) clear++;
      if (clear / (data.length / 40) > 0.45) {
        revealed = true;
        ctx.clearRect(0, 0, w, h);
      }
    };

    size();
    canvas.addEventListener('pointerdown', down);
    canvas.addEventListener('pointermove', scratch);
    window.addEventListener('pointerup', up);
    const ro = new ResizeObserver(size);
    ro.observe(wrap);
    return () => {
      canvas.removeEventListener('pointerdown', down);
      canvas.removeEventListener('pointermove', scratch);
      window.removeEventListener('pointerup', up);
      ro.disconnect();
    };
  }, []);

  return (
    <div className="shrink-0 mx-auto md:mx-0">
      <div ref={wrapRef} className="relative w-[242px] h-[176px] sm:w-[286px] sm:h-[198px] rounded-lg overflow-hidden border border-black/10 shadow-sm">
        {/* revealed line underneath */}
        <div className="absolute inset-0 flex items-center justify-center p-5 text-center bg-white">
          <p className="font-script text-xl md:text-2xl text-brand-dark leading-snug">
            &ldquo;I&apos;m not a genius &mdash; these are just the things I&apos;ve built with.&rdquo;
          </p>
        </div>
        <canvas ref={canvasRef} className="absolute inset-0 cursor-pointer touch-none" />
      </div>
      <p className="font-sans text-[11px] text-brand-medium/50 text-center md:text-right mt-2 font-medium uppercase tracking-widest">
        go on, scratch it
      </p>
    </div>
  );
};

export default ScratchCard;
