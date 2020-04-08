import React from 'react';
import { ActiveProps } from '../ActiveProps';
import { ComponentStyleProps } from '../ComponentProps';
export interface PopoverProps extends ActiveProps, ComponentStyleProps {
    content?: JSX.Element;
    position?: 'left' | 'right' | 'top' | 'top-left' | 'top-right' | 'bottom' | 'bottom-left' | 'bottom-right';
    containerStyles?: string;
}
declare const Popover: React.FC<PopoverProps>;
export { Popover };
