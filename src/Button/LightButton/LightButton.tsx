import Color from 'color';
import { css, cx } from 'emotion';
import React from 'react';

import { Button, ButtonProps } from '../Button';
import { ColorTheme } from '../../Theme/Color/ColorPalette';
import { ThemeStore } from '../../Theme/ThemeStore';

export type LightButtonVariants = Omit<ColorTheme, 'light' | 'white'>;
interface LightButton extends Omit<ButtonProps, 'variant'> {
  variant: keyof LightButtonVariants;
}
export const LightButton: React.FC<LightButton> = (props) => {
  const themeStore = ThemeStore.useContainer();
  const colorTheme = themeStore.getColorTheme();

  const lightButtonStyles = css`
    color: ${colorTheme[props.variant].base()};
    background-color: #fff;

    &:hover {
      background-color: ${Color(colorTheme[props.variant].base()).mix(Color('#fff'), .5).fade(.7).toString()};
    }
  `;

  return (
    <Button styles={cx(lightButtonStyles, props.styles)}>
      {props.children}
    </Button>
  );
};
LightButton.defaultProps = {
  variant: 'primary'
};
