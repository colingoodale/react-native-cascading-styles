import { Image, StyleSheet, Platform, View } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { Button, Tooltip, StyleLibrary } from 'react-native-cascading-styles'

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
