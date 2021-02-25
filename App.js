/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
// import { Text } from 'galio-framework';

const image = { uri: "https://devfrontend.com.br/img_vdf/refletindo.jpg" };

const App = () => (
  <View style={styles.container}>
    <ImageBackground source={image} style={styles.image}>
      <Text style={styles.text}>Visão de fora</Text>
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