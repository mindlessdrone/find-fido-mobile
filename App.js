import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapScreen from './components/MapScreen';
import CameraScreen from './components/CameraScreen';

import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from './components/Home';


class DetailsScreen extends React.Component {

  render() {
    return (
      <View style={{flex: 1, alignContent: 'center', justifyContent: 'center'}}>
        <Text>Details</Text>
      </View>
    );
  }
}


const AppNavigator = createStackNavigator({
  Home: Home,
  Map: MapScreen,
  Camera: CameraScreen,
},
{
  initialRouteName: "Home",
});

export default createAppContainer(AppNavigator);