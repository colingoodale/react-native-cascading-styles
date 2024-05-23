import React from 'react';
import { Pressable, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface BadgeProps {
  value: number | string;
  color?: string;
  onPress?: () => void;
  onHoverIn?: () => void;
  onHoverOut?: () => void;
  badgeStyle?: ViewStyle;
  textStyle?: TextStyle;
}

const Badge: React.FC<BadgeProps> = ({
  value,
  color = 'red',
  onPress = () => {},
  onHoverIn = () => {},
  onHoverOut = () => {},
  badgeStyle = {},
  textStyle = {},
}) => {
  return (
    <Pressable
      onPress={onPress}
      onHoverIn={onHoverIn}
      onHoverOut={onHoverOut}
      style={[styles.badge, { backgroundColor: color }, badgeStyle]}
    >
      <Text style={[styles.text, textStyle]}>{value}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  badge: {
    position: 'absolute',
    top: 0,
    right: 0,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Badge;