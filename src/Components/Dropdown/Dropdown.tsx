import { css, cx } from 'emotion';
import React from 'react';

import {
  EntranceAnimation,
  Popover,
  PopoverProps,
  StyleProps,
  useTheme,
} from '..';

const Dropdown: React.FC<StyleProps & PopoverProps> = (props) => {
  const theme = useTheme();
  const colors = theme.colors;

  const {
    styles,
    content,
    active,
    ...popoverProps
  } = props;

  const dropdownStyles = css`
    background-color: ${colors.white};
    box-shadow: 0 0.5em 1em -0.125em ${colors.dark},
      0 0 0 1px ${colors.light};
    border-radius: 8px;

    div:first-child {
      border-top-right-radius: 8px;
      border-top-left-radius: 8px;
    }

    div:last-child {
      border-bottom-right-radius: 8px;
      border-bottom-left-radius: 8px;
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
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <React.Fragment>
      <Popover
        {...popoverProps}
        active={active}
        styles={css`z-index: 10;`}
        content={
          <EntranceAnimation styles={cx(dropdownStyles, styles)}>
            {content}
          </EntranceAnimation>
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
};

export {
  Dropdown
};
