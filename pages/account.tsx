import { AuthContext } from '@/features/auth/presentation/contexts/AuthContext';
import { CustomPage } from '@/shared/interfaces/page.interface';
import Navbar from '@/shared/presentation/components/organisms/Navbar';
import dynamic from 'next/dynamic';

import Image from 'next/image';
import { useContext } from 'react';

const AccountResume = dynamic(
  () =>
    import(
      '@/features/account/presentation/components/organisms/AccountResume'
    ),
  {
    ssr: false,
  }
);

const TransactionList = dynamic(
  () =>
    import(
      '@/features/account/presentation/components/organisms/TransactionList'
    ),
  {
    ssr: false,
  }
);

const Account: CustomPage = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <div className="flex flex-col space-y-7 h-full bg-white">
        <Navbar backUrl="/" />
        <figure className="flex flex-col space-y-5 items-center">
          <Image
            src={user?.photoURL ?? ''}
            width={175}
            height={175}
            alt="profile"
            className="rounded-3xl bg-primary/50 p-2 justify-center"
          />
          <h2 className="text-4xl font-bold text-primary truncate w-[70%]">
            {user?.displayName}
          </h2>
        </figure>

        <AccountResume />
        <TransactionList />
      </div>
    </>
  );
};

Account.usePrivateLayout = true;
export default Account;
