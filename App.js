import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import Auth from './components/navigation/auth';
import Navbar from './components/navigation/navbar';
import { useFonts } from 'expo-font';

// SCREEN
import Login from './screens/Login';
import Signup from './screens/Signup';
import { Provider } from 'react-redux';
import { store } from './store';
import Profile from './screens/Profile';
import Navigation from './components/navigation/otherNavigation';
import Message from './components/Alert/Message';

export default function App() {
  const Stack = createNativeStackNavigator();
  const [loaded] = useFonts({
    Poppins: require('./fonts/poppins/Poppins-Regular.ttf'),
    PoppinsBold: require('./fonts/poppins/Poppins-Bold.ttf'),
    PoppinsSemiBold: require('./fonts/poppins/Poppins-SemiBold.ttf'),
    Montserrat: require('./fonts/Montserrat/Montserrat-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={Navbar}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Other"
            component={Navigation}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Alert"
            component={Message}
            options={{
              headerShown: false,
              presentation: 'transparentModal',
              cardOverlayEnabled: true,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
