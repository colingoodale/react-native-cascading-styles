# Component Library Documentation

## Introduction

This document provides an overview of the components available in the component library. Each component is designed to offer specific functionality and can be easily integrated into your React Native application.

## Components

### Button

The Button component provides a customizable button element for use in your application. It accepts various props to control its appearance and behavior.

- **Usage**: `import { Button } from 'component-library';`


To use the Button component, import it into your component file:

```javascript
import React from 'react';
import { TouchableOpacity, Text, ViewStyle, TextStyle } from 'react-native';
import StyleLibrary from '../../StyleLibrary';
import { ButtonProps } from './Button';

const MyComponent = () => {
  const handlePress = () => {
    // Handle button press event
  };

  return (
    <Button
      onPress={handlePress}
      label="Press me"
      buttonStyle={[StyleLibrary.ButtonStyles.button, StyleLibrary.Border.borderNone]}
      textStyle={StyleLibrary.Typography.textBody}
    />
  );
};
```

#### Props
The Button component accepts the following props:

- `onPress`: (function) A callback function invoked when the button is pressed.
- `label`: (string) The text displayed on the button.
- `testId`: (string) An optional prop used for testing purposes to specify a test ID for the button.
- `buttonStyle`: (array of ViewStyle) An array of styles to apply to the button container. These styles will be applied in addition to any default styles.
- `textStyle`: (array of TextStyle) An array of styles to apply to the button text. These styles will be applied in addition to any default text styles.

In this example, the Button component is used with custom button and text styles defined in the StyleLibrary.

```jsx
import React from 'react';
import { TouchableOpacity, Text, ViewStyle, TextStyle } from 'react-native';
import StyleLibrary from '../../StyleLibrary';
import { ButtonProps } from './Button';

const MyComponent = () => {
  const handlePress = () => {
    // Handle button press event
  };

  return (
    <Button
      onPress={handlePress}
      label="Press me"
      buttonStyle={[StyleLibrary.ButtonStyles.button, StyleLibrary.Border.borderNone]}
      textStyle={StyleLibrary.Typography.textBody}
    />
  );
};
```

### NativeTextInput

The `NativeTextInput` component provides a customizable text input field with various validation options.

- **Usage**: `import { NativeTextInput } from 'component-library';`

### Props

- `style`: (TextStyle) Custom styles to be applied to the text input.
- `testId`: (string | null) An optional ID used for testing purposes.
- `required`: (boolean) Indicates if the field is required.
- `requiredMessage`: (string) Text to be displayed when the field is required and left empty.
- `maxLength`: (number) Maximum character limit for the input field.
- `minLength`: (number) Minimum character limit for the input field.
- `validationRegex`: (RegExp) Custom regular expression for additional validation.
- `emailValidation`: (boolean) Enables email validation.
- `numericValidation`: (boolean) Enables numeric validation.
- `alphanumericValidation`: (boolean) Enables alphanumeric validation.
- `phoneNumberValidation`: (boolean) Enables phone number validation.
- `urlValidation`: (boolean) Enables URL validation.
- `dateValidation`: (boolean) Enables date validation.
- `disabled`: (boolean) Disables the text input field.
- `countryCode`: (string) Sets the country code for phone number validation.
- `accessible`: (boolean) Indicates if the input field is accessible.
- `accessibilityLabel`: (string) Label for accessibility.
- `accessibilityHint`: (string) Hint for accessibility.
- `successColor`: (string) Color to indicate success state.
- `errorColor`: (string) Color to indicate error state.

### Example

```jsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import NativeTextInput from './NativeTextInput';

const ExampleScreen = () => {
  return (
    <View style={styles.container}>
      <NativeTextInput
        style={styles.textInput}
        testId="exampleInput"
        required={true}
        requiredMessage="This field is required"
        maxLength={10}
        minLength={3}
        validationRegex={/^[A-Za-z]+$/}
        emailValidation={true}
        numericValidation={true}
        disabled={false}
        countryCode="US"
        accessible={true}
        accessibilityLabel="Example Input"
        accessibilityHint="Enter text"
        successColor="green"
        errorColor="red"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 10,
  },
});

export default ExampleScreen;
```

### Tooltip

The `Tooltip` component provides a tooltip functionality to display additional information when interacting with an element.

- **Usage**: `import { Tooltip } from 'component-library';`

### Props

