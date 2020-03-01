import React from 'react';
import { ComponentProps } from '../ComponentProps';
import { PopoverProps } from '../Popover/Popover';
interface TooltipProps extends PopoverProps, ComponentProps {
}
declare const Tooltip: React.FC<TooltipProps>;
export { Tooltip };
