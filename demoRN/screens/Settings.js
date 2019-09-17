import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Settings extends Component {
  static navigationOptions = {
    title: 'Settings',
  };

  render() {
    return (
      <View>
        <Text>Settings</Text>
      </View>
    );
  }
}
