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
import useModal from '@/shared/presentation/hooks/useModal';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

const DetailDonation = () => {
  const [amount, setAmount] = useState<number>(500000);
  const { user } = useContext(AuthContext);
  const { toggleModal } = useModal('SUCCESS_POPUP');
  const router = useRouter();

  const getCampaignController = useGetCampaignByIdQuery(
    router.query.id as string
  );
  const [addDonation, result] = useAddDonationMutation();

  const campaign = getCampaignController.data;

  const handleDonate = async () => {
    const payload: DonateRequest = {
      userId: user?.uid as string,
      amount,
      campaignId: campaign?.id as string,
    };
    addDonation(payload);
  };

  useEffect(() => {
    if (result.isSuccess) {
      toggleModal();
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
          <ChooseAmount
            defaultValue={amount}
            handleChange={(value) => setAmount(value)}
          />
        </div>
      </div>

      <BottomFixed>
        <Button heightType="sm" widthType="full" onClick={() => handleDonate()}>
          Send Donation
        </Button>
      </BottomFixed>

      <SuccessPopup
        redirectPath={`/campaign/${campaign?.id}`}
        message={'Donation Success!'}
      />
    </>
  );
};

(DetailDonation as CustomPage).usePrivateLayout = true;
export default DetailDonation;
