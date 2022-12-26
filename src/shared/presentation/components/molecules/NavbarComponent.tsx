import { AuthContext } from '@/features/auth/presentation/contexts/AuthContext';
import NavbarMenuPopupComponent from '@/features/home/presentation/components/molecules/NavbarMenuPopupComponent';
import Image from 'next/image';
import Link from 'next/link';
import { useContext, useState } from 'react';
type Props = {
  backUrl?: string;
};
export default function NavbarComponent(props: Props) {
  const { user } = useContext(AuthContext);
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
          {user && (
            <button onClick={() => setIsOpen((toggle) => !toggle)}>
              <Image
                className="w-10 h-10 rounded-full"
                src={user.photoURL ?? ''}
                width={120}
                height={120}
                alt=""
              />
              <span className="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
            </button>
          )}

          {!user && (
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
          )}

          <NavbarMenuPopupComponent
            show={isOpen}
            handleClose={() => setIsOpen(false)}
          />
        </div>
      </div>
    </>
  );
}
