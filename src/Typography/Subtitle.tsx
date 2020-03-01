import { css, cx } from 'emotion';
import React from 'react';

import { ComponentTextProps } from '../ComponentProps';
import { Text } from './Text';

interface SubtitleProps extends ComponentTextProps {}
export const Subtitle: React.FC<SubtitleProps> = (props) => {
  const {
    styles,
    ...subtitleProps
  } = props;

  const subtitleStyles = css``;

  return (
    <Text tag='h4' styles={cx(subtitleStyles, styles)} {...subtitleProps}>{props.children}</Text>
  );
};
Subtitle.defaultProps = {
  size: 'normal',
  weight: 300
};

export {
  Subtitle
};
