export interface ColorsType {
  darkGrey: string;
  midGrey: string;
  yellow: string;
  white: string;
  black: string;
  gradient: string[];
}

export interface ThemeType {
  background: string;
  text: string;
  card: {
    background: string;
  };
  bottomBar: {
    background: string;
  };
  button: {background: string; text: string};
}
