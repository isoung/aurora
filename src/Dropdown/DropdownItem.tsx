import { css, cx } from 'emotion';
import React from 'react';

import { ComponentStyleProps } from '../ComponentProps';
import { Container, ContainerProps } from '../Layout/Container/Container';
import { ThemeStore } from '../Theme/ThemeStore';

interface DropdownItemProps extends ComponentStyleProps, ContainerProps {
  selected?: boolean;
  onSelection?: () => void;
  hoverable?: boolean;
}
const DropdownItem: React.FC<DropdownItemProps> = (props) => {
  const themeStore = ThemeStore.useContainer();
  const colorTheme = themeStore.getColorTheme();

  const {
    styles,
    selected,
    onSelection,
    hoverable,
    ...containerProps
  } = props;

  const dropdownItemStyles = css`
    background-color: ${selected === true ? colorTheme.primary.base() : colorTheme.white.base()};
    padding: .5em 2rem .5rem 2rem;

    &:not(:hover) {
      * {
        color: ${selected ? colorTheme.white.base() : null};
      }
    }

    &:hover {
      background-color: ${hoverable === true ? colorTheme.light.base() : null};
    }
  `;

  const dropdownItemOnClick = () => {
    if (onSelection) {
      onSelection();
    }
  };

  return (
    <Container {...containerProps} styles={cx(dropdownItemStyles, styles)} onClick={dropdownItemOnClick}>
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
