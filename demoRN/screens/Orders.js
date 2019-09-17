import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Orders extends Component {
  static navigationOptions = {
    title: 'Orders',
  };

  render() {
    return (
      <View>
        <Text>Orders</Text>
      </View>
    );
  }
}
