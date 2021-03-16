import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { Button, Title, TextInput, configureFonts } from 'react-native-paper';
import AppLoading from 'expo-app-loading';
// import { useFonts } from 'expo-font';
import '../../../../../react-native.config';
import image from '../../img/splash/refletindo.jpg';
import * as Animatable from 'react-native-animatable';

// const image = './android/app/src/img/splash/refletindo.jpg';

function Splash({ navigation }) {
    setTimeout(() => {
        navigation.replace('Login');
    }, 5000);
    return (
        <ImageBackground source={image} style={styles.image}>
            <View>
                <Animatable.Text animation="zoomInUp" style={styles.text}>Visão de fora</Animatable.Text>

            </View>
        </ImageBackground>
    );
}

function Login() {
  
        return (
            <View style={styles.container}>
                <View style={styles.titleView}>
                    <Title style={styles.title}>Visão de fora</Title>
                </View>
                <View>
                    <Title style={styles.textView}>" De nada vale tentar ajudar aqueles que não se ajudam a si mesmos."</Title>
                    <Title style={styles.author}>Confúcio</Title>
                </View>
                <View style={styles.form}>
                    <TextInput style={styles.input}
                        label="Nome"
                        mode="Outlined"
                        onChangeText={text => setText(text)}
                    />
                    <TextInput style={styles.input}
                        label="Email"
                        mode="Outlined"
                        onChangeText={text => setText(text)}
                    />
                    <TextInput style={styles.input}
                        label="Senha"
                        mode="Outlined"
                        onChangeText={text => setText(text)}
                    />
                    <Button style={styles.button} mode="contained" onPress={() => alert('Usuário logado!')}>
                        Cadastrar e entrar
                </Button>
                </View>
            </View>
        );
}

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash" headerMode="none">
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="Login" component={Login} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        padding: 30
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
    },
    titleView: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
    },
    textView: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'normal'
    },
    author: {
        textAlign: 'center',
        fontSize: 14,
        fontStyle: 'italic',
        marginBottom: 40
    },
    title: {
        fontSize: 45,
        paddingTop: 100,
        flex: 1,
        textAlign: 'center',
        color: '#757575',
        fontFamily: 'Cinzel Decorative'
    },
    form: {
        flex: 2
    },
    input: {
        width: 330,
        backgroundColor: 'transparent'
    },
    button: {
        marginTop: 50,
        marginBottom: 15,
        width: 330,
        padding: 5
    }
});



// export default class Splash extends Component {

//     constructor(props) 
//     {
//         super(props);

//         setTimeout(() => 
//         {

//           navigation.navigate("Login");

//         }, 5000);
//     }

//     render() 
//     {
//         return (
//             <ImageBackground source={image} style={styles.image}>
//                 <View>
//                     <Animatable.Text animation="zoomInUp" style={styles.text}>Visão de fora</Animatable.Text>
//                 </View>
//             </ImageBackground>
//         )
//     }
// }

