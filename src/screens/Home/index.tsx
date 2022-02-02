/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  View,
  TouchableHighlight,
  StatusBar
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import lastWatchedData from '../../../lastWatchedData.json';
import { COLORS } from '../../../constants';

const Home = () => {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.container}>

        <Image style={styles.avatarImage} source={require('../../assets/images/mainAvatar.png')} />

        <View style={styles.avatarInfoContainer}>
          <Text style={styles.avatarName}>Sophia</Text>
          <Text style={styles.avatarPoints}>270 points</Text>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Last watched</Text>
          <ScrollView horizontal>
            {lastWatchedData.map((film, index) =>
              <TouchableHighlight
                key={index}
                style={styles.imageContainer}
                //TODO navigate to detail page?
                onPress={() => console.log("PPRE")}
              >
                <Image
                  source={{
                    uri: film.image
                  }}
                  style={styles.imageContainer}
                />
              </TouchableHighlight>
            )}
          </ScrollView>
        </View>

        <View style={{ paddingHorizontal: 20, width: '100%', marginTop: 20 }}>
          <TouchableHighlight style={{ height: 112, width: '100%', backgroundColor: '#1f1f1f', borderRadius: 8 }}>
            <LinearGradient
              colors={COLORS.gradient}
              style={{ width: '100%', height: 112, justifyContent: 'center', alignItems: 'center', borderRadius: 8 }}>
              <Text style={styles.sectionTitle}>Catalogue</Text>
            </LinearGradient>
          </TouchableHighlight>
        </View>

      </View>
    </>
  )
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#2a2a2a',
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
    color: COLORS.textColor,
    fontSize: 32,
    fontWeigth: "800",
  },
  avatarPoints: {
    marginTop: 5,
    color: COLORS.textColor,
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
    color: COLORS.textColor,
    fontSize: 18,
    fontWeigth: "800",
  },
  imageContainer: {
    marginLeft: 10,
    width: 200,
    height: 112,
    borderRadius: 8
  }
}

export default Home;
