import { DonateRequest } from '../data/campaign.request';
import { Campaign } from './campaign.entity';

export interface CampaignRepository {
  getList(): Promise<Campaign[]>;
  getById(id: string): Promise<Campaign>;
  donate(request: DonateRequest): Promise<void>;
}
