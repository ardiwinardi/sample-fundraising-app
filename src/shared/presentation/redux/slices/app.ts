import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AppState {
  modals: {
    LOGIN_POPUP: boolean;
  };
}

export const initialState: AppState = {
  modals: { LOGIN_POPUP: false },
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleModal: (state, action: PayloadAction<keyof AppState['modals']>) => {
      state.modals[action.payload] = !state.modals[action.payload];
    },
  },
});

export const { toggleModal } = appSlice.actions;
export default appSlice.reducer;
