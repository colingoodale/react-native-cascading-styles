import { Image, StyleSheet, Platform, View } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { Button, Tooltip, DropdownSelect, StyleLibrary } from 'react-native-cascading-styles'

const localStyles = StyleSheet.create({
  buttonText: {
    fontSize: 20,
    color: 'white',
  },
  buttonColor: {
    backgroundColor: 'blue',
  },
});


export default function HomeScreen() {
  return (
    <>
      <DropdownSelect
        options={[
          { label: 'Option 1', value: '1' },
          { label: 'Option 2', value: '2' },
          { label: 'Option 3', value: '3' },
        ]}
        onValueChange={(value) => console.log(value)}
      />
    </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
