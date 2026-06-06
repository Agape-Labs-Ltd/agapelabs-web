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
            float v = 0.0; float a = 0.5;
            for (int i = 0; i < 3; i++) { v += a * noise(p); p *= 2.1; a *= 0.5; }
            return v;
          }

          vec3 paper = vec3(1.0);
          vec3 warm  = vec3(0.973, 0.710, 0.200);
          vec3 blush = vec3(0.949, 0.518, 0.557);
          vec3 pink  = vec3(0.945, 0.471, 0.643);
          vec3 mauve = vec3(0.812, 0.510, 0.710);
          vec3 slate = vec3(0.565, 0.690, 0.761);
          vec3 teal  = vec3(0.384, 0.667, 0.729);

          void main() {
            vec2 uv = gl_FragCoord.xy / u_res.xy;
            float aspect = u_res.x / u_res.y;
            float t = u_time * 0.012;

            // Light organic warp — keeps blobs from being perfect circles
            // without letting a single colour dominate
            vec2 warp = (vec2(fbm(uv * 1.4 + t), fbm(uv * 1.4 + t + 3.7)) - 0.5) * 0.055;
            vec2 w = uv + warp + u_mouse * 0.012;

            // Each colour is anchored to a different edge / corner and drifts slowly.
            // Using position-based radial falloffs guarantees all colours stay visible.
            vec2 c1 = vec2(0.04,  0.42 + 0.06 * sin(t * 0.71));   // warm  — left
            vec2 c2 = vec2(0.90,  0.10 + 0.05 * cos(t * 0.83));   // blush — top-right
            vec2 c3 = vec2(0.94,  0.65 + 0.06 * sin(t * 0.61));   // pink  — right-lower
            vec2 c4 = vec2(0.62 + 0.05 * sin(t * 0.53), 0.96);    // mauve — bottom-right
            vec2 c5 = vec2(0.24 + 0.05 * cos(t * 0.67), 0.96);    // slate — bottom-left
            vec2 c6 = vec2(0.54 + 0.04 * sin(t * 0.79), 0.01);    // teal  — top-centre

            float rad = 0.62;
            float m1 = max(0.0, 1.0 - length((w - c1) * vec2(aspect, 1.0)) / rad);
            float m2 = max(0.0, 1.0 - length((w - c2) * vec2(aspect, 1.0)) / rad);
            float m3 = max(0.0, 1.0 - length((w - c3) * vec2(aspect, 1.0)) / rad);
            float m4 = max(0.0, 1.0 - length((w - c4) * vec2(aspect, 1.0)) / rad);
            float m5 = max(0.0, 1.0 - length((w - c5) * vec2(aspect, 1.0)) / rad);
            float m6 = max(0.0, 1.0 - length((w - c6) * vec2(aspect, 1.0)) / rad);

            // Squared falloff → softer, more diffuse edges
            m1 *= m1; m2 *= m2; m3 *= m3;
            m4 *= m4; m5 *= m5; m6 *= m6;

            vec3 col = paper;
            col = mix(col, warm,  m1 * 0.58);
            col = mix(col, blush, m2 * 0.58);
            col = mix(col, pink,  m3 * 0.58);
            col = mix(col, mauve, m4 * 0.58);
            col = mix(col, slate, m5 * 0.62);
            col = mix(col, teal,  m6 * 0.62);

            float g = (hash(gl_FragCoord.xy + u_time) - 0.5) * 0.010;
            col = clamp(col + g, 0.0, 1.0);

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

        const start = performance.now();
        const render = () => {
          const t = (performance.now() - start) / 1000;
          mouse[0] += (targetMouse[0] - mouse[0]) * 0.04;
          mouse[1] += (targetMouse[1] - mouse[1]) * 0.04;
          gl.uniform1f(uTime, t);
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
