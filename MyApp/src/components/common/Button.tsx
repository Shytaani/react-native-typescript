import React from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import Color from '../../styles/Color';

const style = StyleSheet.create({
  button: {
    backgroundColor: Color.GOLD,
    alignItems: 'center',
    width: 291,
    margin: 15,
    padding: 8,
  },
  label: {
    fontSize: 20,
  },
});

export default function Button(props: { label: string; onPress: (param?: any) => void }) {
  const { label, onPress } = props;

  return (
    <TouchableHighlight style={style.button} onPress={onPress} underlayColor={Color.PURPLE}>
      <Text style={style.label}>{label}</Text>
    </TouchableHighlight>
  );
}
Button.propTypes = {
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};
Button.defaultProps = {
  onPress: () => {},
};
