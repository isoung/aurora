import React, { InputHTMLAttributes } from 'react';
import { ComponentProps } from '..';
interface InputProps extends ComponentProps, Omit<InputHTMLAttributes<HTMLInputElement>, 'height' | 'width' | 'onClick'> {
    hasIconLeft?: boolean;
    hasIconRight?: boolean;
    ref?: any;
    rounded?: boolean;
}
declare const Input: React.FC<InputProps>;
export { Input };
