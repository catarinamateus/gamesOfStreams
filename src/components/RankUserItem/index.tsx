import React from 'react';
import { View, Text, Image } from 'react-native';
import { RankUserItemStyles } from './styles/index';

type RankUserItemProps = {
    displayName: string;
    avatarImage?: string;
    totalTimeWatched: string;
    totalPoints: number;
};

const RankUserItem = (props: RankUserItemProps): JSX.Element => {

    const styles = RankUserItemStyles();

    return (
        <View style={styles.mainContainer}>
            <Image
                source={props.avatarImage ? {uri: `${props.avatarImage}`} : require('../../assets/images/avatarFallback.png')}
                style={styles.avatarImage}
            />
            <View style={styles.nameContainer}>
                <Text style={styles.title}>{props.displayName}</Text>
                <Text style={styles.subtitle}>Time watched</Text>
                <Text style={styles.subtitle}>{props.totalTimeWatched}</Text>
            </View>
            <View style={styles.pointsContainer}>
                <Text style={styles.points}>{props.totalPoints}</Text>
                <Text style={styles.subtitle}>Points</Text>
            </View>
        </View>
    )
};

export default RankUserItem;