import { AuthContext } from '@/features/auth/presentation/contexts/AuthContext';
import { numberToCurrency } from '@/shared/presentation/utils/number.util';
import { useContext } from 'react';
import { useGetDonationsByUserIdQuery } from '../../controller/donation.controller';

export default function AccountResume() {
  const { user } = useContext(AuthContext);

  const donationListController = useGetDonationsByUserIdQuery(user?.uid ?? '');
  const donations = donationListController.data ?? [];

  return (
    <div className="grid grid-cols-3 divide-x text-center">
      <div className="flex flex-col">
        <div className="text-xs text-gray-400">Transactions</div>
        <div className="text-xl font-bold text-primary">
          {numberToCurrency(donations.reduce((a, b) => a + b.amount, 0) / 1000)}
          K
        </div>
      </div>
      <div className="flex flex-col pl-3">
        <div className="text-xs text-gray-400">Campaigns</div>
        <div className="text-xl font-bold text-primary">
          {new Set(donations.map((donation) => donation.campaign?.id)).size}
        </div>
      </div>
      <div className="flex flex-col pl-3">
        <div className="text-xs text-gray-400">Balance</div>
        <div className="text-xl font-bold text-primary">
          {numberToCurrency(0)}
        </div>
      </div>
    </div>
  );
}
