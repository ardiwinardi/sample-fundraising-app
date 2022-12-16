import Image from 'next/image';
import { useState } from 'react';
import NavbarMenuPopupComponent from './NavbarMenuPopupComponent';

export default function HomeNavbarComponent() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="flex flex-row justify-between items-start">
      <div>
        {/* <h2 className="text-xl font-semibold text-white">Hello,</h2>
        <h2 className="text-4xl font-bold text-white">Ahmad</h2> */}
        <div className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            width={35}
            height={35}
            alt="logo"
            className="inline rounded-full bg-primary/10 p-1"
          />
          <h3 className="text-xl font-bold text-white tracking-tight">
            Charity App
          </h3>
        </div>{' '}
      </div>
      <div className="relative">
        <button
          className="active:bg-white/50 rounded-full p-1 -mr-1"
          onClick={() => setIsOpen((toggle) => !toggle)}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </button>
        <NavbarMenuPopupComponent
          show={isOpen}
          handleClose={() => setIsOpen(false)}
        />
      </div>
    </div>
  );
}
