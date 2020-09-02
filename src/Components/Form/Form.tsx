import { css, cx } from 'emotion';
import React, { HTMLAttributes } from 'react';

import { Component, ComponentProps } from '..';

interface FormProps extends Omit<HTMLAttributes<HTMLFormElement>, 'onClick'>, ComponentProps {}
const Form: React.FC<FormProps> = (props) => {
  const formStyles = css`
    width: ${props.width};
    height: ${props.height};
  `;

  return (
    <Component tag='form' styles={cx(formStyles, props.styles)} {...props}>
      {props.children}
    </Component>
  );
};
Form.displayName = 'Form';

export {
  Form
};
