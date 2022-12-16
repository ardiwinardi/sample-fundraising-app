import AccountResumeComponent from '@/features/account/presentation/components/organisms/AccountResumeComponent';
import TransactionListComponent from '@/features/account/presentation/components/organisms/TransactionListComponent';
import NavbarComponent from '@/shared/presentation/components/molecules/NavbarComponent';

import Image from 'next/image';

export default function Account() {
  return (
    <>
      <div className="flex flex-col space-y-7 h-full bg-white">
        <NavbarComponent backUrl="/" />

        <div className="flex flex-col space-y-5 items-center">
          <Image
            src="/logo.png"
            width={175}
            height={175}
            alt="profile"
            className="rounded-3xl bg-primary/50 p-2 justify-center"
          />
          <h2 className="text-4xl font-bold text-primary truncate w-[70%]">
            Ahmad Sodikin bin Surya
          </h2>
        </div>

        <AccountResumeComponent />
        <TransactionListComponent />
      </div>
    </>
  );
}
