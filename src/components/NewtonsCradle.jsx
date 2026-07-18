import { useEffect, useRef } from 'react';
import Matter from 'matter-js';

// A real Newton's cradle — drag a ball out, release, one ball reacts.
const NewtonsCradle = () => {
  const hostRef = useRef(null);

  useEffect(() => {
    const { Engine, Render, Runner, Composite, Composites, Bodies, Body, Mouse, MouseConstraint, World } = Matter;
    const host = hostRef.current;
    let engine, render, runner, lastW = 0;

    const teardown = () => {
      if (render) { Render.stop(render); if (render.canvas) render.canvas.remove(); render.textures = {}; render = null; }
      if (runner) { Runner.stop(runner); runner = null; }
      if (engine) { World.clear(engine.world, false); Engine.clear(engine); engine = null; }
    };

    const build = () => {
      const width = host.clientWidth;
      const height = host.clientHeight;
      if (!width || !height) return;

      engine = Engine.create();
      engine.positionIterations = 12;
      engine.velocityIterations = 10;
      engine.constraintIterations = 4;

      render = Render.create({
        element: host,
        engine,
        options: { width, height, background: 'transparent', wireframes: false, pixelRatio: window.devicePixelRatio || 1 },
      });
      Render.run(render);
      runner = Runner.create();
      Runner.run(runner, engine);

      const number = 7;
      const size = Math.max(9, Math.min(13, (width - 24) / (number * 2.2)));
      const startX = (width - number * size * 2) / 2 + size;
      const topY = size + 8;
      const length = Math.min(height - topY - size - 24, 105);

      const cradle = Composites.newtonsCradle(startX, topY, number, size, length);
      cradle.bodies.forEach((b) => {
        b.render.fillStyle = '#241811';
        b.render.strokeStyle = '#c29f74';
        b.render.lineWidth = 1.5;
        b.friction = 0;
        b.frictionAir = 0;
        b.frictionStatic = 0;
        b.restitution = 1;
        b.slop = 0.01;
      });
      cradle.constraints.forEach((c) => {
        c.render.strokeStyle = 'rgba(29,19,12,0.35)';
        c.render.lineWidth = 1.25;
      });
      Composite.add(engine.world, cradle);

      // thin line the balls hang from (not a chunky bar)
      const lineCenterX = startX + (number - 1) * size;
      const lineWidth = (number - 1) * size * 2 + size;
      const rope = Bodies.rectangle(lineCenterX, topY, lineWidth, 2.5, {
        isStatic: true,
        render: { fillStyle: '#1d130c' },
      });
      Composite.add(engine.world, rope);

      // invisible walls so balls never leave the frame (no clipping)
      const t = 80;
      const wallOpts = { isStatic: true, restitution: 0, friction: 0, render: { visible: false } };
      Composite.add(engine.world, [
        Bodies.rectangle(-t / 2, height / 2, t, height * 3, wallOpts),
        Bodies.rectangle(width + t / 2, height / 2, t, height * 3, wallOpts),
        Bodies.rectangle(width / 2, height + t / 2, width * 3, t, wallOpts),
      ]);

      // gentle initial swing
      Body.translate(cradle.bodies[0], { x: -size * 2, y: -size * 1.5 });

      // soft, low-sensitivity dragging (desktop); touch off so mobile scrolls freely
      const mouse = Mouse.create(render.canvas);
      const mc = MouseConstraint.create(engine, {
        mouse,
        constraint: { stiffness: 0.1, damping: 0.05, render: { visible: false } },
      });
      Composite.add(engine.world, mc);
      render.mouse = mouse;
      ['wheel', 'DOMMouseScroll'].forEach((ev) => mouse.element.removeEventListener(ev, mouse.mousewheel));
      mouse.element.removeEventListener('touchstart', mouse.mousedown);
      mouse.element.removeEventListener('touchmove', mouse.mousemove);
      mouse.element.removeEventListener('touchend', mouse.mouseup);
    };

    const onResize = () => {
      const w = host.clientWidth;
      if (!w || Math.abs(w - lastW) < 2) return;
      lastW = w;
      teardown();
      build();
    };

    const ro = new ResizeObserver(onResize);
    ro.observe(host);
    return () => { ro.disconnect(); teardown(); };
  }, []);

  return (
    <div className="relative z-20 md:h-0">
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative flex justify-center md:block py-8 md:py-0">
        <div className="w-[300px] sm:w-[400px] md:absolute md:right-0 md:-top-6">
          <div
            ref={hostRef}
            className="w-full h-[190px] sm:h-[210px] [&_canvas]:cursor-grab [&_canvas]:active:cursor-grabbing"
          />
          <p className="font-script text-base md:text-lg text-brand-dark text-center leading-snug -mt-12">
            Been obsessed with physics since I was a kid &mdash; honestly way more fun
            than any other subject. Newton&apos;s cradle is my favourite and also exploring physics in coding, so I built one
            right here.
          </p>
          <p className="font-script text-base md:text-lg text-brand-dark text-center leading-snug">
            Go on &mdash; pull it. Slowly, yeah? ☺︎
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewtonsCradle;
