export interface Campaign {
  id: string | number;
  title: string;
  story: string;
  description: string;
  category?: string;
  detail?: {
    targetAmount?: number;
    collectedAmount?: number;
    expiredAt?: Date | null;
    expiredType?: 'unlimited' | 'limited';
    numberOfDonors?: number;
  };
  donations?: any[];
}
