import React, { useState } from 'react';
import { View, Modal, Text, FlatList, Pressable, StyleSheet } from 'react-native';

export interface SelectProps {
  options: { label: string, value: string }[];
  onValueChange: (value: string) => void;
  selectedValue?: string;
  style?: object;
}

const Select: React.FC<SelectProps> = ({ options, onValueChange, selectedValue, style = {} }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleSelect = (value: string) => {
    setModalVisible(false);
    onValueChange(value);
  };

  return (
    <View style={[styles.container, style]}>
      <Pressable onPress={() => setModalVisible(true)}>
        <Text>{selectedValue || 'Select an option'}</Text>
      </Pressable>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <FlatList
              data={options}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <Pressable onPress={() => handleSelect(item.value)}>
                  <Text style={styles.modalText}>{item.label}</Text>
                </Pressable>
              )}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default Select;