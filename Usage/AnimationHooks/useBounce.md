# useBounce

## useBounce Hook Documentation

The `useBounce` hook provides a bounce animation for React Native components. This hook utilizes the `Animated` API from React Native to create a bouncing effect, making it easier to animate components with a spring-like motion.

### Usage

To use the `useBounce` hook, first import it into your component. You can then call the hook and destructure the returned values to apply the animation to your component.

#### Example

```javascript
import React, { useEffect } from 'react';
import { View, Button, Animated } from 'react-native';
import useBounce from './useBounce';

const BounceExample = () => {
  const { position, bounce, reset } = useBounce(0);

  useEffect(() => {
    bounce(100);
  }, []);

  return (
    <View>
      <Animated.View style={{ transform: [{ translateY: position }] }}>
        <View style={{ width: 100, height: 100, backgroundColor: 'blue' }} />
      </Animated.View>
      <Button title="Bounce" onPress={() => bounce(100)} />
      <Button title="Reset" onPress={reset} />
    </View>
  );
};

export default BounceExample;
```

### Parameters
- `initialPosition` (number): The initial position of the animated value. Defaults to 0.

### Returns
- `position` (Animated.Value): The animated value that represents the position.
- `bounce` (function): A function to start the bounce animation.
  - `toValue` (number): The value to which the component will bounce.
  - `duration` (number, optional): The duration of the animation in milliseconds. Defaults to 300.
  - `bounces` (number, optional): The number of bounces. Defaults to 2.
  - `onEnd` (Animated.EndCallback, optional): A callback that is invoked when the animation ends.
- `reset` (function): A function to reset the animated value to the initial position.

### Methods

#### `bounce(toValue: number, duration?: number, bounces?: number, onEnd?: Animated.EndCallback)`
Starts the bounce animation.

#### `reset()`
Resets the animated value to the initial position.

### Installation
To use this hook, ensure you have react-native installed in your project. No additional dependencies are required.

### Conclusion
The useBounce hook is a convenient way to add a bounce animation to your React Native components. By utilizing the Animated API, it provides smooth and customizable animations with minimal setup.