- `children`: (React.ReactNode) The element to which the tooltip is attached.
- `content`: (string) The text content to be displayed in the tooltip.
- `customTooltip`: (React.ReactElement) Custom tooltip component to be rendered instead of the default text tooltip.
- `tooltipStyle`: (ViewStyle) Custom styles to be applied to the tooltip container.
- `trigger`: ('onPress' | 'onLongPress') The trigger event to show the tooltip.
- `showOnHover`: (boolean) Indicates whether to show the tooltip on hover.
- `persistOnHover`: (boolean) Indicates whether the tooltip should persist when hovering.
- `pressRetentionOffset`: (object) The distance that a touch event can move before it is no longer considered a press.
- `hitSlop`: (object | number) The area in which to expand the touchable area around the tooltip.
- `delayLongPress`: (number) The duration in milliseconds to wait before showing the tooltip on long press.
- `containerStyle`: (ViewStyle) Custom styles to be applied to the tooltip container.
- `toolTipTextStyle`: (TextStyle) Custom styles to be applied to the tooltip text.
- `backgroundColor`: (string) Background color of the tooltip.
- `textColor`: (string) Text color of the tooltip.

### Example

```jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Tooltip from './Tooltip';

const ExampleScreen = () => {
  return (
    <View style={styles.container}>
      <Tooltip content="This is a tooltip" backgroundColor="rgba(0,0,0,0.7)" textColor="white">
        <Text style={styles.text}>Hover Me</Text>
      </Tooltip>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
  },
});

export default ExampleScreen;
```

Here is an example of using a custom Tooltip component in this one, you can simply pass back a component to act as a tooltip and include whatever styles or functionality you'd like.

```jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Tooltip from './Tooltip';

// Custom Tooltip Component
const CustomTooltip = ({ onPress }) => {
  return (
    <View style={styles.customTooltipContainer}>
      <Text style={styles.customTooltipText}>Custom Tooltip Content</Text>
      <Text style={styles.customTooltipButton} onPress={onPress}>Close</Text>
    </View>
  );
};

const ExampleScreen = () => {
  return (
    <View style={styles.container}>
      <Tooltip customTooltip={<CustomTooltip />} backgroundColor="rgba(0,0,0,0.7)" textColor="white">
        <Text style={styles.text}>Hover Me</Text>
      </Tooltip>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
  },
  customTooltipContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 1,
  },
  customTooltipText: {
    fontSize: 16,
    marginBottom: 5,
  },
  customTooltipButton: {
    fontSize: 14,
    color: 'blue',
    textAlign: 'right',
    textDecorationLine: 'underline',
  },
});

export default ExampleScreen;
```


### DropdownSelect

The `DropdownSelect` component provides a dropdown selection interface.

- **Usage**: `import { DropdownSelect } from 'component-library';`

## Props

- **options**: `{ label: string, value: string }[]`  
  An array of objects representing the selectable options. Each object contains a `label` and a corresponding `value`.
  
- **onValueChange**: `(value: string) => void`  
  A callback function invoked when an option is selected. It receives the `value` of the selected option as an argument.
  
- **preSelectMessage**: `string` (optional, default: "Select an option")  
  A message displayed as the dropdown trigger when no option is selected.
  
- **selectedValue**: `string` (optional)  
  The value of the currently selected option.
  
- **containerStyle**: `StyleProp<ViewStyle>` (optional)  
  Style for the container wrapping the dropdown.
  
- **itemStyle**: `StyleProp<ViewStyle>` (optional)  
  Style for individual dropdown items.
  
- **textStyle**: `StyleProp<TextStyle>` (optional)  
  Style for the text of dropdown items.
  
- **triggerStyle**: `StyleProp<ViewStyle>` (optional)  
  Style for the dropdown trigger button.
  
- **renderItem**: `React.ComponentType<any>` (optional)  
  Custom renderer for dropdown items. If not provided, default rendering will be used.

```jsx
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import DropdownSelect from './DropdownSelect';

const ExampleScreen = () => {
  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];
  const [selectedValue, setSelectedValue] = useState('');

  const handleValueChange = (value) => {
    setSelectedValue(value);
  };

  return (
    <View style={styles.container}>
      <DropdownSelect
        options={options}
        onValueChange={handleValueChange}
        selectedValue={selectedValue}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ExampleScreen;
```

