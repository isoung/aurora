import React from 'react';
import { ComponentProps } from '../ComponentProps';
import { InteractableProps } from '../InteractableProps';
import { ColorThemeSelectionTypes } from '../Theme/Color/ColorPalette';
export declare type IconSize = '2x' | '3x' | '5x' | '7x' | '9x';
export interface IconProps extends ComponentProps, InteractableProps, React.HTMLAttributes<HTMLElement> {
    icon: string;
    size?: IconSize;
    interactableVariant?: ColorThemeSelectionTypes;
}
declare const Icon: React.FC<IconProps>;
export { Icon };
