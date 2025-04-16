import {Text, View} from 'react-native';
import Toast from 'react-native-toast-message';
import * as Icons from 'react-native-heroicons/solid';

export const toastSucess = (message: string, title: string = 'Success') => {
  Toast.show({
    type: 'success',
    text1: title,
    text2: message,
    position: 'top',
  });
};
export const toastError = (message: string, title: string = 'Error') => {
  Toast.show({
    type: 'error',
    text1: title,
    text2: message,
    position: 'top',
  });
};
export const toastInfo = (message: string, title: string = 'Info') => {
  Toast.show({
    type: 'info',
    text1: title,
    text2: message,
    position: 'top',
  });
};

export const toastConfig = {
  success: ({text1, text2}: any) => (
    <View className="w-[90%] border-l-green-500 border-l-[8px] bg-white p-4 rounded-xl flex-row items-center shadow-lg shadow-black/25">
      {/* <Check className="text-white mr-3" width={24} height={24} /> */}
      <View className="mr-3 ">
        <Icons.CheckIcon color={'#000'} size={30} />
      </View>
      <View className="flex-1">
        <Text className="font-bold text-base">{text1}</Text>
        {text2 && <Text className=" font-normal text-sm mt-1">{text2}</Text>}
      </View>
    </View>
  ),
  error: ({text1, text2}: any) => (
    <View className="w-[90%] border-l-red-500 border-l-[8px] bg-white p-4 rounded-xl flex-row items-center shadow-lg shadow-black/25">
      <View className="mr-3 ">
        <Icons.XMarkIcon color={'#000000'} size={30} />
      </View>
      <View className="flex-1">
        <Text className=" font-bold text-base">{text1}</Text>
        {text2 && <Text className="/90 font-normal text-sm mt-1">{text2}</Text>}
      </View>
    </View>
  ),
  info: ({text1, text2}: any) => (
    <View className="w-[90%] border-l-blue-500 border-l-[8px] bg-white p-4 rounded-xl flex-row items-center shadow-lg shadow-black/25">
      <View className="mr-3 ">
        <Icons.InformationCircleIcon color={'#000000'} size={30} />
      </View>
      <View className="flex-1">
        <Text className=" font-bold text-base">{text1}</Text>
        {text2 && <Text className="/90 font-normal text-sm mt-1">{text2}</Text>}
      </View>
    </View>
  ),
  warning: ({text1, text2}: any) => (
    <View className="w-[90%] border-l-amber-500 border-l-[8px] bg-white p-4 rounded-xl flex-row items-center shadow-lg shadow-black/25">
      <View className="mr-3 ">
        <Icons.ArrowLeftStartOnRectangleIcon color={'#000000'} size={30} />
      </View>
      <View className="flex-1">
        <Text className=" font-bold text-base">{text1}</Text>
        {text2 && <Text className="/90 font-normal text-sm mt-1">{text2}</Text>}
      </View>
    </View>
  ),
};
