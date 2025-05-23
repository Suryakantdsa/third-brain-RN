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
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || 'user signup failed');
  }
};

export const emailpasswordLogin = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const {data} = await apiClient.post('/email-password-login', {
      email,
      password,
    });

    setAccessToken(data.accessToken);
    setRefreshToken(data.refreshToken);
    setuser(data.user);

    return data.user;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || 'Invalid credentials');
  }
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
  } catch (error: any) {
    // toastError(error?.response?.data?.message || 'token refresh failed');
    logout();
    throw new Error(error?.response?.data?.message || 'Invalid credentials');
  }
};
