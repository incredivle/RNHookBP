import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './NavigationService';
import SignInScreen from '../screens/Authentication/Login';
import SignUpScreen from '../screens/Authentication/SignUp'

const Stack = createStackNavigator();

const HomeScreen = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

const AuthScreen = () => {
  return (
    <Stack.Navigator initialRouteName="SignIn">
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      {/* <Stack.Screen name="ResetPassword" component={ResetPassword} /> */}
    </Stack.Navigator>
  );
}


export default App = () => {
  const isLoggedIn = false
  // const isLoggedIn = useSelector(state => state.loginReducer.isLoggedIn);

  //for splash screen
  // if (state.isLoading) {
  //   // We haven't finished checking for the token yet
  //   return <SplashScreen />;
  // }


  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        {false ? (
          // No token found, user isn't signed in
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: 'Sign in',
              headerShown: false,
              // When logging out, a pop animation feels intuitive
              // You can remove this if you want the default 'push' animation
              animationTypeForReplace: state.isSignout ? 'pop' : 'push',
            }}
          />
        ) : (
            // User is signed in
            <Stack.Screen name="Auth" component={AuthScreen} options={{ headerShown: false }} />
          )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}


// import React from 'react';
// import {createAppContainer, createSwitchNavigator} from 'react-navigation';
// // import {createStackNavigator} from 'react-navigation-stack';

// import LoginScreen from '../screens/Login'

// export default createAppContainer(
//   createSwitchNavigator(
//     {
//       // AuthLoadingScreen: AuthLoadingScreen,
//       // App: RootStack,
//       // Auth: AuthStack,
//       LoginScreen: LoginScreen
//     },
//     {
//       initialRouteName: 'LoginScreen',
//     },
//   ),
// );
