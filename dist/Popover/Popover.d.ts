import { Placement } from '@popperjs/core';
import React from 'react';
import { ActiveProps } from '../ActiveProps';
import { ComponentStyleProps } from '../ComponentProps';
export interface PopoverProps extends ActiveProps, ComponentStyleProps {
    containerStyles?: string;
    content?: JSX.Element;
    position?: Placement;
    offset?: number;
    slidingOffset?: number;
}
declare const Popover: React.FC<PopoverProps>;
export { Popover };
