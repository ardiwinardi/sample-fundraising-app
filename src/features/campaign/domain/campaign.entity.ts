export interface Donation {
  userId: string;
  amount: number;
  createdAt: Date;
}
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
