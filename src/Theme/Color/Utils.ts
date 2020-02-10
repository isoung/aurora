import Color from 'color';

import { ColorThemeSelectionTypes, ColorTheme } from './ColorPalette';

export const getFontColorByBackground = (background: ColorThemeSelectionTypes, colorTheme: ColorTheme) => {
  return Color(colorTheme[background].base()).isLight() ? colorTheme.black.base() : colorTheme.white.base();
};
