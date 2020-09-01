import { css } from 'emotion';
import React from 'react';

import {
  ButtonProps,
  Container,
  Text,
  useTheme
} from '..';


const ModalBackButton: React.FC<ButtonProps> = (props) => {
  const themeComponents = useTheme().components;

  const backContainerStyles = css`
    padding: 20px;
    cursor: pointer;
    height: fit-content;
    width: fit-content;

    &:hover {
      i, span {
        color: ${themeComponents.modal.activeForeground};
      }
    }

    i {
      font-size: 14px;
      margin-top: 2px;
    }

    span {
      display: flex;
      align-content: center;
      margin-left: 20px;
    }
  `;

  return (
    <Container
      styles={backContainerStyles}
      alignItems='center'
      onClick={props.onClick}
    >
      {/* <Icon icon='far fa-arrow-left' variant='black'/> */}
      <Text>Back</Text>
    </Container>
  );
};

export {
  ModalBackButton
};
