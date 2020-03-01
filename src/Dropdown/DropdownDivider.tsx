import { css, cx } from 'emotion';
import React from 'react';

import { ComponentStyleProps } from '../ComponentProps';
import { ThemeStore } from '../Theme/ThemeStore';

interface DropdownDividerProps extends ComponentStyleProps {}
const DropdownDivider: React.FC<DropdownDividerProps> = (props) => {
  const themeStore = ThemeStore.useContainer();
  const colorTheme = themeStore.getColorTheme();

  const dropdownDividerStyles = css`
    border-bottom: 1px solid ${colorTheme.light.base()};
    padding-top: 4px;
    margin-bottom: 4px;
  `;

  return <div className={cx(dropdownDividerStyles, props.styles)}/>;
};

export {
  DropdownDivider
};
