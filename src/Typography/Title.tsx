import { css, cx } from 'emotion';
import React from 'react';

import { ComponentTextProps } from '../ComponentProps';
import { Text } from './Text';

interface TitleProps extends ComponentTextProps {}
export const Title: React.FC<TitleProps> = (props) => {
  const {
    styles,
    ...titleProps
  } = props;

  const titleStyles = css``;

  return (
    <Text tag='h1' styles={cx(titleStyles, styles)} {...titleProps}>{props.children}</Text>
  );
};
Title.defaultProps = {
  size: 'large'
};
