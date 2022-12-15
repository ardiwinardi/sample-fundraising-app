import LoginPopupComponent from '@/features/auth/presentation/components/LoginPopupComponent';
import CampaignAvatarComponent from '@/features/campaign/presentation/components/molecules/CampaignAvatarComponent';
import { campaigns } from '@/features/home/data/constants/campaign.constant';
import { Campaign } from '@/features/home/domain/entities/campaign.entity';
import SlideComponent from '@/features/home/presentation/components/organisms/SlideComponent';
import ButtonComponent from '@/shared/presentation/components/atomics/ButtonComponent';
import TitleComponent from '@/shared/presentation/components/atomics/TitleComponent';
import NavbarComponent from '@/shared/presentation/components/molecules/NavbarComponent';
import { useScroll } from '@/shared/presentation/hooks/useScroll';
import classNames from 'classnames';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type Props = {
  data: Campaign;
};
export default function DetailCampaign(props: Props) {
  const [showLoginPopup, setShowLoginPopup] = useState<boolean>(false);

  const { scrollPosition } = useScroll();
  const campaign = props.data;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const percentAchived = Math.ceil(
    ((campaign.detail?.collectedAmount ?? 0) /
      (campaign.detail?.targetAmount ?? 0)) *
      100
  );

  return (
    <>
      <div className="h-full bg-white pb-20">
        <NavbarComponent backUrl="/" />

        <div className="flex flex-col space-y-4 mt-3">
          <div className="flex flex-row justify-between items-center w-full">
            <div className="flex flex-col items-center space-y-1 relative z-10 p-1 rounded-full active:bg-white snap-center snap-always">
              <div className="inline-flex overflow-hidden relative justify-center items-center w-36 h-36 bg-primary/20 rounded-full">
                <span className="text-4xl font-extrabold text-primary">
                  {percentAchived}%
                </span>
              </div>
            </div>
            <div>
              <button onClick={() => setShowLoginPopup(true)}>
                <ButtonComponent widthType="max">Donate Now</ButtonComponent>
              </button>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold truncate">{campaign.title}</h2>
          </div>
          <CampaignAvatarComponent campaign={campaign} />

          <div className="pt-5 border-t-2 border-primary/5">
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
      <div
        className={classNames(
          'w-full md:w-10/12 lg:w-4/12 py-3 px-5 -mx-6 bg-white fixed flex justify-center shadow-[0px_-2px_4px_0px_#efeeee] z-30',
          'transition-all duration-200',
          {
            'bottom-0': scrollPosition > 200,
            '-bottom-full': !(scrollPosition > 200),
          }
        )}
      >
        <Link href={`/donate/${campaign.id}`} className="w-full">
          <ButtonComponent widthType="full">Donate Now</ButtonComponent>
        </Link>
      </div>

      <LoginPopupComponent
        show={showLoginPopup}
        handleClose={() => setShowLoginPopup(false)}
      />
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
