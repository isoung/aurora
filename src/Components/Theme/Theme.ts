import Color from 'color';
import { useTheme as useEmotionTheme } from 'emotion-theming';

import { ColorVariants } from './Color';
import { FontTheme } from './Font';

export interface Theme {
  colors: ColorVariants;
  fonts: FontTheme;
  components: any;
}

export const generateTheme = <T = any>(theme: T): T => {
  const generatedThemeComponents: any = {};
  const anyDefaultThemeComponents: any = DefaultThemeComponents;
  const anyTheme: any = theme;

  Object.keys(DefaultThemeComponents).forEach((value) => {
    if (typeof anyDefaultThemeComponents[value] === 'string') {
      generatedThemeComponents[value] =
        anyTheme[value] ? anyTheme[value] : anyDefaultThemeComponents[value];
    }
    else {
      generatedThemeComponents[value] = {...anyDefaultThemeComponents[value], ...anyTheme[value]};
    }
  });

  return generatedThemeComponents;
};

export const DefaultColorTheme: ColorVariants = {
  primary: '#2D3047',
  secondary: '#F19A3E',
  danger: '#F45B69',
  success: '#48BB78',
  warning: '#F6E05E',
  link: '#3182ce',
  light: '#DEE7E7',
  dark: '#b9babe',
  white: '#FBFBFF',
  black: '#061826'
};

export const DefaultThemeComponents = {
};

export const DefaultTheme: Theme = {
  colors: DefaultColorTheme
  ,
  fonts: {
    small: '12px',
    normal: '15px',
    medium: '20px',
    large: '32px',
    extraLarge: '40px'
  },
  components: generateTheme(DefaultThemeComponents)
};

export const getHoveredColor = (color: string) =>
  Color(color).isDark() ? DefaultTheme.colors.white : DefaultTheme.colors.black;

export const useTheme = (): Theme => useEmotionTheme<Theme>();
