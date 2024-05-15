import { Image, StyleSheet, Platform } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { Button, StyleLibrary } from 'react-native-cascading-styles'

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
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
     <Button label={"Click me"} onPress={() => console.log("Button clicked")} buttonStyle={[StyleLibrary.borderM]} textStyle={[localStyles.buttonText]} />
    </ParallaxScrollView>
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
