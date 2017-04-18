/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  NativeModules,
  AppRegistry,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Navigator
} from 'react-native';
import FirstPage from './js/ios/first_page';
import {LocalSetting} from './js/common/config';

export default class ReactIOSProj extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let promise = new Promise((resolver, rejector) => {
      NativeModules.RNBridge.getBundleId((error, bundleId) => {
        let params = {};
        params.appId = LocalSetting.appId;
        params.bundleId = bundleId;
        resolver(params);
      });
    }).then(params => {
      return (resolver, rejector) => {
        NativeModules.RNBridge.getAppVersion((error, appVersion) => {
          params.version = appVersion;
          resolver(params);
        })
      };
    }).then(params => {
      console.log(params);
    });
    let navigationBarRouteMapper = {
      LeftButton: (route, navigator, index, navState) => {
        if (index > 0) {
          return (
            <View style={[styles.navItem, styles.navLeft]}>
              <TouchableOpacity onPress={e => navigator.pop()}>
                <Text>LeftButton</Text>
              </TouchableOpacity>
            </View>
          );
        }
      },
      RightButton: (route, navigator, index, navState) => {

      },
      Title: (route, navigator, index, navState) => {
        return (
          <View style={styles.navItem}>
            <Text>{route.title}</Text>
          </View>
        );
      },
    };
    return (
      <Navigator
        navigationBar = {<Navigator.NavigationBar style={styles.navBar} routeMapper = {navigationBarRouteMapper}/>}
        initialRoute = {{name: 'FirstPage', title: 'FirstPage', component: FirstPage}}
        configureScene = {(route) => {
            return Navigator.SceneConfigs.PushFromRight;
        }}
        renderScene = {(route, navigator) => {
          let Component = route.component;
          if(route.component) {
             return <Component {...route.params} navigator={navigator} />
          }
        }}>
      </Navigator>
    );
  }
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#337ab7',
  },
  navItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navLeft: {
    marginLeft: 10,
  },
  navRight: {
    marginRight: 10,
  },
});

AppRegistry.registerComponent('ReactIOSProj', () => ReactIOSProj);
