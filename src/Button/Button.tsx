import Color from 'color';
import { css, cx } from 'emotion';
import { motion } from 'framer-motion';
import React from 'react';
import { useContainer } from 'unstated-next';

import { ComponentProps } from '../ComponentProps';
import { getFontColorByBackground } from '../Theme/Color/Utils';
import { ThemeStore } from '../Theme/ThemeStore';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, ComponentProps {
  rounded?: boolean;
}
export const Button: React.FC<ButtonProps> = (props) => {
  const themeStore = useContainer(ThemeStore);
  const colorTheme = themeStore.getColorTheme();

  const {
    variant,
    styles,
    rounded,
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
    border-radius: ${rounded ? '100px' : '4px'};
    outline: none;
    transition:
      background-color 100ms ease-in-out;

    &:hover {
      background-color: ${Color(colorTheme[variant].base()).mix(Color(colorTheme.white.base()), .2).toString()};
    }

    &:focus {
      background-color: ${Color(colorTheme[variant].base()).mix(Color(colorTheme.white.base()), .2).toString()};
    }

    &:active {
      background-color: ${Color(colorTheme[variant].base()).mix(Color(colorTheme.black.base()), .1).toString()};
    }
  `;

  return (
    <motion.button {...buttonProps as any} whileTap={{ scale: .95 }} className={cx(buttonStyles, styles)}>
      {props.children}
    </motion.button>
  );
};
Button.defaultProps = {
  variant: 'light'
};
