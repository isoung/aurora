import React from 'react';
import { ComponentProps, FontComponentSize } from '..';
declare type TextAlign = 'left' | 'right' | 'center' | 'justify' | 'initial' | 'inherit';
export interface TextComponentProps extends ComponentProps {
    size?: FontComponentSize;
    weight?: number;
    color?: string;
    textAlign?: TextAlign;
}
export interface TextProps extends TextComponentProps, Omit<React.HTMLAttributes<HTMLSpanElement>, 'onClick'> {
    tag?: string;
    default?: boolean;
}
declare const Text: React.FC<TextProps>;
export { Text };
