import React from 'react';
import { ComponentTextProps } from '../ComponentProps';
interface TextProps extends ComponentTextProps {
    tag?: string;
    weight?: number;
}
export declare const Text: React.FC<TextProps>;
export {};
