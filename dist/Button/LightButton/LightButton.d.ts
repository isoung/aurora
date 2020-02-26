import React from 'react';
import { ColorTheme } from '../../Theme/Color/ColorPalette';
import { ButtonProps } from '../Button';
export declare type LightButtonVariants = Omit<ColorTheme, 'light' | 'white'>;
interface LightButtonProps extends Omit<ButtonProps, 'variant'> {
    variant?: keyof LightButtonVariants;
}
export declare const LightButton: React.FC<LightButtonProps>;
export {};
