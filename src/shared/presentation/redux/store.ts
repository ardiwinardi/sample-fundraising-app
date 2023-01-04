import { donationController } from '@/features/account/presentation/controller/donation.controller';
import { authController } from '@/features/auth/presentation/controllers/auth.controller';
import { campaignController } from '@/features/campaign/presentation/controllers/campaign.controller';
import { campaignReducer } from '@/features/campaign/presentation/store/campaign.store';
import {
  combineReducers,
  configureStore,
  PreloadedState,
} from '@reduxjs/toolkit';
import { appReducer } from './slices/app';

const rootReducer = combineReducers({
  [campaignController.reducerPath]: campaignController.reducer,
  [donationController.reducerPath]: donationController.reducer,
  [authController.reducerPath]: authController.reducer,
  app: appReducer,
  campaign: campaignReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,

    middleware: (getDefaultMiddleware) => [
      ...getDefaultMiddleware({
        serializableCheck: false,
      }),
      campaignController.middleware,
      donationController.middleware,
      authController.middleware,
    ],

    preloadedState,
  });
};
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
