import React from 'react';
import { ComponentTextProps } from '../ComponentProps';
interface TextProps extends ComponentTextProps {
    tag?: string;
    weight?: number;
}
declare const Text: React.FC<TextProps>;
export { Text };
