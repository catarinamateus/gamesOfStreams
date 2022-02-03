import { StyleSheet } from 'react-native';
import { Colors } from '../../../theme';

export const RankUserItemStyles = () =>
    StyleSheet.create({
        mainContainer: {
            marginHorizontal: 20,
            marginTop: 10,
            backgroundColor: Colors.midGrey,
            height: 100,
            flexDirection: 'row',
            alignItems: 'center',
            padding: 10,
            borderRadius: 8,
        },
        avatarImage: {
            width: 80,
            height: 80,
            borderRadius: 45,
        },
        nameContainer: {
            flex: 1,
            marginLeft: 20,
        },
        pointsContainer: {
            flexDirection: 'column',
            alignItems: 'center',
            marginRight: 10,
        },
        title: {
            color: Colors.white,
            marginBottom: 5,
            fontSize: 22,
        },
        subtitle: {
            color: Colors.white,
        },
        points: {
            fontSize: 28,
            color: Colors.yellow,
        }
    })