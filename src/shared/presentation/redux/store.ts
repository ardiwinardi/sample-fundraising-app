import { donationController } from '@/features/account/presentation/controller/donation.controller';
import { authController } from '@/features/auth/presentation/controllers/auth.controller';
import { campaignController } from '@/features/campaign/presentation/controllers/campaign.controller';
import { campaignReducer } from '@/features/campaign/presentation/store/campaign.store';
import { configureStore } from '@reduxjs/toolkit';
import { appReducer } from './slices/app';

export const store = configureStore({
  reducer: {
    [campaignController.reducerPath]: campaignController.reducer,
    [donationController.reducerPath]: donationController.reducer,
    [authController.reducerPath]: authController.reducer,
    app: appReducer,
    campaign: campaignReducer,
  },

  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
    campaignController.middleware,
    donationController.middleware,
    authController.middleware,
  ],
});

export type RootState = ReturnType<typeof store.getState>;
