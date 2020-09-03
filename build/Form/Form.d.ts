import React, { HTMLAttributes } from 'react';
import { ComponentProps } from '..';
interface FormProps extends Omit<HTMLAttributes<HTMLFormElement>, 'onClick'>, ComponentProps {
}
declare const Form: React.FC<FormProps>;
export { Form };
