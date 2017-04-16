import React, { Component } from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {CommonStyles} from '../common/common_styles';

export default class SecondPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={CommonStyles.container}>
        <Text>Hello world!</Text>
      </View>
    );
  }
}
