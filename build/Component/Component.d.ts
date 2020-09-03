import React from 'react';
import { BoxShadow, ComponentVariants } from '..';
declare type Display = 'inline' | 'block' | 'contents' | 'flex' | 'grid' | 'inline-block' | 'inline-flex' | 'inline-grid' | 'inline-table' | 'list-item' | 'run-in' | 'table' | 'table-caption' | 'table-column-group' | 'table-header-group' | 'table-footer-group' | 'table-row-group' | 'table-cell' | 'table-column' | 'table-row' | 'none' | 'initial' | 'inherit';
declare type JustifyContent = 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
declare type FlexFlow = 'row' | 'row-reverse' | 'column' | 'column-reverse' | 'nowrap' | 'wrap' | 'wrap-reverse' | 'row nowrap' | 'row wrap' | 'row wrap-reverse' | 'column nowrap' | 'column wrap' | 'column wrap-reverse' | 'column-reverse nowrap' | 'column-reverse wrap' | 'column-reverse wrap-reverse';
declare type AlignItems = 'center' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'baseline' | 'first baseline' | 'last baseline' | 'safe center' | 'unsafe center';
export interface StyleProps {
    styles?: string;
}
export interface ComponentProps extends StyleProps {
    tag?: string;
    element?: React.FunctionComponent;
    variant?: ComponentVariants;
    display?: Display;
    justifyContent?: JustifyContent;
    flexFlow?: FlexFlow;
    alignItems?: AlignItems;
    boxShadow?: boolean | BoxShadow;
    rounded?: boolean;
    height?: string;
    minHeight?: string;
    maxHeight?: string;
    width?: string;
    minWidth?: string;
    maxWidth?: string;
    margin?: string;
    marginLeft?: string;
    marginTop?: string;
    marginRight?: string;
    marginBottom?: string;
    padding?: string;
    paddingLeft?: string;
    paddingTop?: string;
    paddingRight?: string;
    paddingBottom?: string;
    onClick?: (e?: any) => void;
}
declare const Component: React.FC<ComponentProps>;
export { Component };
