// src/components/BounceView.tsx
import React, { useEffect, ReactNode } from 'react';
import { Animated, StyleProp, ViewStyle } from 'react-native';
import { useBounce } from '../../hooks';

interface BounceViewProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  toValue: number;
  duration?: number;
  bounces?: number;
  delay?: number;
}

const BounceView: React.FC<BounceViewProps> = ({
  children,
  style,
  toValue,
  duration = 300,
  bounces = 2,
  delay = 0
}) => {
  const { position, bounce, reset } = useBounce(0);

  useEffect(() => {
    const timeout = setTimeout(() => bounce(toValue, duration, bounces), delay);
    return () => {
      clearTimeout(timeout);
      reset();
    };
  }, [toValue, duration, bounces, delay, bounce, reset]);

  return (
    <Animated.View style={[style, { transform: [{ translateY: position }] }]}>
      {children}
    </Animated.View>
  );
};

export default BounceView;
