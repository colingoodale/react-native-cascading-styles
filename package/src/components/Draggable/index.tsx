import React, { useRef, ReactNode, FunctionComponent } from 'react';
import { Animated, PanResponder, Pressable } from 'react-native';

interface DraggableProps {
  children: ReactNode;
  onMove?: () => void;
  onRelease?: () => void;
}

const Draggable: FunctionComponent<DraggableProps> = ({ children, onMove, onRelease }) => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], { useNativeDriver: false }),
    onPanResponderRelease: () => {
      if (onRelease) {
        onRelease();
      }
      Animated.spring(pan, { toValue: { x: 0, y: 0 }, useNativeDriver: false }).start();
    },
  });

  return (
    <Animated.View style={{ transform: [{ translateX: pan.x }, { translateY: pan.y }] }} {...panResponder.panHandlers}>
      <Pressable onPress={onMove}>{children}</Pressable>
    </Animated.View>
  );
};

export default Draggable;