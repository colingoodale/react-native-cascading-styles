import React, { useState } from "react";
import { TextInput, StyleSheet, TextStyle, View, Text } from "react-native";

import countryCodes from "./countryCode.json"; // Import country codes data

export type TextInputProps = {
  style: TextStyle;
  testId?: string | null;
  required?: boolean; // New prop for indicating if the field is required
  requiredMessage?: string; // New prop for setting the required field text
  maxLength?: number; // New prop for setting maximum character limit
  minLength?: number; // New prop for setting minimum character limit
  validationRegex?: RegExp; // New prop for custom validation using regular expressions
  emailValidation?: boolean; // New prop for enabling email validation
  numericValidation?: boolean; // New prop for enabling numeric validation
  alphanumericValidation?: boolean; // New prop for enabling alphanumeric validation
  phoneNumberValidation?: boolean; // New prop for enabling phone number validation
  urlValidation?: boolean; // New prop for enabling URL validation
  dateValidation?: boolean; // New prop for enabling date validation
  disabled?: boolean; // New prop for disabling the TextInput
  countryCode?: string; // New prop for setting the country code
  accessible?: boolean; // New prop for setting the accessibility of the TextInput
  accessibilityLabel?: string; // New prop for setting the accessibility label
  accessibilityHint?: string; // New prop for setting the accessibility hint
  successColor?: string; // New prop for setting the success color
  errorColor?: string; // New prop for setting the error color
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
  errorText: {
    color: "red",
    marginTop: 5,
  },
});

// Custom TextInput component
const NativeTextInput = ({
  style,
  testId,
  required,
  requiredMessage,
  maxLength,
  minLength,
  validationRegex,
  emailValidation,
  numericValidation,
  alphanumericValidation,
  phoneNumberValidation,
  urlValidation,
  dateValidation,
  disabled,
  countryCode,
  accessible,
  accessibilityLabel,
  accessibilityHint,
  successColor = "green",
  errorColor = 'red',
  ...props
}: TextInputProps) => {
  const [isValid, setIsValid] = useState(true); // State to track validation
  const [hasTyped, setHasTyped] = useState(false); // State to track if the user has started typing

  const debounce = (func: any, delay: number) => {
    let timer: any;
    return function (this: any, ...args: any[]) {
      clearTimeout(timer);
      timer = setTimeout(() => func.apply(this, args), delay);
    };
  };

  const handleValidationDebounced = debounce((text: string) => {
    handleValidation(text);
  }, 500)

  const handleValidation = (text: string) => {
    let valid = true;

    // Check if the field is required and not empty
    if (required) {
      valid = text.trim() !== "";
    }

    // Check if the text length is less than minLength
    if (valid && minLength) {
      valid = text.length >= minLength;
    }

    // Check if the text length exceeds maxLength
    if (valid && maxLength) {
      valid = text.length <= maxLength;
    }

    // Check custom validation using regex
    if (valid && validationRegex) {
      valid = validationRegex.test(text);
    }

    // Additional validations
    if (valid) {
      //Email Validation
      if (emailValidation) {
        valid = /\S+@\S+\.\S+/.test(text);
      }
      //Numeric Validation
      if (numericValidation) {
        valid = /^\d+$/.test(text);
      }
      //Alphanumeric Validation
      if (alphanumericValidation) {
        valid = /^[0-9a-zA-Z]+$/.test(text);
      }
      // URL validation
      if (valid && urlValidation) {
        valid = /^(ftp|http|https):\/\/[^ "]+$/.test(text);
      }
      //Phone number validation
      if (phoneNumberValidation) {
        valid = /^[0-9]{10}$/.test(text); // Assuming 10-digit phone number format
      }
      // Date validation
      if (dateValidation) {
        // Example: Date validation for MM/DD/YYYY format
        valid = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(19|20)\d{2}$/.test(text);
      }
      // Phone number validation
      if (valid && countryCode) {
        const country = countryCodes.find((country) => country.countryCode === countryCode.toUpperCase());
        if (country) {
          const phoneFormat = new RegExp(country.phoneFormat);
          valid = phoneFormat.test(text);
        }
      }      
    }

    setIsValid(valid);
  };

  const handleChangeText = (text: string) => {
    if (!hasTyped) {
      setHasTyped(true); // User has started typing
    }
    handleValidationDebounced(text);
  };

  const applyBorderColor = () => {
    if ((required || maxLength || minLength) && hasTyped) {
      return isValid ? { borderColor: successColor } : { borderColor: errorColor };
    }
    return {};
  };

  const applyErrorTextColor = () => {
    if((required || maxLength || minLength) && hasTyped) {
      return isValid ? { color: successColor } : { color: errorColor };
    }
    return { color: 'red'};
  }

  return (
    <View 
      accessible={accessible ? accessible : true} 
      accessibilityLabel={accessibilityLabel ? accessibilityLabel : "Text Input"}
      accessibilityHint={accessibilityHint ? accessibilityHint : "Enter text"}
      aria-disabled={disabled}
    >
      <TextInput
        style={[
          defaultStyles.base,
          applyBorderColor(),
          style
        ]}
        testID={testId ? testId : "default"}
        onChangeText={handleChangeText} // Validate on text change
        editable={!disabled} // Set TextInput as editable or not based on the disabled prop
        {...props}
      />
      {hasTyped && (
        <>
          {required && !isValid && (
            <Text style={applyErrorTextColor()}>
              {requiredMessage ? requiredMessage : "This field is required"}
            </Text>
          )}
          {minLength && !isValid && (
            <Text style={applyErrorTextColor()}>
              {`Minimum ${minLength} characters required`}
            </Text>
          )}
          {maxLength && !isValid && (
            <Text style={applyErrorTextColor()}>
              {`Maximum ${maxLength} characters allowed`}
            </Text>
          )}
        </>
      )}
    </View>
  );
};

export default NativeTextInput;