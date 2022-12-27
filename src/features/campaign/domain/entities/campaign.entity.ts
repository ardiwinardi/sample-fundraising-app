export interface Campaign {
  id: string | number;
  title: string;
  story: string;
  description: string;
  category?: string;
  detail?: {
    targetAmount?: number;
    collectedAmount?: number;
    expiredAt?: number;
    expiredType?: 'unlimited' | 'limited';
    numberOfDonors?: number;
  };
}
