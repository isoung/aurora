import React from 'react';
import { ActiveProps, StyleProps } from '..';
declare type EntranceAnimationType = 'DEFAULT' | 'FADE';
export interface ModalProps extends StyleProps, ActiveProps {
    animation?: EntranceAnimationType;
    overlay?: boolean;
}
declare const Modal: React.FC<ModalProps>;
export { Modal };
