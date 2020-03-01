import { css, cx } from 'emotion';
import React from 'react';

import { ComponentStyleProps } from '../ComponentProps';

interface FormFieldProps extends ComponentStyleProps {}
const FormField: React.FC<FormFieldProps> = (props) => {
  const formFieldStyles = css`
    position: relative;
    margin-bottom: 12px;

    button:first-of-type {
      position: absolute;
      height: 100%;
      border-top-left-radius: 0px;
      border-bottom-left-radius: 0px;
    }
  `;

  return (
    <div className={cx(formFieldStyles, props.styles)}>
      {props.children}
    </div>
  );
};

export {
  FormField
};
