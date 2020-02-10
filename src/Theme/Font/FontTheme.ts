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
  fontFamily: 'Nunito Sans',
  info: '10px',
  small: '12px',
  normal: '16px',
  medium: '20px',
  large: '28px',
  extraLarge: '40px'
};
