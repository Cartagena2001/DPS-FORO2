import { GoogleSignin } from '@react-native-google-signin/google-signin';

export const configureGoogleSignIn = () => {
  GoogleSignin.configure({
    webClientId: '886744852431-gpmrutf6gsg3tmm13v8dgp2pfrc0s3t1.apps.googleusercontent.com', // Replace with your web client ID
  });
};