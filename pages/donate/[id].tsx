import PaymentMethodCardComponent from '@/features/donation/presentation/components/molecules/PaymentMethodCardComponent';
import { campaigns } from '@/features/home/data/constants/campaign.constant';
import { Campaign } from '@/features/home/domain/entities/campaign.entity';
import CampaignCardComponent from '@/features/home/presentation/components/molecules/CampaignCardComponent';
import ButtonComponent from '@/shared/presentation/components/atomics/ButtonComponent';
import RangeComponent from '@/shared/presentation/components/atomics/RangeComponent';
import TitleComponent from '@/shared/presentation/components/atomics/TitleComponent';
import NavbarComponent from '@/shared/presentation/components/molecules/NavbarComponent';
import { GetServerSideProps } from 'next';
import { useEffect } from 'react';

type Props = {
  data: Campaign;
};
export default function DetailDonation(props: Props) {
  const campaign = props.data;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <div className="h-screen bg-white pb-20">
        <NavbarComponent backUrl={`/campaign/${campaign.id}`} />

        <div className="flex flex-col space-y-6 h-full w-full bg-white mt-10">
          <CampaignCardComponent campaign={campaign} />

          <div className="flex flex-col">
            <TitleComponent>Payment Method</TitleComponent>
            <div className="mt-3">
              <PaymentMethodCardComponent />
            </div>
          </div>

          <TitleComponent>Choose the Amount</TitleComponent>
          <RangeComponent
            minRange={50000}
            maxRange={5000000}
            prefix="Rp"
            step={50000}
          />
        </div>
      </div>
      <div className="w-full md:w-10/12 lg:w-4/12 py-3 px-5 -mx-6 bg-white fixed bottom-0 flex justify-center shadow-[0px_-2px_4px_0px_#efeeee]">
        <ButtonComponent widthType="full">Send Donation</ButtonComponent>
      </div>
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
