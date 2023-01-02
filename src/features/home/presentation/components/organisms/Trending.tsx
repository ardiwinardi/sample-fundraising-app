import { useGetCampaignListQuery } from '@/features/campaign/presentation/controllers/campaign.controller';
import { Loading } from '@/shared/presentation/components/atoms/Loading';
import Title from '@/shared/presentation/components/atoms/Title';
import { RootState } from '@/shared/presentation/redux/store';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CampaignCard from '../molecules/CampaignCard';
import SortingPopup from '../molecules/SortingPopup';

export default function Trending() {
  const filter = useSelector((state: RootState) => state.campaign.filter);
  const [showSortingPopup, setShowSortingPopup] = useState<boolean>(false);
  const getCampaignsController = useGetCampaignListQuery(filter);

  useEffect(() => {
    getCampaignsController.refetch();
  }, [filter]);

  return (
    <>
      <section className="flex flex-col space-y-4">
        <div className="flex justify-between items-center">
          <Title>Trending Donations</Title>
          <button onClick={() => setShowSortingPopup(true)}>
            <svg
              className="w-6 h-6 cursor-pointer active:text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              version="1.1"
            >
              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <rect x="0" y="0" width="24" height="24" />
                <rect
                  fill="#000000"
                  x="4"
                  y="5"
                  width="16"
                  height="3"
                  rx="1.5"
                />
                <path
                  d="M7.5,11 L16.5,11 C17.3284271,11 18,11.6715729 18,12.5 C18,13.3284271 17.3284271,14 16.5,14 L7.5,14 C6.67157288,14 6,13.3284271 6,12.5 C6,11.6715729 6.67157288,11 7.5,11 Z M10.5,17 L13.5,17 C14.3284271,17 15,17.6715729 15,18.5 C15,19.3284271 14.3284271,20 13.5,20 L10.5,20 C9.67157288,20 9,19.3284271 9,18.5 C9,17.6715729 9.67157288,17 10.5,17 Z"
                  fill="#000000"
                  opacity="0.3"
                />
              </g>
            </svg>
          </button>
        </div>

        <ul className="flex flex-col space-y-5">
          {getCampaignsController.isLoading && <Loading />}
          {getCampaignsController.data &&
            getCampaignsController.data.map((campaign, index) => (
              <li key={index}>
                <Link
                  href={`/campaign/${campaign.id}`}
                  className="cursor-pointer active:bg-gray-200/70"
                >
                  <CampaignCard campaign={campaign} />
                </Link>
              </li>
            ))}
        </ul>
      </section>

      <SortingPopup
        show={showSortingPopup}
        handleClose={() => setShowSortingPopup(false)}
      />
    </>
  );
}
