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
  };
  lastEventTimeStamps: number;
  totalTimeWatched: number;
  totalPoints: number;
}
