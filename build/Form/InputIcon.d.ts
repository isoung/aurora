import React from 'react';
import { IconProps } from '..';
interface InputIconProps extends IconProps {
    position: 'left' | 'right';
}
declare const InputIcon: React.FC<InputIconProps>;
export { InputIcon };
