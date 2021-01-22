import React from 'react';
import { Image, ImageSourcePropType } from 'react-native';

const logo: ImageSourcePropType = require('../../assets/Los_Angeles_Lakers_logo.png');

export default function Logo() {
  return <Image source={logo} />;
}
