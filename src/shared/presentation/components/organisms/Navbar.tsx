import Link from 'next/link';
import NavbarMenu from '../molecules/NavbarMenu';
type Props = {
  backUrl?: string;
};
export default function Navbar(props: Props) {
  return (
    <>
      <nav className="flex justify-between items-start bg-primary text-white -mx-6 -mt-5 py-5 px-5">
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

        <NavbarMenu />
      </nav>
    </>
  );
}
