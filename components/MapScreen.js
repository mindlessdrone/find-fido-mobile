import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import { MapView, Constants } from 'expo';

export default class MapScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <MapView style={{ flex: 1 }}
          initialRegion={{
            latitude: 43.084587,
            longitude: -77.673881,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
        <Button 
          style={{
            position: 'absolute',
            bottom: '10px',
            right: '10px',
          }} 
          rounded 
          title="Button" 
          onPress={() => this.props.navigation.navigate('Camera') }/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});