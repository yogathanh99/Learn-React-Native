import React from 'react';
import axios from 'axios';
import { StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';

import ScreenConfig from './ScreenConfig';

axios.defaults.baseURL = 'http://localhost:3000';

const AppNavigator = createAppContainer(ScreenConfig);

export default function App() {
  return <AppNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
