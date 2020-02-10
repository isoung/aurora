import { useState } from 'react';
import { createContainer } from 'unstated-next';

import { ColorTheme, defaultColorTheme } from '../Theme/Color/ColorPalette';
import { FontTheme, defaultFontTheme } from './Font/FontTheme';

export interface ThemeStoreState {
  colorTheme?: ColorTheme;
  fontTheme?: FontTheme;
}

function useThemeStore(initialState: ThemeStoreState = {
  colorTheme: defaultColorTheme,
  fontTheme: defaultFontTheme
}) {
  const [ colorTheme, setColorThemeState ] = useState({...defaultColorTheme, ...initialState.colorTheme});
  const [ fontTheme, setFontThemeState ] = useState({...defaultFontTheme, ...initialState.fontTheme});

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
