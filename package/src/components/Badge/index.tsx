import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface BadgeProps {
  value: number;
  color?: string;
}

const Badge: React.FC<BadgeProps> = ({ value, color = 'red' }) => {
  return (
    <View style={[styles.badge, { backgroundColor: color }]}>
      <Text style={styles.text}>{value}</Text>
    </View>
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