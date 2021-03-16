/**
 * @format
 */

import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import {} from 'react-native-paper';
import App from './android/app/src/pages/SplashScreen';
import { name as appName } from './app.json';

//correção
AppRegistry.registerComponent('main', () => App);
AppRegistry.registerComponent(appName, () => App);
