import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  ChatPage,
  FriendsPage,
  Home,
  Mengikuti,
  Pengikut,
  ProfileDetail,
  SearchPage,
} from '../pages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigator} from '../components';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen
        name="SearchPage"
        component={SearchPage}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="FriendsPage"
        component={FriendsPage}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="ChatPage"
        component={ChatPage}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProfileDetail"
        component={ProfileDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Pengikut"
        component={Pengikut}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Mengikuti"
        component={Mengikuti}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
