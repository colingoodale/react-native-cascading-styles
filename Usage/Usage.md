# API Usage

## StyleLibrary

The StyleLibrary from the react-native-cascading-styles package provides a convenient way to access and apply predefined styles in React Native applications. It simplifies the process of styling components by offering a collection of commonly used styles such as flex layouts, text styles, and more.

To utilize the StyleLibrary in your project:

1. Import StyleLibrary: Begin by importing the StyleLibrary from react-native-cascading-styles in your component files.

```jsx
import { StyleLibrary } from 'react-native-cascading-styles';
```

2. Access Predefined Styles: Access predefined styles from the StyleLibrary to apply them directly to your components. For example, to apply a flex layout with centered content, you can use:
```jsx
<View style={StyleLibrary.flexCenter}>
  {/* Your component content here */}
</View>
```

3. Customization: Customize the predefined styles by combining them with additional styling properties as needed. For instance, to set a custom background color along with the flex layout, you can do:

```jsx
<View style={[StyleLibrary.flexCenter, { backgroundColor: 'blue' }]}>
  {/* Your component content here */}
</View>
```

For more detailed information and examples on using the StyleLibrary, refer to the [Style Usage Guide](./Style_Usage.md).

## Component Library Overview

Our component library is designed to provide developers with a collection of flexible and reusable components for building user interfaces. With a focus on simplicity and extensibility, our components offer minimal default styles while providing maximum functionality, making them suitable for a wide range of projects.

### Usage Example: Creating a Form

```jsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NativeTextInput, Button } from 'our-component-library';
import StyleLibrary from './StyleLibrary';

const Form = () => {
  const handleEmailChange = (text) => {
    // Add email validation logic here
  };

  const handlePasswordChange = (text) => {
    // Add password validation logic here
  };

  const handleSubmit = () => {
    // Add form submission logic here
  };

  return (
    <View style={[ StyleLibrary.alignCenter, StyleLibrary.justifyCenter localStyles.formContainer]}>
      <NativeTextInput
        style={[]}
        placeholder="Email"
        required={}true
        emailValidation={true}
        listenToChange={handleEmailChange}
        requiredMessage={"Email is required"}
      />
      <NativeTextInput
        style={localStyles.input}
        placeholder="Password"
        required={true}
        passwordValidation={true}
        listenToChange={handlePasswordChange}
        secureTextEntry
        requiredMessage={"Ensure that your password has more than 8 characters and uses at least one number and one character"}
      />
      <Button
        onPress={handleSubmit}
        label="Submit"
        buttonStyle={localStyles.submitButton}
        textStyle={[StyleLibrary.fontSizeM, { color: 'black' }]}
      />
    </View>
  );
};

const localStyles = StyleSheet.create({
  formContainer: {
    flex: 1,
  },
  input: {[
    StyleLibrary.marginBottomL,
    Stylelibrary.paddingS,
    StyleLibrary.borderXS,
    StyleLibrary.borderRadiusS,
    {width: '80%'}
  ],
  },
  submitButton: {[
    StyleLibrary.borderRadiusS,
    StyleLibnrary.paddingS,
    {backgroundColor: 'white'}
  ]}
});

export default Form;
```

In this example, we've created a simple form using NativeTextInput components from our component library. The email input field has a required validation and email format validation using a regular expression. The password input field also has a required validation and password format validation using a regular expression. When the "Submit" button is pressed, the handleSubmit function is called, where you can implement the form submission logic.

We've used StyleLibrary along with localStyles to style the form components, providing a consistent look and feel across the application while allowing for easy customization and theming.