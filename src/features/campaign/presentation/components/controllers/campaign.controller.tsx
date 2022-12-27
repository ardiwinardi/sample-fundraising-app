import { campaignService } from '@/features/campaign/data/repositories/campaign.repository.impl';
import { Campaign } from '@/features/campaign/domain/entities/campaign.entity';
import { useState } from 'react';

export const useCampaignGetAll = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [list, setList] = useState<Campaign[]>([]);

  const get = async () => {
    setLoading(true);
    const result = await campaignService.getList();
    setList(result);
    setLoading(false);
  };

  return { get, isLoading, list };
};
