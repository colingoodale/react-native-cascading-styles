import { useRef } from 'react';
import { Animated } from 'react-native';

const useBounce = (initialPosition: number = 0) => {
  const position = useRef(new Animated.Value(initialPosition)).current;

  const bounce = (toValue: number, duration: number = 300, bounces: number = 2, onEnd?: Animated.EndCallback) => {
    Animated.spring(position, {
      toValue,
      speed: 12,
      bounciness: bounces * 10,
      useNativeDriver: true,
    }).start(onEnd);
  };

  const reset = () => {
    position.setValue(initialPosition);
  };

  return { position, bounce, reset };
};

export default useBounce;