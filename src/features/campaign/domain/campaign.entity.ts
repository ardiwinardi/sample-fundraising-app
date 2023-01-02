import { Donation } from '@/features/account/domain/donation.entity';

export interface Campaign {
  id: string | number;
  title: string;
  story: string;
  description: string;
  category?: string;
  detail?: {
    targetAmount?: number;
    collectedAmount?: number;
    expiredAt?: string;
    expiredType?: 'unlimited' | 'limited';
    numberOfDonors?: number;
  };
  donations?: Donation[];
}
