import React from 'react';

import { Text, TextComponentProps } from './Text';

const Subtitle: React.FC<TextComponentProps> = (props) => {
  return (
    <Text tag='h4' {...props}>{props.children}</Text>
  );
};
Subtitle.defaultProps = {
  size: 'base',
  weight: 300
};

export {
  Subtitle
};
