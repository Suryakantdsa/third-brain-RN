import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Logo from '../assets/svg/Logo.svg';
import EmailIcon from '../assets/Icons/EmailIcon.svg';
import PasswordIcon from '../assets/Icons/PasswordIcon.svg';
import ShowIcon from '../assets/Icons/ShowIcon.svg';
import HideIcon from '../assets/Icons/HideIcon.svg';
import GoogleIcon from '../assets/Icons/GoogleIcon.svg';
import TermAndPrivacy from '../components/gobal/TermAndPrivacy';
import {navigate, resetAndNavigate} from '../utils/NavigationUtils';
import {useMutation} from '@tanstack/react-query';
import {emailpasswordLogin} from '../services/requests/auth';
import {toastError, toastSucess} from '../utils/toast';

const LoginScreen = () => {
  const [showHide, setshowHide] = useState(true);
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const loginMutation = useMutation({
    mutationFn: emailpasswordLogin,
    onSuccess: () => {
      toastSucess('Login sucessfully');
      resetAndNavigate('HomeScreen');
    },
    onError: (error: any) => {
      if (error?.response) {
        // console.error('Login failed:', error?.response?.data);
        toastError('Login failed:', error?.response?.data);
      } else {
        toastError(error.message);
        // console.error('Unknown error', error);
      }
    },
  });

  const handleLogin = () => {
    try {
      loginMutation.mutate({email, password});

      // resetAndNavigate('HomeScreen');
    } catch (error) {
      console.error('email-password login failed', error);
    }
  };
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        //  className="justify-start items-center p-6"
        contentContainerStyle={{
          padding: 24,
          alignItems: 'center',
          alignContent: 'flex-start',
        }}>
        <View className="pt-4">
          <Logo width={100} height={100} />
        </View>
        <Text className="text-3xl font-bold">Third Brain</Text>
        <Text className="text-gray-400 font-semibold">
          login to access your account
        </Text>
        <View className="justify-start items-start w-full gap-2 pt-8">
          <Text className="font-semibold text-lg">Email address :</Text>
          <View
            className="border border-primarymain/90 rounded-full w-full items-center flex-row gap-4 px-6 py-1 justify-center"
            style={style.shadow}>
            <View className="w-[10%]">
              <EmailIcon width={30} height={20} />
            </View>
            <TextInput
              // value="Sir"
              value={email}
              onChangeText={setemail}
              className="text-black w-[90%]  text-lg font-semibold"
              placeholder="Enter Email address"
              placeholderTextColor={'#8B7171'}
            />
          </View>
        </View>
        <View className="justify-start items-start w-full gap-2 pt-6">
          <Text className="font-semibold text-lg">Password :</Text>
          <View
            className="border border-primarymain/90 rounded-full w-full items-center flex-row gap-4 px-8 py-1 justify-center"
            style={style.shadow}>
            <View className="w-[10%]">
              <PasswordIcon width={30} height={30} />
            </View>
            <TextInput
              value={password}
              onChangeText={setpassword}
              className="text-black w-[80%]  text-lg font-semibold"
              placeholder="Enter Password "
              placeholderTextColor={'#8B7171'}
            />
            <TouchableOpacity
              className="w-[10%] "
              onPress={() => setshowHide(!showHide)}>
              {showHide ? (
                <ShowIcon width={20} height={20} />
              ) : (
                <HideIcon width={20} height={20} />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity className="justify-end w-full flex-row py-2">
          <Text className="font-extrabold">Forget password ?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="justify-center w-full flex-row py-4 bg-primarymain rounded-full shadow-2xl  shadow-secondary "
          activeOpacity={0.7}
          // style={style.shadow}
          onPress={() => handleLogin()}>
          <Text className="font-bold text-lg h-full text-white">Log In</Text>
        </TouchableOpacity>
        <View className="my-4">
          <Text className="text-center text-gray-600">------- OR -------</Text>
        </View>
        <TouchableOpacity
          className="justify-center gap-2 items-center w-full flex-row py-4 border rounded-full "
          activeOpacity={0.7}>
          <View className="">
            <GoogleIcon width={30} height={20} />
          </View>
          <Text className=" font-bold text-lg h-full">
            Continue with Google
          </Text>
        </TouchableOpacity>
        <View className="flex-row my-4">
          <Text className="">Don’t have an account ? </Text>
          <TouchableOpacity onPress={() => navigate('SignupScreen')}>
            <Text className="font-bold text-primarymain">Sign up </Text>
          </TouchableOpacity>
        </View>
        <TermAndPrivacy />
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const style = StyleSheet.create({
  shadow: {
    shadowColor: '#000000', // Use your primary color here
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.7,
    shadowRadius: 3.84,
    elevation: 15, // For Android
    backgroundColor: 'white', // Shadow needs a bg to be visible
  },
});
