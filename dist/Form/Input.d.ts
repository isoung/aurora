import React from 'react';
import { ComponentProps } from '../ComponentProps';
interface InputProps extends ComponentProps, React.HTMLAttributes<HTMLInputElement> {
    hasIconLeft?: boolean;
    hasIconRight?: boolean;
    hasAddonRight?: boolean;
}
export declare const Input: React.FC<InputProps>;
export {};
