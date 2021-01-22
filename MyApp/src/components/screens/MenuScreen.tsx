import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Color from '../../styles/Color';
import Button from '../common/Button';

const style = StyleSheet.create({
  container: {
    backgroundColor: Color.PURPLE,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function MenuScreen() {
  const { navigate } = useNavigation();

  return (
    <View style={style.container}>
      <Button label="Roster" onPress={() => navigate('ROSTER')} />
    </View>
  );
}
