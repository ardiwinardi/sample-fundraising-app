import { AuthContext } from '@/features/auth/presentation/contexts/AuthContext';
import { BasePopupProps } from '@/shared/interfaces/popup.interface';
import PopupMenu from '@/shared/presentation/components/atoms/PopupMenu';
import useModal from '@/shared/presentation/hooks/useModal';
import Link from 'next/link';
import { ReactNode, useContext, useMemo } from 'react';

type MenuProps = {
  title: string;
  icon: ReactNode;
  action?: () => void;
  path?: string;
};
type Props = BasePopupProps;

export default function NavbarMenuPopup(props: Props) {
  const { signOut, user } = useContext(AuthContext);

  const { toggleModal } = useModal('LOGIN_POPUP');

  const handleSignOut = () => {
    signOut();
    props.handleClose();
  };

  const authMenu = useMemo(
    (): MenuProps[] => [
      {
        title: 'Account',
        icon: (
          <svg
            className="w-5 h-5 inline mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            />
          </svg>
        ),
        path: '/account',
      },
      {
        title: 'Logout',
        icon: (
          <svg
            className="w-5 h-5 inline mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
              clipRule="evenodd"
            />
          </svg>
        ),
        action: handleSignOut,
      },
    ],
    [handleSignOut]
  );

  const guestMenu = useMemo(
    (): MenuProps[] => [
      {
        title: 'Login',
        icon: (
          <svg
            className="w-5 h-5 inline mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            />
          </svg>
        ),
        action: () => {
          props.handleClose();
          toggleModal();
        },
      },
    ],
    []
  );

  return (
    <PopupMenu
      id={'navbar-menu'}
      show={props.show}
      handleClose={props.handleClose}
    >
      <div className="text-sm">
        <ul className="flex flex-col space-y-3 text-primary">
          {user &&
            authMenu.map((menu, index) => (
              <li key={index}>
                {menu.path && (
                  <Link
                    href={menu.path}
                    className="flex flex-row items-center p-1 active:text-primary/50"
                  >
                    {menu.icon}
                    <span>{menu.title}</span>
                  </Link>
                )}

                {menu.action && (
                  <div
                    className="flex flex-row items-center p-1 active:text-primary/50 cursor-pointer"
                    onClick={() => {
                      (menu.action as () => void)();
                    }}
                  >
                    {menu.icon}
                    <span>{menu.title}</span>
                  </div>
                )}
              </li>
            ))}

          {!user &&
            guestMenu.map((menu, index) => (
              <li key={index}>
                {menu.path && (
                  <Link
                    href={menu.path}
                    className="flex flex-row items-center p-1 active:text-primary/50"
                  >
                    {menu.icon}
                    <span>{menu.title}</span>
                  </Link>
                )}

                {menu.action && (
                  <div
                    className="flex flex-row items-center p-1 active:text-primary/50 cursor-pointer"
                    onClick={() => {
                      (menu.action as () => void)();
                    }}
                  >
                    {menu.icon}
                    <span>{menu.title}</span>
                  </div>
                )}
              </li>
            ))}
        </ul>
      </div>
    </PopupMenu>
  );
}
