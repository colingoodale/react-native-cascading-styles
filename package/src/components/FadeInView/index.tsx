// src/components/FadeView.tsx
import React, { useEffect, ReactNode } from 'react';
import { Animated, StyleProp, ViewStyle } from 'react-native';
import { useFade } from '../../hooks';

export interface FadeViewProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  duration?: number;
  delay?: number;
  fadeInOnMount?: boolean;
  fadeOutOnUnmount?: boolean;
  inValue?: number;
  outValue?: number;
}

const FadeView: React.FC<FadeViewProps> = ({
  children,
  style,
  duration = 300,
  delay = 0,
  fadeInOnMount = true,
  fadeOutOnUnmount = true,
  inValue = 1,
  outValue = 0,
}) => {
  const { opacity, fadeIn, fadeOut } = useFade(outValue);

  useEffect(() => {
    if (fadeInOnMount) {
      fadeIn(duration, delay, inValue);
    }
    return () => {
      if (fadeOutOnUnmount) {
        fadeOut(duration, delay, outValue);
      }
    };
  }, [duration, delay, fadeInOnMount, fadeOutOnUnmount, inValue, outValue, fadeIn, fadeOut]);

  return (
    <Animated.View style={[style, { opacity }]}>
      {children}
    </Animated.View>
  );
};

export default FadeView;
