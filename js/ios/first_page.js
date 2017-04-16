import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import SecondPage from './second_page';
import {CommonStyles} from '../common/common_styles';

export default class FirstPage extends Component {
  constructor(props) {
    super(props);
  }

  onWelcomePress(e) {
    alert("hi..");
  }

  onGotonextPress(e) {
    const {navigator} = this.props;
    navigator.push({
      name: 'SecondPage',
      title: 'SecondPage',
      component: SecondPage,
      params: {

      },
    });
  }

  render() {
    return (
      <View style={CommonStyles.container}>
        <TouchableHighlight style={styles.button_highlight} onPress={e => this.onWelcomePress(e)} underlayColor='#3F3F3F'>
          <Text style={styles.button_text}>
            Welcome to React Native!
          </Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button_highlight} onPress={e => this.onGotonextPress(e)} underlayColor='#3F3F3F'>
          <Text style={styles.button_text}>
            Go to next page!
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button_highlight: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    margin: 10,
  },
  button_text: {
    fontSize: 20,
    textAlign: 'center',
  },
});
