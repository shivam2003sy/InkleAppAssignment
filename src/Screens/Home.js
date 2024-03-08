import React, { useEffect } from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MoviesScreen from './MoviesScreen';
import SeriesScreen from './SeriesScreen';
import ProfileScreen from './ProfileScreen';
import { fetchTrendingMovies } from '../services/api';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

const Home = () => {
 
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Movies') {
              iconName = 'local-movies';
            } else if (route.name === 'Series') {
              iconName = 'tv';
            } else if (route.name === 'Profile') {
              iconName = 'person';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Movies" component={MoviesScreen} />
        <Tab.Screen name="Series" component={SeriesScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </View>
  );
};

export default Home;
