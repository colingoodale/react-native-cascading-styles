import React from 'react';
import { View, Image, ScrollView, Text, Animated } from 'react-native';

interface CarouselItem {
  url?: string;
  src?: any;
  uri?: string;
}

interface CarouselProps {
  data: CarouselItem[];
  renderItem?: (item: CarouselItem) => JSX.Element;
  direction?: 'vertical' | 'horizontal';
  animationType?: 'slide' | 'fade';
  overlayContent?: JSX.Element;
}

const Carousel: React.FC<CarouselProps> = ({ data, renderItem, direction = 'horizontal', animationType = 'slide', overlayContent }) => {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  const renderItemComponent = ({ item, index }: { item: CarouselItem, index: number }) => {
    let content;
    if (renderItem) {
      content = renderItem(item);
    } else {
      const source = item.url ? { uri: item.url } : item.src;
      content = <Image source={source} style={{ width: '100%', height: '100%' }} />;
    }

    const inputRange = [(index - 1) * 1, index * 1, (index + 1) * 1];
    const opacity = scrollX.interpolate({
      inputRange,
      outputRange: animationType === 'fade' ? [0, 1, 0] : [1, 1, 1],
    });

    return (
      <Animated.View style={{ opacity, flex: 1 }}>
        {content}
        {overlayContent && <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>{overlayContent}</View>}
      </Animated.View>
    );
  };

  return (
    <Animated.FlatList
      data={data}
      keyExtractor={(_, index) => index.toString()}
      horizontal={direction === 'horizontal'}
      pagingEnabled
      scrollEventThrottle={16}
      onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false })}
      renderItem={renderItemComponent}
    />
  );
};

export default Carousel;