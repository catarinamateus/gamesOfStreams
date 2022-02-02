import {StyleSheet} from 'react-native';

export const catalogueStyles = () =>
  StyleSheet.create({
    safeArea: {flex: 1, backgroundColor: 'rgba(37,37,37,1)'},
    backgroundStyle: {
      flexGrow: 1,
      backgroundColor: 'rgba(37,37,37,1)',
    },
    optionCard: {
      height: 216,
      backgroundColor: 'rgba(63,61,61,0.5)',
      borderRadius: 8,
      marginVertical: 8,
      marginHorizontal: 16,
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageCard: {borderRadius: 8, opacity: 0.5},
    balanceText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'white',
      padding: 16,
    },
    cardTextContainer: {
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)',
      padding: 4,
      borderRadius: 8,
    },
    cardTitleText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'white',
    },
    cardTitleCost: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'white',
    },
  });
