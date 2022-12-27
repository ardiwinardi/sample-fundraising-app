import { Campaign } from '../../domain/entities/campaign.entity';
import { CampaignRepository } from '../../domain/repositories/campaign.repository';
import { campaignApi } from './../network/campaign.api';

class CampaignRepositoryImpl implements CampaignRepository {
  getById(id: string): Promise<Campaign> {
    return campaignApi.getById(id);
  }
  getList(): Promise<Campaign[]> {
    return campaignApi.getAll();
  }
}

export const campaignService = Object.freeze(new CampaignRepositoryImpl());
