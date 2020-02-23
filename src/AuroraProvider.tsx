import { css } from 'emotion';
import React from 'react';

import { ThemeStore } from './Theme/ThemeStore';

export const AuroraProvider: React.FC = (props) => {
  const themeStore = ThemeStore.useContainer();
  const fontTheme = themeStore.getFontTheme();

  const auroraProviderStyles = css`
    :nth-child(1n) *:not(i) {
      font-family: ${fontTheme.fontFamily};
    }
  `;

  return (
    <div className={auroraProviderStyles} id='aurora'>
      {props.children}
    </div>
  );
};
