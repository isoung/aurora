import React from 'react';
import { ComponentProps } from '../../ComponentProps';
import { ResponsiveStyleProps } from '../../ResponsiveStyles';
import { ContainerProps } from '../Container/Container';
interface TileProps extends ComponentProps, ContainerProps, ResponsiveStyleProps, React.HtmlHTMLAttributes<HTMLElement> {
}
export declare const Tile: React.FC<TileProps>;
export {};
