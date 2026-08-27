import { useAnimation } from 'framer-motion';
import { useEffect, useRef, useCallback } from 'react';

export function useScrollReveal() {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
            },
          });
        }
      },
      {
        threshold: 0.1,
        rootMargin: '-50px',
      }
    );

    observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [controls]);

  return { ref, controls };
}

export function useStaggeredReveal() {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current || ref.current.children.length === 0) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({
            opacity: 1,
            y: 0,
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.2,
            },
          });
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [controls]);

  return { ref, controls };
}