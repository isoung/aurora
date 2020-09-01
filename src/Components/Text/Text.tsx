import { css, cx } from 'emotion';
import { useTheme } from 'emotion-theming';
import React from 'react';

import { Component, ComponentProps, FontComponentSize, Theme } from '..';

type TextAlign =
  'left'
  | 'right'
  | 'center'
  | 'justify'
  | 'initial'
  | 'inherit';

export interface TextComponentProps extends ComponentProps {
  size?: FontComponentSize;
  weight?: number;
  color?: string;
  textAlign?: TextAlign;
}

export interface TextProps extends TextComponentProps, React.HTMLAttributes<HTMLSpanElement> {
  tag?: string;
  default?: boolean;
}
const Text: React.FC<TextProps> = (props) => {
  const theme = useTheme<Theme>();
  const colors = theme.colors;
  const fonts = theme.fonts;

  const {
    textAlign,
    variant,
    ...textProps
  } = props;

  const textStyles = css`
    font-size: ${fonts[props.size]};
    font-weight: ${props.weight};
    color: ${props.default ? null : colors[props.variant]};
    text-align: ${props.textAlign};
    margin: ${props.margin};
    padding: ${props.padding};
    height: ${props.height};
    width: ${props.width};
  `;

  return (
    <Component tag={props.tag} {...textProps} styles={cx(textStyles, props.styles)}>
      {props.children}
    </Component>
  );
};
Text.defaultProps = {
  variant: 'black',
  default: false,
  size: 'base',
  tag: 'span',
  weight: 400
};

export {
  Text
};
