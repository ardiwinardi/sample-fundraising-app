import { Campaign } from '../domain/campaign.entity';
import { CampaignRepository } from '../domain/campaign.repository';
import { campaignApi } from './campaign.api';
import { DonateRequest } from './campaign.request';

class CampaignRepositoryImpl implements CampaignRepository {
  donate(request: DonateRequest): Promise<void> {
    return campaignApi.donate(request);
  }
  getById(id: string): Promise<Campaign> {
    return campaignApi.getById(id);
  }
  getList(): Promise<Campaign[]> {
    return campaignApi.getAll();
  }
}

export const campaignService = Object.freeze(new CampaignRepositoryImpl());
