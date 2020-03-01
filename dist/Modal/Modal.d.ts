import React from 'react';
import { ActiveProps } from '../ActiveProps';
import { ComponentStyleProps } from '../ComponentProps';
import { ResponsiveStyleProps } from '../ResponsiveStyles';
export interface ModalProps extends ComponentStyleProps, ActiveProps, ResponsiveStyleProps {
}
declare const Modal: React.FC<ModalProps>;
export { Modal };
