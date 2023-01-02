import { CampaignDTO } from '@/features/campaign/data/campaign.response';
import { Campaign } from '@/features/campaign/domain/campaign.entity';
import { collectionNames } from '@/shared/data/constants/collection.constant';
import { db } from '@/shared/data/network/firebase';
import {
  collection,
  collectionGroup,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  runTransaction,
  where,
} from 'firebase/firestore';
import { Donation } from '../domain/donation.entity';
import { DonateRequest } from './donation.request';

export const donationApi = {
  async getByUserId(userId: string): Promise<Donation[]> {
    const donationsRef = collectionGroup(db, collectionNames.DONATIONS);

    const q = query(
      donationsRef,
      where('userId', '==', userId),
      orderBy('createdAt', 'desc')
    );
    const querySnapshot = await getDocs(q);

    const donations: Donation[] = [];

    for (const donationDoc of querySnapshot.docs) {
      const donation = donationDoc.data();
      const campaignRef = doc(
        db,
        collectionNames.CAMPAIGNS,
        donation.campaignId
      );

      const campaignDoc = await getDoc(campaignRef);

      donations.push({
        id: donationDoc.id,
        userId: donation.userId,
        amount: donation.amount,
        createdAt: donation.createdAt.toDate(),
        status: 'Success',
        campaign: campaignDoc.exists()
          ? {
              ...(campaignDoc.data() as Campaign),
              id: campaignDoc.id,
            }
          : undefined,
      });
    }

    return donations;
  },

  async donate(request: DonateRequest): Promise<boolean> {
    const campaignRef = doc(db, collectionNames.CAMPAIGNS, request.campaignId);
    const donationCollectionRef = collection(campaignRef, 'donations');

    const donationRef = doc(donationCollectionRef);

    return await runTransaction<boolean>(db, async (transaction) => {
      const campaignDoc = await transaction.get(campaignRef);
      if (!campaignDoc.exists()) {
        throw 'Document does not exist!';
      }

      const campaign = campaignDoc.data() as CampaignDTO;

      // Commit to Firestore
      transaction.update(campaignRef, {
        resume: {
          numDonors: campaign.resume ? campaign.resume.numDonors + 1 : 1,
          collectedAmount: campaign.resume
            ? campaign.resume.collectedAmount + request.amount
            : request.amount,
        },
      });

      transaction.set(donationRef, {
        userId: request.userId,
        campaignId: request.campaignId,
        amount: request.amount,
        createdAt: new Date(),
      });

      return true;
    });
  },
};
