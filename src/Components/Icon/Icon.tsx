import classnames from 'classnames';
import { css, cx } from 'emotion';
import { useTheme } from 'emotion-theming';
import React, { HTMLAttributes } from 'react';

import { ComponentProps, InteractableProps, Theme } from '..';

export type IconSize = '2x' | '3x' | '5x' | '7x' | '9x';
export interface IconProps extends ComponentProps, InteractableProps, Omit<HTMLAttributes<HTMLDivElement>, 'onClick'>
{
  icon: string;
  size?: IconSize;
  fontSize?: string;
  interactableColor?: boolean;
}
const Icon: React.FC<IconProps> = (props) => {
  const theme = useTheme<Theme>();
  const colors = theme.colors;

  const {
    variant,
    styles,
    interactable,
    interactableColor,
    icon,
    size,
    fontSize,
    ...iconProps
  } = props;

  const iconStyles = css`
    color: ${colors[variant]};
    cursor: ${interactable ? 'pointer' : 'auto'};
    font-size: ${fontSize};

    &:hover {
      ${
        interactable ? `color: ${(interactableColor && interactable) ? colors.primary : null};` : null
      }
    }
  `;

  const iconSize = props.size === undefined ? '' : `fa-${props.size}`;
  const iconClassname = `${iconSize} ${props.icon}`;

  return (
    <i {...iconProps} className={classnames(iconClassname, cx(iconStyles, styles))}/>
  );
};
Icon.displayName = 'Icon';
Icon.defaultProps = {
  variant: 'dark'
};

export {
  Icon
};
