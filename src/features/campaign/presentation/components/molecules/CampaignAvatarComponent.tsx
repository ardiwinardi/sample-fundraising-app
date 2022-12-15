import { Campaign } from '@/features/home/domain/entities/campaign.entity';
import AvatarComponent from '@/features/home/presentation/components/atomics/AvatarComponent';
import { numberToCurrency } from '@/shared/presentation/utils/number';
type Props = {
  campaign: Campaign;
};
export default function CampaignAvatarComponent(props: Props) {
  const { campaign } = props;
  return (
    <div className="flex flex-row justify-around">
      <div className="flex flex-col text-center">
        <AvatarComponent
          title="Target"
          icon={
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
          }
        />
        <h4 className="text-base font-semibold text-primary">
          {numberToCurrency(campaign.detail?.targetAmount ?? 0)}
        </h4>
      </div>

      <div className="flex flex-col text-center">
        <AvatarComponent
          title="Collected"
          icon={
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
          }
        />
        <h4 className="text-base font-semibold text-primary">
          {numberToCurrency(campaign.detail?.collectedAmount ?? 0)}
        </h4>
      </div>

      <div className="flex flex-col text-center">
        <AvatarComponent
          title="Donor"
          icon={
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
          }
        />
        <h4 className="text-base font-semibold text-primary">
          {numberToCurrency(campaign.detail?.numberOfDonors ?? 0)}
        </h4>
      </div>
    </div>
  );
}
