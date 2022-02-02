import {ColorsType, ThemeType} from './types';

export const Colors: ColorsType = {
  darkGrey: '#2A2A2A',
  midGrey: '#484646',
  yellow: '#FABC0B',
  white: '#FFF3F3',
  black: '#000000',
};

export const Theme: ThemeType = {
  background: Colors.darkGrey,
  text: Colors.white,
  secondaryText: Colors.yellow,
  button: {background: Colors.yellow, text: Colors.black},
  card: {
    background: Colors.midGrey,
  },
  bottomBar: {
    background: Colors.midGrey,
  },
  counter: {
    text: Colors.yellow,
  },
};
