import { Donation } from '../domain/donation.entity';
import { DonationRepository } from './../domain/donation.repository';
import { donationApi } from './donation.api';
import { DonateRequest } from './donation.request';

class DonationRepositoryImpl implements DonationRepository {
  getByUserId(userId: string): Promise<Donation[]> {
    return donationApi.getByUserId(userId);
  }
  donate(request: DonateRequest): Promise<boolean> {
    return donationApi.donate(request);
  }
}

export const donationService = Object.freeze(new DonationRepositoryImpl());
