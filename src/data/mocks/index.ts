import {UserLevelEnum, UserType} from '../../context/types';

export const mockedUser: UserType = {
  id: '1',
  name: 'John Doe',
  totalPoint: 2300,
  level: UserLevelEnum.Master,
};
