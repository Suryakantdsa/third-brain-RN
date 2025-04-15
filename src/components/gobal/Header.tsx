import {View, Text} from 'react-native';
import React from 'react';
import Logo from '../../assets/svg/Logo.svg';

const Header = ({width, height}: {width: number; height: number}) => {
  return (
    <View className="flex-row items-center justify-start">
      <Logo width={width} height={height} />
      <Text className="text-3xl font-bold leading-8 ">Third Brain</Text>
    </View>
  );
};

export default Header;
