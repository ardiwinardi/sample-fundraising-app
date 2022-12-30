import { db } from '@/shared/data/network/firebase';
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
} from 'firebase/firestore';
import { Campaign } from '../domain/campaign.entity';
import { DonateRequest } from './campaign.request';
import { CampaignDTO } from './campaign.response';

const documentName = 'campaigns';
export const campaignApi = {
  async getAll(): Promise<Campaign[]> {
    const campaignsRef = collection(db, documentName);
    const q = query(campaignsRef);

    const querySnapshot = await getDocs(q);

    const campaigns: Campaign[] = [];
    querySnapshot.forEach((doc) => {
      const campaign = doc.data() as CampaignDTO;
      campaigns.push({
        id: doc.id,
        title: campaign.title ?? '',
        story: '',
        description: campaign.description ?? '',
        category: campaign.category ?? '',
        detail: {
          targetAmount: campaign.detail?.targetAmount ?? 0,
          expiredAt: campaign.detail?.expiredAt
            ? campaign.detail?.expiredAt.toDate()
            : null,
        },
      });
    });

    return campaigns;
  },

  async getById(id: string): Promise<Campaign> {
    const docRef = doc(db, documentName, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const campaign = docSnap.data() as CampaignDTO;

      const donationRef = collection(docRef, 'donations');
      const donationSnapshot = await getDocs(donationRef);
      const amounts: number[] = [];
      donationSnapshot.forEach((doc) => {
        amounts.push(doc.data()['amount'] as number);
      });

      return {
        id: docSnap.id,
        title: campaign.title ?? '',
        story: '',
        description: campaign.description ?? '',
        category: campaign.category ?? '',
        detail: {
          targetAmount: campaign.detail?.targetAmount ?? 0,
          expiredAt: campaign.detail?.expiredAt
            ? campaign.detail?.expiredAt.toDate()
            : null,
          collectedAmount: amounts.reduce((a, b) => a + b),
        },
      };
    } else {
      throw 'not found';
    }
  },

  async donate(request: DonateRequest): Promise<void> {
    const campaignRef = collection(db, documentName);
    const donationRef = collection(
      campaignRef,
      request.campaignId,
      'donations'
    );

    await addDoc(donationRef, {
      userId: request.userId,
      amount: request.amount,
      createdAt: new Date(),
    });
  },
};
