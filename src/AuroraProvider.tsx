import { css } from 'emotion';
import React from 'react';

import { ThemeStore } from './Theme/ThemeStore';

const AuroraProvider: React.FC = (props) => {
  const themeStore = ThemeStore.useContainer();
  const fontTheme = themeStore.getFontTheme();

  const auroraProviderStyles = css`
    :nth-child(1n) *:not(i):not(h1):not(h2):not(h3):not(h4):not(h5):not(h6):not(p):not(span):not(text) {
      font-family: ${fontTheme.fontFamily};
      font-size: ${fontTheme.normal};
    }
  `;

  return (
    <div className={auroraProviderStyles} id='aurora'>
      {props.children}
    </div>
  );
};

export {
  AuroraProvider
};
