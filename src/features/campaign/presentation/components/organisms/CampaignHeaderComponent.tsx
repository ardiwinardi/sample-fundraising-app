import { Campaign } from '@/features/home/domain/entities/campaign.entity';
import AvatarComponent from '@/shared/presentation/components/atomics/AvatarComponent';
import ButtonComponent from '@/shared/presentation/components/atomics/ButtonComponent';
import CampaignInfoComponent from '../molecules/CampaignInfoComponent';

type Props = {
  campaign: Campaign;
  handleDonate: () => void;
};
export default function CampaignHeaderComponent(props: Props) {
  const { campaign, handleDonate } = props;
  const percentAchived = Math.ceil(
    ((campaign.detail?.collectedAmount ?? 0) /
      (campaign.detail?.targetAmount ?? 0)) *
      100
  );

  return (
    <div className="flex flex-col space-y-3 border-b-2 border-primary/30 pb-5">
      <div className="flex flex-row justify-between items-center w-full">
        <AvatarComponent size="md">
          <span className="text-3xl font-extrabold text-primary w-full text-center">
            {percentAchived}%
          </span>
        </AvatarComponent>
        <ButtonComponent
          onClick={() => handleDonate()}
          heightType="md"
          widthType="max"
        >
          Donate Now
        </ButtonComponent>
      </div>
      <h2 className="text-xl font-bold truncate">{campaign.title}</h2>

      <CampaignInfoComponent campaign={campaign} />
    </div>
  );
}
