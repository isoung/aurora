import { css, cx } from 'emotion';
import React from 'react';

import { Component, ComponentProps } from '..';

interface ButtonGroupProps extends ComponentProps {
  rounded?: boolean;
}
const ButtonGroup: React.FC<ButtonGroupProps> = (props) => {
  const { styles, ...componentProps } = props;

  const buttonGroupStyles = css`
    button {
      box-shadow: none !important;
    }

    button:first-of-type {
      border-top-left-radius: ${props.rounded ? '1000px' : undefined};
      border-bottom-left-radius: ${props.rounded ? '1000px' : undefined};
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
    }

    button:not(:first-child):not(:last-child) {
      border-radius: 0px;
    }

    button:last-of-type {
      border-top-right-radius: ${props.rounded ? '1000px' : undefined};
      border-bottom-right-radius: ${props.rounded ? '1000px' : undefined};
      border-top-left-radius: 0px;
      border-bottom-left-radius: 0px;
    }
  `;

  return (
    <Component {...componentProps} styles={cx(buttonGroupStyles, styles)}>
      {props.children}
    </Component>
  );
};
ButtonGroup.displayName = 'ButtonGroup';

export {
  ButtonGroup
};
