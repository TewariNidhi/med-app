import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import { MyHeader } from '../components/header';

export default class Saturn extends React.Component {
  render() {
    return (
      <View>
        <MyHeader title="Saturn" />
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignitems: 'center',
          }}>
          <ImageBackground
            source={require('../assets/starry_background.jpg')}
            style={{
              flex: 1,
              resizeMode: 'cover',
              justifyContent: 'center',
              width: '100%',
              height: 700,
            }}>
            <Image
              source={require('../assets/saturn.jpg')}
              style={{
                width: 315,
                height: 150,
                resizeMode: 'contain',
              }}
            />
            <Text style={styles.textStyle}>Saturn</Text>
            <Text style={{ color: 'aqua' }}></Text>
          </ImageBackground>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    color: 'aqua',
  },
});
