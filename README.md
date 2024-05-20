# React Native Cascading Styles, Components, and Animation Library

Are you tired of juggling multiple libraries for styling, components, and animations in your React Native projects? Say hello to react-native-cascading-styles – your all-in-one solution for streamlined development! 🎉

Let's dive into the magic of StyleLibrary! No more hassle with class names – our inline style approach ensures lightning-fast performance. With descriptive names and cascading styles, you'll breeze through styling like never before. Need to customize? Inject your own styles effortlessly, creating predictable and polished designs every time.

But wait, there's more! Our components are the epitome of simplicity and flexibility. Take control of every style and function with ease. Want to add a personalized touch? Inject your own renderItems and watch your creations come to life! Whether it's a simple tooltip or a complex interactive element, our components empower you to build with speed and precision.

And let's not forget about animations! With our hooks, you'll wield unparalleled control over your animations, fine-tuning every detail to perfection. But if speed is your game, our animated components have got you covered. Wrap your components in sleek, animated views with just a few lines of code – it's that easy!

So why juggle multiple libraries when you can have it all with react-native-cascading-styles? Say goodbye to complexity and hello to seamless development. With our comprehensive solution, you'll conquer React Native like a pro, delivering stunning apps with confidence and ease. Try it out today and experience the difference for yourself! ✨

For more documentation on usage, go here [Usage](./Usage/Usage.md)

## Installation
```sh
npm install react-native-cascading-styles
```

## Usage

### Styles

You can pass a structured array to a component to apply the styles from the style library:

```jsx
import { StyleLibrary } from 'react-native-cascading-styles';

return <View style={[StyleLibrary.ClassName1, StyleLibrary.ClassName2]}></View>;
```

### Components

Import and use components from the library.
```jsx
import { Component } from 'react-native-cascading-styles';

return <Component prop1="value1" />;
```

### Animation

#### Using Animation Hooks
Hooks provide a simplified interface for creating animations. This method is useful if you want to integrate animations directly with your own components for more control and uniformity.
```jsx
import React from 'react';
import { View, Button } from 'react-native';
import { useAnimation } from 'react-native-cascading-styles';

const MyAnimatedComponent = () => {
  const { animation, startAnimation } = useAnimation();

  return (
    <View style={animation}>
      <Button title="Animate" onPress={startAnimation} />
    </View>
  );
};
```

#### Using Animiation Components
Animation components wrap your components and manage the necessary props to simplify the usage of animations. This approach is slightly more restrictive but much easier to implement for common use cases.
```jsx
import React from 'react';
import { AnimatedComponent } from 'react-native-cascading-styles';

const MyComponent = () => {
  return (
    <AnimatedComponent>
      <YourComponent />
    </AnimatedComponent>
  );
};
```