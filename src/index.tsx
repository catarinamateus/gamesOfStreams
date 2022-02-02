import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './screens/Home';
import Rankings from './screens/Rankings';
import Catalogue from './screens/Catalogue';
import Settings from './screens/Settings';

export type RootStackParamList = {
  Dashboard: undefined;
  Catalogue: undefined;
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeTabs = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Rankings" component={Rankings} />
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Dashboard"
        component={HomeTabs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Catalogue"
        component={Catalogue}
        options={{
          headerStyle: {backgroundColor: 'rgba(33,33,33,1)'},
          headerTintColor: 'white',
          headerBackTitle: '',
        }}
      />
    </Stack.Navigator>
  );
};

export default App;
