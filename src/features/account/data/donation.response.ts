import { Timestamp } from 'firebase/firestore';

export type donationDTO = {
  userId: string;
  campaignId: string;
  amount: number;
  createdAt: Timestamp;
  status?: string;
};
