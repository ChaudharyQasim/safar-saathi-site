import { useEffect, useRef, useState } from 'react';

/** Adds the `in` class once the element scrolls into view (the CSS `.reveal` transition does the rest). */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add('in');
            io.disconnect();
          }
        });
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

/** Counts from 0 to `end` over 1.2 s, starting when the element is half visible. */
export function useCounter(end: number) {
  const ref = useRef<HTMLElement>(null);
  const [value, setValue] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        io.disconnect();
        let t0: number | null = null;
        const step = (t: number) => {
          if (t0 === null) t0 = t;
          const p = Math.min(1, (t - t0) / 1200);
          setValue(Math.round(end * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [end]);
  return { ref, value };
}

/** True once the page has scrolled past `offset` pixels (the nav turns solid). */
export function useScrolled(offset = 40) {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const onScroll = () => setOn(window.scrollY > offset);
    onScroll();
    addEventListener('scroll', onScroll, { passive: true });
    return () => removeEventListener('scroll', onScroll);
  }, [offset]);
  return on;
}
