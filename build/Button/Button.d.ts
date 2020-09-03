import { HTMLMotionProps } from 'framer-motion';
import React from 'react';
import { ComponentProps } from '..';
export interface ButtonProps extends ComponentProps, Omit<HTMLMotionProps<'button'>, 'onClick'> {
    rounded?: boolean;
    ghost?: boolean;
}
declare const Button: React.FC<ButtonProps>;
export { Button };
