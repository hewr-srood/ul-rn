import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';

const WelcomeScreen = () => {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/background.jpg')}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')} />
        <Text>Sell WHat You Don't Need</Text>
      </View>
      <View style={styles.loginBtn} />
      <View style={styles.registerBtn} />
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logoContainer: { position: 'absolute', top: '40%', alignItems: 'center' },
  logo: {
    width: 100,
    height: 100,
  },
  loginBtn: {
    width: '100%',
    height: 70,
    backgroundColor: '#fc5c65',
  },
  registerBtn: {
    width: '100%',
    height: 70,
    backgroundColor: '#4ecdc4',
  },
});
export default WelcomeScreen;
