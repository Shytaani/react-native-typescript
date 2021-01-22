import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import PlayerScreen from './screens/PlayerScreen';
import CoachScreen from './screens/CoachScreen';

const Drawer = createDrawerNavigator();

export default function RosterRouter() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="PLAYER" component={PlayerScreen} />
      <Drawer.Screen name="COACH" component={CoachScreen} />
    </Drawer.Navigator>
  );
}
