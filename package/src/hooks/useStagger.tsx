// src/hooks/useStagger.ts
import { useRef } from 'react';
import { Animated } from 'react-native';

const useStagger = (numItems: number, initialValue: number = 0) => {
  const animatedValues = useRef([...Array(numItems)].map(() => new Animated.Value(initialValue))).current;

  const staggerIn = (toValue: number, duration: number = 300, staggerDuration: number = 100, onEnd?: Animated.EndCallback) => {
    const animations = animatedValues.map((animatedValue) =>
      Animated.timing(animatedValue, {
        toValue,
        duration,
        useNativeDriver: true,
      })
    );
    Animated.stagger(staggerDuration, animations).start(onEnd);
  };

  const staggerOut = (toValue: number, duration: number = 300, staggerDuration: number = 100, onEnd?: Animated.EndCallback) => {
    const animations = animatedValues.map((animatedValue) =>
      Animated.timing(animatedValue, {
        toValue,
        duration,
        useNativeDriver: true,
      })
    );
    Animated.stagger(staggerDuration, animations).start(onEnd);
  };

  return { animatedValues, staggerIn, staggerOut };
};

export default useStagger;
