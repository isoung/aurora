import Color from 'color';
import { css, cx } from 'emotion';
import { HTMLMotionProps, motion } from 'framer-motion';
import React from 'react';

import { Component, ComponentProps, getHoveredColor, useTheme } from '..';

const onButtonHover = (colorString: string, lighten: number = .1, darken: number = .2): string => {
  const color = Color(colorString);
  return color.isDark() ? color.darken(darken).toString() : color.lighten(lighten).toString();
};

export interface ButtonProps extends ComponentProps, Omit<HTMLMotionProps<'button'>, 'onClick'> {
  rounded?: boolean;
  ghost?: boolean;
}
const Button: React.FC<ButtonProps> = (props) => {
  const colors = useTheme().colors;

  const {
    styles,
    rounded,
    ghost,
    variant,
    ...componentProps
  } = props;

  const buttonStyles = css`
    background-color: ${ghost ? colors['white'] : colors[variant]};
    color: ${ghost ? colors['black'] : getHoveredColor(colors[variant])};
    cursor: ${props.disabled ? 'not-allowed' : 'pointer'};
    padding: 12px 20px;
    border-radius: ${rounded ? '100px' : '8px'};
    border: 2px solid ${ghost ? colors[variant] : 'transparent'};
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
      color: ${getHoveredColor(colors[variant])};
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
