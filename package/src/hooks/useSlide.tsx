// src/hooks/useSlide.ts
import { useRef } from 'react';
import { Animated } from 'react-native';

type Direction = 'horizontal' | 'vertical';

const useSlide = (initialPosition: number = 0, direction: Direction = 'horizontal') => {
  const position = useRef(new Animated.Value(initialPosition)).current;

  const slideIn = (toValue: number, duration: number = 300, delay: number = 0, onEnd?: Animated.EndCallback) => {
    Animated.timing(position, {
      toValue,
      duration,
      delay,
      useNativeDriver: true,
    }).start(onEnd);
  };

  const slideOut = (toValue: number, duration: number = 300, delay: number = 0, onEnd?: Animated.EndCallback) => {
    Animated.timing(position, {
      toValue,
      duration,
      delay,
      useNativeDriver: true,
    }).start(onEnd);
  };

  const transform = direction === 'horizontal' ? [{ translateX: position }] : [{ translateY: position }];

  return { transform, slideIn, slideOut };
};

export default useSlide;
