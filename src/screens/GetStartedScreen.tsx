import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Welcome from '../assets/svg/Welcome.svg';
import {goBack, navigate} from '../utils/NavigationUtils';
import Header from '../components/gobal/Header';

const GetStartedScreen = () => {
  const [step, setStep] = useState(0);

  return (
    <SafeAreaView
      className="flex-1 justify-between items-center p-4"
      // style={{backgroundColor: '#e0e265'}}
    >
      <Header width={50} height={42} />
      <Welcome width={300} height={320} color={'red'} />
      <View className="justify-center items-center z-10">
        <Text className="text-center font-bold text-2xl w-full">
          Welcome to 3rd brain
        </Text>
        <View className=" w-[90%] justify-center ">
          <Text className="text-center text-[16px] mt-2 text-secondary font-bold">
            Finally—A Brain That Doesn’t Forget Things!
          </Text>
        </View>
        <Text className="text-center mt-2 italic">
          Capture ideas, organize knowledge, and find anything instantly. Like
          magic, but with fewer rabbits.
        </Text>
      </View>
      <TouchableOpacity
        className="bg-primarymain w-[95%] py-5 rounded-xl justify-center items-center"
        activeOpacity={0.8}
        onPress={() => navigate('OnboardScreen')}>
        <Text className="text-white font-bold">Let’s begin!</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default GetStartedScreen;
