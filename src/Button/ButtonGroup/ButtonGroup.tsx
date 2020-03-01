import { css, cx } from 'emotion';
import React from 'react';

import { ComponentStyleProps } from '../../ComponentProps';

interface ButtonGroupProps extends ComponentStyleProps {
  rounded?: boolean;
}
const ButtonGroup: React.FC<ButtonGroupProps> = (props) => {
  const buttonGroupStyles = css`
    button:first-of-type {
      border-top-left-radius: ${props.rounded ? '100px' : undefined};
      border-bottom-left-radius: ${props.rounded ? '100px' : undefined};
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
    }

    button:not(:first-child):not(:last-child) {
      border-radius: 0px;
    }

    button:last-of-type {
      border-top-right-radius: ${props.rounded ? '100px' : undefined};
      border-bottom-right-radius: ${props.rounded ? '100px' : undefined};
      border-top-left-radius: 0px;
      border-bottom-left-radius: 0px;
    }
  `;

  return (
    <div className={cx(buttonGroupStyles, props.styles)}>
      {props.children}
    </div>
  );
};

export {
  ButtonGroup
};
