import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {RootStackParamList} from '../..';
import {Theme} from '../../theme';

const Landing = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        style={styles.container}
        source={require('../../assets/images/backImage.png')}>
        <View style={styles.overlay} />
        <Image
          style={styles.logoImage}
          source={require('../../assets/images/logos-client-logo.png')}
        />
        <Text style={styles.titleText}>Games Of Streams</Text>
        <Text style={styles.descriptionText}>Let the games begin...</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>SIGN IN</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.background,
    padding: 32,
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    position: 'absolute',
    backgroundColor: 'black',
    height: windowHeight,
    width: windowWidth,
    opacity: 0.5,
  },
  logoImage: {
    marginTop: 120,
    marginBottom: 120,
    width: 160,
    height: 90,
  },
  titleText: {
    fontSize: 40,
    color: Theme.text,
    marginBottom: 20,
  },
  descriptionText: {
    fontSize: 20,
    color: Theme.text,
  },
  button: {
    backgroundColor: Theme.button.background,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 65,
    height: 52,
    borderRadius: 26,
    borderColor: 'transparent',
  },
  buttonText: {
    color: Theme.button.text,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Landing;
