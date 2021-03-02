/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import * as Animatable from 'react-native-animatable';

const image = { uri: "https://devfrontend.com.br/img_vdf/refletindo.jpg" };

const App = () => (
  <View style={styles.container}>
    <ImageBackground source={image} style={styles.image}>
      <Animatable.Text animation="zoomInUp" style={styles.text}>Visão de fora</Animatable.Text>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center"
  }
});


export default App;