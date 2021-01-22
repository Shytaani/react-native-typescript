import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MenuScreen from './screens/MenuScreen';
import HomeScreen from './screens/HomeScreeen';
import RosterScreen from './screens/RosterScreen';

const Stack = createStackNavigator();

export default function MainRouter() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HOME" component={HomeScreen} />
        <Stack.Screen name="MENU" component={MenuScreen} />
        <Stack.Screen name="ROSTER" component={RosterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
