/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './src/screens/loginScreen';
import SignupScreen from './src/screens/signupScreen';
import React from 'react';
import UsersList from './src/screens/usersList';
import {Provider} from 'react-redux';
import {Store} from './src/redux/stores';
import Listing from './src/screens/listing';
const App = () => {
  const Stacks = createStackNavigator();
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stacks.Navigator initialRouteName="LoginScreen">
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
      </NavigationContainer>
    </Provider>
  );
};
export default App;
