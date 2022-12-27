import { numberToCurrency } from '@/shared/presentation/utils/number.util';

export default function AccountResume() {
  return (
    <div className="grid grid-cols-3 divide-x text-center">
      <div className="flex flex-col">
        <div className="text-xs text-gray-400">Transactions</div>
        <div className="text-xl font-bold text-primary">
          {numberToCurrency(54500000 / 1000)}K
        </div>
      </div>
      <div className="flex flex-col pl-3">
        <div className="text-xs text-gray-400">Campaigns</div>
        <div className="text-xl font-bold text-primary">25</div>
      </div>
      <div className="flex flex-col pl-3">
        <div className="text-xs text-gray-400">Balance</div>
        <div className="text-xl font-bold text-primary">
          {numberToCurrency(4500000 / 1000)}K
        </div>
      </div>
    </div>
  );
}
