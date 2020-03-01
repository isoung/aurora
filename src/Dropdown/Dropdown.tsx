import { css, cx } from 'emotion';
import React from 'react';

import { ComponentStyleProps } from '../ComponentProps';
import { Popover, PopoverProps } from '../Popover/Popover';
import { ThemeStore } from '../Theme/ThemeStore';

interface DropdownProps extends ComponentStyleProps, PopoverProps {}
const Dropdown: React.FC<DropdownProps> = (props) => {
  const themeStore = ThemeStore.useContainer();
  const colorTheme = themeStore.getColorTheme();

  const {
    styles,
    content,
    active,
    onClose,
    ...popoverProps
  } = props;

  const dropdownStyles = css`
    background-color: ${colorTheme.white.base()};
    box-shadow: 0 0.5em 1em -0.125em ${colorTheme.dark.lighter()},
      0 0 0 1px ${colorTheme.light.base()};
    border-radius: 4px;

    * {
      cursor: ${active ? 'pointer' : null};
    }

    div:first-of-type {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }

    div:last-of-type {
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }

    i {
      margin-right: .5rem;
    }
  `;

  const dropdownOverlayStyles = css`
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
  `;

  const dropdownOverlayClick = () => {
    if (props.onClose) {
      props.onClose();
    }
  };

  return (
    <React.Fragment>
      <Popover
        {...popoverProps}
        active={active}
        content={
          <div className={cx(dropdownStyles, styles)}>
            {content}
          </div>
        }
      >
        {props.children}
      </Popover>
      {
        active &&
          <div className={dropdownOverlayStyles} onClick={dropdownOverlayClick}/>
      }
    </React.Fragment>
  );
};
Dropdown.defaultProps = {
  position: 'right'
};

export {
  Dropdown
};
