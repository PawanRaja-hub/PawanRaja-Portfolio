import { useState, useEffect } from 'react';

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = Math.round((window.scrollY / totalHeight) * 100);
      setProgress(Math.min(Math.max(scrolled, 0), 100));
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return progress;
}