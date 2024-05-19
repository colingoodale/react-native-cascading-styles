import { useRef, useEffect } from 'react';
import { Animated } from 'react-native';

const useFade = (initialOpacity: number = 0) => {
  const opacity = useRef(new Animated.Value(initialOpacity)).current;

  const fadeIn = (duration: number = 300, delay: number = 0, onEnd?: Animated.EndCallback) => {
    Animated.timing(opacity, {
      toValue: 1,
      duration,
      delay,
      useNativeDriver: true,
    }).start(onEnd);
  };

  const fadeOut = (duration: number = 300, delay: number = 0, onEnd?: Animated.EndCallback) => {
    Animated.timing(opacity, {
      toValue: 0,
      duration,
      delay,
      useNativeDriver: true,
    }).start(onEnd);
  };

  return { opacity, fadeIn, fadeOut };
};

export default useFade;