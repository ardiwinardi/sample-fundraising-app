import { DonateRequest } from '@/features/account/data/donation.request';
import { useAddDonationMutation } from '@/features/account/presentation/controller/donation.controller';
import { AuthContext } from '@/features/auth/presentation/contexts/AuthContext';
import { useGetCampaignByIdQuery } from '@/features/campaign/presentation/controllers/campaign.controller';
import { CustomPage } from '@/shared/interfaces/page.interface';
import Button from '@/shared/presentation/components/atoms/Button';
import Navbar from '@/shared/presentation/components/organisms/Navbar';
import useModal from '@/shared/presentation/hooks/useModal';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

const CampaignCard = dynamic(
  () =>
    import('@/features/home/presentation/components/molecules/CampaignCard'),
  {
    ssr: false,
  }
);

const PaymentMethod = dynamic(
  () =>
    import(
      '@/features/donation/presentation/components/organisms/PaymentMethod'
    ),
  {
    ssr: false,
  }
);

const ChooseAmount = dynamic(
  () =>
    import(
      '@/features/donation/presentation/components/organisms/ChooseAmount'
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

const SuccessPopup = dynamic(
  () => import('@/shared/presentation/components/atoms/SuccessPopup'),
  {
    ssr: false,
  }
);

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

  useEffect(() => {
    getCampaignController.refetch();
  }, []);

  return (
    <>
      <div className="h-screen">
        <Navbar backUrl={`/campaign/${campaign?.id}`} />

        <section className="flex flex-col space-y-6 mt-10">
          {campaign && <CampaignCard campaign={campaign} />}
          <PaymentMethod />
          <ChooseAmount
            defaultValue={amount}
            handleChange={(value) => setAmount(value)}
          />
        </section>
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
