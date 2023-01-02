import { AuthContext } from '@/features/auth/presentation/contexts/AuthContext';
import { useGetCampaignByIdQuery } from '@/features/campaign/presentation/controllers/campaign.controller';
import { CustomPage } from '@/shared/interfaces/page.interface';
import Button from '@/shared/presentation/components/atoms/Button';
import Navbar from '@/shared/presentation/components/organisms/Navbar';
import useModal from '@/shared/presentation/hooks/useModal';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';

const CampaignHeader = dynamic(
  () =>
    import(
      '@/features/campaign/presentation/components/organisms/CampaignHeader'
    ),
  {
    ssr: false,
  }
);

const CampaignDetail = dynamic(
  () =>
    import(
      '@/features/campaign/presentation/components/organisms/CampaignDetail'
    ),
  {
    ssr: false,
  }
);

const BottomFixed = dynamic(
  () => import('@/features/home/presentation/components/molecules/BottomFixed'),
  {
    ssr: false,
  }
);

const DetailCampaign = () => {
  const { user } = useContext(AuthContext);
  const { toggleModal } = useModal('LOGIN_POPUP');
  const router = useRouter();

  const getCampaignController = useGetCampaignByIdQuery(
    router.query.id as string
  );
  const campaign = getCampaignController.data;

  const handleDonate = () => {
    if (!user) toggleModal();
    else router.push(`/donate/${campaign?.id}`);
  };

  useEffect(() => {
    getCampaignController.refetch();
  }, []);

  return (
    <>
      <div className="flex flex-col space-y-5 h-full bg-white pb-20">
        <Navbar backUrl="/" />
        {campaign && (
          <>
            <CampaignHeader
              campaign={campaign}
              handleDonate={() => handleDonate()}
            />
            <CampaignDetail campaign={campaign} />
          </>
        )}
      </div>

      <BottomFixed showOnScrollPosition={200}>
        <Button heightType="sm" widthType="full" onClick={() => handleDonate()}>
          Donate Now
        </Button>
      </BottomFixed>
    </>
  );
};

(DetailCampaign as CustomPage).usePrivateLayout = true;
export default DetailCampaign;
