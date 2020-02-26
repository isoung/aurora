import React from 'react';
import { ComponentImgProps } from '../ComponentProps';
import { InteractableProps } from '../InteractableProps';
import { ResponsiveStyleProps } from '../ResponsiveStyles';
interface AvatarProps extends ComponentImgProps, InteractableProps, ResponsiveStyleProps, React.HtmlHTMLAttributes<HTMLImageElement> {
    rounded?: boolean;
}
export declare const Avatar: React.FC<AvatarProps>;
export {};
