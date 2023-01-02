import { authService } from '../../data/auth.repository.impl';

import { User } from '@/features/user/domain/user.entity';
import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';

export const authController = createApi({
  reducerPath: 'authController',
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    loginWithGoogle: builder.mutation<User, void>({
      queryFn: async () => ({
        data: await authService.loginWithGoogle(),
      }),
    }),
  }),
});

export const { useLoginWithGoogleMutation } = authController;
