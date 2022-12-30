import { campaignService } from '@/features/campaign/data/campaign.repository.impl';
import { DonateRequest } from '@/features/campaign/data/campaign.request';
import { Campaign } from '@/features/campaign/domain/campaign.entity';
import { useState } from 'react';

export const useCampaignGetAll = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<Campaign[]>([]);

  const get = async () => {
    setLoading(true);
    const result = await campaignService.getList();
    setResult(result);
    setLoading(false);
  };

  return { get, isLoading, docs: result };
};

export const useCampaignGetById = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<Campaign | null>(null);

  const get = async (id: string) => {
    setLoading(true);
    const result = await campaignService.getById(id);
    setResult(result);
    setLoading(false);
  };

  return { get, isLoading, doc: result };
};

export const useAddDonate = () => {
  const [isLoading, setLoading] = useState<boolean>(false);

  const mutate = async (request: DonateRequest) => {
    setLoading(true);
    await campaignService.donate(request);
    setLoading(false);
  };

  return { mutate, isLoading };
};
