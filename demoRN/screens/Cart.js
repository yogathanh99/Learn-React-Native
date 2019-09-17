import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Cart extends Component {
  static navigationOptions = {
    title: 'Cart',
  };

  render() {
    return (
      <View>
        <Text>Cart</Text>
      </View>
    );
  }
}
