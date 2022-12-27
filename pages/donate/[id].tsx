import { campaignService } from '@/features/campaign/data/repositories/campaign.repository.impl';
import { Campaign } from '@/features/campaign/domain/entities/campaign.entity';
import ChooseAmount from '@/features/donation/presentation/components/organisms/ChooseAmount';
import PaymentMethod from '@/features/donation/presentation/components/organisms/PaymentMethod';
import BottomFixed from '@/features/home/presentation/components/molecules/BottomFixed';
import CampaignCard from '@/features/home/presentation/components/molecules/CampaignCard';
import { CustomPage } from '@/shared/interfaces/page.interface';
import Button from '@/shared/presentation/components/atoms/Button';
import SuccessPopup from '@/shared/presentation/components/atoms/SuccessPopup';
import Navbar from '@/shared/presentation/components/organisms/Navbar';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

type Props = {
  data: Campaign;
};

const DetailDonation = (props: Props) => {
  const [showSuccessModal, setShowMessageModal] = useState<boolean>(false);
  const campaign = props.data;
  const router = useRouter();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <div className="h-screen">
        <Navbar backUrl={`/campaign/${campaign.id}`} />

        <div className="flex flex-col space-y-6 mt-10">
          <CampaignCard campaign={campaign} />
          <PaymentMethod />
          <ChooseAmount />
        </div>
      </div>

      <BottomFixed>
        <Button
          heightType="sm"
          widthType="full"
          onClick={() => setShowMessageModal(true)}
        >
          Send Donation
        </Button>
      </BottomFixed>

      <SuccessPopup
        show={showSuccessModal}
        handleClose={() => {
          setShowMessageModal(false);
          router.push('/');
        }}
        message={'Donation Success!'}
      />
    </>
  );
};

(DetailDonation as CustomPage).usePrivateLayout = true;
export default DetailDonation;

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
