import LoginPopup from '@/features/auth/presentation/components/templates/LoginPopup';
import { AuthContext } from '@/features/auth/presentation/contexts/AuthContext';
import { campaignService } from '@/features/campaign/data/repositories/campaign.repository.impl';
import { Campaign } from '@/features/campaign/domain/entities/campaign.entity';
import CampaignDetail from '@/features/campaign/presentation/components/organisms/CampaignDetail';
import CampaignHeader from '@/features/campaign/presentation/components/organisms/CampaignHeader';
import BottomFixed from '@/features/home/presentation/components/molecules/BottomFixed';
import Button from '@/shared/presentation/components/atoms/Button';
import Navbar from '@/shared/presentation/components/organisms/Navbar';
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
        <Navbar backUrl="/" />
        <CampaignHeader
          campaign={campaign}
          handleDonate={() => handleDonate()}
        />
        <CampaignDetail campaign={campaign} />
      </div>

      <BottomFixed showOnScrollPosition={200}>
        <Button heightType="sm" widthType="full" onClick={() => handleDonate()}>
          Donate Now
        </Button>
      </BottomFixed>

      <LoginPopup
        show={showLoginPopup}
        handleClose={() => setShowLoginPopup(false)}
      />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;

  try {
    const data = await campaignService.getById(id as string);

    return {
      props: {
        data: {
          id: data.id,
          title: data.title ?? '',
          story: '',
          description: data.description ?? '',
          category: data.category ?? '',
        },
      },
    };
  } catch (e) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
};
