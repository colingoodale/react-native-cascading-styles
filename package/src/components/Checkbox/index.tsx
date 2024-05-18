import React, { useState } from 'react';
import { Pressable, View, Text, StyleSheet, Animated } from 'react-native';

export interface CheckboxProps {
  style?: object;
  animationType?: 'spring' | 'timing';
  highlightColor?: string;
  label?: string;
  onCheck?: (checked: boolean) => void;
  hoverStyle?: object;
  hoverInEffect?: () => void;
  hoverOutEffect?: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  style = {},
  animationType = 'spring',
  highlightColor = '#000',
  label = '',
  onCheck = () => {},
  hoverStyle = { opacity: 0.6 },
  hoverInEffect = () => {},
  hoverOutEffect = () => {},
}) => {
  const [checked, setChecked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const animatedValue = new Animated.Value(0);

  const animate = () => {
    Animated[animationType](animatedValue, {
      toValue: checked ? 0 : 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const handlePress = () => {
    setChecked(!checked);
    onCheck(!checked);
    animate();
  };

  const boxStyle = {
    backgroundColor: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['#fff', highlightColor],
    }),
  };

  return (
    <Pressable
      style={[styles.container, style, isHovered && hoverStyle]}
      onPress={handlePress}
      onHoverIn={() => {
        setIsHovered(true);
        hoverInEffect();
      }}
      onHoverOut={() => {
        setIsHovered(false);
        hoverOutEffect();
      }}
    >
      <Animated.View style={[styles.box, boxStyle]} />
      <Text>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  box: {
    width: 20,
    height: 20,
    marginRight: 5,
    borderWidth: 1,
    borderColor: '#000',
  },
});

export default Checkbox;