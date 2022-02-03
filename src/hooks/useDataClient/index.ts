import {Asset, UseDataClientType, UserData, UserLeaderboardType} from './types';
import axios from 'axios';
import {UserType} from '../../context/types';

const useDataClient = (): UseDataClientType => {
  const getUserPoints = async (userId: string): Promise<number | undefined> => {
    const endpoint = `http://3.71.13.88:3000/users/${userId}/points`;

    const response = await axios({url: endpoint, method: 'get'});

    return response.data?.pointValue;
  };

  const getLeaderBoard = async (): Promise<
    UserLeaderboardType[] | undefined
  > => {
    const endpoint = 'http://3.71.13.88:3000/users';

    const response = await axios({url: endpoint, method: 'get'});

    return response.data;
  };

  const getLastWatched = async (
    user: UserType,
  ): Promise<Asset[] | undefined> => {
    const endpoint = `http://3.71.13.88:3000/users/788638771/lastwatched?username=${user.email}&password=${user.password}`;

    const response = await axios({url: endpoint, method: 'get'});

    return response.data;
  };

  const getUserDetails = async (
    username: string,
    password: string,
  ): Promise<UserData | undefined> => {
    const endpoint = `http://3.71.13.88:3000/users/login?username=${username}&password=${password}`;

    const response = await axios({url: endpoint, method: 'get'});

    return response.data;
  };

  return {getUserPoints, getLeaderBoard, getLastWatched, getUserDetails};
};

export default useDataClient;
