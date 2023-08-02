/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import PlayerNameScreen from './src/screens/PlayersName';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import store from './src/Redux/Store';
import Score from './src/screens/Score';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Enter Players"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#3495eb',
            },
            headerTintColor:'#FFFFFF',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#FFFFFF',
            },
            headerTitleAlign: 'center',
          }}>
          <Stack.Screen
            name="Enter Players"
            component={PlayerNameScreen}
            options={{
              title: 'Enter Players',
            }}
          />
          <Stack.Screen
            name="Score"
            component={Score}
            options={{
              title: 'Score',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
