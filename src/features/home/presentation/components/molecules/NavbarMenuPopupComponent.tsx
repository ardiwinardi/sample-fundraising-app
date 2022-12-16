import { BasePopupProps } from '@/shared/interfaces/popup.interface';
import PopupMenuComponent from '@/shared/presentation/components/molecules/PopupMenuComponent';
import Link from 'next/link';

type Props = BasePopupProps;

export default function NavbarMenuPopupComponent(props: Props) {
  return (
    <PopupMenuComponent
      id={'navbar-menu'}
      show={props.show}
      handleClose={props.handleClose}
    >
      <div className="text-sm">
        <ul className="flex flex-col space-y-3 text-primary">
          <li>
            <Link
              href="/account"
              className="flex flex-row items-center p-1 active:text-primary/50"
            >
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
              <span>Account</span>
            </Link>
          </li>
          <li className="flex flex-row items-center cursor-pointer p-1 active:text-primary/50">
            <svg
              className="w-5 h-5 inline mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            <span>Donations</span>
          </li>
          <li className="flex flex-row items-center cursor-pointer p-1 active:text-primary/50">
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
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </PopupMenuComponent>
  );
}
