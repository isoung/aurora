import { css } from 'emotion';
import React from 'react';

import {
  ActiveProps,
  Modal,
  StyleProps,
  useTheme
} from '..';

const FullScreenModal: React.FC<StyleProps & ActiveProps> = (props) => {
  const colors = useTheme().colors;

  const fullScreenModalStyles = css`
    height: 100%;
    width: 100%;
    border-radius: 0px;
    background-color: ${colors.light};
  `;

  return (
    <Modal styles={fullScreenModalStyles} {...props} animation='FADE' overlay={false}>
      {props.children}
    </Modal>
  );
};

export {
  FullScreenModal
};
