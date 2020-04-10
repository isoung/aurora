import Color from 'color';

type ColorThemeSelectionFn = () => string;
export interface ColorThemeSelection {
  base?: ColorThemeSelectionFn;
  light?: ColorThemeSelectionFn;
  lighter?: ColorThemeSelectionFn;
  dark?: ColorThemeSelectionFn;
  darker?: ColorThemeSelectionFn;
}

export interface ColorTheme {
  primary?: ColorThemeSelection;
  secondary?: ColorThemeSelection;
  danger?: ColorThemeSelection;
  success?: ColorThemeSelection;
  warning?: ColorThemeSelection;
  info?: ColorThemeSelection;
  dark?: ColorThemeSelection;
  gray?: ColorThemeSelection;
  light?: ColorThemeSelection;
  white?: ColorThemeSelection;
  black?: ColorThemeSelection;
}
export type ColorThemeSelectionTypes = keyof ColorTheme;

export const defaultColorTheme: ColorTheme = {
  primary: {
    base: () => Color('#262666').toString(),
    light: () => Color(defaultColorTheme.primary.base()).lighten(.15).toString(),
    lighter: () => Color(defaultColorTheme.primary.base()).lighten(.3).toString(),
    dark: () => Color(defaultColorTheme.primary.base()).darken(.15).toString(),
    darker: () => Color(defaultColorTheme.primary.base()).darken(.3).toString()
  },
  secondary: {
    base: () => Color('#e5b657').toString(),
    light: () => Color(defaultColorTheme.secondary.base()).lighten(.15).toString(),
    lighter: () => Color(defaultColorTheme.secondary.base()).lighten(.3).toString(),
    dark: () => Color(defaultColorTheme.secondary.base()).darken(.15).toString(),
    darker: () => Color(defaultColorTheme.secondary.base()).darken(.3).toString()
  },
  danger: {
    base: () => Color('#ff1947').toString(),
    light: () => Color(defaultColorTheme.danger.base()).lighten(.15).toString(),
    lighter: () => Color(defaultColorTheme.danger.base()).lighten(.3).toString(),
    dark: () => Color(defaultColorTheme.danger.base()).darken(.15).toString(),
    darker: () => Color(defaultColorTheme.danger.base()).darken(.3).toString()
  },
  success: {
    base: () => Color('#37BB9E').toString(),
    light: () => Color(defaultColorTheme.success.base()).lighten(.15).toString(),
    lighter: () => Color(defaultColorTheme.success.base()).lighten(.3).toString(),
    dark: () => Color(defaultColorTheme.success.base()).darken(.15).toString(),
    darker: () => Color(defaultColorTheme.success.base()).darken(.3).toString()
  },
  warning: {
    base: () => Color('#ffc402').toString(),
    light: () => Color(defaultColorTheme.success.base()).lighten(.15).toString(),
    lighter: () => Color(defaultColorTheme.success.base()).lighten(.3).toString(),
    dark: () => Color(defaultColorTheme.success.base()).darken(.15).toString(),
    darker: () => Color(defaultColorTheme.success.base()).darken(.3).toString()
  },
  info: {
    base: () => Color('#878BA4').toString(),
    light: () => Color(defaultColorTheme.info.base()).lighten(.15).toString(),
    lighter: () => Color(defaultColorTheme.info.base()).lighten(.3).toString(),
    dark: () => Color(defaultColorTheme.info.base()).darken(.15).toString(),
    darker: () => Color(defaultColorTheme.info.base()).darken(.3).toString()
  },
  dark: {
    base: () => Color('#a6a7ab').toString(),
    light: () => Color(defaultColorTheme.dark.base()).lighten(.15).toString(),
    lighter: () => Color(defaultColorTheme.dark.base()).lighten(.3).toString(),
    dark: () => Color(defaultColorTheme.dark.base()).darken(.15).toString(),
    darker: () => Color(defaultColorTheme.dark.base()).darken(.3).toString()
  },
  gray: {
    base: () => Color('#d1dbe0').toString(),
    light: () => Color(defaultColorTheme.gray.base()).lighten(.15).toString(),
    lighter: () => Color(defaultColorTheme.gray.base()).lighten(.3).toString(),
    dark: () => Color(defaultColorTheme.gray.base()).darken(.15).toString(),
    darker: () => Color(defaultColorTheme.gray.base()).darken(.3).toString()
  },
  light: {
    base: () => Color('#ededed').toString(),
    light: () => Color(defaultColorTheme.light.base()).lighten(.15).toString(),
    lighter: () => Color(defaultColorTheme.light.base()).lighten(.3).toString(),
    dark: () => Color(defaultColorTheme.light.base()).darken(.15).toString(),
    darker: () => Color(defaultColorTheme.light.base()).darken(.3).toString()
  },
  white: {
    base: () => Color('#fff').toString(),
    light: () => Color(defaultColorTheme.white.base()).lighten(.15).toString(),
    lighter: () => Color(defaultColorTheme.white.base()).lighten(.3).toString(),
    dark: () => Color(defaultColorTheme.white.base()).darken(.15).toString(),
    darker: () => Color(defaultColorTheme.white.base()).darken(.3).toString()
  },
  black: {
    base: () => Color('#252627').toString(),
    light: () => Color(defaultColorTheme.black.base()).lighten(.15).toString(),
    lighter: () => Color(defaultColorTheme.black.base()).lighten(.3).toString(),
    dark: () => Color(defaultColorTheme.black.base()).darken(.15).toString(),
    darker: () => Color(defaultColorTheme.black.base()).darken(.3).toString()
  }
};
