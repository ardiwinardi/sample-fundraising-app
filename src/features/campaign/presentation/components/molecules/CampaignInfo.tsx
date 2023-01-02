import { Campaign } from '@/features/campaign/domain/campaign.entity';
import Avatar from '@/shared/presentation/components/atoms/Avatar';
import { numberToCurrency } from '@/shared/presentation/utils/number.util';
type Props = {
  campaign: Campaign;
};
export default function CampaignInfo(props: Props) {
  const { campaign } = props;
  return (
    <div className="flex flex-row justify-around bg-primary/10 p-3 rounded-md">
      <div className="flex flex-col text-center">
        <Avatar title="Target">
          <svg
            className="w-9 h-9 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </Avatar>
        <h4 className="text-base font-semibold text-primary">
          {numberToCurrency(campaign.detail?.targetAmount ?? 0)}
        </h4>
      </div>

      <div className="flex flex-col text-center">
        <Avatar title="Collected">
          <svg
            className="w-9 h-9 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </Avatar>
        <h4 className="text-base font-semibold text-primary">
          {numberToCurrency(campaign.detail?.collectedAmount ?? 0)}
        </h4>
      </div>

      <div className="flex flex-col text-center">
        <Avatar title="Donor">
          <svg
            className="w-9 h-9 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </Avatar>
        <h4 className="text-base font-semibold text-primary">
          {numberToCurrency(campaign.detail?.numberOfDonors ?? 0)}
        </h4>
      </div>
    </div>
  );
}
