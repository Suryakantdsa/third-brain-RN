import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import {navigationRef} from '../utils/NavigationUtils';
import GetStartedScreen from '../screens/GetStartedScreen';
import OnboardScreen from '../screens/OnboardScreen';
import SignupScreen from '../screens/SignupScreen';
import HomeScreen from '../screens/HomeScreen';
import {ProfileModal} from '../components/models/ProfileModel';
const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Group>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="SignupScreen" component={SignupScreen} />
          <Stack.Screen name="GetStartedScreen" component={GetStartedScreen} />
          <Stack.Screen name="OnboardScreen" component={OnboardScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Group>
        {/* <Stack.Group
          screenOptions={{
            presentation: 'transparentModal',
            contentStyle: {
              backgroundColor: 'transparent',
            },
            animation: 'slide_from_left',
          }}>
          <Stack.Screen
            name="ProfileModel"
            options={{
              gestureEnabled: true,
              gestureDirection: 'horizontal',
            }}
            component={ProfileModal}
          />
        </Stack.Group> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
