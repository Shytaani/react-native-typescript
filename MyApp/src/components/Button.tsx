import React from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';

const style = StyleSheet.create({
  button: {
    backgroundColor: 'yellow',
    alignItems: 'center',
    width: 291,
    margin: 15,
    padding: 8
  },
  label: {
    fontSize: 20
  },
});

export default function Button(props: { onPress: any; }) {
  const { onPress } = props;

  return (
    <TouchableHighlight style={style.button} onPress={onPress} underlayColor='purple'>
      <Text style={style.label}>Next</Text>
    </TouchableHighlight>
  );
}
Button.propTypes = {
  onPress: PropTypes.func.isRequired
};
Button.defaultProps = {
  onPress: () => {}
}
