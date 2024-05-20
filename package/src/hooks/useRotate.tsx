// src/hooks/useRotate.ts
import { useRef } from 'react';
import { Animated } from 'react-native';

const useRotate = (initialRotation: number = 0) => {
  const rotation = useRef(new Animated.Value(initialRotation)).current;

  const rotate = (toValue: number, duration: number = 300, delay: number = 0, onEnd?: Animated.EndCallback) => {
    Animated.timing(rotation, {
      toValue,
      duration,
      delay,
      useNativeDriver: true,
    }).start(onEnd);
  };

  const reset = () => {
    rotation.setValue(initialRotation);
  };

  const interpolateRotation = rotation.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg']
  });

  return { rotation: interpolateRotation, rotate, reset };
};

export default useRotate;
