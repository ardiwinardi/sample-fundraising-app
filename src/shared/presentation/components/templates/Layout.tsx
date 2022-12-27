import React from 'react';

type Props = {
  children: React.ReactNode;
};

export default function Layout(props: Props) {
  return (
    <>
      <div className="container h-full mx-auto px-6 py-5 bg-white z-10">
        <div className="z-10 relative">{props.children}</div>
      </div>
    </>
  );
}
