import React from 'react';
import { ComponentProps } from '../ComponentProps';
import { InteractableProps } from '../InteractableProps';
interface TagProps extends ComponentProps, InteractableProps, React.HTMLAttributes<HTMLElement> {
    isDeletable?: boolean;
    onDelete?: (e: any) => void;
}
export declare const Tag: React.FC<TagProps>;
export {};
