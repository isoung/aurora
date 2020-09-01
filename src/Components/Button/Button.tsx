import Color from 'color';
import { css, cx } from 'emotion';
import { HTMLMotionProps, motion } from 'framer-motion';
import React from 'react';

import { Component, ComponentProps, useTheme } from '..';

const onButtonHover = (colorString: string, lighten: number = .1, darken: number = .2): string => {
  const color = Color(colorString);
  return color.isDark() ? color.darken(darken).toString() : color.lighten(lighten).toString();
};

interface ButtonProps extends ComponentProps, HTMLMotionProps<'button'> {
  rounded?: boolean;
}
const Button: React.FC<ButtonProps> = (props) => {
  const colors = useTheme().colors;

  const {
    styles,
    rounded,
    variant,
    ...componentProps
  } = props;

  const buttonStyles = css`
    background-color: ${colors[variant]};
    color: #fff;
    cursor: ${props.disabled ? 'not-allowed' : 'pointer'};
    padding: 8px 16px;
    border-radius: ${rounded ? '100px' : '8px'};
    border: 1px solid transparent;
    outline: none;
    transition: background-color 150ms;

    &:focus:not(:active) {
      box-shadow: 0 0 0 0.2em ${colors['light']};
    }

    &:disabled {
      opacity: .8;
    }

    &:hover {
      background-color: ${onButtonHover(colors[variant])};
    }

    i:first-child:not(:last-child) {
      margin-right: 1em;
    }

    i:last-child:not(:first-child) {
      margin-left: 1em;
    }

    i:only-child {
      margin-left: .5rem;
      margin-right: .5rem;
    }
  `;

  return (
    <Component
      styles={cx(buttonStyles, styles)}
      {...componentProps}
      element={(p) =>
        <motion.button whileTap={{ scale: props.disabled ? 1 : .95 }} {...p}>
          {props.children}
        </motion.button>
      }
    />
  );
};
Button.displayName = 'Button';
Button.defaultProps = {
  variant: 'primary'
};

export {
  Button
};
