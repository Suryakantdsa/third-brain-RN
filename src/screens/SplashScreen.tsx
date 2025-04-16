import {Alert, Image, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {resetAndNavigate} from '../utils/NavigationUtils';
import {getAccessToken, getRefreshToken} from '../services/storage';
import {jwtDecode} from 'jwt-decode';
import {refresh_tokens} from '../services/requests/auth';
import Logo from '../assets/svg/Logo.svg';
import LinearGradient from 'react-native-linear-gradient';
import {toastError, toastSucess} from '../utils/toast';

interface DecodedToken {
  exp: number;
}
const SplashScreen = () => {
  const tokenCheck = async () => {
    const accessToken = getAccessToken();
    const refreshToken = getRefreshToken();
    console.log('accessToken', accessToken);
    if (accessToken) {
      const decodedAccessToken = jwtDecode<DecodedToken>(accessToken);
      const decodedRefreshToken = jwtDecode<DecodedToken>(refreshToken!);
      const currentTime = Date.now() / 1000;
      if (decodedRefreshToken?.exp < currentTime) {
        resetAndNavigate('LoginScreen');
        toastError('Session Expired, Please login again');
        return;
      }

      if (decodedAccessToken?.exp < currentTime) {
        try {
          const refreshed = await refresh_tokens();

          console.log('token refreshed __________');
          if (!refreshed) {
            toastError('There was an error refreshing your session');
            return;
          }
          toastSucess('Session refreshed successfully');
        } catch (error: any) {
          toastError('Error refreshing session: ' + error.message);
        }
      }
      resetAndNavigate('HomeScreen');
      return;
    }
    resetAndNavigate('GetStartedScreen');
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      tokenCheck();
      toastError('weeo', 'welcome');
    }, 4000);

    return () => clearTimeout(timerId);
  }, []);
  return (
    <View className="flex-1 items-center justify-end bg-background ">
      <View className="z-10 justify-center items-center">
        <Logo width={100} height={100} />
        <Text className="text-5xl font-bold ">Third Brain</Text>
        <Text className="tracking-[3px]">The final save point !</Text>
      </View>

      <Image
        source={require('../assets/images/brainwork.png')}
        width={100}
        height={200}
        className="mt-20 w-full "
      />
      <LinearGradient
        colors={['#e0e265', 'transparent']}
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}
      />
    </View>
  );
};

export default SplashScreen;
