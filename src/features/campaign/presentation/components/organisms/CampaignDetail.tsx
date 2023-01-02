import { Campaign } from '@/features/campaign/domain/campaign.entity';
import { campaignSlides } from '@/features/home/data/constants/slide.constant';
import Slide from '@/shared/presentation/components/atoms/Slide';
import Title from '@/shared/presentation/components/atoms/Title';

type Props = {
  campaign: Campaign;
};

export default function CampaignDetail(props: Props) {
  const { campaign } = props;
  return (
    <article className="flex flex-col space-y-5">
      <div className="flex flex-col space-y-2">
        <Title>Story</Title>
        <p className="text-xs mt-3 leading-5">{campaign.story}</p>
        <div className="text-xs">
          category:{' '}
          <strong className="text-primary">{campaign.category}</strong>
        </div>
      </div>

      <div className="flex flex-col space-y-2">
        <Title>Galery</Title>
        <Slide slideList={campaignSlides} />
      </div>

      <div className="flex flex-col space-y-2">
        <Title>Description</Title>
        <p className="text-xs leading-5">{campaign.description}</p>
      </div>
    </article>
  );
}
