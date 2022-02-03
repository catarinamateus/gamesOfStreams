import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import Rankings from './screens/Rankings';
import Catalogue from './screens/Catalogue';
import Settings from './screens/Settings';
import Games from './screens/Games';
import {Theme, Colors} from './theme';
import {useAppContext} from './context';
import useDataClient from './hooks/useDataClient';
import MaterialIcon from './components/MaterialIcon';
import DailyReward from './screens/DailyReward';

export type RootStackParamList = {
  Dashboard: undefined;
  Catalogue: undefined;
  Game: undefined;
  DailyReward: undefined;
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

const headerOptions = {
  headerStyle: {backgroundColor: Theme.background},
  headerTintColor: Theme.text,
  headerBackTitle: '',
};

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
      <Tab.Screen name="Rankings" component={Rankings} />
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

const App = () => {
  const {setTotalPoints, user} = useAppContext();
  const {getUserPoints} = useDataClient();

  React.useEffect(() => {
    async function fetchData() {
      if (user) {
        const points = await getUserPoints(user.id);
        if (typeof points === 'number') {
          setTotalPoints(points);
        }
      }
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

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
      <Stack.Screen
        name="DailyReward"
        component={DailyReward}
        options={{...headerOptions, headerTitle: 'Daily Reward'}}
      />
    </Stack.Navigator>
  );
};

export default App;
