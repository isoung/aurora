import { css, cx } from 'emotion';
import React from 'react';

import { CloseButton } from '../Button/CloseButton/CloseButton';
import { ComponentStyleProps } from '../ComponentProps';
import { InteractableProps } from '../InteractableProps';
import { Container, ContainerProps } from '../Layout/Container/Container';

interface ModalHeaderProps extends ComponentStyleProps, InteractableProps, ContainerProps {
  interactionIcon?: string;
}
export const ModalHeader: React.FC<ModalHeaderProps> = (props) => {
  const modalHeaderContainerStyles = css`
    padding-left: 2rem;
    padding-right: 1rem;
    padding-top: .5rem;
    padding-bottom: .75rem;
  `;

  const modalHeaderContentStyles = css`
    flex-grow: 1;
  `;

  const {
    styles,
    isInteractable,
    onInteraction,
    interactionIcon,
    ...containerProps
  } = props;

  return (
    <Container styles={cx(modalHeaderContainerStyles, styles)}>
      <Container {...containerProps} styles={modalHeaderContentStyles}>
        {props.children}
      </Container>
      {
        isInteractable && <CloseButton size='2x' onClose={onInteraction} icon={interactionIcon}/>
      }
    </Container>
  );
};
ModalHeader.defaultProps = {
  interactionIcon: 'far fa-times'
};
