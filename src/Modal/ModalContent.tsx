import { css, cx } from 'emotion';
import React from 'react';

import { ComponentStyleProps } from '../ComponentProps';

interface ModalContentProps extends ComponentStyleProps {}
const ModalContent: React.FC<ModalContentProps> = (props) => {
  const modalContentStyles = css`
    padding-left: 2rem;
    padding-right: 2rem;
  `;

  return (
    <div className={cx(modalContentStyles, props.styles)}>
      {props.children}
    </div>
  );
};

export {
  ModalContent
};
