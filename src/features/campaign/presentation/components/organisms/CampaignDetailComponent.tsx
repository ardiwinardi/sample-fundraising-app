import { campaignSlides } from '@/features/home/data/constants/slide.constant';
import { Campaign } from '@/features/home/domain/entities/campaign.entity';
import TitleComponent from '@/shared/presentation/components/atomics/TitleComponent';
import SlideComponent from '@/shared/presentation/components/molecules/SlideComponent';

type Props = {
  campaign: Campaign;
};

export default function CampaignDetailComponent(props: Props) {
  const { campaign } = props;
  return (
    <div className="flex flex-col space-y-5">
      <div className="flex flex-col space-y-2">
        <TitleComponent>Story</TitleComponent>
        <p className="text-xs mt-3 leading-5">{campaign.story}</p>
        <div className="text-xs">
          category:{' '}
          <strong className="text-primary">{campaign.category}</strong>
        </div>
      </div>

      <div className="flex flex-col space-y-2">
        <TitleComponent>Galery</TitleComponent>
        <SlideComponent slideList={campaignSlides} />
      </div>

      <div className="flex flex-col space-y-2">
        <TitleComponent>Description</TitleComponent>
        <p className="text-xs leading-5">{campaign.description}</p>
      </div>
    </div>
  );
}
