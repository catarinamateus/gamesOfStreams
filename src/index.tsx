import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Home from './screens/Home';
import Rankings from './screens/Rankings';
import Catalogue from './screens/Catalogue';
import Settings from './screens/Settings';
import Games from './screens/Games';
import {Theme, Colors} from './theme';

export type RootStackParamList = {
  Dashboard: undefined;
  Catalogue: undefined;
  Game: undefined;
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

const headerOptions = {
  headerStyle: {backgroundColor: Theme.background},
  headerTintColor: Theme.text,
  headerBackTitle: '',
};

const tabBarCustomOptions = {
  activeTintColor: Colors.yellow,
  tabStyle: {
    height: 60,
    backgroundColor: Theme.background,
    paddingVertical: 10,
    paddingBottom: 0,
  },
}

const getTabIcon = (route: string, color: string) => {
  const iconMap = {
    Home: 'home',
    Rankings: 'signal-cellular-alt',
    Settings: 'settings',
  };
  return <Icon name={iconMap[route.name]} color={color} size={30} />;
};

const HomeTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      sceneContainerStyle={{backgroundColor: Theme.background}}
      tabBarOptions={tabBarCustomOptions}
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => getTabIcon(route, color),
      })}>
      <Tab.Screen name="Rankings" component={Rankings} options={headerOptions} />
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
        options={headerOptions}
      />
      <Stack.Screen name="Game" component={Games} options={headerOptions} />
    </Stack.Navigator>
  );
};

export default App;
