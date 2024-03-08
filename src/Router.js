import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from './Screens/SearchScreen';
import Home from './Screens/Home';
import Login from './Screens/Login';

import SingleCard from './components/SingleCard';


import { useDispatch } from 'react-redux';
import { loginSuccess } from './actions/authActions';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Router = () => {
  const Stack = createNativeStackNavigator();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkAuth = async () => {
      const user = await AsyncStorage.getItem('user');
      console.log('user', user);
      const parsedUser = JSON.parse(user);
      if (parsedUser) {
        dispatch(loginSuccess(parsedUser));
      }
    };
    checkAuth();
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          {isAuthenticated ? (
            <>
              <Stack.Screen name="Home" component={Home} />

              <Stack.Screen
                name="SearchScreen"
                component={SearchScreen}
                options={{ headerShown: true }} // Show header for SearchScreen
              />
              <Stack.Screen name='SingleCard' 
              component={SingleCard}
              options={{headerShown: true}}
              />
            </>
          ) : (
            <Stack.Screen name="Login" component={Login} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Router;
