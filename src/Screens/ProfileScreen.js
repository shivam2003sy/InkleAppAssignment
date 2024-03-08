import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/authActions';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const { email, familyName, givenName, name, photo } = useSelector((state) => state.auth.user.user);

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={{ uri: photo }} style={styles.profileImage} />
        <Text style={styles.displayName}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Logout" onPress={() => dispatch(logout())} color="#DB4437" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  displayName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#333333',
  },
  email: {
    fontSize: 16,
    color: '#666666',
    marginTop: 5,
  },
  buttonContainer: {
    width: '70%',
    borderRadius: 8,
    overflow: 'hidden',
  },
});

export default ProfileScreen;
