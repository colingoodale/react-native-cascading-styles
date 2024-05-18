import React, { useState } from 'react';
import { View, Text, FlatList, Pressable, StyleSheet, StyleProp, ViewStyle, TextStyle } from 'react-native';

export interface DropdownSelectProps {
  options: { label: string, value: string }[];
  onValueChange: (value: string) => void;
  preSelectMessage?: string;
  selectedValue?: string;
  containerStyle?: StyleProp<ViewStyle>;
  itemStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  triggerStyle?: StyleProp<ViewStyle>;
  renderItem?: React.ComponentType<any>;
}

const DropdownSelect: React.FC<DropdownSelectProps> = ({ 
    options, 
    onValueChange, 
    selectedValue,
    preSelectMessage = 'Select an option', 
    containerStyle = {}, 
    itemStyle = {}, 
    textStyle = {}, 
    triggerStyle = {},
    renderItem 
}) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleSelect = (value: string) => {
    setDropdownVisible(false);
    onValueChange(value);
  };

  const defaultRenderItem = ({ item }: { item: { label: string, value: string } }) => (
    <Pressable style={[styles.item, itemStyle]} onPress={() => handleSelect(item.value)}>
      <Text style={[styles.text, textStyle]}>{item.label}</Text>
    </Pressable>
  );

  const RenderItemComponent = renderItem || defaultRenderItem;

  return (
    <View style={[styles.container, containerStyle]}>
      <Pressable style={[styles.trigger, triggerStyle]} onPress={() => setDropdownVisible(!dropdownVisible)}>
        <Text>{selectedValue || preSelectMessage}</Text>
      </Pressable>
      {dropdownVisible && (
        <View style={styles.dropdownView}>
          <FlatList
            data={options}
            keyExtractor={(item) => item.value}
            renderItem={(props) => <RenderItemComponent {...props} />}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  trigger: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  dropdownView: {
    marginTop: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  text: {
    fontSize: 16,
  },
});

export default DropdownSelect;