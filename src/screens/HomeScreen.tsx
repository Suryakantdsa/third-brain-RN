import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {getuser, IUser} from '../services/storage';
import {useMutation} from '@tanstack/react-query';
import {logout} from '../services/requests/auth';
import ProfileIcon from '../assets/Icons/ProfileIcon.svg';
import BannerImage from '../assets/images/BannerImage.svg';
import AddBrainIcon from '../assets/Icons/AddBrainIcon.svg';
import DeepSearchIcon from '../assets/Icons/DeepSearchIcon.svg';
import MyLibaryIcon from '../assets/Icons/MyLibaryIcon.svg';
import AiAssistIcon from '../assets/Icons/AiAssistIcon.svg';
import EmptyBrainIcon from '../assets/Icons/EmptyBrainIcon.svg';
import HomeIcon from '../assets/Icons/HomeIcon.svg';
import SettingIcon from '../assets/Icons/SettingIcon.svg';
import BrainIcon from '../assets/Icons/BrainIcon.svg';
import BellIcon from '../assets/Icons/BellIcon.svg';
import LinearGradient from 'react-native-linear-gradient';
import {navigate} from '../utils/NavigationUtils';
import {ProfileModal} from '../components/models/ProfileModel';
import {toastError, toastSucess} from '../utils/toast';

const HomeScreen = () => {
  const [isVisiable, setisVisiable] = useState(false);
  const logoutMutation = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      toastSucess('User logOut sucessfully..!');
    },
    onError: error => {
      toastError('logout error', error.message);
    },
  });
  const handleLogOut = () => {
    logoutMutation.mutate();
    // logout();
  };

  const user = getuser() as IUser;
  console.log('yser__________', user);
  return (
    <>
      <ScrollView>
        <View className=" flex-1">
          {/* banner start */}
          <LinearGradient
            colors={['#E7EBDF', '#FF07C9']}
            start={{x: 1.1, y: 0}} // Gradient start point (left)
            end={{x: 1, y: 1}}
            className="z-10  p-6 ">
            {/* <View > */}
            <View className="flex-row  justify-between items-center">
              <TouchableOpacity
                className="bg-[#F4EDED] p-1 rounded-xl"
                onPress={() => navigate('ProfileModel')}>
                <ProfileIcon width={28} height={28} />
              </TouchableOpacity>
              <ProfileModal
                visible={isVisiable}
                onClose={() => setisVisiable(false)}
              />
              <TouchableOpacity className="bg-[#F4EDED] p-1 rounded-xl">
                {/* <Text className="text-4xl"></Text> */}
                <BellIcon width={28} height={28} />
              </TouchableOpacity>
            </View>

            <View className="flex-row justify-between items-center  my-4">
              <View>
                <Text className="text-3xl font-bold">Good Morning</Text>
                <Text className="text-xl text-white font-semibold pt-2">
                  Suryaknat das
                </Text>
              </View>
              <View>
                <BannerImage width={100} height={120} />
              </View>
            </View>
          </LinearGradient>

          {/* banneer end */}
          <View
            className="z-20 bg-[#F4EDED] flex-row gap-2 justify-between p-6"
            style={{
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              marginTop: -20,
              zIndex: 10,
            }}>
            <TouchableOpacity activeOpacity={0.6}>
              <View className="w-20 h-20 rounded-[16px] bg-primary justify-center items-center">
                {/* <Text className="text-5xl"></Text> */}
                <AddBrainIcon width={40} height={40} />
              </View>
              <Text className="w-20 text-center font-bold mt-2 ">
                Quick Capture
              </Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.6}>
              <View className="w-20 h-20 rounded-[16px] bg-primary justify-center items-center">
                <DeepSearchIcon width={47} height={47} />
              </View>
              <Text className="w-20 text-center font-bold mt-2 ">
                Deep Search
              </Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.6}>
              <View className="w-20 h-20 rounded-[16px] bg-primary justify-center items-center">
                <MyLibaryIcon width={52} height={56} />
              </View>
              <Text className="w-20 text-center font-bold mt-2 ">
                my {'    '}Libray
              </Text>
              {/* <Text className="w-20 text-center font-bold mt-2"></Text> */}
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.6}>
              <View className="w-20 h-20 rounded-[16px] bg-primary justify-center items-center">
                <AiAssistIcon width={45} height={45} />
              </View>
              <Text className="w-20 text-center font-bold mt-2">
                AI {'    '} Assist
              </Text>
            </TouchableOpacity>
          </View>
          <View className="flex-row justify-center items-center">
            <View className="border-t border-gray-300  w-[33%]"></View>
            <View className="py-2 px-4 rounded-full border border-r border-gray-400">
              <Text className=" font-semibold">My Brain HQ 🏠</Text>
            </View>
            <View className="border-t border-gray-300 w-[33%]"></View>
          </View>
          <View className="flex-row justify-between p-6 items-center">
            <Text className="border-l-4 border-primarymain font-bold text-lg pl-1">
              Recently Forgotten
            </Text>
            <Text className="font-bold text-primarymain">See All</Text>
          </View>
          <View className="justify-center items-center bg-white p-8 mx-6">
            <>
              <EmptyBrainIcon width={150} height={150} opacity={0.7} />
            </>
          </View>
          <View className="flex-row justify-between p-6 items-center">
            <Text className="border-l-4 border-primarymain font-bold text-lg pl-1">
              Recently Forgotten
            </Text>
            <Text className="font-bold text-primarymain">See All</Text>
          </View>
          <View className="justify-center items-center bg-white p-8 mx-6">
            <>
              <EmptyBrainIcon width={150} height={150} opacity={0.7} />
            </>
          </View>
        </View>
        {/* <TouchableOpacity
        onPress={() => handleLogOut()}
        className="fixed bottom-0 mt-48">
        <Text>Logout</Text>
        <Text>{user?.email}</Text>
      </TouchableOpacity> */}
      </ScrollView>

      {/* <View className="absolute bottom-0 left-0 right-0 bg-gray-900 p-4 shadow-lg border-t border-gray-200 flex-row justify-around gap-x-28">
        <TouchableOpacity className="justify-center items-center">
          <View>
            <HomeIcon width={25} height={25} />
          </View>
          <Text className="font-bold text-sm text-primarymain">Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className=" w-24 h-24 rounded-full absolute -top-10 justify-center items-center"
          style={{
            backgroundColor: 'rgba(238, 15, 138, 0.4)',
          }}>
          <View
            className="w-[72px] h-[72px] rounded-full justify-center items-center"
            style={{
              backgroundColor: 'rgba(238, 15, 138, 1)',
            }}>
            <BrainIcon width={50} height={50} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          className="justify-center items-center"
          onPress={handleLogOut}>
          <View>
            <SettingIcon width={25} height={25} />
          </View>
          <Text className="font-bold text-sm text-primarymain">Log Out</Text>
        </TouchableOpacity>
      </View> */}
    </>
  );
};

export default HomeScreen;

const NavButton = ({icon, label, active = false, onPress}: any) => (
  <TouchableOpacity
    onPress={onPress}
    className={`items-center p-2 ${active ? 'opacity-100' : 'opacity-60'}`}>
    <Text className="text-2xl">{icon}</Text>
    <Text
      className={`text-xs mt-1 ${
        active ? 'font-bold text-primarymain' : 'text-gray-500'
      }`}>
      {label}
    </Text>
  </TouchableOpacity>
);
