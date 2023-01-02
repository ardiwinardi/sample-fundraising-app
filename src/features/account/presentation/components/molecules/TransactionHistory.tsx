import { AuthContext } from '@/features/auth/presentation/contexts/AuthContext';
import { useContext, useEffect } from 'react';
import { useGetDonationsByUserIdQuery } from '../../controller/donation.controller';
import TransactionCard from './TransactionCard';

export default function TransactionHistory() {
  const { user } = useContext(AuthContext);
  const donationListController = useGetDonationsByUserIdQuery(user?.uid ?? '');

  useEffect(() => {
    donationListController.refetch();
  }, []);

  return (
    <div className="flex flex-col space-y-3 max-h-[400px] px-2 pb-3 overflow-auto">
      {donationListController.data &&
        donationListController.data.map((donation, index) => (
          <TransactionCard donation={donation} key={index} />
        ))}

      {donationListController.data &&
        donationListController.data.length === 0 && <p>Donation is empty</p>}
    </div>
  );
}
