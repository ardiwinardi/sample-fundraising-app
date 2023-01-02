import dynamic from 'next/dynamic';
import React, { useEffect } from 'react';

const LoginPopup = dynamic(
  () => import('@/features/auth/presentation/components/templates/LoginPopup'),
  {
    ssr: false,
  }
);

type Props = {
  children: React.ReactNode;
};

export default function Layout(props: Props) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <div className="container h-full min-h-screen mx-auto px-6 py-5 bg-white z-10">
        <div className="z-10 relative">
          {props.children}
          <LoginPopup />
        </div>
      </div>
    </>
  );
}
