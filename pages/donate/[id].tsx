import PaymentMethodCardComponent from '@/features/donation/presentation/components/molecules/PaymentMethodCardComponent';
import { campaigns } from '@/features/home/data/constants/campaign.constant';
import { Campaign } from '@/features/home/domain/entities/campaign.entity';
import CampaignCardComponent from '@/features/home/presentation/components/molecules/CampaignCardComponent';
import ButtonComponent from '@/shared/presentation/components/atomics/ButtonComponent';
import RangeComponent from '@/shared/presentation/components/atomics/RangeComponent';
import TitleComponent from '@/shared/presentation/components/atomics/TitleComponent';
import { GetServerSideProps } from 'next';
import Link from 'next/link';

type Props = {
  data: Campaign;
};
export default function DetailDonation(props: Props) {
  const campaign = props.data;
  return (
    <>
      <div className="h-screen bg-white pb-20">
        <div className="flex justify-between">
          <Link
            href={`/campaign/${campaign.id}`}
            className="active:bg-gray-100"
          >
            <svg
              className="w-7 h-7 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </Link>

          <button>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </button>
        </div>
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
      <div className="w-full md:w-6/12 lg:w-4/12 py-3 px-5 -mx-6 bg-white fixed bottom-0 flex justify-center shadow-[0px_-2px_4px_0px_#efeeee]">
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
