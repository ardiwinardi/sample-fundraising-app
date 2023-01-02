import { CampaignState } from '@/features/campaign/presentation/store/campaign.store';

export const sortingOptions: {
  name: string;
  key: CampaignState['filter']['orderBy'];
}[] = [
  {
    key: 'MOST_RECENT',
    name: 'Most Recent',
  },
  {
    key: 'POPULAR',
    name: 'Popular',
  },
];
