import ChooseAmountComponent from '@/features/donation/presentation/components/organisms/ChooseAmountComponent';
import PaymentMethodComponent from '@/features/donation/presentation/components/organisms/PaymentMethodComponent';
import { campaigns } from '@/features/home/data/constants/campaign.constant';
import { Campaign } from '@/features/home/domain/entities/campaign.entity';
import BottomFixedComponent from '@/features/home/presentation/components/molecules/BottomFixedComponent';
import CampaignCardComponent from '@/features/home/presentation/components/molecules/CampaignCardComponent';
import { CustomPage } from '@/shared/interfaces/page.interface';
import ButtonComponent from '@/shared/presentation/components/atomics/ButtonComponent';
import NavbarComponent from '@/shared/presentation/components/molecules/NavbarComponent';
import SuccessPopupComponent from '@/shared/presentation/components/molecules/SuccessPopupComponent';
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
        <NavbarComponent backUrl={`/campaign/${campaign.id}`} />

        <div className="flex flex-col space-y-6 mt-10">
          <CampaignCardComponent campaign={campaign} />
          <PaymentMethodComponent />
          <ChooseAmountComponent />
        </div>
      </div>

      <BottomFixedComponent>
        <ButtonComponent
          heightType="sm"
          widthType="full"
          onClick={() => setShowMessageModal(true)}
        >
          Send Donation
        </ButtonComponent>
      </BottomFixedComponent>

      <SuccessPopupComponent
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
  const campaign = campaigns.find((campaign) => campaign.id == id);

  return {
    props: {
      data: campaign,
    },
  };
};
