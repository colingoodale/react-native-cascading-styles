import { StyleSheet, Easing, Animated } from "react-native";

// Comprehensive animation utilities for React Native
export const AnimiationUtility = StyleSheet.create({
  // Scale Transformations from xs to xl
  animScaleXs: {
    transform: [{ scale: 0.9 }], // Extra small scale
  },
  animScaleS: {
    transform: [{ scale: 1.0 }], // Small scale
  },
  animScaleM: {
    transform: [{ scale: 1.1 }], // Medium scale
  },
  animScaleL: {
    transform: [{ scale: 1.2 }], // Large scale
  },
  animScaleXl: {
    transform: [{ scale: 1.3 }], // Extra large scale
  },
});
