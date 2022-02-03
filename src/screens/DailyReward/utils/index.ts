export interface DailyReward {
  id: number;
  title: string;
  description?: string;
  claimed: boolean;
  imageUrl?: string;
}

export const dailyRewards: DailyReward[] = [
  {
    id: 1,
    title: '50 points',
    claimed: true,
    imageUrl: 'https://www.pngmart.com/files/7/Rewards-PNG-Photos.png',
  },
  {
    id: 2,
    title: '250 points',
    claimed: false,
    imageUrl: 'https://www.pngmart.com/files/7/Rewards-PNG-Photos.png',
  },
  {
    id: 3,
    title: '10€ Rental Voucher',
    claimed: false,
    imageUrl: 'https://www.pngmart.com/files/7/Rewards-PNG-Photos.png',
  },
  {
    id: 4,
    title: '2500 points',
    claimed: false,
    imageUrl: 'https://www.pngmart.com/files/7/Rewards-PNG-Photos.png',
  },
  {
    id: 5,
    title: '1 Early Access to Premiring Content',
    claimed: false,
    imageUrl: 'https://www.pngmart.com/files/7/Rewards-PNG-Photos.png',
  },
  {
    id: 6,
    title: 'Mystery Reward',
    claimed: false,
    imageUrl: 'https://www.pngmart.com/files/7/Rewards-PNG-Photos.png',
  },
];
