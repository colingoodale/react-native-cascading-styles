import { StyleSheet, Animated, Easing } from "react-native";

// Utility function to create an Animated timing animation with custom duration and easing
const createTimingAnimation = (
  animatedValue: Animated.Value,
  toValue: number,
  duration: number,
  easing: ((value: number) => number) = Easing.linear,
) => {
  return Animated.timing(animatedValue, {
    toValue,
    duration,
    easing,
    useNativeDriver: true, // This improves performance
  });
};

// Utility function to create a basic spring animation
const createSpringAnimation = (
  animatedValue: Animated.Value,
  toValue: number,
  tension: number = 40,
  friction: number = 7,
) => {
  return Animated.spring(animatedValue, {
    toValue,
    tension,
    friction,
    useNativeDriver: true, // This improves performance
  });
};

// Comprehensive animation styles using Animated
const animationStyles = StyleSheet.create({
  // Common animations using Animated
  animFadeIn: {
    opacity: new Animated.Value(0), // Start with invisible
  },
  animFadeOut: {
    opacity: new Animated.Value(1), // Start with visible
  },

  animSlideLeft: {
    transform: [{ translateX: new Animated.Value(100) }], // Start offset
  },
  animSlideRight: {
    transform: [{ translateX: new Animated.Value(-100) }], // Start offset
  },

  animScaleUp: {
    transform: [{ scale: new Animated.Value(0.5) }], // Start small
  },
  animScaleDown: {
    transform: [{ scale: new Animated.Value(1.5) }], // Start large
  },
});

const AnimatedUtility = {
  createtimeingAnimation: createTimingAnimation,
  createSpringAnimation: createSpringAnimation,
  animationStyles: animationStyles,
};

export default AnimatedUtility;
