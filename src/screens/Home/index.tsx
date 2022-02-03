import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  View,
  TouchableHighlight,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/core';

import {RootStackParamList} from '../..';
import lastWatchedData from '../../../lastWatchedData.json';
import {useAppContext} from '../../context';
import {StackNavigationProp} from '@react-navigation/stack';
import {HomeStyles} from './styles/index';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Home = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const styles = HomeStyles();
  const {user, totalPoints, isLoading} = useAppContext();

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
    <>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.container}>
        <Image style={styles.avatarImage} source={{uri: user?.image}} />

        <View style={styles.avatarInfoContainer}>
          <Text style={styles.avatarName}>{user?.name}</Text>
          <Text style={styles.avatarPoints}>{totalPoints} points</Text>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            Click in one of the last watched to start game
          </Text>
          <ScrollView horizontal>
            {lastWatchedData.map((film, index) => (
              <TouchableHighlight
                key={index}
                style={styles.imageContainer}
                onPress={() => navigation.navigate('Game')}>
                <Image
                  source={{
                    uri: film.image,
                  }}
                  style={styles.imageContainer}
                />
              </TouchableHighlight>
            ))}
          </ScrollView>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableHighlight
            onPress={() => navigation.navigate('Catalogue')}
            style={styles.button}>
            <LinearGradient
              colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.7)']}
              style={styles.buttonLinear}>
              <Text style={styles.sectionTitle}>Catalogue</Text>
            </LinearGradient>
          </TouchableHighlight>
        </View>
      </View>
    </>
  );
};

export default Home;
