import Color from 'color';

export type ComponentVariants =
  'primary'
  | 'secondary'
  | 'danger'
  | 'success'
  | 'warning'
  | 'link'
  | 'light'
  | 'dark'
  | 'white'
  | 'black';

export interface ColorVariants {
  primary: string;
  secondary: string;
  danger: string;
  success: string;
  warning: string;
  link: string;
  light: string;
  dark: string;
  white: string;
  black: string;
}

type AccentColorType = 'lighten' | 'darken';
export const getAccentColor =
  (color: string, accentVariant: AccentColorType = 'lighten', accentRatio: number = .2) => {
    const modifyColor = Color(color);

    if (accentVariant === 'darken') {
      return modifyColor.darken(accentRatio).hex();
    }
    else {
      return modifyColor.lighten(accentRatio).hex();
    }
  };
