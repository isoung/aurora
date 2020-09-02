import Color from 'color';
import { css, cx } from 'emotion';
import React, { InputHTMLAttributes } from 'react';

import { ColorVariants, ComponentProps, ComponentVariants, useTheme } from '..';

const getInputBoxShadow = (color: ComponentVariants, colorVariants: ColorVariants) => {
  switch (color) {
    case 'light':
    case 'white':
      return `0 0 0 0.2em ${Color(colorVariants.dark).lighten(.2).toString()};`;
    default:
      return `0 0 0 0.2em ${Color(colorVariants[color]).lighten(.2).toString()};`;
  }
};

interface InputProps extends ComponentProps,
  Omit<InputHTMLAttributes<HTMLInputElement>, 'height' | 'width' | 'onClick'> {
  hasIconLeft?: boolean;
  hasIconRight?: boolean;
  ref?: any;
  rounded?: boolean;
}
const Input: React.FC<InputProps> = React.forwardRef((props, ref: any) => {
  const colors = useTheme().colors;
  const fonts = useTheme().fonts;

  const {
    hasIconRight,
    hasIconLeft,
    styles,
    variant,
    rounded,
    ...inputProps
  } = props;

  const inputStyles = css`
    color: ${props.variant === 'light' || props.variant === 'white' ? 'black' : colors.white};
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: ${props.hasIconLeft ? '3em' : '1.25em'};
    padding-right: ${props.hasIconRight ? '3rem' : '1.25em'};
    border: none;
    background-color: ${colors[props.variant]};
    border-radius: ${rounded ? '1000px' : '8px'};
    outline: none;
    box-sizing: border-box;
    -webkit-transition: all 200ms cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: all 200ms cubic-bezier(0.165, 0.84, 0.44, 1);
    width: ${props.width};
    height: ${props.height};

    &::placeholder {
      font-size: ${fonts.sm};
      color: ${props.variant === 'light' || props.variant === 'white' ? '#757575' : colors.white};
    }

    &:hover {
      background-color: ${colors.white};
      box-shadow: ${getInputBoxShadow(props.variant, colors)};
      color: ${colors.black};

      &::placeholder {
        color: #757575;
      }
    }

    &:focus {
      background-color: ${colors.white};
      box-shadow: ${getInputBoxShadow(props.variant, colors)};
      color: ${colors.black};

      &::placeholder {
        color: #757575;
      }
    }
  `;

  return (
    <input className={cx(inputStyles, styles)} {...inputProps} ref={ref}/>
  );
});
Input.defaultProps = {
  variant: 'light'
};
Input.displayName = 'Input';

export {
  Input
};
