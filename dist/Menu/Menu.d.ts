import React from 'react';
import { ComponentProps } from '../ComponentProps';
import { ResponsiveStyleProps } from '../ResponsiveStyles';
interface MenuProps extends ComponentProps, ResponsiveStyleProps {
}
declare const Menu: React.FC<MenuProps>;
export { Menu };
