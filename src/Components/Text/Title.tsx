import { css, cx } from 'emotion';
import React from 'react';

import { Text, TextComponentProps } from './Text';

const Title: React.FC<TextComponentProps> = (props) => {
  const {
    styles,
    ...textProps
  } = props;

  const titleStyles = css`
    & + h4 {
      margin-top: -16px;
    }
  `;

  return (
    <Text tag='h1' {...textProps} weight={600} styles={cx(titleStyles, styles)}>{props.children}</Text>
  );
};
Title.defaultProps = {
  size: 'lg',
  weight: 700,
  marginTop: '20px',
  marginBottom: '20px'
};

export {
  Title
};
