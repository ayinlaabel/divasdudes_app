import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../../screens/Profile';
import Security from '../../screens/Security';
import Account from '../../screens/Account';

const Stack = createNativeStackNavigator();

const Navigation = ({ route }) => {
  console.log(route);
  return (
    <Stack.Navigator initialRouteName={route.params}>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Security"
        component={Security}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Account"
        component={Account}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
