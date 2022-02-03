/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {Colors} from '../../theme';
import {dailyRewards} from './utils';

import CountDown from '@ilterugur/react-native-countdown-component';

const getSecondsToTomorrow = () => {
  let now = new Date();
  let hour = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let totalSecondsToday = (hour * 60 + minutes) * 60 + seconds;
  let totalSecondsInADay = 86400;

  return totalSecondsInADay - totalSecondsToday;
};

const DailyReward = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.darkGrey}}>
      <StatusBar barStyle={'light-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{flexGrow: 1}}
        contentContainerStyle={{alignItems: 'center', marginVertical: 8}}
        nestedScrollEnabled>
        <View
          style={{
            width: '90%',
            height: 520,
            borderRadius: 8,
            borderColor: Colors.black,
            borderWidth: 2,
            backgroundColor: Colors.midGrey,
            marginTop: 24,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
              padding: 16,
              color: Colors.yellow,
              alignSelf: 'center',
              textAlign: 'center',
            }}>
            {
              'Claim prizes everyday!\nCome here for 5 consecutive days to unlock a mystery reward!'
            }
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
              padding: 16,
              color: Colors.yellow,
              alignSelf: 'center',
              textAlign: 'center',
            }}>
            {'Countdown to next daily claim:'}
          </Text>
          <CountDown
            until={getSecondsToTomorrow()}
            size={20}
            timeToShow={['H', 'M', 'S']}
          />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{flexGrow: 1, margin: 16}}
            bounces={false}>
            {dailyRewards.map((reward, index) => (
              <TouchableHighlight
                key={index}
                style={{
                  backgroundColor: reward.claimed
                    ? 'rgba(0,0,0,0.3)'
                    : Colors.white,
                  borderColor: Colors.yellow,
                  borderWidth: 2,
                  borderRadius: 8,
                  padding: 8,
                  margin: 8,
                }}>
                <ImageBackground
                  source={{uri: reward.imageUrl}}
                  style={{width: '100%', height: '100%'}}
                  imageStyle={{opacity: reward.claimed ? 0.8 : 0.4}}>
                  <Text
                    style={{
                      color: Colors.yellow,
                      fontWeight: 'bold',
                      marginLeft: 6,
                      textShadowColor: Colors.black,
                      textShadowRadius: 2,
                    }}>{`Day ${index + 1}`}</Text>
                  <View
                    style={{
                      width: 160,
                    }}>
                    {!reward.claimed && (
                      <Text
                        style={{
                          color: Colors.yellow,
                          fontWeight: 'bold',
                          margin: 8,
                          textShadowColor: Colors.black,
                          textShadowRadius: 2,
                        }}>
                        {reward.title}
                      </Text>
                    )}
                  </View>
                </ImageBackground>
              </TouchableHighlight>
            ))}
          </ScrollView>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
              padding: 16,
              color: Colors.yellow,
              alignSelf: 'center',
              textAlign: 'center',
            }}>
            {'Scroll through the rewards to see what to expect in the future!'}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DailyReward;
