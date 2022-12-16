import NavbarMenuPopupComponent from '@/features/home/presentation/components/molecules/NavbarMenuPopupComponent';
import Link from 'next/link';
import { useState } from 'react';
type Props = {
  backUrl?: string;
};
export default function NavbarComponent(props: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div className="flex justify-between items-start bg-primary text-white -mx-6 -mt-5 py-5 px-5">
        <Link
          href={props.backUrl ?? '/'}
          className="active:bg-white/50 rounded-full p-1"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </Link>

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
    </>
  );
}