Here is an example of usage with a renderItem, this allows devs to use any item and include functional components in the dropdown fields.
```jsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import DropdownSelect, { DropdownSelectProps } from './DropdownSelect';

// Custom item renderer for dropdown items
const CustomDropdownItem: React.FC<{ label: string }> = ({ label }) => {
  return (
    <Pressable style={styles.customItem}>
      <Text style={styles.customItemText}>{label}</Text>
    </Pressable>
  );
};

// Usage of DropdownSelect with custom item renderer
const App: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<string>('');

  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];

  // Custom renderer function for dropdown items
  const renderItem = ({ item }: { item: { label: string, value: string } }) => {
    return <CustomDropdownItem label={item.label} />;
  };

  return (
    <View style={styles.container}>
      <DropdownSelect
        options={options}
        onValueChange={(value) => setSelectedValue(value)}
        selectedValue={selectedValue}
        renderItem={renderItem} // Pass the custom renderer function
        containerStyle={styles.dropdownContainer}
        itemStyle={styles.dropdownItem}
        textStyle={styles.dropdownText}
        triggerStyle={styles.dropdownTrigger}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownContainer: {
    width: 200,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    overflow: 'hidden',
  },
  dropdownTrigger: {
    backgroundColor: 'white',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    alignItems: 'center',
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: 'white',
  },
  dropdownText: {
    fontSize: 16,
  },
  customItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: 'white',
  },
  customItemText: {
    fontSize: 16,
  },
});

export default App;
```

### Checkbox

The Checkbox component provides a customizable checkbox input.

### Props

- **style** (object): Custom styles to be applied to the checkbox container.
- **animationType** (`'spring' | 'timing'`, optional, default: `'spring'`): Specifies the type of animation to be used when checking/unchecking the checkbox.
- **highlightColor** (string, optional, default: `'#000'`): The color of the checkbox when it is checked.
- **label** (string, optional): Label to be displayed next to the checkbox.
- **onCheck** ((checked: boolean) => void, optional): A callback function invoked when the checkbox is checked or unchecked.
- **hoverStyle** (object, optional): Custom styles to be applied when the checkbox is hovered.
- **hoverInEffect** (() => void, optional): A callback function invoked when the mouse hovers over the checkbox.
- **hoverOutEffect** (() => void, optional): A callback function invoked when the mouse leaves the checkbox.

```jsx
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import Checkbox from './Checkbox';

const App = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = (checked) => {
    setIsChecked(checked);
  };

  return (
    <Checkbox
      label="Check me"
      style={styles.checkbox}
      onCheck={handleCheck}
    />
  );
};

const styles = StyleSheet.create({
  checkbox: {
    marginBottom: 10,
  },
});

export default App;
```


## Types

### ButtonProps

```tsx
export type ButtonProps = {
  onPress: () => void;
  label: string;
  testId?: string;
  buttonStyle: ViewStyle[];
  textStyle: TextStyle[];
};
```

### TextInputProps

```tsx
export type TextInputProps = {
  style: TextStyle;
  testId?: string | null;
  required?: boolean;
  requiredMessage?: string;
  maxLength?: number;
  minLength?: number;
  validationRegex?: RegExp;
  emailValidation?: boolean;
  numericValidation?: boolean;
  alphanumericValidation?: boolean;
  phoneNumberValidation?: boolean;
  urlValidation?: boolean;
  dateValidation?: boolean;
  disabled?: boolean;
  countryCode?: string; 
  accessible?: boolean; 
  accessibilityLabel?: string; 
  accessibilityHint?: string; 
  successColor?: string; 
  errorColor?: string; 
} & React.ComponentProps<typeof TextInput>;
```

### TooltipProps

```tsx
export interface TooltipProps {
  children: React.ReactNode;
  content?: string;
  customTooltip?: React.ReactElement;
  tooltipStyle?: ViewStyle;
  trigger?: 'onPress' | 'onLongPress';
  showOnHover?: boolean;
  persistOnHover?: boolean;
  pressRetentionOffset?: object;
  hitSlop?: object | number;
  delayLongPress?: number;
  containerStyle?: ViewStyle;
  toolTipTextStyle?: TextStyle;
  backgroundColor?: string;
  textColor?: string;
}
```

### DropdownSelectProps

```tsx
export interface DropdownSelectProps {
  options: { label: string, value: string }[];
  onValueChange: (value: string) => void;
  preSelectMessage?: string;
  selectedValue?: string;
  containerStyle?: StyleProp<ViewStyle>;
  itemStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  triggerStyle?: StyleProp<ViewStyle>;
  renderItem?: React.ComponentType<any>;
}
```

### CheckboxProps

```tsx
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
```