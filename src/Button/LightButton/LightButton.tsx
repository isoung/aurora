import Color from 'color';
import { css, cx } from 'emotion';
import React from 'react';

import { ColorTheme } from '../../Theme/Color/ColorPalette';
import { ThemeStore } from '../../Theme/ThemeStore';
import { Button, ButtonProps } from '../Button';

export type LightButtonVariants = Omit<ColorTheme, 'light' | 'white'>;
interface LightButtonProps extends Omit<ButtonProps, 'variant'> {
  variant?: keyof LightButtonVariants;
}
const LightButton: React.FC<LightButtonProps> = (props) => {
  const themeStore = ThemeStore.useContainer();
  const colorTheme = themeStore.getColorTheme();

  const {
    variant,
    ...buttonProps
  } = props;

  const lightButtonStyles = css`
    color: ${colorTheme[variant].base()};
    background-color: transparent;

    &:hover:not(:disabled) {
      background-color: ${Color(colorTheme[variant].base()).mix(Color(colorTheme.white.base()), .5).fade(.7).toString()};
    }

    &:focus:not(:disabled) {
      background-color: ${Color(colorTheme[variant].base()).mix(Color(colorTheme.white.base()), .5).toString()};
    }

    &:active:not(:disabled) {
      background-color: ${Color(colorTheme[variant].base()).mix(Color(colorTheme.black.base()), .1).toString()};
    }
  `;

  return (
    <Button {...buttonProps} styles={cx(lightButtonStyles, props.styles)}>
      {props.children}
    </Button>
  );
};
LightButton.defaultProps = {
  variant: 'primary'
};

export {
  LightButton
};
