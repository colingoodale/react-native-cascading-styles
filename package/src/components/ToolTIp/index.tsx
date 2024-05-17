import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

interface TooltipProps {
  children: React.ReactNode;
  content?: string;
  customContent?: React.ReactElement;
  tooltipStyle?: object;
  trigger?: 'onPress' | 'onLongPress';
  showOnHover?: boolean;
  persistOnHover?: boolean;
}

const Tooltip: React.FC<TooltipProps> = ({ 
  children, 
  content = '', 
  customContent = null, 
  tooltipStyle = {}, 
  trigger = 'onLongPress', 
  showOnHover = true, 
  persistOnHover = false 
}) => {
  const [visible, setVisible] = useState(false);

  const showTooltip = useCallback(() => {
    setVisible(true);
  }, []);

  const hideTooltip = useCallback(() => {
    setVisible(false);
  }, []);

  const onTooltipPress = useCallback(() => {
    if (persistOnHover && visible) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [persistOnHover, visible]);

  const renderTooltipContent = () => {
    if (customContent) {
      return React.cloneElement(customContent, { onPress: onTooltipPress });
    }
    return (
      <View style={[styles.tooltip, tooltipStyle]}>
        <Text>{content}</Text>
      </View>
    );
  };

  return (
    <Pressable
      onPressIn={trigger === 'onPress' ? showTooltip : null}
      onPressOut={trigger === 'onPress' ? hideTooltip : null}
      onLongPress={trigger === 'onLongPress' ? showTooltip : null}
      onHoverIn={showOnHover ? showTooltip : undefined}
      onHoverOut={showOnHover && !persistOnHover ? hideTooltip : undefined}
      style={styles.container}
    >
      {children}
      {visible && renderTooltipContent()}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  tooltip: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.7)',
    padding: 10,
    borderRadius: 5,
    zIndex: 1000,
  },
});

export default Tooltip;