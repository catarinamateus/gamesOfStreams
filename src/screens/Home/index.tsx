import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../..';
import {StackNavigationProp} from '@react-navigation/stack';

type homeScreenProp = StackNavigationProp<RootStackParamList, 'Dashboard'>;

const Home = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const navigation = useNavigation<homeScreenProp>();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Button
          // temporary for navigation into catalogue. To remove once real design is done
          title="Catalogue"
          onPress={() => navigation.navigate('Catalogue')}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
