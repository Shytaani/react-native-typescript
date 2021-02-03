import React from 'react';
import { Image, ImageSourcePropType, ImageStyle, StyleProp } from 'react-native';

const logo: ImageSourcePropType = require('../../assets/Los_Angeles_Lakers_logo.png');

export default function Logo(props: { style?: StyleProp<ImageStyle> }) {
  const { style } = props;
  return <Image source={logo} style={style} />;
}
