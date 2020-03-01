import { css, cx } from 'emotion';
import React from 'react';

import { ComponentTextProps } from '../ComponentProps';
import { ThemeStore } from '../Theme/ThemeStore';

interface TextProps extends ComponentTextProps {
  tag?: string;
  weight?: number;
}
const Text: React.FC<TextProps> = (props) => {
  const themeStore = ThemeStore.useContainer();
  const colorTheme = themeStore.getColorTheme();
  const fontTheme = themeStore.getFontTheme();

  const textStyles = css`
    font-size: ${fontTheme[props.size]};
    font-weight: ${props.weight};
    color: ${colorTheme[props.variant].base()};
  `;

  return React.createElement(props.tag, {...props, ...{ className: cx(textStyles, props.styles) }}, props.children);
};
Text.defaultProps = {
  variant: 'black',
  size: 'normal',
  tag: 'span',
  weight: 400
};

export {
  Text
};
