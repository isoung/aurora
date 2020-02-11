import classnames from 'classnames';
import { css, cx } from 'emotion';
import React from 'react';

import { ComponentProps } from '../ComponentProps';
import { InteractableProps } from '../InteractableProps';
import { ColorThemeSelectionTypes } from '../Theme/Color/ColorPalette';
import { ThemeStore } from '../Theme/ThemeStore';

export type IconSize = '2x' | '3x' | '5x' | '7x' | '9x';
export interface IconProps extends ComponentProps, InteractableProps, React.HTMLAttributes<HTMLElement> {
  icon: string;
  size?: IconSize;
  interactableVariant?: ColorThemeSelectionTypes;
}
export const Icon: React.FC<IconProps> = (props) => {
  const themeStore = ThemeStore.useContainer();
  const colorTheme = themeStore.getColorTheme();

  const {
    variant,
    styles,
    isInteractable,
    interactableVariant,
    icon,
    size,
    ...iconProps
  } = props;

  const iconStyles = css`
    color: ${colorTheme[variant].base()};
    cursor: ${isInteractable ? 'pointer' : 'auto'};

    &:hover {
      color: ${isInteractable ? colorTheme[interactableVariant].base() : colorTheme[variant].base()};
    }
  `;

  const iconSize = props.size === undefined ? '' : `fa-${props.size}`;
  const iconClassname = `${iconSize} ${props.icon}`;

  return (
    <i {...iconProps} className={classnames(iconClassname, cx(iconStyles, styles))}/>
  );
};
Icon.defaultProps = {
  variant: 'primary',
  isInteractable: false,
  interactableVariant: 'secondary'
};
