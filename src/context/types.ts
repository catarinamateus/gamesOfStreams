import {Asset} from '../hooks/useDataClient/types';

export enum UserLevelEnum {
  Initial = 'Initial',
  Medium = 'Medium',
  Master = 'Master',
  Expert = 'Expert',
}

export interface UserType {
  id: string;
  name: string;
  level: UserLevelEnum;
  email: string;
  password: string;
  image: string;
  lastWatched: Asset[];
  totalTimeWatched: number;
}

export interface AppContextType {
  user?: UserType;
  totalPoints: number;
  login: (username: string, password: string) => Promise<void>;
  logout: (username: string, password: string) => void;
  setTotalPoints: (total: number) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}
