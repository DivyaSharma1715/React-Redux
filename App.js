/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import {View, Text, Image} from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './src/screens/loginScreen';
import SignupScreen from './src/screens/signupScreen';
import React from 'react';
import UsersList from './src/screens/usersList';
import HomeScreen from './src/screens/homeScreen';
import Setting from './src/screens/setting';
import {Provider} from 'react-redux';
import {Store} from './src/redux/stores';
import Listing from './src/screens/listing';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

const App = () => {
  const Stacks = createStackNavigator();
  const BottomTab = createBottomTabNavigator();
  const Drawer = createDrawerNavigator();

  const allStackNavigators = () => {
    return (
      <Stacks.Navigator>
        <Stacks.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stacks.Screen
          name="SignupScreen"
          component={SignupScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stacks.Screen
          name="UsersList"
          component={UsersList}
          options={{
            headerShown: false,
          }}
        />
        <Stacks.Screen
          name="Listing"
          component={Listing}
          options={{
            headerShown: false,
          }}
        />
      </Stacks.Navigator>
    );
  };
  const allTabs = () => {
    return (
      <BottomTab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color}) => {
            return <View></View>;
          },
        })}>
        <BottomTab.Screen
          name="Login"
          component={allStackNavigators}
          options={{
            headerShown: false,
          }}
        />
        <BottomTab.Screen
          name="Home screen"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <BottomTab.Screen
          name="Settings"
          component={Setting}
          options={{
            headerShown: false,
          }}
        />
      </BottomTab.Navigator>
    );
  };

  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="LoginScreen">
          <Drawer.Screen name="LoginScreen" component={allTabs} />
          <Drawer.Screen name="HomeScreen" component={HomeScreen} />
          <Drawer.Screen name="Settings" component={Setting} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default App;
