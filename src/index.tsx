import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './screens/Home';
import Rankings from './screens/Rankings';
import Catalogue from './screens/Catalogue';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {

  return (
    <>
      <Tab.Navigator>
        <Tab.Screen name="Rankings" component={Rankings} />
        <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Tab.Screen name="Settings" component={Home} />
      </Tab.Navigator>
    </>
  );
};

export default TabNavigator;
