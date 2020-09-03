import { } from 'emotion';
import React from 'react';

import { Container, ContainerProps } from '..';

const FullScreenModalContainer: React.FC<ContainerProps> = (props) => {
  return (
    <Container alignItems='center' justifyContent='center' height='calc(100% - 120px)' width='100%'>
      <Container {...props} styles={props.styles} flexFlow='column'>
        {props.children}
      </Container>
    </Container>
  );
};
FullScreenModalContainer.displayName = 'FullScreenModalContainer';
FullScreenModalContainer.defaultProps = {
  width: '1000px',
  height: '700px'
};

export {
  FullScreenModalContainer
};
