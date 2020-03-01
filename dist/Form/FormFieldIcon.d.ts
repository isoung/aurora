import React from 'react';
import { ComponentProps } from '../ComponentProps';
import { IconProps } from '../Icon/Icon';
interface FormFieldIconProps extends ComponentProps, IconProps {
    iconPosition?: 'left' | 'right';
}
declare const FormFieldIcon: React.FC<FormFieldIconProps>;
export { FormFieldIcon };
