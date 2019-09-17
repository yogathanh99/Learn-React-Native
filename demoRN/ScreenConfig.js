import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import Categories from './screens/Categories';
import Category from './screens/Category';
import Orders from './screens/Orders';
import Cart from './screens/Cart';
import Settings from './screens/Settings';

const color = {
  ACTIVE: '#147efb',
  INACTIVE: '#ccc',
};

const CategoriesStack = createStackNavigator({
  Categories,
  Category,
});
CategoriesStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => {
    return (
      <Icon
        name='ios-home'
        size={20}
        color={focused ? color.ACTIVE : color.INACTIVE}
      />
    );
  },
};

const OrderStack = createStackNavigator({ Orders });
OrderStack.navigationOptions = {
  tabBarLabel: 'Orders',
  tabBarIcon: ({ focused }) => {
    return (
      <Icon
        name='ios-wallet'
        size={20}
        color={focused ? color.ACTIVE : color.INACTIVE}
      />
    );
  },
};

const SettingsStack = createStackNavigator({ Settings });
SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => {
    return (
      <Icon
        name='ios-settings'
        size={20}
        color={focused ? color.ACTIVE : color.INACTIVE}
      />
    );
  },
};

const CartStack = createStackNavigator({ Cart });
CartStack.navigationOptions = {
  tabBarLabel: 'Cart',
  tabBarIcon: ({ focused }) => {
    return (
      <Icon
        name='ios-cart'
        size={20}
        color={focused ? color.ACTIVE : color.INACTIVE}
      />
    );
  },
};

const AppNavigator = createBottomTabNavigator({
  CategoriesStack,
  CartStack,
  OrderStack,
  SettingsStack,
});

export default AppNavigator;
