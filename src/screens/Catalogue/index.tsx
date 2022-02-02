import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useAppContext} from '../../context';

import {catalogueStyles} from './styles';
import {CatalogueOption, catalogueOptions} from './utils';

const Home = () => {
  const styles = catalogueStyles();
  const {totalPoints} = useAppContext();

  /*
    TODO:
    - GET USER CURRENT POINT BALANCE
    - SHOW MODAL TO CONFIRM "PURCHASE"
  */

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle={'light-content'} />
      <Text style={styles.balanceText}>{`Your ${totalPoints} balance: `}</Text>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.backgroundStyle}>
        {catalogueOptions.map((option: CatalogueOption) => (
          <TouchableOpacity key={option.id}>
            <ImageBackground
              source={{uri: option.imageUrl}}
              resizeMode="stretch"
              imageStyle={styles.imageCard}
              style={styles.optionCard}>
              <View style={styles.cardTextContainer}>
                <Text style={styles.cardTitleText}>{option.title}</Text>
                <Text style={styles.cardTitleText}>{`${option.cost} 🪙`}</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
