import React  , {useEffect}from 'react';
import { Button } from 'react-native';
import {
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
const Login = () => {
  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    GoogleSignin.configure({ prompt: 'select_account' });
  }, []);

  const handleGoogleLogin = async () => {
    await GoogleSignin.hasPlayServices();
    await signOut();
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

      console.log(userInfo);
      } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('User cancelled the login flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Sign in is in progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Play services not available or outdated');
      } else {
        console.log('Something went wrong:', error);
      }
    }
  }




  return (
    <Button
      title="Google Sign-In"
      onPress={handleGoogleLogin}
    />
  );
}
export default Login;
