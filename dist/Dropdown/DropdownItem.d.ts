import React from 'react';
import { ComponentStyleProps } from '../ComponentProps';
import { ContainerProps } from '../Layout/Container/Container';
interface DropdownItemProps extends ComponentStyleProps, ContainerProps {
    selected?: boolean;
    onSelection?: () => void;
    hoverable?: boolean;
}
declare const DropdownItem: React.FC<DropdownItemProps>;
export { DropdownItem };
