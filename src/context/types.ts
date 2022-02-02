export enum UserLevelEnum {
  Initial = 'Initial',
  Medium = 'Medium',
  Master = 'Master',
  Expert = 'Expert',
}

export interface UserType {
  id: string;
  name: string;
  totalPoint: number;
  level: UserLevelEnum;
}

export interface AppContextType {
  user?: UserType;
  login: (user: UserType) => void;
  logout: () => void;
}
