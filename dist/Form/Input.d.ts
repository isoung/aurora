import React from 'react';
import { ComponentProps } from '../ComponentProps';
interface InputProps extends ComponentProps, React.InputHTMLAttributes<HTMLInputElement> {
    hasIconLeft?: boolean;
    hasIconRight?: boolean;
    hasAddonRight?: boolean;
}
declare const Input: React.FC<InputProps>;
export { Input };
