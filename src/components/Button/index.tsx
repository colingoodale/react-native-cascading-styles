import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";
import StyleLibrary from "../../StyleLibrary";

export type ButtonProps = {
  onPress: () => void;
  label: string;
  testId?: string;
  buttonStyle: ViewStyle[];
  textStyle: TextStyle[];
};

const Button = ({
  onPress,
  label,
  testId,
  buttonStyle,
  textStyle,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={onPress}
      testID={testId ? testId : "default"}
    >
      <Text style={textStyle}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
