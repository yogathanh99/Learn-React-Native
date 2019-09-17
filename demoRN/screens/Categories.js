import React from 'react';
import axios from 'axios';
import { StyleSheet, FlatList } from 'react-native';

import ListItem from '../components/ListItem';

export default class Categories extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    axios
      .get('/categories')
      .then(res => {
        this.setState({
          categories: res.data,
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { categories } = this.state;
    const { navigation } = this.props;
    return (
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <ListItem
            cate={item}
            onPress={() =>
              navigation.navigate('Category', {
                categoryName: item.name,
                id: item.id,
              })
            }
          />
        )}
        keyExtractor={item => `${item.id}`}
        contentContainerStyle={styles.container}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
  },
});
