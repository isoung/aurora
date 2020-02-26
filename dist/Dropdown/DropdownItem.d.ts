import React from 'react';
import { ComponentStyleProps } from '../ComponentProps';
interface DropdownItemProps extends ComponentStyleProps {
    selected?: boolean;
    onSelection?: () => void;
    hoverable?: boolean;
}
export declare const DropdownItem: React.FC<DropdownItemProps>;
export {};
