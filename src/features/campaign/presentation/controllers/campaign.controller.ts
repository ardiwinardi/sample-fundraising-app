import { campaignService } from '@/features/campaign/data/campaign.repository.impl';
import { Campaign } from '@/features/campaign/domain/campaign.entity';
import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { CampaignFilterRequest } from '../../data/campaign.request';

export const campaignController = createApi({
  reducerPath: 'campaignController',
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getCampaignList: builder.query<Campaign[], CampaignFilterRequest>({
      queryFn: async (request) => ({
        data: await campaignService.getList(request),
      }),
    }),
    getCampaignById: builder.query<Campaign, string>({
      queryFn: async (id) => ({
        data: await campaignService.getById(id),
      }),
    }),
  }),
});

export const { useGetCampaignListQuery, useGetCampaignByIdQuery } =
  campaignController;
