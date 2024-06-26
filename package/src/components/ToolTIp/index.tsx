import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, Pressable, ViewStyle, TextStyle } from 'react-native';

export interface TooltipProps {
  children: React.ReactNode;
  content?: string;
  customTooltip?: React.ReactElement;
  tooltipStyle?: ViewStyle;
  trigger?: 'onPress' | 'onLongPress';
  showOnHover?: boolean;
  persistOnHover?: boolean;
  pressRetentionOffset?: object;
  hitSlop?: object | number;
  delayLongPress?: number;
  containerStyle?: ViewStyle;
  toolTipTextStyle?: TextStyle;
  backgroundColor?: string;
  textColor?: string;
}

const Tooltip: React.FC<TooltipProps> = ({ 
  children, 
  content = '', 
  customTooltip = null, 
  tooltipStyle = {}, 
  trigger = 'onLongPress', 
  showOnHover = true, 
  persistOnHover = false,
  pressRetentionOffset = { top: 10, left: 10, right: 10, bottom: 10 },
  hitSlop = 10,
  delayLongPress = 500,
  containerStyle = {},
  toolTipTextStyle = {},
  backgroundColor = 'rgba(236,236,236,0.9)',
  textColor = 'white', 
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
    if (customTooltip) {
      return React.cloneElement(customTooltip, { onPress: onTooltipPress });
    }
    return (
      <View style={[styles.tooltip, {backgroundColor}, tooltipStyle]}>
        <Text style={[{color: textColor}, toolTipTextStyle]}>{content}</Text>
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
      style={[styles.container, containerStyle]}
      pressRetentionOffset={pressRetentionOffset}
      hitSlop={hitSlop}
      delayLongPress={delayLongPress}
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
    top: -40,
    padding: 10,
    borderRadius: 5,
    zIndex: 1000,
  }
});

export default Tooltip;