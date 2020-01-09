import React, { Component, useState } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { CreditCardInput } from "react-native-credit-card-input";
import startScreen from "./startScreen"

export default class homeScreen extends Component {
  render() {
    return (
      <View style={styles.screenLayout}>
        <View style={styles.labelView}>
          <Text style={styles.fontLabel}>
            Muuve Payment
          </Text>
        </View>
        <View style={styles.bankCard}>
          <CreditCardInput onChange={this._onChange} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fontLabel: {
    fontSize: 48,
    color: "#fff",
    fontFamily: "CourierNewPS-BoldMT",
    flex: 1
  },
  labelView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100
  },
  screenLayout: {
    flex: 1,
    backgroundColor: "#FBD02F"
  },
  bankCard: {
    flex: 1,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 200
  }
})
