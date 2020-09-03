import { Placement } from '@popperjs/core';
import React from 'react';
import { ActiveProps, StyleProps } from '..';
export interface PopoverProps extends ActiveProps, StyleProps {
    containerStyles?: string;
    content?: JSX.Element;
    position?: Placement;
    offset?: number;
    slidingOffset?: number;
    overlay?: boolean;
    overlayStyles?: string;
}
declare const Popover: React.FC<PopoverProps>;
export { Popover };
