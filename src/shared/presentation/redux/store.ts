import { authController } from '@/features/auth/presentation/controllers/auth.controller';
import { campaignController } from '@/features/campaign/presentation/controllers/campaign.controller';
import { campaignReducer } from '@/features/campaign/presentation/store/campaign.store';
import { configureStore } from '@reduxjs/toolkit';
import { appReducer } from './slices/app';

export const store = configureStore({
  reducer: {
    [campaignController.reducerPath]: campaignController.reducer,
    [authController.reducerPath]: authController.reducer,
    app: appReducer,
    campaign: campaignReducer,
  },

  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    campaignController.middleware,
    authController.middleware,
  ],
});

export type RootState = ReturnType<typeof store.getState>;
