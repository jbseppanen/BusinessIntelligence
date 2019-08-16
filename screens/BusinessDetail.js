import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RNChartView from './ChartView'

export default class BusinessDetail extends React.Component {
  render() {
    const { navigation } = this.props;
    const name = navigation.getParam('name', 'unknown');
    const location = navigation.getParam('location', 'unknown');
    const revenue = navigation.getParam('revenue', []);

    return <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.address}>{location.address}</Text>
      <Text>{location.city}</Text>
      <Text>{location.country}</Text>
      <View style={{ flex: 2 }}>
        <RNChartView
          style={{ flex: 2 }}
          data={{ axisLabel: "Revenue", dataList: revenue, description: "Months" }}
        />
      </View>
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    justifyContent: 'center',
    // backgroundColor: '#F5FCFF',
  },

  name: {
    fontFamily: 'Verdana',
    fontSize: 20
  },
  address: {
    fontFamily: 'Helvitica',
    fontSize: 16
  }
});