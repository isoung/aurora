import React from 'react';
import { ComponentStyleProps } from '../ComponentProps';
import { PopoverProps } from '../Popover/Popover';
interface DropdownProps extends ComponentStyleProps, PopoverProps {
}
declare const Dropdown: React.FC<DropdownProps>;
export { Dropdown };
