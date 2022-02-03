import {UserType} from '../../context/types';

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

export interface AssetImage {
  size: {
    width: number;
    height: number;
  };
  url: string;
}

export interface Asset {
  assetLabel: string;
  clipIds: string[];
  continueWatchingLastTime: number;
  continueWatchingOffset: number;
  description: string;
  duration: number;
  id: string;
  images: {
    background: AssetImage[];
    poster: AssetImage[];
    still: AssetImage[];
    cover: AssetImage[];
    highlight: AssetImage[];
  };
  label: string;
  rating: number;
  releaseDate: string;
  type: string;
}

export interface UserData {
  email: string;
  displayName: string;
  firstName: string;
  id: string;
  lastName: string;
  profile: {
    id: string;
    name: string;
    userId: string;
    image: {
      default: boolean;
      id: string;
      name: string;
      images: {
        avatar: AssetImage[];
      };
    };
  };
}

export interface UseDataClientType {
  getUserPoints: (userId: string) => Promise<number | undefined>;
  getLeaderBoard: () => Promise<UserLeaderboardType[] | undefined>;
  getLastWatched: (user: UserType) => Promise<Asset[] | undefined>;
  getUserDetails: (
    username: string,
    password: string,
  ) => Promise<UserData | undefined>;
}
