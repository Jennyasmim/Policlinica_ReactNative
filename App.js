import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './HomeScreen';
import ContainerScreen from './ContainerScreen';
import MapScreen from './MapScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Início',
            headerStyle: { backgroundColor: '#4A90E2' },
            headerTintColor: '#FFF',
          }}
        />
        <Stack.Screen
          name="Container"
          component={ContainerScreen}
          options={{
            title: 'Policlínica',
            headerStyle: { backgroundColor: '#4A90E2' },
            headerTintColor: '#FFF',
          }}
        />
        <Stack.Screen
          name="Map"
          component={MapScreen}
          options={{
            title: 'Mapa da Policlínica',
            headerStyle: { backgroundColor: '#4A90E2' },
            headerTintColor: '#FFF',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
