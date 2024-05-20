// src/components/RotateView.tsx
import React, { useEffect, ReactNode } from 'react';
import { Animated, StyleProp, ViewStyle } from 'react-native';
import { useRotate } from '../../hooks';

export interface RotateViewProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  toValue: number;
  duration?: number;
  delay?: number;
}

const RotateView: React.FC<RotateViewProps> = ({
  children,
  style,
  toValue,
  duration = 300,
  delay = 0
}) => {
  const { rotation, rotate, reset } = useRotate(0);

  useEffect(() => {
    const timeout = setTimeout(() => rotate(toValue, duration), delay);
    return () => {
      clearTimeout(timeout);
      reset();
    };
  }, [toValue, duration, delay, rotate, reset]);

  return (
    <Animated.View style={[style, { transform: [{ rotate: rotation }] }]}>
      {children}
    </Animated.View>
  );
};

export default RotateView;
