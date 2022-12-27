import { Campaign } from '../entities/campaign.entity';

export interface CampaignRepository {
  getList(): Promise<Campaign[]>;
  getById(id: string): Promise<Campaign>;
}
