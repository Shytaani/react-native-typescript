import React, { useState } from 'react';
import { Modal, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import Coach from '../../models/Coach';
import Color from '../../styles/Color';
import Button from '../common/Button';

const style = StyleSheet.create({
  container: {
    backgroundColor: Color.PURPLE,
    height: 80,
    borderBottomWidth: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  text: {
    backgroundColor: Color.GOLD,
    fontSize: 20,
    fontWeight: 'bold',
    paddingVertical: 15,
  },
});

export default function Line(props: { item: Coach }) {
  const { item } = props;

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={style.container}>
      <Modal animationType="slide" visible={modalVisible}>
        <View style={style.modalContainer}>
          <View style={style.modalContent}>
            <Text>NAME : {item.name}</Text>
            <Text>COLLEGE : {item.college}</Text>
          </View>
          <Button label="Close Modal" onPress={() => setModalVisible(!modalVisible)} />
        </View>
      </Modal>
      <TouchableHighlight
        onPress={() => {
          setModalVisible(!modalVisible);
        }}
        underlayColor={Color.PURPLE}>
        <Text style={style.text}>{item.name}</Text>
      </TouchableHighlight>
    </View>
  );
}
