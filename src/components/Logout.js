import React from 'react';
import { Button } from 'react-native';
import auth from '@react-native-firebase/auth';

const Logout = () => {
  const signOut = async () => {
    try {
      await auth().signOut();
      console.log('User signed out successfully');
    } catch (error) {
      console.error('Sign Out Error: ', error);
    }
  };

  return <Button title="Logout" onPress={signOut} />;
};

export default Logout;
