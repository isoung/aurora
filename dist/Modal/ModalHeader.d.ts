import React from 'react';
import { ComponentStyleProps } from '../ComponentProps';
import { InteractableProps } from '../InteractableProps';
import { ContainerProps } from '../Layout/Container/Container';
interface ModalHeaderProps extends ComponentStyleProps, InteractableProps, ContainerProps {
    interactionIcon?: string;
}
declare const ModalHeader: React.FC<ModalHeaderProps>;
export { ModalHeader };
