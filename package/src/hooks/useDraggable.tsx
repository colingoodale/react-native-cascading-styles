import { useRef } from 'react';
import { Animated, PanResponder } from 'react-native';

interface DraggableProps {
  onMove?: () => void;
  onRelease?: () => void;
}

const useDraggable = ({ onMove, onRelease }: DraggableProps) => {
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

  const draggableProps = {
    style: { transform: [{ translateX: pan.x }, { translateY: pan.y }] },
    ...panResponder.panHandlers,
  };

  return draggableProps;
};

export default useDraggable;