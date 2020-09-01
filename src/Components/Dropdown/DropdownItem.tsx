import { css, cx } from 'emotion';
import React from 'react';

import {
  Container,
  ContainerProps,
  getHoveredColor,
  StyleProps,
  useTheme
} from '..';

interface DropdownItemProps extends StyleProps, ContainerProps {
  selected?: boolean;
  onSelection?: () => void;
  hoverable?: boolean;
}
const DropdownItem: React.FC<DropdownItemProps> = (props) => {
  const theme = useTheme();
  const colors = theme.colors;

  const {
    styles,
    selected,
    onSelection,
    hoverable,
    ...containerProps
  } = props;

  const dropdownItemStyles = css`
    background-color: ${selected === true ? colors[props.variant] : colors.white};
    padding: ${props.padding};
    margin: ${props.margin};
    height: ${props.height};
    width: ${props.width};
    cursor: ${hoverable ? 'pointer' : 'auto'};
    box-sizing: border-box;

    &:not(:hover) {
      * {
        color: ${selected ? colors.white : null};
      }
    }

    &:hover {
      background-color: ${hoverable ? colors[props.variant] : null};
      color: ${hoverable ? getHoveredColor(colors[props.variant]) : getHoveredColor(colors.white)};

      * {
        color: ${getHoveredColor(colors[props.variant])};
      }
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
  hoverable: false,
  padding: '4px 24px',
  height: '32px',
  variant: 'light'
};

export {
  DropdownItem
};
