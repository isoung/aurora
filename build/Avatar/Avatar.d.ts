import React from 'react';
import { ComponentProps, InteractableProps } from '..';
interface AvatarProps extends ComponentProps, InteractableProps, Omit<React.HtmlHTMLAttributes<HTMLImageElement>, 'onClick'> {
    rounded?: boolean;
    imgUrl: string;
}
declare const Avatar: React.FC<AvatarProps>;
export { Avatar };
