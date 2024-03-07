import React from 'react';
import { SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux'; // Import useSelector
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './components/Home';
import Login from './components/Login';


const Router = () => {
  const Stack = createNativeStackNavigator();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

return (
  <SafeAreaView style={{ flex: 1 }}>
    <NavigationContainer>
      <Stack.Navigator>
        {isAuthenticated ? (
          <Stack.Screen name="Home" component={Home} />
        ) : (
          <Stack.Screen name="Login" component={Login} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaView>
);
} 

export default Router;
