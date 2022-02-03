import {UserLevelEnum, UserType} from '../../context/types';

export const mockedUser: UserType = {
  id: '788638771',
  name: 'John Doe',
  level: UserLevelEnum.Master,
  email: 'test00@test.com&password',
  password: 'Password1234',
  image:
    'https://cdn.backstage-api.com?key=backstage-cms-production-uploads/250x250/5e0ad1b0-515e-11e9-a7ed-371ac744bd33/profile-images/img/5c55a618-e55a-4c68-85ed-55afa4b8e2fb-image%201@2x.png',
};
