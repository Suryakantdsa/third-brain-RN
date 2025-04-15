import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const TermAndPrivacy = () => {
  return (
    <View className="justify-start items-center flex-row flex-wrap mt-4">
      <Text className="text-gray-500">By continuing you agree the</Text>
      <TouchableOpacity>
        <Text className="font-bold">Term of services </Text>
      </TouchableOpacity>

      <Text className="text-gray-500">and</Text>
      <TouchableOpacity>
        <Text className="font-bold">privacy policy</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TermAndPrivacy;
