import Color from 'color';

import { ColorTheme, ColorThemeSelectionTypes } from './ColorPalette';

export const getFontColorByBackground = (background: ColorThemeSelectionTypes, colorTheme: ColorTheme) => {
  return Color(colorTheme[background].base()).isLight() ? colorTheme.black.base() : colorTheme.white.base();
};
