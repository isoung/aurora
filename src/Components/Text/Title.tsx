import React from 'react';

import { Text, TextComponentProps } from './Text';

const Title: React.FC<TextComponentProps> = (props) => {
  return (
    <Text tag='h1' {...props}>{props.children}</Text>
  );
};
Title.defaultProps = {
  size: 'lg',
  weight: 700,
  margin: '20px 0px 20px 0px'
};

export {
  Title
};
