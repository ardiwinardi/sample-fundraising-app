import { campaignService } from '@/features/campaign/data/campaign.repository.impl';
import { Campaign } from '@/features/campaign/domain/campaign.entity';
import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { DonateRequest } from '../../data/campaign.request';

export const campaignController = createApi({
  reducerPath: 'campaignController',
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getCampaignList: builder.query<Campaign[], void>({
      queryFn: async () => ({
        data: await campaignService.getList(),
      }),
    }),
    getCampaignById: builder.query<Campaign, string>({
      queryFn: async (id) => ({
        data: await campaignService.getById(id),
      }),
    }),
    addDonation: builder.mutation<void, DonateRequest>({
      queryFn: async (request) => ({
        data: await campaignService.donate(request),
      }),
    }),
  }),
});

export const {
  useGetCampaignListQuery,
  useGetCampaignByIdQuery,
  useAddDonationMutation,
} = campaignController;
