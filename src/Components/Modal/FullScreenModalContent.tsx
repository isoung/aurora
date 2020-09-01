import React from 'react';

import { Container, ContainerProps } from '..';

const FullScreenModalContent: React.FC<ContainerProps> = (props) => {
  return (
    <Container flexGrow='1' flexFlow='column' {...props}>
      {props.children}
    </Container>
  );
};
FullScreenModalContent.displayName = 'FullScreenModalContent';

export {
  FullScreenModalContent
};
