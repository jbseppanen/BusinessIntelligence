import React from 'react';
import { View, Text, FlatList } from 'react-native';

export default class BusinessDetail extends React.Component {
  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('id', 'NO-ID');
    const name = navigation.getParam('name', 'unknown');
    const location = navigation.getParam('location', 'unknown');
    const revenue = navigation.getParam('revenue', []);


    return <View>
      <Text>{name}</Text>
      <Text>{location.address}</Text>
      <Text>{location.city}</Text>
      <Text>{location.country}</Text>
      <FlatList
        data={revenue}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) =>
          <View>
            <Text>Date: {item.date}</Text>
            <Text>Value: {item.value}</Text>
          </View>
        }
        keyExtractor={item => item.seq.toString()}
      />


    </View>
  }
}