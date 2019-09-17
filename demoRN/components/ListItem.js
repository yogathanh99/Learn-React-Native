import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';

import Cosmetic from '../assets/makeup.png';

const ListItem = ({ cate, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.title}>{cate.name}</Text>
        <Image style={styles.containerImage} source={Cosmetic} />
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    elevation: 5,
    alignItems: 'center',
    padding: 16,
    borderRadius: 4,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    marginBottom: 16,
  },
  title: {
    textTransform: 'uppercase',
    marginBottom: 8,
    fontWeight: '700',
  },
  containerImage: {
    width: 64,
    height: 64,
  },
});
