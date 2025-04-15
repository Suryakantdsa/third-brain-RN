import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Logo from '../assets/svg/Logo.svg';
import EmailIcon from '../assets/Icons/EmailIcon.svg';
import PasswordIcon from '../assets/Icons/PasswordIcon.svg';
import ShowIcon from '../assets/Icons/ShowIcon.svg';
import HideIcon from '../assets/Icons/HideIcon.svg';
import AccountIcon from '../assets/Icons/AccountIcon.svg';
import TermAndPrivacy from '../components/gobal/TermAndPrivacy';
import {navigate, resetAndNavigate} from '../utils/NavigationUtils';
import {useMutation} from '@tanstack/react-query';
import {signupUser} from '../services/requests/auth';

const SignupScreen = () => {
  const [showHide, setshowHide] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signupMutation = useMutation({
    mutationFn: signupUser,
    onSuccess: () => {
      resetAndNavigate('LoginScreen');
    },
    onError: (error: any) => {
      if (error?.response.data) {
        console.error('Signup error,', error?.response.data);
      } else {
        console.error(error);
      }
    },
  });

  const handleSignUp = () => {
    try {
      signupMutation.mutate({name, email, password});
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView>
        <View className="flex-1 justify-start items-center p-6">
          <View className="pt-4">
            <Logo width={100} height={100} />
          </View>
          <Text className="text-3xl font-bold">Third Brain</Text>
          <Text className="text-gray-400 font-semibold">
            Create an account to explore the app
          </Text>
          <View className="justify-start items-start w-full gap-2 mt-6">
            <Text className="font-semibold text-lg">Name :</Text>
            <View
              className="border border-primarymain/90 rounded-full w-full items-center flex-row gap-4 px-6 py-1 justify-center"
              style={style.shadow}>
              <View className="w-[10%]">
                <AccountIcon width={30} height={30} />
              </View>
              <TextInput
                // value="Sir"
                className="text-black w-[90%]  text-lg font-semibold"
                placeholder="Enter Name"
                placeholderTextColor={'#8B7171'}
                onChangeText={setName}
              />
            </View>
          </View>
          <View className="justify-start items-start w-full gap-2 mt-6">
            <Text className="font-semibold text-lg">Email address :</Text>
            <View
              className="border border-primarymain/90 rounded-full w-full items-center flex-row gap-4 px-6 py-1 justify-center"
              style={style.shadow}>
              <View className="w-[10%]">
                <EmailIcon width={30} height={20} />
              </View>
              <TextInput
                // value="Sir"
                className="text-black w-[90%]  text-lg font-semibold"
                placeholder="Enter Email address"
                placeholderTextColor={'#8B7171'}
                onChangeText={setEmail}
              />
            </View>
          </View>
          <View className="justify-start items-start w-full gap-2 my-6">
            <Text className="font-semibold text-lg">Password :</Text>
            <View
              className="border border-primarymain/90 rounded-full w-full items-center flex-row gap-4 px-8 py-1 justify-center"
              style={style.shadow}>
              <View className="w-[10%]">
                <PasswordIcon width={30} height={30} />
              </View>
              <TextInput
                // value="Sir"
                className="text-black w-[80%]  text-lg font-semibold"
                placeholder="Enter Password "
                placeholderTextColor={'#8B7171'}
                onChangeText={setPassword}
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
          {/* <TouchableOpacity className="justify-end w-full flex-row py-2">
          <Text className="font-extrabold">Forget password ?</Text>
        </TouchableOpacity> */}

          <TouchableOpacity
            className="justify-center w-full flex-row py-4 bg-primarymain rounded-full shadow-2xl  shadow-secondary "
            activeOpacity={0.7}
            // style={style.shadow}
            onPress={() => handleSignUp()}>
            <Text className="font-bold text-lg h-full text-white">Sign up</Text>
          </TouchableOpacity>
          {/* <View className="my-4">
          <Text className="text-center text-gray-600">------- OR -------</Text>
        </View> */}
          {/* <TouchableOpacity
          className="justify-start px-8 gap-8 items-center w-full flex-row py-4 border rounded-full "
          activeOpacity={0.7}>
          <View className=" mr-8">
            <GoogleIcon width={30} height={20} />
          </View>
          <Text className=" font-bold text-lg h-full">
            Continue with Google
          </Text>
        </TouchableOpacity> */}
          <View className="flex-row my-4">
            <Text className="">Already have an account ? </Text>
            <TouchableOpacity onPress={() => navigate('LoginScreen')}>
              <Text className="font-bold text-primarymain">Log In</Text>
            </TouchableOpacity>
          </View>
          <TermAndPrivacy />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignupScreen;

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
