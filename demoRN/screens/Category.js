import React from 'react';
import axios from 'axios';
import { View, FlatList, StyleSheet } from 'react-native';

import ProductItem from '../components/ProductItem';

class Category extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('categoryName'),
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    const { navigation } = this.props;
    const id = navigation.getParam('id');
    axios
      .get(`/products?category=${id}`)
      .then(res => {
        this.setState({ products: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <FlatList
        contentContainerStyle={styles.container}
        data={this.state.products}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.wrapper}>
            <ProductItem product={item} />
          </View>
        )}
        keyExtractor={item => `${item.id}`}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingTop: 16,
  },
  wrapper: {
    paddingHorizontal: 8,
    flex: 1,
  },
});

export default Category;
