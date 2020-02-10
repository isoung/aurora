import { css, cx } from 'emotion';
import React from 'react';
import { useContainer } from 'unstated-next';

import { ComponentProps } from '../ComponentProps';
import { getFontColorByBackground } from '../Theme/Color/Utils';
import { ThemeStore } from '../Theme/ThemeStore';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement>, ComponentProps {}
export const Button: React.FC<ButtonProps> = (props) => {
  const themeStore = useContainer(ThemeStore);
  const colorTheme = themeStore.getColorTheme();

  const {
    variant,
    styles,
    ...buttonProps
  } = props;

  const buttonStyles = css`
    cursor: pointer;
    background-color: ${colorTheme[variant].base()};
    color: ${getFontColorByBackground(variant, colorTheme)};
    border: transparent;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 16px;
    padding-right: 16px;
    border-radius: 4px;
    outline: none;
    transition:
      background-color 100ms ease-in-out;
  `;

  return (
    <button {...buttonProps} className={cx(buttonStyles, styles)}>
      {props.children}
    </button>
  );
};
Button.defaultProps = {
  variant: 'light'
};
