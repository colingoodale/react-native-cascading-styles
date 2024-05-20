import React, { useEffect, ReactNode } from 'react';
import { Animated, StyleProp, ViewStyle } from 'react-native';
import { useSlide } from '../../hooks';

export interface SlideViewProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  inValue: number;
  outValue: number;
  duration?: number;
  delay?: number;
  direction?: 'horizontal' | 'vertical';
  slideInOnMount?: boolean;
  slideOutOnUnmount?: boolean;
}

const SlideView: React.FC<SlideViewProps> = ({
  children,
  style,
  inValue,
  outValue,
  duration = 300,
  delay = 0,
  direction = 'horizontal',
  slideInOnMount = true,
  slideOutOnUnmount = true
}) => {
  const { transform, slideIn, slideOut } = useSlide(outValue, direction);

  useEffect(() => {
    if (slideInOnMount) {
      slideIn(inValue, duration, delay);
    }
    return () => {
      if (slideOutOnUnmount) {
        slideOut(outValue, duration, delay);
      }
    };
  }, [inValue, outValue, duration, delay, slideInOnMount, slideOutOnUnmount, slideIn, slideOut]);

  return (
    <Animated.View style={[style, { transform }]}>
      {children}
    </Animated.View>
  );
};

export default SlideView;

