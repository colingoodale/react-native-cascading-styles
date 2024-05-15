import React from "react";
import { TextInput, StyleSheet, TextStyle } from "react-native";

export type TextInputProps = {
  style: TextStyle;
  testId?: string | null;
} & React.ComponentProps<typeof TextInput>;

// Default styles for the TextInput component
const defaultStyles = StyleSheet.create({
  base: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "gray",
    backgroundColor: "white",
  },
});

// Custom TextInput component
const CustomTextInput = ({ style, testId, ...props }: TextInputProps) => {
  return (
    <TextInput
      style={[defaultStyles.base, style]}
      testID={testId ? testId : "default"}
      {...props}
    />
  );
};

export default CustomTextInput;
