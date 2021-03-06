import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  View,
  TouchableHighlight,
  StatusBar,
  SafeAreaView,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import {RootStackParamList} from '../..';
import {useAppContext} from '../../context';
import {StackNavigationProp} from '@react-navigation/stack';
import {HomeStyles} from './styles/index';
import {Colors} from '../../theme';

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
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={'light-content'} />
      <ScrollView
        style={styles.container}
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}>
        <Image style={styles.avatarImage} source={{uri: user?.image}} />

        <View style={styles.avatarInfoContainer}>
          <Text style={styles.avatarName}>{user?.name}</Text>
          <Text style={styles.avatarPoints}>{totalPoints} points</Text>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>New games available:</Text>
          <ScrollView
            style={styles.horizontalScroll}
            horizontal
            showsHorizontalScrollIndicator={false}>
            {user?.lastWatched.map((film, index) => (
              <TouchableHighlight
                key={index}
                style={styles.imageContainer}
                onPress={() => navigation.navigate('Game', {asset: film})}>
                <Image
                  source={{
                    uri: film.images.still[0].url,
                  }}
                  resizeMode="cover"
                  style={styles.imageContainer}
                />
              </TouchableHighlight>
            ))}
          </ScrollView>
        </View>

        <View style={styles.sectionContainer}>
          <TouchableHighlight
            onPress={() => navigation.navigate('DailyReward')}
            style={styles.buttonContainer}>
            <ImageBackground
              source={{
                uri: 'https://images.pond5.com/animation-calendar-check-mark-blue-footage-166420255_iconl.jpeg',
              }}
              resizeMode="stretch"
              style={{flex: 1, justifyContent: 'center'}}
              imageStyle={{borderRadius: 8}}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(0,0,0,0.3)',
                  padding: 4,
                  borderRadius: 8,
                  height: '100%',
                }}>
                <Text
                  style={{
                    color: Colors.white,
                    fontWeight: 'bold',
                  }}>
                  Collect your daily reward
                </Text>
              </View>
            </ImageBackground>
          </TouchableHighlight>
        </View>

        <View style={styles.sectionContainer}>
          <TouchableHighlight
            onPress={() => navigation.navigate('Catalogue')}
            style={styles.buttonContainer}>
            <ImageBackground
              source={{
                uri: 'https://miro.medium.com/max/3200/0*btLN_JrJ6g9r_Y45',
              }}
              resizeMode="stretch"
              style={{flex: 1, justifyContent: 'center'}}
              imageStyle={{borderRadius: 8}}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(0,0,0,0.6)',
                  padding: 4,
                  borderRadius: 8,
                  height: '100%',
                }}>
                <Text
                  style={{
                    color: Colors.white,
                    fontWeight: 'bold',
                  }}>
                  Explore the catalogue
                </Text>
              </View>
            </ImageBackground>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
