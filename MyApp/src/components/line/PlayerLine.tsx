import React, { useState } from 'react';
import { Modal, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import Player from '../../models/Player';
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

export default function Line(props: { item: Player }) {
  const { item } = props;

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={style.container}>
      <Modal animationType="slide" visible={modalVisible}>
        <View style={style.modalContainer}>
          <View style={style.modalContent}>
            <Text>NAME : {item.name}</Text>
            <Text>HEIGHT : {item.height}</Text>
            <Text>WEIGHT : {item.weight}</Text>
            <Text>JERSEY NO : {item.jerseyNo}</Text>
            <Text>POSITION : {item.position}</Text>
            <Text>COLLEGE : {item.college}</Text>
            <Text>COUNTRY : {item.country}</Text>
            <Text>BIRTH DATE : {item.birthDate}</Text>
            <Text>YEARS PRO : {item.yearsPro}</Text>
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
