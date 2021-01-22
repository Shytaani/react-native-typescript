import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Color from '../../styles/Color';
import Button from '../common/Button';
import Logo from '../common/Logo';

const style = StyleSheet.create({
  container: {
    backgroundColor: Color.PURPLE,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function HomeScreen() {
  const { navigate } = useNavigation();
  return (
    <View style={style.container}>
      <Logo />
      <Button label="Next" onPress={() => navigate('MENU')} />
    </View>
  );
}
