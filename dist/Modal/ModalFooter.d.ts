import React from 'react';
import { ComponentProps } from '../ComponentProps';
import { ContainerProps } from '../Layout/Container/Container';
import { ColorTheme } from '../Theme/Color/ColorPalette';
declare type ModalFooterVariants = Pick<ColorTheme, 'light' | 'primary' | 'white'>;
interface ModalFooterProps extends Omit<ComponentProps, 'variant'>, ContainerProps {
    variant?: keyof ModalFooterVariants;
}
export declare const ModalFooter: React.FC<ModalFooterProps>;
export {};
