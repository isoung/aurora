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
  primary: '#1C2541',
  secondary: '#F6AD55',
  danger: '#F45B69',
  success: '#48BB78',
  warning: '#ECC94B',
  link: '#3182ce',
  light: '#EEF0EB',
  dark: '#b9babe',
  white: '#FFFFFF',
  black: '#363636'
};

export const DefaultThemeComponents = {
};

export const DefaultTheme: Theme = {
  colors: DefaultColorTheme
  ,
  fonts: {
    sm: '12px',
    base: '15px',
    md: '20px',
    lg: '32px',
    xl: '40px'
  },
  components: generateTheme(DefaultThemeComponents)
};

export const getHoveredColor = (color: string) =>
  Color(color).isDark() ? DefaultTheme.colors.white : DefaultTheme.colors.black;

export const useTheme = (): Theme => useEmotionTheme<Theme>();
