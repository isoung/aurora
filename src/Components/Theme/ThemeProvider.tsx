import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import React from 'react';

import { DefaultTheme, DefaultThemeComponents, generateTheme } from './Theme';

const ThemeProvider: React.FC = (props) => {
  return (
    <EmotionThemeProvider theme={(ancestor: any) =>
      ({...DefaultTheme, themeComponents: generateTheme(DefaultThemeComponents)})}>
      {props.children}
    </EmotionThemeProvider>
  );
};
ThemeProvider.displayName = 'ThemeProvider';

export {
  ThemeProvider
};
