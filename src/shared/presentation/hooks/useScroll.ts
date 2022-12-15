import { useEffect, useRef, useState } from 'react';

type ScrollDirection = 'up' | 'down';
export const useScroll = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>('up');
  const lastScrollTop = useRef(0);

  useEffect(() => {
    const updatePosition = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop.current) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      lastScrollTop.current = scrollTop;
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', updatePosition);

    updatePosition();

    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  return { scrollDirection, scrollPosition };
};
