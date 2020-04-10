import Color from 'color';
import { css, cx } from 'emotion';
import React from 'react';

import { ComponentProps } from '../ComponentProps';
import { ThemeStore } from '../Theme/ThemeStore';

interface InputProps extends ComponentProps, React.InputHTMLAttributes<HTMLInputElement> {
  hasIconLeft?: boolean;
  hasIconRight?: boolean;
  hasAddonRight?: boolean;
}
const Input: React.FC<InputProps> = props => {
  const themeStore = ThemeStore.useContainer();
  const colorTheme = themeStore.getColorTheme();

  const { variant, styles, hasIconLeft, hasIconRight, hasAddonRight, disabled, ...inputProps } = props;

  const inputStyles = css`
    background-color: ${colorTheme.light.base()};
    color: ${colorTheme.black.base()};
    border: 1px solid transparent;
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
    border-bottom-right-radius: ${hasAddonRight ? '0px' : '4px'};
    border-top-right-radius: ${hasAddonRight ? '0px' : '4px'};
    outline: none;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: ${hasIconLeft ? '2.5rem' : '12px'};
    padding-right: ${hasIconRight ? '2.5rem' : '12px'};
    font-size: 16px;
    transition: border-color 50ms ease-in-out, box-shadow 100ms ease-in-out;

    &::placeholder {
      color: ${colorTheme.dark.base()};
    }

    &:focus {
      background-color: ${colorTheme.white.base()};
      border-color: ${colorTheme[variant].base()};
      box-shadow: 0 0.313rem 0.719rem
          ${Color(colorTheme[variant].base())
            .fade(0.85)
            .toString()},
        0 0.156rem 0.125rem rgba(0, 0, 0, 0.06);
    }

    &:focus + span i {
      color: ${colorTheme.black.base()};
    }
  `;

  const disabledStyles = css`
    cursor: not-allowed;
  `;

  return (
    <input
      {...inputProps}
      disabled={disabled}
      className={cx(inputStyles, disabled ? disabledStyles : null, styles)}
    />
  );
};
Input.defaultProps = {
  variant: 'primary'
};

export { Input };
