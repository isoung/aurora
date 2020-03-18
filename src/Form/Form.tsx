import { cx } from 'emotion';
import React from 'react';

import { ComponentStyleProps } from '../ComponentProps';

interface FormProps extends ComponentStyleProps, React.FormHTMLAttributes<HTMLFormElement> {}
const Form: React.FC<FormProps> = (props) => {
  const {
    styles,
    ...formProps
  } = props;

  return (
    <form {...formProps} className={cx(props.styles)}>{props.children}</form>
  );
};

export {
  Form
};
