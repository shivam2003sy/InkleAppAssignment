import React from 'react';
import { View, Text, Button } from 'react-native';
import Logout from './Logout';

const Home = () => {
 
  const handleLogout = () => {
    console.log('logout');
   
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text
      style ={{
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 20,
        color: 'white',
      }}
      >

        Welcome to Home!</Text>
      <Logout />
    </View>
  );
};

export default Home;
