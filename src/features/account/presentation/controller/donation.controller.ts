import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { DonateRequest } from '../../data/donation.request';

import { Donation } from '../../domain/donation.entity';
import { donationService } from './../../data/donation.repository.impl';
export const donationController = createApi({
  reducerPath: 'donationController',
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getDonationsByUserId: builder.query<Donation[], string>({
      queryFn: async (userId) => ({
        data: await donationService.getByUserId(userId),
      }),
    }),
    addDonation: builder.mutation<boolean, DonateRequest>({
      queryFn: async (request) => ({
        data: await donationService.donate(request),
      }),
    }),
  }),
});

export const { useGetDonationsByUserIdQuery, useAddDonationMutation } =
  donationController;
