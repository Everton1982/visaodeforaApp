/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

//correção
AppRegistry.registerComponent('main', () => App);
AppRegistry.registerComponent(appName, () => App);
