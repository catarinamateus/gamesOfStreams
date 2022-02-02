import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './screens/Home';
import Catalogue from './screens/Catalogue';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Catalogue" component={Catalogue} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settingsß" component={Home} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
