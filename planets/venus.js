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

export default class Venus extends React.Component {
  render() {
    return (
      <View>
        <MyHeader title="Venus" />
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
              source={require('../assets/venus.jpg')}
              style={{ width: 315, height: 300, justifyContent: 'center' }}
            />
            <Text style={styles.textStyle}>Venus</Text>
            <Text style={{ color: 'aqua' }}>
              The second planet from the sun, Venus has a thick, toxic
              atmosphere filled with carbon dioxide and it’s perpetually
              shrouded in thick, yellowish clouds of mostly sulfuric acid that
              trap heat, causing a runaway greenhouse effect. With a surface
              temperature of 900 degrees Fahrenheit (465 degrees Celsius) It’s
              the hottest planet in our solar system, even though Mercury is
              closer to the Sun. Venus has crushing air pressure at its surface
              – more than 90 times that of Earth – similar to the pressure you'd
              encounter a mile below the ocean on Earth.One day on Venus lasts
              243 Earth days because Venus spins backwards, with its sun rising
              in the west and setting in the east.it’s surface is a volcanic
              landscape covered with extensive plains featuring high volcanic
              mountains and vast ridged plateaus.It is named after the roman
              goddess Venus
            </Text>
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
