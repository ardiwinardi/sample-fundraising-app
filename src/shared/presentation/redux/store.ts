import { campaignController } from '@/features/campaign/presentation/controllers/campaign.controller';
import { configureStore } from '@reduxjs/toolkit';
import appReducer from './slices/app';

export const store = configureStore({
  reducer: {
    [campaignController.reducerPath]: campaignController.reducer,
    app: appReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(campaignController.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
