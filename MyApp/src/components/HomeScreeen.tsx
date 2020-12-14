import React from 'react';
import { StyleSheet, View } from 'react-native';
import Button from './Button';
import Logo from './Logo';

const style = StyleSheet.create({
  container: {
    backgroundColor: 'purple',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default function HomeScreen() {
    return (
      <View style={style.container}>
        <Logo />
        <Button />
      </View>
    );
}
