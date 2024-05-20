// src/components/StaggerView.tsx
import React, { useEffect, ReactNode } from 'react';
import { Animated, StyleProp, ViewStyle } from 'react-native';
import { useStagger } from '../../hooks';

export interface StaggerViewProps {
  children: ReactNode[];
  style?: StyleProp<ViewStyle>;
  toValue: number;
  duration?: number;
  staggerDuration?: number;
  delay?: number;
}

const StaggerView: React.FC<StaggerViewProps> = ({
  children,
  style,
  toValue,
  duration = 300,
  staggerDuration = 100,
  delay = 0,
}) => {
  const { animatedValues, staggerIn } = useStagger(children.length);

  useEffect(() => {
    const timeout = setTimeout(() => staggerIn(toValue, duration, staggerDuration), delay);
    return () => clearTimeout(timeout);
  }, [toValue, duration, staggerDuration, delay, staggerIn]);

  return (
    <>
      {children.map((child, index) => (
        <Animated.View key={index} style={[style, { opacity: animatedValues[index] }]}>
          {child}
        </Animated.View>
      ))}
    </>
  );
};

export default StaggerView;
