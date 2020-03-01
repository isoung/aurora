import { useState } from 'react';
import { createContainer } from 'unstated-next';

import { ColorTheme, defaultColorTheme } from '../Theme/Color/ColorPalette';
import { defaultFontTheme, FontTheme } from './Font/FontTheme';

export interface ThemeStoreState {
  colorTheme?: ColorTheme;
  fontTheme?: FontTheme;
}

function useThemeStore(initialState: ThemeStoreState = {
  colorTheme: defaultColorTheme,
  fontTheme: defaultFontTheme
}) {

  const [colorTheme, setColorThemeState] = useState<ColorTheme>({
    primary: {...defaultColorTheme.primary, ...initialState.colorTheme.primary},
    secondary: {...defaultColorTheme.secondary, ...initialState.colorTheme.secondary},
    danger: {...defaultColorTheme.danger, ...initialState.colorTheme.danger},
    success: {...defaultColorTheme.success, ...initialState.colorTheme.success},
    info: {...defaultColorTheme.info, ...initialState.colorTheme.info},
    dark: {...defaultColorTheme.dark, ...initialState.colorTheme.dark},
    light: {...defaultColorTheme.light, ...initialState.colorTheme.light},
    white: {...defaultColorTheme.white, ...initialState.colorTheme.white},
    black: {...defaultColorTheme.black, ...initialState.colorTheme.black}
  });
  const [fontTheme, setFontThemeState] = useState({...defaultFontTheme, ...initialState.fontTheme});

  const getColorTheme = () => colorTheme;
  const setColorTheme = (theme: ColorTheme): void => setColorThemeState({ ...colorTheme, ...theme });
  const getFontTheme = () => fontTheme;
  const setFontTheme = (theme: FontTheme): void => setFontThemeState({ ...fontTheme, ...theme });

  return {
    getColorTheme,
    setColorTheme,
    getFontTheme,
    setFontTheme
  };
}

export const ThemeStore = createContainer(useThemeStore);
