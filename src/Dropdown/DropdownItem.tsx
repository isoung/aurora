import { css, cx } from 'emotion';
import React from 'react';

import { ComponentStyleProps } from '../ComponentProps';
import { Container } from '../Layout/Container/Container';
import { ThemeStore } from '../Theme/ThemeStore';

interface DropdownItemProps extends ComponentStyleProps {
  selected?: boolean;
  onSelection?: () => void;
  hoverable?: boolean;
}
const DropdownItem: React.FC<DropdownItemProps> = (props) => {
  const themeStore = ThemeStore.useContainer();
  const colorTheme = themeStore.getColorTheme();

  const dropdownItemStyles = css`
    background-color: ${props.selected === true ? colorTheme.primary.base() : colorTheme.white.base()};
    padding: .5em 2rem .5rem 2rem;

    &:not(:hover) {
      * {
        color: ${props.selected ? colorTheme.white.base() : null};
      }
    }

    &:hover {
      background-color: ${props.hoverable === true ? colorTheme.light.base() : null};
    }
  `;

  const dropdownItemOnClick = () => {
    if (props.onSelection) {
      props.onSelection();
    }
  };

  return (
    <Container styles={cx(dropdownItemStyles, props.styles)} onClick={dropdownItemOnClick}>
      {props.children}
    </Container>
  );
};
DropdownItem.defaultProps = {
  selected: false,
  hoverable: false
};

export {
  DropdownItem
};
