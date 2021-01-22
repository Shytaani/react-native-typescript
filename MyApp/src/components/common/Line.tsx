import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import Coach from '../../models/Coach';
import Player from '../../models/Player';
import Color from '../../styles/Color';

const style = StyleSheet.create({
  container: {
    backgroundColor: Color.PURPLE,
    height: 80,
    borderBottomWidth: 1,
  },
  text: {
    backgroundColor: Color.GOLD,
    fontSize: 20,
    fontWeight: 'bold',
    paddingVertical: 15,
  },
});

export default function Line(props: { item: Player | Coach }) {
  const { item } = props;

  function isPlayer(renderItem: Player | Coach): renderItem is Player {
    return renderItem !== undefined;
  }

  return (
    <View style={style.container}>
      {isPlayer(item) ? (
        <TouchableHighlight onPress={() => {}} underlayColor={Color.PURPLE}>
          <Text style={style.text}>{item.name}</Text>
        </TouchableHighlight>
      ) : (
        <TouchableHighlight onPress={() => {}} underlayColor={Color.PURPLE}>
          <Text style={style.text}>{item.name}</Text>
        </TouchableHighlight>
      )}
    </View>
  );
}
