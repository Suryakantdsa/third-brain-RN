import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import Header from '../components/gobal/Header';
import Onboard1 from '../assets/svg/onboard1.svg';
import Onboard2 from '../assets/svg/onboard2.svg';
import Onboard3 from '../assets/svg/Onboard3.svg';
import {useState} from 'react';
import {navigate} from '../utils/NavigationUtils';

const OnboardScreen = () => {
  const [step, setstep] = useState(0);
  const onborderProcess = [
    {
      step: 'Dump Your Brain (We’ll Sort It Later)',
      title: 'Your Mind is a Beautiful Mess',
      description:
        'Toss in notes, links, voice memos, or that shower thought you’ll forget in 5 minutes. We’re judgement-free here!',
      Image: <Onboard1 width={300} height={300} />,
    },
    {
      step: 'Tag It or Lose It',
      title: 'Chaos → Controlled Chaos',
      description:
        'Slap on tags like #GeniusIdea or #OopsIForgot. Future-you will high-five present-you.',
      Image: <Onboard2 width={340} height={340} />,
    },
    {
      step: 'Search Like a Mind-Reader',
      title: 'Where Did I Put That…?',
      description:
        'Type ‘thing about the yoga cat’ and we’ll magically find that viral video. No meditation required.',
      Image: <Onboard3 width={300} height={300} />,
    },
  ];
  return (
    <SafeAreaView className="flex-1 justify-between items-center p-4">
      <View className="w-full justify-between flex-row items-center">
        <Header width={44} height={40} />
        <Text className=" font-extrabold  p-1 rounded-full">
          Step {step + 1} of {onborderProcess.length}
        </Text>
      </View>
      {onborderProcess.map(
        (onboard, idx) =>
          step === idx && (
            <View key={idx} className="justify-between items-center h-2/3 ">
              {onboard.Image}
              <View className="items-center gap-y-2">
                <View className="w-3/4">
                  <Text className="font-extrabold text-3xl text-center">
                    {onboard.step}
                  </Text>
                </View>
                <Text className="text-primarymain font-bold">
                  {onboard.title}
                </Text>
                <View className="">
                  <Text className="text-center italic text-lg">
                    {onboard.description}
                  </Text>
                </View>
              </View>
            </View>
          ),
      )}

      {step === 0 && (
        <View className="flex-row justify-between w-full pb-4">
          <TouchableOpacity
            onPress={() => {
              if (step === 0) return;
              setstep(step - 1);
            }}>
            <Text className="font-bold text-lg">Nah, I’m Organized</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setstep(step + 1);
            }}>
            <Text className="font-bold text-primarymain text-lg">
              Heck Yes ! →
            </Text>
          </TouchableOpacity>
        </View>
      )}
      {step === 1 && (
        <View className="flex-row justify-between w-full pb-4">
          <TouchableOpacity
            onPress={() => {
              setstep(step - 1);
            }}>
            <Text className="font-bold text-lg">Skip to Fun Part</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setstep(step + 1);
            }}>
            <Text className="font-bold text-primarymain text-lg">
              Teach Me More →
            </Text>
          </TouchableOpacity>
        </View>
      )}
      {step === 2 && (
        <TouchableOpacity
          className="bg-primarymain w-[95%] py-5 rounded-xl justify-center items-center"
          activeOpacity={0.8}
          onPress={() => navigate('LoginScreen')}>
          <Text className="text-white font-bold">Let’s Get Organized!</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

export default OnboardScreen;
