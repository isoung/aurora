import Color from 'color';

type ColorThemeSelectionFn = () => string;
export interface ColorThemeSelection {
  base: ColorThemeSelectionFn;
  light: ColorThemeSelectionFn;
  lighter: ColorThemeSelectionFn;
  dark: ColorThemeSelectionFn;
  darker: ColorThemeSelectionFn;
}

export interface ColorTheme {
  primary?: ColorThemeSelection;
  secondary?: ColorThemeSelection;
  danger?: ColorThemeSelection;
  success?: ColorThemeSelection;
  info?: ColorThemeSelection;
  dark?: ColorThemeSelection;
  light?: ColorThemeSelection;
  white?: ColorThemeSelection;
  black?: ColorThemeSelection;
}
export type ColorThemeSelectionTypes = keyof ColorTheme;

export const defaultColorTheme: ColorTheme = {
  primary: {
    base: () => Color('#333f87').toString(),
    light: () => Color(defaultColorTheme.primary.base()).lighten(.1).toString(),
    lighter: () => Color(defaultColorTheme.primary.base()).lighten(.2).toString(),
    dark: () => Color(defaultColorTheme.primary.base()).darken(.1).toString(),
    darker: () => Color(defaultColorTheme.primary.base()).darken(.2).toString()
  },
  secondary: {
    base: () => Color('#ffca61').toString(),
    light: () => Color(defaultColorTheme.secondary.base()).lighten(.1).toString(),
    lighter: () => Color(defaultColorTheme.secondary.base()).lighten(.2).toString(),
    dark: () => Color(defaultColorTheme.secondary.base()).darken(.1).toString(),
    darker: () => Color(defaultColorTheme.secondary.base()).darken(.2).toString()
  },
  danger: {
    base: () => Color('#ff1947').toString(),
    light: () => Color(defaultColorTheme.danger.base()).lighten(.1).toString(),
    lighter: () => Color(defaultColorTheme.danger.base()).lighten(.2).toString(),
    dark: () => Color(defaultColorTheme.danger.base()).darken(.1).toString(),
    darker: () => Color(defaultColorTheme.danger.base()).darken(.2).toString()
  },
  success: {
    base: () => Color('#00b262').toString(),
    light: () => Color(defaultColorTheme.success.base()).lighten(.1).toString(),
    lighter: () => Color(defaultColorTheme.success.base()).lighten(.2).toString(),
    dark: () => Color(defaultColorTheme.success.base()).darken(.1).toString(),
    darker: () => Color(defaultColorTheme.success.base()).darken(.2).toString()
  },
  info: {
    base: () => Color('#1bdba2').toString(),
    light: () => Color(defaultColorTheme.info.base()).lighten(.1).toString(),
    lighter: () => Color(defaultColorTheme.info.base()).lighten(.2).toString(),
    dark: () => Color(defaultColorTheme.info.base()).darken(.1).toString(),
    darker: () => Color(defaultColorTheme.info.base()).darken(.2).toString()
  },
  dark: {
    base: () => Color('#adaeb2').toString(),
    light: () => Color(defaultColorTheme.dark.base()).lighten(.1).toString(),
    lighter: () => Color(defaultColorTheme.dark.base()).lighten(.2).toString(),
    dark: () => Color(defaultColorTheme.dark.base()).darken(.1).toString(),
    darker: () => Color(defaultColorTheme.dark.base()).darken(.2).toString()
  },
  light: {
    base: () => Color('#f2f2f2').toString(),
    light: () => Color(defaultColorTheme.light.base()).lighten(.1).toString(),
    lighter: () => Color(defaultColorTheme.light.base()).lighten(.2).toString(),
    dark: () => Color(defaultColorTheme.light.base()).darken(.1).toString(),
    darker: () => Color(defaultColorTheme.light.base()).darken(.2).toString()
  },
  white: {
    base: () => Color('#fff').toString(),
    light: () => Color(defaultColorTheme.white.base()).lighten(.1).toString(),
    lighter: () => Color(defaultColorTheme.white.base()).lighten(.2).toString(),
    dark: () => Color(defaultColorTheme.white.base()).darken(.1).toString(),
    darker: () => Color(defaultColorTheme.white.base()).darken(.2).toString()
  },
  black: {
    base: () => Color('#252627').toString(),
    light: () => Color(defaultColorTheme.black.base()).lighten(.1).toString(),
    lighter: () => Color(defaultColorTheme.black.base()).lighten(.2).toString(),
    dark: () => Color(defaultColorTheme.black.base()).darken(.1).toString(),
    darker: () => Color(defaultColorTheme.black.base()).darken(.2).toString()
  }
};
