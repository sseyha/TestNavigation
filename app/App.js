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

import { NavigationActions } from 'react-navigation';
import { StackIndex } from './screen/StackIndex';

export default class App extends Component {
  render() {


    return (
      <View style={styles.container}>
        <View style={{flex:1, backgroundColor:'red'}}>
          <TouchableOpacity onPress={()=>this._onPress()}>
            <Text style={styles.welcome}>
              Navigate to Screen 2
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flex:5}}>
          <StackIndex />
        </View>
      </View>
    );
  }

  _onPress(){
    console.log(123, NavigationActions);
    NavigationActions.navigate({ routeName: 'Screen2' });
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
