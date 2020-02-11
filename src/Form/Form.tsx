import { cx } from 'emotion';
import React from 'react';

import { ComponentStyleProps } from '../ComponentProps';

interface FormProps extends ComponentStyleProps {}
export const Form: React.FC<FormProps> = (props) => {
  return (
    <form className={cx(props.styles)}>{props.children}</form>
  );
};
