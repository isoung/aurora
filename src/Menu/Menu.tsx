import { css, cx } from 'emotion';
import React from 'react';

import { ComponentProps } from '../ComponentProps';
import { getPropStyle, ResponsiveStyleProps } from '../ResponsiveStyles';
import { ThemeStore } from '../Theme/ThemeStore';

interface MenuProps extends ComponentProps, ResponsiveStyleProps {}
export const Menu: React.FC<MenuProps> = (props) => {
  const themeStore = ThemeStore.useContainer();
  const colorTheme = themeStore.getColorTheme();

  const menuStyles = css`
    background-color: ${colorTheme[props.variant].base()};

    ${getPropStyle(props, { width: props.width, height: props.height })};
  `;

  return (
    <div className={cx(menuStyles, props.styles)}>
      {props.children}
    </div>
  );
};
Menu.defaultProps = {
  variant: 'primary',
  width: '240px',
  height: '100%'
};
