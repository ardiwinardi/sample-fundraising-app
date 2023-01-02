import { CampaignFilterRequest } from '@/features/campaign/data/campaign.request';
import { collectionNames } from '@/shared/data/constants/collection.constant';
import { db } from '@/shared/data/network/firebase';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  QueryConstraint,
  where,
} from 'firebase/firestore';
import { Campaign } from '../domain/campaign.entity';
import { toLocalDateString } from './../../../shared/presentation/utils/date.util';
import { CampaignDTO } from './campaign.response';

export const campaignApi = {
  async getAll(request: CampaignFilterRequest): Promise<Campaign[]> {
    const campaignsRef = collection(db, collectionNames.CAMPAIGNS);

    const queryFilters: QueryConstraint[] = [];

    if (!request.keyword) {
      if (request.orderBy) {
        const orderByParam =
          request.orderBy === 'MOST_RECENT' ? 'createdAt' : 'category';
        queryFilters.push(orderBy(orderByParam, 'desc'));
      }

      if (request.category) {
        queryFilters.push(where('category', '==', request.category));
      }
    }

    const q = query(campaignsRef, ...queryFilters);

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
            ? toLocalDateString(campaign.detail?.expiredAt.toDate())
            : undefined,
        },
      });
    });

    if (request.keyword) {
      return campaigns.filter((campaign) =>
        campaign.title.toLowerCase().includes(request.keyword.toLowerCase())
      );
    }

    return campaigns;
  },

  async getById(id: string): Promise<Campaign> {
    const docRef = doc(db, collectionNames.CAMPAIGNS, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const campaign = docSnap.data() as CampaignDTO;

      return {
        id: docSnap.id,
        title: campaign.title ?? '',
        description: campaign.description ?? '',
        story: '',
        category: campaign.category ?? '',
        detail: {
          targetAmount: campaign.detail?.targetAmount ?? 0,
          expiredAt: campaign.detail?.expiredAt
            ? toLocalDateString(campaign.detail?.expiredAt.toDate())
            : undefined,
          collectedAmount: campaign.resume
            ? campaign.resume.collectedAmount
            : 0,
          numberOfDonors: campaign.resume ? campaign.resume.numDonors : 0,
        },
      };
    } else {
      throw 'not found';
    }
  },
};
