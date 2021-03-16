import { createStackNavigator, createAppContainer } from 'react-navigation';
import SplashScreen from './pages/SplashScreen';
// import Login from './pages/Login';

const App = createStackNavigator({
    Splash: { Screen: SplashScreen, navigationOptions: { header: null } }
    // Login: { Screen: Login, navigationOptions: { header: null } }
})

export default createAppContainer(App);
