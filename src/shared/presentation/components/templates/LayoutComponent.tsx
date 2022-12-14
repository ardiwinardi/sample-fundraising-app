import React from 'react';

type Props = {
  children: React.ReactNode;
};

export default function LayoutComponent(props: Props) {
  return (
    <>
      <div className="w-full lg:w-4/12 md:w-10/12 h-full mx-auto px-6 py-5 bg-white z-10">
        <div className="z-10 relative">
          {props.children}
          {/* <BackgroundComponent /> */}
        </div>
      </div>
    </>
  );
}
