export type FontTypes = keyof FontTheme;
export interface FontTheme {
  fontFamily?: string;
  info?: string;
  normal?: string;
  small?: string;
  medium?: string;
  large?: string;
  extraLarge?: string;
}

export const defaultFontTheme: FontTheme = {
  fontFamily: 'Open Sans',
  info: '8px',
  small: '10px',
  normal: '12px',
  medium: '15px',
  large: '20px',
  extraLarge: '32px'
};
