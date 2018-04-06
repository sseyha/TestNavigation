/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import { StackIndex } from './screen/StackIndex';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex:1, backgroundColor:'red'}}>
          <TouchableOpacity onPress={()=>this.buttonClick(this.props.navigation)}>
            <Text style={styles.welcome}>
              Click
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flex:5}}>
          <StackIndex />
        </View>
      </View>
    );
  }

  buttonClick(obj){
    console.log(111, obj);
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: 'transparent',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color:'#fff',
    margin: 40,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
