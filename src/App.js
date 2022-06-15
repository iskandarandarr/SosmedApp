import {NavigationContainer} from '@react-navigation/native';
import {LogBox} from 'react-native';
import Router from './router';
import React from 'react';

LogBox.ignoreAllLogs();

const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default App;
