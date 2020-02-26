import React from 'react';
import { ComponentProps } from '../ComponentProps';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, ComponentProps {
    rounded?: boolean;
}
export declare const Button: React.FC<ButtonProps>;
