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
      <Text style={styles.address} >{location.city} {location.country}</Text>
      <View style={{ flex: 1 }}>
        <RNChartView
          style={{ flex: 1 }}
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
  },

  name: {
    textAlign: 'center',
    fontFamily: 'Verdana',
    fontSize: 40
  },
  address: {
    textAlign: 'center',
    fontFamily: 'Helvitica',
    fontSize: 16
  }
});