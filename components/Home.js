import React from 'react';
import { StyleSheet, Button, View, Image } from 'react-native'
import { MapView, Constants } from 'expo';

export default class Home extends React.Component{
    render() {
        return (
            <View style={styles.container}>
                
                <Image source ={require('./pup.png')} 
                    style={{width: 298, height: 178}}/>

                <Button

                    style={{
                        position: 'absolute',
                        bottom: '10px',
                        right: '10px',
                    }}
                    rounded
                    title = "Camera"
                    color='#9cc5a1'
                    onPress={() => this.props.navigation.navigate('Camera')} />
                <Button
                    style={{
                        position: 'absolute',
                        bottom: '10px',
                        right: '10px',
                    }}
                    rounded
                    title = "Map"
                    color='#9cc5a1'
                    onPress={() => this.props.navigation.navigate('Map')} />
            </View>
        );
    }    
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1f2421',
      alignItems: 'center',
      justifyContent: 'center',
    }

  });