import { Campaign } from './../../campaign/domain/campaign.entity';
export interface Donation {
  id: string;
  userId: string;
  amount: number;
  createdAt: Date;
  status?: string;
  campaign?: Campaign;
}
