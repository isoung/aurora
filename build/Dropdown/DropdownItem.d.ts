import React from 'react';
import { ContainerProps, StyleProps } from '..';
interface DropdownItemProps extends StyleProps, ContainerProps {
    selected?: boolean;
    onSelection?: () => void;
    hoverable?: boolean;
}
declare const DropdownItem: React.FC<DropdownItemProps>;
export { DropdownItem };
