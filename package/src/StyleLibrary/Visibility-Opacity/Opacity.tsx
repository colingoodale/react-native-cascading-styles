import { StyleSheet } from "react-native";

export const Opacity = StyleSheet.create({
  // Opacity Levels
  opacityFull: {
    opacity: 1, // Completely opaque
  },
  opacityHigh: {
    opacity: 0.8, // Slightly transparent
  },
  opacityMedium: {
    opacity: 0.5, // Half transparency
  },
  opacityLow: {
    opacity: 0.3, // More transparent
  },
  opacityVeryLow: {
    opacity: 0.1, // Almost fully transparent
  },
  opacityNone: {
    opacity: 0, // Completely transparent but still takes space
  },
});
