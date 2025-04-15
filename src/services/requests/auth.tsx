import {Alert} from 'react-native';
import {resetAndNavigate} from '../../utils/NavigationUtils';
import apiClient from '../apiClient';
import {BASE_URL} from '../config';
import {
  getRefreshToken,
  removeAccessToken,
  removeRefreshToken,
  removeuser,
  setAccessToken,
  setRefreshToken,
  setuser,
} from '../storage';

export const signupUser = async ({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}) => {
  try {
    const {data} = await apiClient.post('/email-password-signup', {
      name: name,
      email: email,
      password: password,
    });
    resetAndNavigate('LoginScreen');
    Alert.prompt('User signup sucessfully');
    return data;
  } catch (error) {}
};

export const emailpasswordLogin = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const {data} = (await apiClient.post('/email-password-login', {
    email: email,
    password: password,
  })) as any;
  setAccessToken(data.accessToken);
  setRefreshToken(data.refreshToken);
  setuser(data?.user);
  return data.user;
};

export const logout = async () => {
  removeAccessToken();
  removeRefreshToken();
  removeuser();
  resetAndNavigate('LoginScreen');
};

export const refresh_tokens = async (): Promise<boolean> => {
  try {
    const refreshToken = getRefreshToken();
    if (!refreshToken) {
      throw new Error('No refresh token found');
    }
    const {data} = (await apiClient.post(`${BASE_URL}/refresh`, {
      refreshToken,
    })) as any;

    if (data?.accessToken) {
      setAccessToken(data?.accessToken);
      console.log('new token set____________', data?.accessToken);
      return true;
    } else {
      throw new Error('invalid refreshtoken');
    }
  } catch (error) {
    console.error(`token refresh faild:`, error);
    logout();
    return false;
  }
};
