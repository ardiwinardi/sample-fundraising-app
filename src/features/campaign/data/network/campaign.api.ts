import { db } from '@/shared/data/network/firebase';
import { collection, doc, getDoc, getDocs, query } from 'firebase/firestore';
import { Campaign } from '../../domain/entities/campaign.entity';
import { CampaignDTO } from '../responses/campaign.response';
export const campaignApi = {
  async getAll(): Promise<Campaign[]> {
    const campaignsRef = collection(db, 'campaigns');
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
      });
    });

    return campaigns;
  },

  async getById(id: string): Promise<Campaign> {
    const docRef = doc(db, 'campaigns', id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const campaign = docSnap.data() as Campaign;
      return {
        id: docSnap.id,
        title: campaign.title ?? '',
        story: '',
        description: campaign.description ?? '',
        category: campaign.category ?? '',
      };
    } else {
      throw 'not found';
    }
  },
};
