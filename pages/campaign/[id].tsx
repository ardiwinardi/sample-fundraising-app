import LoginPopupComponent from '@/features/auth/presentation/components/templates/LoginPopupComponent';
import { AuthContext } from '@/features/auth/presentation/contexts/AuthContext';
import CampaignDetailComponent from '@/features/campaign/presentation/components/organisms/CampaignDetailComponent';
import CampaignHeaderComponent from '@/features/campaign/presentation/components/organisms/CampaignHeaderComponent';
import { campaigns } from '@/features/home/data/constants/campaign.constant';
import { Campaign } from '@/features/home/domain/entities/campaign.entity';
import BottomFixedComponent from '@/features/home/presentation/components/molecules/BottomFixedComponent';
import ButtonComponent from '@/shared/presentation/components/atomics/ButtonComponent';
import NavbarComponent from '@/shared/presentation/components/molecules/NavbarComponent';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';

type Props = {
  data: Campaign;
};
export default function DetailCampaign(props: Props) {
  const { user } = useContext(AuthContext);
  const [showLoginPopup, setShowLoginPopup] = useState<boolean>(false);
  const campaign = props.data;
  const router = useRouter();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleDonate = () => {
    if (!user) setShowLoginPopup(true);
    else router.push(`/donate/${props.data.id}`);
  };

  return (
    <>
      <div className="flex flex-col space-y-5 h-full bg-white pb-20">
        <NavbarComponent backUrl="/" />
        <CampaignHeaderComponent
          campaign={campaign}
          handleDonate={handleDonate}
        />
        <CampaignDetailComponent campaign={campaign} />
      </div>

      <BottomFixedComponent showOnScrollPosition={200}>
        <ButtonComponent
          heightType="sm"
          widthType="full"
          onClick={() => handleDonate()}
        >
          Donate Now
        </ButtonComponent>
      </BottomFixedComponent>

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
