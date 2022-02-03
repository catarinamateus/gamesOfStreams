import {StyleSheet} from 'react-native';
import {Colors} from '../../../theme';

export const HomeStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.darkGrey,
      marginBottom: 8,
    },
    avatarImage: {
      marginTop: 64,
      width: 175,
      height: 175,
      borderRadius: 100,
      alignSelf: 'center',
    },
    avatarInfoContainer: {
      alignItems: 'center',
      marginBottom: 20,
    },
    avatarName: {
      marginTop: 10,
      color: Colors.white,
      fontSize: 32,
      fontWeigth: '800',
    },
    avatarPoints: {
      marginTop: 5,
      color: Colors.white,
      fontSize: 18,
      fontWeigth: '800',
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
      fontWeigth: '800',
    },
    imageContainer: {
      marginLeft: 10,
      width: 200,
      height: 144,
      borderRadius: 8,
    },
    buttonContainer: {
      alignSelf: 'center',
      width: '90%',
      height: 176,
      borderRadius: 8,
      backgroundColor: 'red',
    },
    buttonLinear: {
      width: '100%',
      height: 112,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
    },
    horizontalScroll: {
      width: 'auto',
    },
    loader: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
