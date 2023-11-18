import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import {useThemeContext} from '../context';

interface Props {
  children: React.ReactNode | React.ReactNode[];
  style?: StyleProp<ViewStyle>;
  type: 1 | 2 | 3;
}

export const BackgroundGradient = ({children, style, type = 3}: Props) => {
  let colors = [];
  const cords = {start: {x: 0, y: 0}, end: {x: 0, y: 0}};
  const {
    theme: {
      colors: {card, primary},
    },
  } = useThemeContext();

  if (type === 1) {
    colors = [primary, card, card, card, card, card, primary];

    cords.start = {x: 0, y: 0};
    cords.end = {x: 1, y: 1};
  } else if (type === 2) {
    colors = [primary, primary, primary, primary, card];

    cords.start = {x: 0, y: 1};
    cords.end = {x: 0, y: 0};
  } else {
    colors = [primary, card, card, card, card, card, card];

    cords.start = {x: 0, y: 1};
    cords.end = {x: 1, y: 0};
  }

  return (
    <LinearGradient
      colors={colors}
      style={[{flex: 1}, style]}
      start={cords.start}
      end={cords.end}>
      {children}
    </LinearGradient>
  );
};
