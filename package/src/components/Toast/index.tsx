import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, ViewStyle, TextStyle, Pressable } from 'react-native';
import { useFade } from '../../hooks';
import { useSlide } from '../../hooks';

type ToastProps = {
  message?: string;
  containerStyle?: ViewStyle[];
  textStyle?: TextStyle[];
  renderItem?: React.ComponentType<any>;
  duration?: number;
  slideDirection?: 'horizontal' | 'vertical';
  onPress?: () => void;
  onHoverIn?: () => void;
  onHoverOut?: () => void;
  renderLeadingIcon?: () => JSX.Element;
  renderTrailingIcon?: () => JSX.Element;
};

const Toast: React.FC<ToastProps> = ({
  message = 'Default Message',
  containerStyle = [{
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
  }],
  textStyle = [{ color: 'white'}],
  renderItem,
  duration = 3000,
  slideDirection = 'vertical',
  onPress,
  onHoverIn,
  onHoverOut,
  renderLeadingIcon,
  renderTrailingIcon,
}) => {
  const RenderItem = renderItem;
  const { opacity, fadeIn, fadeOut } = useFade(0);
  const { transform, slideIn, slideOut } = useSlide(0, slideDirection);

  const timer = useRef<NodeJS.Timeout | null>(null);

  const handleHoverIn = () => {
    if (timer.current) clearTimeout(timer.current);
    if (onHoverIn) onHoverIn();
  };

  const handleHoverOut = () => {
    timer.current = setTimeout(() => {
      fadeOut(300, 0, () => slideOut(1, 300));
    }, duration);
    if (onHoverOut) onHoverOut();
  };

  useEffect(() => {
    slideIn(1, 300, 0, () => {
      fadeIn(300);
      timer.current = setTimeout(() => {
        fadeOut(300, 0, () => slideOut(1, 300));
      }, duration);
    });

    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [fadeIn, fadeOut, slideIn, slideOut, duration]);

  return (
    <Pressable 
      style={[...containerStyle, { opacity }, { transform }]} 
      onPress={onPress} 
      onHoverIn={handleHoverIn}
      onHoverOut={handleHoverOut}
    >
      {renderLeadingIcon && renderLeadingIcon()}
      {RenderItem ? <RenderItem /> : <Text style={[...textStyle]}>{message}</Text>}
      {renderTrailingIcon && renderTrailingIcon()}
    </Pressable>
  );
};

export default Toast;