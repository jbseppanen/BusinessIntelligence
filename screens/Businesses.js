import React from 'react';
import { FlatList, Text } from 'react-native';

export default class Businesses extends React.Component {
  render() {
    const data = require("../data");
    let companyList = data.map(a => a.name)
    return <Text>{companyList[0]}</Text>
    // return <FlatList />
  }
}