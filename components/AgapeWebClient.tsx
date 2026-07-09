'use client';
import { useEffect } from 'react';

export default function AgapeWebClient() {
  useEffect(() => {
    const cleanups: (() => void)[] = [];
    let rafId: number;

    // ── Nav scroll state ──────────────────────────────────────────
    const nav = document.querySelector('.nav');
    const onScroll = () => {
      if (window.scrollY > 24) nav?.classList.add('scrolled');
      else nav?.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    cleanups.push(() => window.removeEventListener('scroll', onScroll));

    // ── WebGL hero shader ─────────────────────────────────────────
    const canvas = document.getElementById('hero-shader') as HTMLCanvasElement | null;
    if (canvas) {
      const gl = canvas.getContext('webgl', { antialias: true, premultipliedAlpha: false });
      if (!gl) {
        canvas.style.background =
          'radial-gradient(ellipse at 25% 30%, #d4bdff 0%, transparent 45%),' +
          'radial-gradient(ellipse at 75% 65%, #ffd1e3 0%, transparent 50%),' +
          'radial-gradient(ellipse at 50% 100%, #ffe2c4 0%, transparent 55%),' +
          'linear-gradient(180deg, #ffffff, #ffffff)';
      } else {
        // ── Curated timeline ──────────────────────────────────────
        // START_OFFSET: u_time seconds; every visitor loads at this hand-picked state.
        // LOOP: ping-pong window in u_time seconds; null = drift forever.
        // Curation notes (contact sheet, 45s steps 0–1800 + 15s fine sweep 660–900):
        //   favourites: 720 (chosen anchor), 810, 1215, 90, 1485
        //   offenders (pink blob / blotchy): 0, 45, 135, 360, 675–690, 900, 1395, 1575
        //   good stretch: ~710–880; edges 690 and 885+ degrade.
        const START_OFFSET = 720;
        const LOOP = { t0: 715, t1: 875 } as { t0: number; t1: number } | null;

        const qp = new URLSearchParams(window.location.search);
        const qT = parseFloat(qp.get('shaderT') ?? '');
        const offset = Number.isFinite(qT) ? qT : START_OFFSET;

        const vert = `
          attribute vec2 a_pos;
          void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
        `;

        const frag = `
          precision highp float;
          uniform vec2 u_res;
          uniform float u_time;
          uniform vec2 u_mouse;

          float hash(vec2 p) {
            p = fract(p * vec2(123.34, 456.21));
            p += dot(p, p + 45.32);
            return fract(p.x * p.y);
          }
          float noise(vec2 p) {
            vec2 i = floor(p);
            vec2 f = fract(p);
            float a = hash(i);
            float b = hash(i + vec2(1.0, 0.0));
            float c = hash(i + vec2(0.0, 1.0));
            float d = hash(i + vec2(1.0, 1.0));
            vec2 u = f * f * (3.0 - 2.0 * f);
            return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
          }
          float fbm(vec2 p) {
            float v = 0.0;
            float a = 0.5;
            for (int i = 0; i < 5; i++) {
              v += a * noise(p);
              p *= 2.07;
              a *= 0.5;
            }
            return v;
          }

          vec3 paper    = vec3(1.000, 1.000, 1.000);
          vec3 warm     = vec3(0.973, 0.710, 0.200);
          vec3 blush    = vec3(0.949, 0.518, 0.557);
          vec3 pink     = vec3(0.945, 0.471, 0.643);
          vec3 mauve    = vec3(0.812, 0.510, 0.710);
          vec3 slate    = vec3(0.565, 0.690, 0.761);
          vec3 teal     = vec3(0.384, 0.667, 0.729);

          void main() {
            vec2 uv = gl_FragCoord.xy / u_res.xy;
            float aspect = u_res.x / u_res.y;
            vec2 p = uv;
            p.x *= aspect;

            float t = u_time * 0.05;

            vec2 q = vec2(fbm(p * 1.2 + vec2(t, -t * 0.7)),
                          fbm(p * 1.2 + vec2(-t * 0.6, t * 0.9) + 4.3));

            vec2 r = vec2(fbm(p * 1.5 + 2.0 * q + vec2(1.7 + t * 0.3, 9.2)),
                          fbm(p * 1.5 + 2.0 * q + vec2(8.3, 2.8 - t * 0.2)));

            float n = fbm(p * 1.8 + 3.0 * r + u_mouse * 0.15);

            float m1 = smoothstep(0.30, 0.85, n);
            float m2 = smoothstep(0.34, 0.95, fbm(p * 1.1 + vec2(-t, t * 0.4) + 7.7));
            float m3 = smoothstep(0.38, 0.85, fbm(p * 0.9 + vec2(t * 0.5, -t * 0.6) + 2.2));
            float m4 = smoothstep(0.45, 0.95, length(q));
            float m5 = smoothstep(0.40, 0.90, fbm(p * 1.2 + vec2(t * 0.7, t * 0.3) + 11.1));
            float m6 = smoothstep(0.40, 0.88, fbm(p * 1.4 + vec2(-t * 0.4, t * 0.8) + 3.3));

            vec3 col = paper;
            col = mix(col, warm,   m1 * 0.65);
            col = mix(col, blush,  m2 * 0.65);
            col = mix(col, pink,   m3 * 0.65);
            col = mix(col, mauve,  m4 * 0.65);
            col = mix(col, slate,  m5 * 0.80);
            col = mix(col, teal,   m6 * 0.80);

            vec2 center = uv - 0.5;
            float d = length(vec2(center.x, center.y * 0.85));
            float vign = smoothstep(0.65, 0.18, d);
            col = mix(paper, col, vign * 0.95 + 0.05);

            float g = (hash(gl_FragCoord.xy + u_time) - 0.5) * 0.012;
            col += g;

            gl_FragColor = vec4(col, 1.0);
          }
        `;

        const compile = (type: number, src: string) => {
          const s = gl.createShader(type)!;
          gl.shaderSource(s, src);
          gl.compileShader(s);
          if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
            console.error(gl.getShaderInfoLog(s));
          }
          return s;
        };

        const program = gl.createProgram()!;
        gl.attachShader(program, compile(gl.VERTEX_SHADER, vert));
        gl.attachShader(program, compile(gl.FRAGMENT_SHADER, frag));
        gl.linkProgram(program);
        gl.useProgram(program);

        const buf = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buf);
        gl.bufferData(
          gl.ARRAY_BUFFER,
          new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
          gl.STATIC_DRAW
        );
        const aPos = gl.getAttribLocation(program, 'a_pos');
        gl.enableVertexAttribArray(aPos);
        gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

        const uRes = gl.getUniformLocation(program, 'u_res');
        const uTime = gl.getUniformLocation(program, 'u_time');
        const uMouse = gl.getUniformLocation(program, 'u_mouse');

        let mouse = [0.5, 0.5];
        const targetMouse = [0.5, 0.5];

        const resize = () => {
          const dpr = Math.min(window.devicePixelRatio || 1, 1.6);
          const w = canvas.clientWidth;
          const h = canvas.clientHeight;
          canvas.width = Math.floor(w * dpr);
          canvas.height = Math.floor(h * dpr);
          gl.viewport(0, 0, canvas.width, canvas.height);
          gl.uniform2f(uRes, canvas.width, canvas.height);
        };
        window.addEventListener('resize', resize);
        resize();
        cleanups.push(() => window.removeEventListener('resize', resize));

        const onPointerMove = (e: PointerEvent) => {
          const rect = canvas.getBoundingClientRect();
          targetMouse[0] = (e.clientX - rect.left) / rect.width;
          targetMouse[1] = 1 - (e.clientY - rect.top) / rect.height;
        };
        window.addEventListener('pointermove', onPointerMove);
        cleanups.push(() => window.removeEventListener('pointermove', onPointerMove));

        let elapsed = 0;
        let last = performance.now();
        let speed = 1;
        let paused = false;

        const shaderTime = () => {
          const now = performance.now();
          if (!paused) elapsed += ((now - last) / 1000) * speed;
          last = now;
          let u = offset + elapsed;
          if (LOOP && !qp.has('shaderT')) {
            // Triangle-wave ping-pong keeps u inside the curated window, seamlessly.
            const span = LOOP.t1 - LOOP.t0;
            const m = (((u - LOOP.t0) % (2 * span)) + 2 * span) % (2 * span);
            u = LOOP.t0 + (m <= span ? m : 2 * span - m);
          }
          return u;
        };

        if (process.env.NODE_ENV === 'development') {
          const onKey = (e: KeyboardEvent) => {
            if (e.metaKey || e.ctrlKey || e.altKey) return;
            const target = e.target as HTMLElement | null;
            if (target && /^(input|textarea|select)$/i.test(target.tagName)) return;
            switch (e.key) {
              case 'j': elapsed -= 10; break;
              case 'k': elapsed += 10; break;
              case 'J': elapsed -= 60; break;
              case 'K': elapsed += 60; break;
              case 'f': speed = speed === 1 ? 15 : 1; break;
              case 'p': paused = !paused; break;
              case 'g': {
                const u = offset + elapsed;
                console.log(`u_time=${u.toFixed(1)} → ?shaderT=${Math.round(u)}`);
                break;
              }
            }
          };
          window.addEventListener('keydown', onKey);
          cleanups.push(() => window.removeEventListener('keydown', onKey));
        }

        const render = () => {
          mouse[0] += (targetMouse[0] - mouse[0]) * 0.04;
          mouse[1] += (targetMouse[1] - mouse[1]) * 0.04;
          gl.uniform1f(uTime, shaderTime());
          gl.uniform2f(uMouse, mouse[0], mouse[1]);
          gl.drawArrays(gl.TRIANGLES, 0, 6);
          rafId = requestAnimationFrame(render);
        };
        render();
      }
    }

    // ── Intersection Observer — scroll reveals ────────────────────
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    document.querySelectorAll('.reveal-up').forEach((el) => io.observe(el));
    cleanups.push(() => io.disconnect());

    // ── Word-flip width measurement (love ⇄ ἀγαπάω) ───────────────
    const flips = document.querySelectorAll<HTMLElement>('.word-flip');
    if (flips.length) {
      const measureFlips = () => {
        flips.forEach((el) => {
          const en = el.querySelector<HTMLElement>('.word-flip__en');
          const gr = el.querySelector<HTMLElement>('.word-flip__gr');
          if (!en || !gr) return;
          el.style.setProperty('--w-en', `${en.getBoundingClientRect().width}px`);
          el.style.setProperty('--w-gr', `${gr.getBoundingClientRect().width}px`);
        });
      };
      measureFlips();
      document.fonts?.ready.then(measureFlips);
      window.addEventListener('resize', measureFlips);
      cleanups.push(() => window.removeEventListener('resize', measureFlips));
    }

    // ── Smooth anchor scroll ──────────────────────────────────────
    const anchors = document.querySelectorAll('a[href^="#"]');
    const scrollHandlers = new Map<Element, (e: Event) => void>();
    anchors.forEach((a) => {
      const handler = (e: Event) => {
        const id = a.getAttribute('href');
        if (!id || id.length < 2) return;
        const target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - 12;
        window.scrollTo({ top, behavior: 'smooth' });
      };
      a.addEventListener('click', handler);
      scrollHandlers.set(a, handler);
    });
    cleanups.push(() => {
      anchors.forEach((a) => {
        const handler = scrollHandlers.get(a);
        if (handler) a.removeEventListener('click', handler);
      });
    });

    // ── CEO quote read-more ───────────────────────────────────────
    const readMoreLink = document.querySelector('.about__read-more') as HTMLAnchorElement | null;
    if (readMoreLink) {
      const fullText = document.querySelector('.about__full-text') as HTMLElement | null;
      const readMoreHandler = (e: Event) => {
        e.preventDefault();
        fullText?.classList.add('expanded');
        readMoreLink.remove();
      };
      readMoreLink.addEventListener('click', readMoreHandler);
      cleanups.push(() => readMoreLink.removeEventListener('click', readMoreHandler));
    }

    // ── Contact form ──────────────────────────────────────────────
    const form = document.getElementById('contact-form') as HTMLFormElement | null;
    if (form) {
      const submitHandler = (e: Event) => {
        e.preventDefault();
        const btn = form.querySelector('button') as HTMLButtonElement;
        const original = btn.textContent;
        btn.textContent = 'Sent ✓';
        btn.disabled = true;
        setTimeout(() => {
          if (original) btn.textContent = original;
          btn.disabled = false;
          form.reset();
        }, 2200);
      };
      form.addEventListener('submit', submitHandler);
      cleanups.push(() => form.removeEventListener('submit', submitHandler));
    }

    return () => {
      cleanups.forEach((fn) => fn());
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return null;
}
