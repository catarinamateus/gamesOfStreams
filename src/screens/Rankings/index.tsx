import React, { useState, useEffect } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
} from 'react-native';
import useDataClient from '../../hooks/useDataClient';

import RankUserItem from '../../components/RankUserItem';
import { UserLeaderboardType } from '../../hooks/useDataClient/types';

const Rankings = () => {
    const { getLeaderBoard } = useDataClient();
    const [rankingData, setRankingData] = useState<UserLeaderboardType[]>([]);

    const getLeaderData = async () => {
        try {
            const data = await getLeaderBoard()
            const orderedData = data && data.sort((a, b) => b.totalPoints - a.totalPoints);
            orderedData && setRankingData(orderedData)
            return data
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getLeaderData()
    }, [])

    return (
        <ScrollView style={styles.container}>
            {rankingData.map((user) => 
                user.userDetails &&
                <RankUserItem
                    displayName={user.userDetails.displayName}
                    avatarImage={user.userDetails.avatarImage}
                    totalTimeWatched={user.totalTimeWatched}
                    totalPoints={user.totalPoints}
                />)}
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 0.5
    }
})

export default Rankings;
