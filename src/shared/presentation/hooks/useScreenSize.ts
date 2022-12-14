import { useEffect, useRef, useState } from 'react';

export default function useScreenSize() {
  const mountedRef = useRef(false);
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    mountedRef.current = true;

    const mql = window.matchMedia('(min-width: 1024px)');
    setIsLargeScreen(mql.matches);
    mql.addEventListener('change', (e) => {
      if (mountedRef.current) {
        setIsLargeScreen(e.matches);
      }
    });

    return () => {
      mountedRef.current = false;
    };
  }, []);

  return {
    isLargeScreen,
  };
}
