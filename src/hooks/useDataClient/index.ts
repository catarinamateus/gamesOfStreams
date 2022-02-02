import {UserLeaderboardType} from './types';

const useDataClient = async () => {
  const getUserPoints = (userId: string): number | undefined => {
    const endpoint = `http://3.71.13.88:3000/users/${userId}/points`;

    let points;

    fetch(endpoint)
      .then(response => response.json())
      .then(json => {
        points = json.pointValue;
      })
      .catch(() => {
        points = undefined;
      });

    return points;
  };

  const getLeaderBoard = (): UserLeaderboardType[] | undefined => {
    const endpoint = `http://3.71.13.88:3000/users`;

    let leaderboard;

    fetch(endpoint)
      .then(response => response.json())
      .then(json => {
        leaderboard = json.pointValue;
      })
      .catch(() => {
        leaderboard = undefined;
      });

    return leaderboard;
  };

  return {getUserPoints, getLeaderBoard};
};

export default useDataClient;
