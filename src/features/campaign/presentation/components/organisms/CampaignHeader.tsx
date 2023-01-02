import { Campaign } from '@/features/campaign/domain/campaign.entity';
import Avatar from '@/shared/presentation/components/atoms/Avatar';
import Button from '@/shared/presentation/components/atoms/Button';
import { useMemo } from 'react';
import CampaignInfo from '../molecules/CampaignInfo';

type Props = {
  campaign: Campaign;
  handleDonate: () => void;
};
export default function CampaignHeader(props: Props) {
  const { campaign, handleDonate } = props;

  const percentAchived = useMemo(
    () =>
      Math.ceil(
        ((campaign.detail?.collectedAmount ?? 0) /
          (campaign.detail?.targetAmount ?? 0)) *
          100
      ),
    [campaign.detail]
  );

  return (
    <div className="flex flex-col space-y-3 border-b-2 border-primary/30 pb-5">
      <div className="flex flex-row justify-between items-center w-full">
        <Avatar size="md">
          <span className="text-3xl font-extrabold text-primary w-full text-center">
            {percentAchived}%
          </span>
        </Avatar>
        <Button onClick={() => handleDonate()} heightType="md" widthType="max">
          Donate Now
        </Button>
      </div>
      <h2 className="text-xl font-bold truncate">{campaign.title}</h2>

      <CampaignInfo campaign={campaign} />
    </div>
  );
}
