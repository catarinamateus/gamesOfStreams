import {UseDataClientType, UserLeaderboardType} from './types';
import axios from 'axios';

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

  return {getUserPoints, getLeaderBoard};
};

export default useDataClient;
