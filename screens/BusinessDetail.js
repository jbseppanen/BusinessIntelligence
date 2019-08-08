import React from 'react';
import { View, Text } from 'react-native';

export default class BusinessDetail extends React.Component {
  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('id', 'NO-ID');
    const name = navigation.getParam('name', 'unknown');

    return <Text>{name}</Text>
    // return <View />;
  }
}