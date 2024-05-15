import { ViewStyle, TextStyle, TextInput } from 'react-native';

export type ButtonProps = {
    onPress: () => void;
    label: string;
    testId?: string;
    buttonStyle: ViewStyle[];
    textStyle: TextStyle[];
  };

  export type TextInputProps = {
    style: TextStyle;
    testId?: string | null;
  } & React.ComponentProps<typeof TextInput>;