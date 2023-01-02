import { Donation } from '@/features/account/domain/donation.entity';
import Card from '@/shared/presentation/components/atoms/Card';
import { toChatTimeString } from '@/shared/presentation/utils/date.util';
import { numberToCurrency } from '@/shared/presentation/utils/number.util';

type Props = {
  donation: Donation;
};
export default function TransactionCard(props: Props) {
  const { donation } = props;
  return (
    <Card color="light">
      <div className="flex justify-between items-start text-sm">
        <div className="w-[70%] flex items-start">
          <div className="w-4 h-4">
            <svg
              className="w-4 h-4 text-primary"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                clipRule="evenodd"
              />
              <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
            </svg>
          </div>

          <div className="pl-1 -mt-[1px]">
            <h4 className="truncate font-bold">{donation.campaign?.title}</h4>
            <div className="text-primary/70">
              {toChatTimeString(donation.createdAt)}
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <h4>{numberToCurrency(donation.amount / 1000)}K</h4>
          <div className="font-bold text-primary">{donation.status}</div>
        </div>
      </div>
    </Card>
  );
}
