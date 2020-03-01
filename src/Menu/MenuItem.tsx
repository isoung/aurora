import { css, cx } from 'emotion';
import React from 'react';

import { ComponentProps } from '../ComponentProps';
import { InteractableProps } from '../InteractableProps';
import { SelectionProps } from '../SelectionProps';
import { ThemeStore } from '../Theme/ThemeStore';

interface MenuItemProps extends ComponentProps, InteractableProps, SelectionProps {}
const MenuItem: React.FC<MenuItemProps> = (props) => {
  const themeStore = ThemeStore.useContainer();
  const colorTheme = themeStore.getColorTheme();

  const menuItemStyles = css`
    background-color: ${props.selected ? colorTheme[props.variant].lighter() : colorTheme[props.variant].base()};
    cursor: ${props.isInteractable ? 'pointer' : undefined};
    padding: 6px 0 6px 32px;

    &:hover {
      background-color: ${props.isInteractable ? colorTheme[props.variant].lighter() : colorTheme[props.variant].base()};
    }
  `;

  const menuItemOnClick = () => {
    if (!props.onSelected) {
      props.onSelected();
    }
  };

  return (
    <div className={cx(menuItemStyles, props.styles)} onClick={menuItemOnClick}>
      {props.children}
    </div>
  );
};
MenuItem.defaultProps = {
  selected: false,
  variant: 'primary',
  isInteractable: true
};

export {
  MenuItem
};
