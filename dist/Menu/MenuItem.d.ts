import React from 'react';
import { ComponentProps } from '../ComponentProps';
import { InteractableProps } from '../InteractableProps';
import { SelectionProps } from '../SelectionProps';
interface MenuItemProps extends ComponentProps, InteractableProps, SelectionProps {
}
export declare const MenuItem: React.FC<MenuItemProps>;
export {};
