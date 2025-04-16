import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SettingScreen from '../screens/SettingScreen';
import MyBrainScreen from '../screens/MyBrainScreen';
import HomeIcon from '../assets/Icons/HomeIcon.svg';
import SettingIcon from '../assets/Icons/SettingIcon.svg';
import BrainIcon from '../assets/Icons/BrainIcon.svg';
import {View} from 'react-native';

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          //   position: 'absolute',
          //   bottom: 20,
          //   left: 20,
          //   right: 20,
          borderRadius: 15,
          height: 70,
          //   backgroundColor: colors.primary,
          backgroundColor: '#ff11cc',
          borderTopWidth: 1,
          elevation: 5,
          shadowColor: '#000000',
          shadowOpacity: 0.1,
          shadowRadius: 10,
          paddingBottom: 0,
        },
        tabBarItemStyle: {
          paddingVertical: 8,
          backgroundColor: '#000',
        },
        tabBarActiveTintColor: '#ffccaa',
        tabBarInactiveTintColor: '#fff', // 80 = 50% opacity
        tabBarLabelStyle: {
          fontSize: 14,
          color: '#fff',
          fontWeight: '600',
          paddingBottom: 4,
        },
      }}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: () => (
            <View>
              <HomeIcon width={25} height={25} />
            </View>
          ),
          headerTintColor: '#000',
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="brain"
        options={{
          tabBarIcon: () => (
            <View className="absolute bg-primarymain/50 p-2 rounded-full -top-12 flex justify-center items-center">
              <View className="bg-primarymain p-4 rounded-full  ">
                <BrainIcon width={36} height={36} />
              </View>
            </View>
          ),
        }}
        component={MyBrainScreen}
      />
      <Tab.Screen
        name="Setting"
        options={{
          tabBarIcon: () => (
            <View>
              <SettingIcon width={25} height={25} />
            </View>
          ),
        }}
        component={SettingScreen}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
