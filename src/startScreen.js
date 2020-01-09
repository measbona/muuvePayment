import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';

export default class startScreen extends Component {
  render() {
    return(
      <View style={styles.mainScreen}>
        <View style={styles.logoPosition}>
          <Image style={styles.imageLogo} source={require('./images/muuveStrokeWhite.png')}/>
        </View>
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size="large" color="#fff" />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
    backgroundColor: "#FBD02F"
  },
  imageLogo: {
    height: 300,
    width: 300
  },
  logoPosition: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 200
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 60
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
})
