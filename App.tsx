import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './src';
import AppContextProvider from './src/context';

export default function App() {
  return (
    <AppContextProvider>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </AppContextProvider>
  );
}
