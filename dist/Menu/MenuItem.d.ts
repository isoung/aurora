import React from 'react';
import { ComponentProps } from '../ComponentProps';
import { InteractableProps } from '../InteractableProps';
import { SelectionProps } from '../SelectionProps';
interface MenuItemProps extends ComponentProps, InteractableProps, SelectionProps {
}
declare const MenuItem: React.FC<MenuItemProps>;
export { MenuItem };
