import React from 'react';
import { Camera, Permissions, FileSystem } from 'expo';
import { Text, View, TouchableOpacity, Button, Icon } from 'react-native';

export default class CameraScreen extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };

  onPictureSaved = async photo => {
    console.log(photo)
}


  takePicture = () => {
    if (this.camera) {
      this.camera.takePictureAsync({ base64: true }).then(this.onPictureSaved());
    }
  };


  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }


  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera  ref={ref => {
          this.camera = ref;}} style={{ flex: 1 }} type={this.state.type}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => {
                  this.setState({
                    type: this.state.type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back,
                  });
                }}>
                <Text
                  style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                  {' '}Flip{' '}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={this.takePicture.bind(this)}
                >
                <Text
                  style={{ fontSize: 18, marginBottom: 20, color: 'white' }}>
                  {' '}Take Pic{' '}
                </Text>
              </TouchableOpacity>

            </View>
          </Camera>
        </View>
      );
    }
  }
}