import { CampaignFilterRequest, DonateRequest } from '../data/campaign.request';
import { Campaign } from './campaign.entity';

export interface CampaignRepository {
  getList(request: CampaignFilterRequest): Promise<Campaign[]>;
  getById(id: string): Promise<Campaign>;
  donate(request: DonateRequest): Promise<void>;
}
