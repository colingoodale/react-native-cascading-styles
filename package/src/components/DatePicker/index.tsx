import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';

type RadioButtonProps = {
  options: string[];
  buttonBorderColor?: string;
  buttonFillColor?: string;
};

const RadioButton: React.FC<RadioButtonProps> = ({ options, buttonBorderColor = '#000', buttonFillColor = '#000' }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  return (
    <View>
      {options.map((option, index) => (
        <View key={index} style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Pressable
            style={({ pressed }) => ({
              height: 24,
              width: 24,
              borderRadius: 12,
              borderWidth: 2,
              borderColor: buttonBorderColor,
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 10,
              opacity: pressed ? 0.5 : 1,
            })}
            onPress={() => setSelectedOption(option)}
          >
            {selectedOption === option && (
              <View
                style={{
                  height: 12,
                  width: 12,
                  borderRadius: 6,
                  backgroundColor: buttonFillColor,
                }}
              />
            )}
          </Pressable>
          <Text>{option}</Text>
        </View>
      ))}
    </View>
  );
};

export default RadioButton;