import { Timestamp } from 'firebase/firestore';

export type CampaignDTO = {
  title?: string;
  description?: string;
  category?: string;
  detail?: {
    targetAmount?: number;
    expiredAt?: Timestamp;
  };
  resume?: {
    numDonors: number;
    collectedAmount: number;
  };
};
