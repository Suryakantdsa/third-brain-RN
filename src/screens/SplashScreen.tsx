import {Alert, Image, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {navigate, resetAndNavigate} from '../utils/NavigationUtils';
import {getAccessToken, getRefreshToken} from '../services/storage';
import {jwtDecode} from 'jwt-decode';
import {refresh_tokens} from '../services/requests/auth';
import ThirdBrainIcon from '../assets/Icons/ThirdBrainIcon';
import Logo from '../assets/svg/Logo.svg';
import LinearGradient from 'react-native-linear-gradient';

interface DecodedToken {
  exp: number;
}
const SplashScreen = () => {
  // const navigateHomeScreen = () => {
  //   navigate('LoginScreen');
  // };
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
        Alert.alert('Session Expired ,Please login again');
        return;
      }

      if (decodedAccessToken?.exp < currentTime) {
        const refreshed = await refresh_tokens();

        console.log('token refreshed __________');
        if (!refreshed) {
          Alert.alert('There was an error');
          return;
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
        // alt="brainwork"
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
