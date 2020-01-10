import React, { useEffect } from 'react';
import { View, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { withNavigation } from 'react-navigation'

const startScreen = (props) => {

  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate("HomeScreen")
    }, 2000);
  }, [])

  return(
    <View style={styles.mainScreen}>
      <View style={styles.logoPosition}>
        <Image style={styles.imageLogo} source={require('../images/muuveStrokeWhite.png')}/>
      </View>
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    </View>
  )
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


export default withNavigation(startScreen)
