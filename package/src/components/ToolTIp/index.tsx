import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, Pressable, Platform } from 'react-native';
import PropTypes from 'prop-types';

const Tooltip = ({ 
  children, 
  content, 
  customContent, 
  tooltipStyle, 
  webCss, 
  nativeStyle,
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

  const baseStyle = [styles.container];
  const appliedStyle = Platform.OS === 'web' ? webCss : nativeStyle;

  if (Platform.OS === 'web' && webCss) {
    return (
      <View
        onMouseEnter={showOnHover ? showTooltip : null}
        onMouseLeave={showOnHover && !persistOnHover ? hideTooltip : null}
        style={[...baseStyle, appliedStyle]}
      >
        {children}
        {visible && renderTooltipContent()}
      </View>
    );
  }

  return (
    <Pressable
      onPressIn={trigger === 'onPress' ? showTooltip : null}
      onPressOut={trigger === 'onPress' ? hideTooltip : null}
      onLongPress={trigger === 'onLongPress' ? showTooltip : null}
      style={[...baseStyle, appliedStyle]}
    >
      {children}
      {visible && renderTooltipContent()}
    </Pressable>
  );
};

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  content: PropTypes.string,
  customContent: PropTypes.element,
  tooltipStyle: PropTypes.object,
  webCss: PropTypes.object, // For web-specific CSS
  nativeStyle: PropTypes.object, // For native-specific styles
  trigger: PropTypes.oneOf(['onPress', 'onLongPress']),
  showOnHover: PropTypes.bool,
  persistOnHover: PropTypes.bool,
};

Tooltip.defaultProps = {
  content: '',
  customContent: null,
  tooltipStyle: {},
  webCss: null,
  nativeStyle: {},
  trigger: 'onLongPress',
  showOnHover: true,
  persistOnHover: false,
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