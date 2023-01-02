import { DonateRequest } from '../data/donation.request';
import { Donation } from './donation.entity';

export interface DonationRepository {
  getByUserId(userId: string): Promise<Donation[]>;
  donate(request: DonateRequest): Promise<boolean>;
}
