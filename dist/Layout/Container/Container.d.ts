import React from 'react';
import { ComponentStyleProps } from '../../ComponentProps';
import { ResponsiveStyleProps } from '../../ResponsiveStyles';
export declare type ContainerJustifyContent = 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
export declare type ContainerFlexFlow = 'row' | 'row-reverse' | 'column' | 'column-reverse' | 'nowrap' | 'wrap' | 'wrap-reverse' | 'row nowrap' | 'row wrap' | 'row wrap-reverse' | 'column nowrap' | 'column wrap' | 'column wrap-reverse' | 'column-reverse nowrap' | 'column-reverse wrap' | 'column-reverse wrap-reverse';
export declare type ContainerAlignItems = 'center' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'baseline' | 'first baseline' | 'last baseline' | 'safe center' | 'unsafe center';
export interface ContainerProps extends ComponentStyleProps, ResponsiveStyleProps, React.HTMLAttributes<HTMLElement> {
    position?: ContainerJustifyContent;
    direction?: ContainerFlexFlow;
    alignment?: ContainerAlignItems;
}
export declare const Container: React.FC<ContainerProps>;
