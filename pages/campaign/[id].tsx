import CampaignAvatarComponent from '@/features/campaign/presentation/components/molecules/CampaignAvatarComponent';
import { campaigns } from '@/features/home/data/constants/campaign.constant';
import { Campaign } from '@/features/home/domain/entities/campaign.entity';
import SlideComponent from '@/features/home/presentation/components/organisms/SlideComponent';
import ButtonComponent from '@/shared/presentation/components/atomics/ButtonComponent';
import TitleComponent from '@/shared/presentation/components/atomics/TitleComponent';
import { useScroll } from '@/shared/presentation/hooks/useScroll';
import { GetServerSideProps } from 'next';
import Link from 'next/link';

type Props = {
  data: Campaign;
};
export default function DetailCampaign(props: Props) {
  const { scrollPosition } = useScroll();
  const campaign = props.data;
  return (
    <>
      <div className="h-full bg-white pb-20">
        <div className="flex justify-between">
          <Link href={`/`} className="active:bg-gray-100">
            <svg
              className="w-7 h-7 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </Link>

          <button>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-col space-y-4 mt-3">
          <div className="flex flex-row justify-between items-center w-full">
            <div className="flex flex-col items-center space-y-1 relative z-10 p-1 rounded-full active:bg-white snap-center snap-always">
              <div className="inline-flex overflow-hidden relative justify-center items-center w-36 h-36 bg-primary/20 rounded-full"></div>
            </div>
            <div>
              <Link href={`/donate/${campaign.id}`}>
                <ButtonComponent widthType="max">Donate</ButtonComponent>
              </Link>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold truncate">{campaign.title}</h2>
          </div>
          <CampaignAvatarComponent campaign={campaign} />

          <div className="pt-5">
            <TitleComponent>Story</TitleComponent>
            <p className="text-xs mt-3 leading-5">{campaign.story}</p>
            <div className="text-xs mt-2">
              category:{' '}
              <strong className="text-primary">{campaign.category}</strong>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-5 pt-5">
          <TitleComponent>Galery</TitleComponent>
          <div className="my-5">
            <SlideComponent />
          </div>
        </div>

        <div className="py-5">
          <TitleComponent>Description</TitleComponent>
          <p className="text-xs mt-3 leading-5">{campaign.description}</p>
        </div>
      </div>
      {scrollPosition > 200 && (
        <div className="w-full md:w-6/12 lg:w-4/12 py-3 px-5 -mx-6 bg-white fixed bottom-0 flex justify-center shadow-[0px_-2px_4px_0px_#efeeee] z-30">
          <Link href={`/donate/${campaign.id}`} className="w-full">
            <ButtonComponent widthType="full">Donate</ButtonComponent>
          </Link>
        </div>
      )}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const campaign = campaigns.find((campaign) => campaign.id == id);

  return {
    props: {
      data: campaign,
    },
  };
};
