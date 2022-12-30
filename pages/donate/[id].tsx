import { AuthContext } from '@/features/auth/presentation/contexts/AuthContext';
import { DonateRequest } from '@/features/campaign/data/campaign.request';
import {
  useAddDonationMutation,
  useGetCampaignByIdQuery,
} from '@/features/campaign/presentation/controllers/campaign.controller';
import ChooseAmount from '@/features/donation/presentation/components/organisms/ChooseAmount';
import PaymentMethod from '@/features/donation/presentation/components/organisms/PaymentMethod';
import BottomFixed from '@/features/home/presentation/components/molecules/BottomFixed';
import CampaignCard from '@/features/home/presentation/components/molecules/CampaignCard';
import { CustomPage } from '@/shared/interfaces/page.interface';
import Button from '@/shared/presentation/components/atoms/Button';
import SuccessPopup from '@/shared/presentation/components/atoms/SuccessPopup';
import Navbar from '@/shared/presentation/components/organisms/Navbar';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

const DetailDonation = () => {
  const { user } = useContext(AuthContext);
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);
  const router = useRouter();

  const getByIdController = useGetCampaignByIdQuery(router.query.id as string);
  const [addDonation, result] = useAddDonationMutation();

  const campaign = getByIdController.data;

  const handleDonate = async () => {
    const payload: DonateRequest = {
      userId: user?.uid as string,
      amount: 2000,
      campaignId: campaign?.id as string,
    };
    addDonation(payload);
  };

  useEffect(() => {
    if (result.isSuccess) {
      setShowSuccessModal(true);
    }
    if (result.isError) {
      toast.error('Donation is failed');
    }
  }, [result.isSuccess, result.isError]);

  return (
    <>
      <div className="h-screen">
        <Navbar backUrl={`/campaign/${campaign?.id}`} />

        <div className="flex flex-col space-y-6 mt-10">
          {campaign && <CampaignCard campaign={campaign} />}
          <PaymentMethod />
          <ChooseAmount />
        </div>
      </div>

      <BottomFixed>
        <Button heightType="sm" widthType="full" onClick={() => handleDonate()}>
          Send Donation
        </Button>
      </BottomFixed>

      <SuccessPopup
        show={showSuccessModal}
        handleClose={() => {
          setShowSuccessModal(false);
          router.push('/');
        }}
        message={'Donation Success!'}
      />
    </>
  );
};

(DetailDonation as CustomPage).usePrivateLayout = true;
export default DetailDonation;
