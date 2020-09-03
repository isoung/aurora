import React, { HTMLAttributes } from 'react';
import { ComponentProps, InteractableProps } from '..';
export declare type IconSize = '2x' | '3x' | '5x' | '7x' | '9x';
export interface IconProps extends ComponentProps, InteractableProps, Omit<HTMLAttributes<HTMLDivElement>, 'onClick'> {
    icon: string;
    size?: IconSize;
    fontSize?: string;
    interactableColor?: boolean;
}
declare const Icon: React.FC<IconProps>;
export { Icon };
