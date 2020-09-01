import React from 'react';

import { Container, ContainerProps } from '..';

const FullScreenModalFooter: React.FC<ContainerProps> = (props) => {
  const {
    width,
    height,
    ...containerProps
  } = props;

  return (
    <Container width={width} height={height} {...containerProps}>
      {props.children}
    </Container>
  );
};
FullScreenModalFooter.displayName = 'FullScreenModalFooter';
FullScreenModalFooter.defaultProps = {
  width: '100%',
  height: '60px'
};

export {
  FullScreenModalFooter
};
