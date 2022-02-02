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
}

export interface AppContextType {
  user?: UserType;
  totalPoints: number;
  login: (user: UserType) => void;
  logout: () => void;
  setTotalPoints: (total: number) => void;
}
