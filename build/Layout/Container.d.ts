import React from 'react';
import { ComponentProps } from '../Component/Component';
export interface ContainerProps extends ComponentProps, Omit<React.HTMLAttributes<HTMLElement>, 'onClick'> {
    flexGrow?: string;
    borderBox?: boolean;
}
declare const Container: React.FC<ContainerProps>;
export { Container };
