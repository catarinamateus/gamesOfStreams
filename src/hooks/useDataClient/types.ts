export interface UserLeaderboardType {
  userDetails: {
    id: string;
    email: string;
    displayName: string;
    firstName: string;
    lastName: string;
    currency: string;
    locale: string;
    country: string;
    pending: boolean;
    age: number;
    avatarImage?: string;
  };
  lastEventTimeStamps: number;
  totalTimeWatched: number;
  totalPoints: number;
}

export interface UseDataClientType {
  getUserPoints: (userId: string) => Promise<number | undefined>;
  getLeaderBoard: () => Promise<UserLeaderboardType[] | undefined>;
}
