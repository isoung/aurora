import React from 'react';
import { ComponentStyleProps } from '../ComponentProps';
interface FormProps extends ComponentStyleProps, React.FormHTMLAttributes<HTMLFormElement> {
}
declare const Form: React.FC<FormProps>;
export { Form };
