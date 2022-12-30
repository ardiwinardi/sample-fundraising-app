import { AuthContext } from '@/features/auth/presentation/contexts/AuthContext';
import { campaignService } from '@/features/campaign/data/campaign.repository.impl';
import { Campaign } from '@/features/campaign/domain/campaign.entity';
import CampaignDetail from '@/features/campaign/presentation/components/organisms/CampaignDetail';
import CampaignHeader from '@/features/campaign/presentation/components/organisms/CampaignHeader';
import BottomFixed from '@/features/home/presentation/components/molecules/BottomFixed';
import Button from '@/shared/presentation/components/atoms/Button';
import Navbar from '@/shared/presentation/components/organisms/Navbar';
import useModal from '@/shared/presentation/hooks/useModal';
import { toLocalDateString } from '@/shared/presentation/utils/date.util';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useContext } from 'react';

type Props = {
  data: Campaign;
};
export default function DetailCampaign(props: Props) {
  const { user } = useContext(AuthContext);
  const { toggleModal } = useModal('LOGIN_POPUP');
  const campaign = props.data;
  const router = useRouter();

  const handleDonate = () => {
    if (!user) toggleModal();
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
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;

  try {
    const campaign = await campaignService.getById(id as string);

    return {
      props: {
        data: {
          id: campaign.id,
          title: campaign.title ?? '',
          story: '',
          description: campaign.description ?? '',
          category: campaign.category ?? '',
          detail: {
            targetAmount: campaign.detail?.targetAmount ?? 0,
            expiredAt: toLocalDateString(campaign.detail?.expiredAt ?? null),
            collectedAmount: campaign.detail?.collectedAmount ?? 0,
          },
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
