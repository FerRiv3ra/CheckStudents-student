type ThemeAction = {type: 'set_light_theme'} | {type: 'set_dark_theme'};

export interface ThemeState {
  currentTheme: 'light' | 'dark';
  dividerColor: string;
  listText: string;
  listSelected: string;
  dark: boolean;
  colors: {[key: string]: string};
}

export const lightTheme: ThemeState = {
  currentTheme: 'light',
  dark: false,
  dividerColor: '#333',
  listText: 'black',
  listSelected: '#ECFEFF',
  colors: {
    primary: '#2DD4BF',
    background: '#CCCCCC',
    card: 'white',
    text: '#444444',
    border: '#333333',
    notification: 'teal',
  },
};

export const darkTheme: ThemeState = {
  currentTheme: 'dark',
  dark: true,
  dividerColor: '#EEE',
  listText: 'black',
  listSelected: '#333333',
  colors: {
    primary: '#2DD4BF',
    background: '#444444',
    card: 'black',
    text: '#FFF',
    border: '#DDD',
    notification: 'teal',
  },
};

export const themeReducer = (
  state: ThemeState,
  action: ThemeAction,
): ThemeState => {
  switch (action.type) {
    case 'set_light_theme':
      return {...lightTheme};

    case 'set_dark_theme':
      return {...darkTheme};

    default:
      return state;
  }
};
