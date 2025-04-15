import {useEffect, useRef} from 'react';
import {
  Modal,
  Animated,
  TouchableWithoutFeedback,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';

export const ProfileModal = ({visible, onClose}: any) => {
  const slideAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      Animated.timing(slideAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);

  const translateX = slideAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 0],
  });

  return (
    <Modal transparent visible={visible} animationType="none">
      <TouchableWithoutFeedback onPress={onClose}>
        <View className="absolute top-0 left-0 right-0 bottom-0 bg-black/50" />
      </TouchableWithoutFeedback>

      <Animated.View
        className="absolute right-0 top-0 bottom-0 w-[40%] bg-white"
        style={{transform: [{translateX}]}}>
        {/* Your profile content here */}
        <Text className="text-lg p-4">Profile Details</Text>
        {/* Add close button */}
        <TouchableOpacity onPress={onClose} className="absolute top-4 left-4">
          <Text>×</Text>
        </TouchableOpacity>
      </Animated.View>
    </Modal>
  );
};
