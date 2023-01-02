import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CampaignState {
  filter: {
    orderBy: 'MOST_RECENT' | 'POPULAR';
    keyword: string;
    category?: string;
  };
}

export const initialState: CampaignState = {
  filter: {
    orderBy: 'MOST_RECENT',
    keyword: '',
    category: '',
  },
};

export const campaignSlice = createSlice({
  name: 'campaign',
  initialState,
  reducers: {
    setSortingBy: (
      state,
      action: PayloadAction<CampaignState['filter']['orderBy']>
    ) => {
      state.filter = {
        ...state.filter,
        orderBy: action.payload,
      };
    },
    setCategory: (
      state,
      action: PayloadAction<CampaignState['filter']['category']>
    ) => {
      state.filter = {
        ...state.filter,
        category: action.payload,
      };
    },
    setSearchBy: (
      state,
      action: PayloadAction<CampaignState['filter']['keyword']>
    ) => {
      state.filter = {
        ...state.filter,
        keyword: action.payload,
      };
    },
  },
});

export const { setSortingBy, setSearchBy, setCategory } = campaignSlice.actions;
export const campaignReducer = campaignSlice.reducer;
