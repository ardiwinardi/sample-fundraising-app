import { CampaignState } from '../presentation/store/campaign.store';
export type DonateRequest = {
  campaignId: string;
  userId: string;
  amount: number;
};

export type CampaignFilterRequest = CampaignState['filter'];
