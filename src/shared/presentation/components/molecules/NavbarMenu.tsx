import { AuthContext } from '@/features/auth/presentation/contexts/AuthContext';
import NavbarMenuPopup from '@/features/home/presentation/components/molecules/NavbarMenuPopup';
import Image from 'next/image';
import { useContext, useState } from 'react';

export default function NavbarMenu() {
  const { user } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="relative">
      {user && (
        <button
          onClick={() => setIsOpen((toggle) => !toggle)}
          className="flex items-center w-10 h-10"
        >
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
      <NavbarMenuPopup show={isOpen} handleClose={() => setIsOpen(false)} />
    </div>
  );
}
