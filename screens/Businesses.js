import React from 'react';
import { FlatList, Text, StyleSheet, View, Button } from 'react-native';

export default class Businesses extends React.Component {
  render() {
    const jData = require("../data");

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
    backgroundColor: '#F5FCFF',
  },
  h2text: {
    textAlign: "center",
    alignSelf: 'stretch',
    marginTop: 10,
    fontFamily: 'Helvetica',
    fontSize: 36,
    fontWeight: 'bold',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  flatview: {
    flex: 1,
    marginStart: 8,
    marginEnd: 8,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingTop: 30,
    borderRadius: 2,
  },
  name: {
    textAlign: "center",
    fontFamily: 'Verdana',
    fontSize: 24
  },
  secondary: {
    color: 'red'
  }
});