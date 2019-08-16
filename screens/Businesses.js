import React from 'react';
import { FlatList, Text, StyleSheet, View, Button } from 'react-native';

export default class Businesses extends React.Component {
  render() {
    const jData = require("../data");
    let companyList = jData.map(a => a.name)

    return (
      <View style={styles.container} >
        <Text style={styles.h2text}>
          Companies
      </Text>
        <FlatList
          data={jData}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) =>
            <View style={styles.flatview}>
              <Text style={styles.name}>{item.name}</Text>
              <Button
                title="See Details"
                onPress={() => this.props.navigation.navigate('Profile', item)}
              />
            </View>
          }
          keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  h2text: {
    marginTop: 10,
    fontFamily: 'Helvetica',
    fontSize: 36,
    fontWeight: 'bold',
  },
  flatview: {
    justifyContent: 'center',
    paddingTop: 30,
    borderRadius: 2,
  },
  name: {
    fontFamily: 'Verdana',
    fontSize: 18
  },
  secondary: {
    color: 'red'
  }
});