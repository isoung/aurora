import React from 'react';
import { ActiveProps } from '../ActiveProps';
import { ComponentStyleProps } from '../ComponentProps';
export interface PopoverProps extends ActiveProps, ComponentStyleProps {
    content?: JSX.Element;
    position?: 'left' | 'top' | 'right' | 'bottom';
}
export declare const Popover: React.FC<PopoverProps>;
