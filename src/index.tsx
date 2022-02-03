import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import Rankings from './screens/Rankings';
import Catalogue from './screens/Catalogue';
import Settings from './screens/Settings';
import Games from './screens/Games';
import {Theme, Colors} from './theme';
import MaterialIcon from './components/MaterialIcon';
import DailyReward from './screens/DailyReward';
import {Asset} from './hooks/useDataClient/types';
import Login from './screens/Login';
import Landing from './screens/Landing';

export type RootStackParamList = {
  Dashboard: undefined;
  Login: undefined;
  Landing: undefined;
  Catalogue: undefined;
  DailyReward: undefined;
  Game: {
    asset: Asset;
  };
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

const headerOptions = {
  headerStyle: {backgroundColor: Theme.background},
  headerTintColor: Theme.text,
  headerBackTitle: '',
};

// const tabBarCustomOptions = {
//   activeTintColor: Colors.yellow,
//   tabStyle: {
//     height: 60,
//     backgroundColor: Theme.background,
//     paddingVertical: 10,
//     paddingBottom: 0,
//   },
// };

const getTabIcon = (route: string, color: string) => {
  const iconMap = {
    Home: 'home',
    Rankings: 'signal-cellular-alt',
    Settings: 'settings',
  };
  return (
    <MaterialIcon name={(iconMap as any)[route]} color={color} size={30} />
  );
};

const HomeTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      sceneContainerStyle={{backgroundColor: Theme.background}}
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => getTabIcon(route.name, color),
        tabBarStyle: {
          height: 72,
          backgroundColor: Theme.background,
          paddingTop: 8,
          paddingBottom: 18,
        },
        tabBarActiveTintColor: Colors.yellow,
      })}>
      <Tab.Screen
        name="Rankings"
        component={Rankings}
        options={headerOptions}
      />
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Landing"
        component={Landing}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
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
      <Stack.Screen
        name="DailyReward"
        component={DailyReward}
        options={{...headerOptions, headerTitle: 'Daily Reward'}}
      />
    </Stack.Navigator>
  );
};

export default App;
