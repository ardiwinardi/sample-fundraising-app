import { Campaign } from '../domain/campaign.entity';
import { CampaignRepository } from '../domain/campaign.repository';
import { campaignApi } from './campaign.api';
import { CampaignFilterRequest } from './campaign.request';

class CampaignRepositoryImpl implements CampaignRepository {
  getById(id: string): Promise<Campaign> {
    return campaignApi.getById(id);
  }
  getList(request: CampaignFilterRequest): Promise<Campaign[]> {
    return campaignApi.getAll(request);
  }
}

export const campaignService = Object.freeze(new CampaignRepositoryImpl());
