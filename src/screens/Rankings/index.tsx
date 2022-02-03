import React, {useState, useEffect} from 'react';
import {ActivityIndicator, ScrollView, StyleSheet} from 'react-native';
import useDataClient from '../../hooks/useDataClient';

import RankUserItem from '../../components/RankUserItem';
import {UserLeaderboardType} from '../../hooks/useDataClient/types';
import {mockedRanking} from '../../data/mocks';
import {useAppContext} from '../../context';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Theme} from '../../theme';

const Rankings = () => {
  const {getLeaderBoard} = useDataClient();
  const [rankingData, setRankingData] = useState<UserLeaderboardType[]>([]);

  const getLeaderData = async () => {
    try {
      const data = await getLeaderBoard();
      const orderedData =
        data && data.sort((a, b) => b.totalPoints - a.totalPoints);
      orderedData && setRankingData(orderedData);
      return data;
    } catch (err) {
      setRankingData(
        mockedRanking.sort((a, b) => b.totalPoints - a.totalPoints),
      );
      console.log(err);
    }
  };

  useEffect(() => {
    getLeaderData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {isLoading} = useAppContext();

  if (isLoading) {
    return (
      <ActivityIndicator
        color={Colors.yellow}
        size={'large'}
        style={styles.loader}
      />
    );
  }

  return (
    <ScrollView style={styles.container}>
      {rankingData.map(
        user =>
          user.userDetails && (
            <RankUserItem
              displayName={user.userDetails.displayName}
              avatarImage={'https://i.pravatar.cc/300'}
              totalTimeWatched={user.totalTimeWatched}
              totalPoints={user.totalPoints}
            />
          ),
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 0.5,
  },
  loader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Theme.background,
  },
});

export default Rankings;
