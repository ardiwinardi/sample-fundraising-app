import NavbarMenu from '@/shared/presentation/components/molecules/NavbarMenu';
import Image from 'next/image';

export default function HomeNavbar() {
  return (
    <nav className="flex flex-row justify-between items-start">
      <div>
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
      <NavbarMenu />
    </nav>
  );
}
