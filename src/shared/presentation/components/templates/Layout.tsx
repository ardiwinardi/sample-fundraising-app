import LoginPopup from '@/features/auth/presentation/components/templates/LoginPopup';
import React, { useEffect } from 'react';

type Props = {
  children: React.ReactNode;
};

export default function Layout(props: Props) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <div className="container h-full mx-auto px-6 py-5 bg-white z-10">
        <div className="z-10 relative">
          {props.children}
          <LoginPopup />
        </div>
      </div>
    </>
  );
}
