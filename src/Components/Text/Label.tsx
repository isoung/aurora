import { css, cx } from 'emotion';
import React from 'react';

import { Text, TextComponentProps } from './Text';

const Label: React.FC<TextComponentProps> = (props) => {
  const {
    styles,
    ...textProps
  } = props;

  const labelStyles = css`
    display: block;
    margin-bottom: .5em;
    color: ${props.color};
  `;

  return (
    <Text tag='span' {...textProps} styles={cx(labelStyles, styles)}>{props.children}</Text>
  );
};
Label.defaultProps = {
  size: 'base',
  weight: 700
};

export {
  Label
};
