import {MMKV} from 'react-native-mmkv';

export const storage = new MMKV();
export interface IUser {
  name?: string;
  email: string;
  password: string;
  phone?: string;
  avatar?: string;
  isPhoneVerfied?: boolean;
  isEmailVerfied?: boolean;
}
export const setAccessToken = (token: string) => {
  storage.set('accessToken', token);
};

export const getAccessToken = () => {
  return storage.getString('accessToken');
};
export const removeAccessToken = () => {
  storage.delete('accessToken');
};
export const setuser = (user: IUser) => {
  storage.set('user', JSON.stringify(user));
};

export const getuser = () => {
  let user = storage.getString('user');
  if (user) {
    return JSON.parse(user) as IUser;
  }
  return user;
};
export const removeuser = () => {
  storage.delete('user');
};

export const setRefreshToken = (token: string) => {
  storage.set('refreshToken', token);
};
export const getRefreshToken = () => {
  return storage.getString('refreshToken');
};
export const removeRefreshToken = () => {
  storage.delete('refreshToken');
};
