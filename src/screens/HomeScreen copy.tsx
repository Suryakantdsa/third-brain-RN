import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AccountIcon from '../assets/Icons/AccountIcon.svg';
import {useMutation} from '@tanstack/react-query';
import {logout} from '../services/requests/auth';

const HomeScreen = () => {
  const navigation = useNavigation();
  const logoutMutation = useMutation({
    mutationFn: logout,
    onError: error => {
      console.error('logout error', error);
    },
  });
  const handleLogOut = () => {
    logoutMutation.mutate();
  };

  return (
    <View className="flex-1 p-6 bg-gray-50 ">
      <SafeAreaView />
      {/* <View className="flex-row justify-center items-center mb-6 ">
        <Text className="text-3xl font-bold text-gray-900">
          Your Brain HQ 🧠
        </Text>
        <TouchableOpacity className="p-2 bg-white rounded-full shadow-sm">
          <Image source={require('../assets/svg/Logo.svg')} />
        </TouchableOpacity>
      </View> */}
      {/* <View className="flex-row items-center justify-center">
        <Logo width={50} height={50} />
        <Text className="text-3xl font-bold leading-8 ">Third Brain</Text>
      </View> */}
      {/* <Header width={50} height={50} /> */}

      <ScrollView className="flex-1">
        {/* Header */}
        <View className="flex-row justify-between items-center rounded-lg ">
          <View className="">
            <Text className="font-bold text-3xl">Good Morning👋</Text>
            <Text className="font-bold text-xl text-primarymain">
              Suryakant Das
            </Text>
          </View>
          <TouchableOpacity onPress={() => handleLogOut()}>
            <AccountIcon width={50} height={50} />
          </TouchableOpacity>
        </View>

        {/* Quick Actions */}
        <View className="flex-row flex-wrap gap-3 my-4 ">
          <ActionCard
            icon="🎯"
            title="Quick Capture"
            subtitle="Dump thoughts before they escape"
          />
          <ActionCard
            icon="🔍"
            title="Deep Search"
            subtitle="Find anything, even that half-baked idea"
          />
          <ActionCard
            icon="📂"
            title="Collections"
            subtitle="Where your genius lives"
          />
          <ActionCard
            icon="⚡"
            title="AI Assist"
            subtitle="Get smart suggestions"
          />
        </View>

        {/* Recent Items */}
        <View className="mb-6">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-xl font-bold text-gray-900">
              Recently Forgotten 💀
            </Text>
            <TouchableOpacity>
              <Text className="text-primarymain font-medium">See All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView>
            <RecentItem title="Best pizza in town" tags={['food', 'urgent']} />
            <RecentItem title="React Native bug fix" tags={['code', 'work']} />
            <RecentItem title="Best pizza in town" tags={['food', 'urgent']} />
            <RecentItem title="React Native bug fix" tags={['code', 'work']} />
            <RecentItem title="Best pizza in town" tags={['food', 'urgent']} />
            <RecentItem title="React Native bug fix" tags={['code', 'work']} />
            <RecentItem title="Best pizza in town" tags={['food', 'urgent']} />
            <RecentItem title="React Native bug fix" tags={['code', 'work']} />
            <RecentItem title="Best pizza in town" tags={['food', 'urgent']} />
            <RecentItem title="React Native bug fix" tags={['code', 'work']} />
          </ScrollView>
        </View>
      </ScrollView>
      {/* Bottom Navigation */}
      <View className="absolute bottom-0 left-0 right-0 bg-white p-4 shadow-lg border-t border-gray-200 flex-row justify-around">
        <NavButton icon="🏠" label="Home" active />
        <NavButton icon="📝" label="Notes" />
        <NavButton icon="🔖" label="Tags" />
        <NavButton icon="⚙️" label="Settings" />
      </View>
    </View>
  );
};

// Enhanced Components
const ActionCard = ({icon, title, subtitle, onPress}: any) => (
  <TouchableOpacity
    onPress={onPress}
    className="w-[48%] p-5 bg-white rounded-2xl shadow-sm border border-gray-100 active:bg-gray-50">
    <Text className="text-4xl mb-3">{icon}</Text>
    <Text className="font-bold text-gray-900 text-lg">{title}</Text>
    <Text className="text-gray-500 text-sm mt-1">{subtitle}</Text>
  </TouchableOpacity>
);

const RecentItem = ({title, tags, onPress}: any) => (
  <TouchableOpacity
    onPress={onPress}
    className="bg-white p-4 rounded-xl mb-3 border border-gray-100 active:bg-gray-50">
    <Text className="text-gray-900 font-medium">{title}</Text>
    <View className="flex-row mt-2">
      {tags.map((tag: any) => (
        <Text
          key={tag}
          className="text-xs bg-gray-100 px-2 py-1 mr-2 rounded-full text-gray-700">
          #{tag}
        </Text>
      ))}
    </View>
  </TouchableOpacity>
);

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

export default HomeScreen;
