import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import SCREEN_NAME from '../ui/screens/Const';
import SplashContainer from '../ui/screens/splash/SplashContainer';
import MainContainer from '../ui/screens/main/MainContainer';
import {navigationRef} from '../navigation/Navigate';
import LandingContainer from '../ui/screens/landing/LandingContainer';
import SignupContainer from '../ui/screens/signup/SignupContainer';
import LoginContainer from '../ui/screens/login/LoginContainer';
import { Colors } from '../assets';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

/**
 * Declare all screen on your project
 * To navigate between screens using functions on #Navigate
 * */
const Tab = createBottomTabNavigator();
function TabStack() {
  return (
    <Tab.Navigator
      initialRouteName="FirstPage"
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'green',
        style: {
          backgroundColor: Colors.main,
        },
        labelStyle: {
          textAlign: 'center',
        }
      }}>
      <Tab.Screen
        name="FirstPage"
        component={MainContainer}
        options={{
          tabBarLabel: 'Tab 1',
        }}  />
      <Tab.Screen
        name="SecondPage"
        component={MainContainer}
        options={{
          tabBarLabel: 'Tab 2',
        }} />
    </Tab.Navigator>
  );
}

const AppStackNavigator = () => {
  const Stack = createStackNavigator();

  return (
    // @ts-ignore
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={SCREEN_NAME.SPLASH_SCREEN}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name={SCREEN_NAME.SPLASH_SCREEN}
          component={SplashContainer}
        />
        <Stack.Screen
          name={SCREEN_NAME.MAIN_SCREEN}
          component={MainContainer}
        />
        <Stack.Screen
          name={SCREEN_NAME.LANDING_SCREEN}
          component={LandingContainer}
        />
        <Stack.Screen
          name={SCREEN_NAME.LOGIN_SCREEN}
          component={LoginContainer}
        />
        <Stack.Screen
          name={SCREEN_NAME.SIGNUP_SCREEN}
          component={SignupContainer}
        />
        <Stack.Screen name={SCREEN_NAME.TABSTACK} component={TabStack}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStackNavigator;
