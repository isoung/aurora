import { css, cx } from 'emotion';
import React from 'react';

import { Container, ContainerProps } from '..';

const FormField: React.FC<ContainerProps> = (props) => {
  const {
    styles,
    ...formFieldProps
  } = props;

  const formControlStyles = css`
    position: relative;
    text-align: left;
    margin-bottom: 1em;
  `;

  return (
    <Container styles={cx(formControlStyles, styles)} {...formFieldProps}>
      {props.children}
    </Container>
  );
};
FormField.displayName = 'FormField';
FormField.defaultProps = {
  flexFlow: 'column'
};

export {
  FormField
};
