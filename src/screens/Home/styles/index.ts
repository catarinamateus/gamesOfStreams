import { StyleSheet } from 'react-native';
import { Colors } from '../../../theme';

export const HomeStyles = () =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: Colors.darkGrey,
            alignItems: 'center',
        },
        avatarImage: {
            marginTop: 100,
            width: 175,
            height: 175,
            borderRadius: 100
        },
        avatarInfoContainer: {
            alignItems: 'center',
            marginBottom: 20
        },
        avatarName: {
            marginTop: 10,
            color: Colors.white,
            fontSize: 32,
            fontWeigth: "800",
        },
        avatarPoints: {
            marginTop: 5,
            color: Colors.white,
            fontSize: 18,
            fontWeigth: "800",
        },
        sectionContainer: {
            marginTop: 20,
            width: '100%',
        },
        sectionTitle: {
            marginLeft: 20,
            marginBottom: 10,
            color: Colors.white,
            fontSize: 18,
            fontWeigth: "800",
        },
        imageContainer: {
            marginLeft: 10,
            width: 200,
            height: 112,
            borderRadius: 8
        },
        buttonContainer: {
            paddingHorizontal: 20,
            width: '100%',
            marginTop: 20,
        },
        button: {
            height: 112,
            width: '100%',
            backgroundColor: '#1f1f1f',
            borderRadius: 8
        },
        buttonLinear: {
            width: '100%',
            height: 112,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 8
        }
    })