import { Placement } from 'popper.js';
import React from 'react';
import { ActiveProps } from '../ActiveProps';
import { ComponentStyleProps } from '../ComponentProps';
export interface PopoverProps extends ActiveProps, ComponentStyleProps {
    containerStyles?: string;
    content?: JSX.Element;
    position?: Placement;
    offset?: number;
}
declare const Popover: React.FC<PopoverProps>;
export { Popover };
