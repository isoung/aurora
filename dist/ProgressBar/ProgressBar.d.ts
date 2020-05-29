import React from 'react';
import { ComponentProps } from '../ComponentProps';
interface ProgressBarProps extends ComponentProps {
    rounded?: boolean;
    value: number;
    max: number;
    animated?: boolean;
    withText?: string;
}
declare const ProgressBar: React.FC<ProgressBarProps>;
export { ProgressBar };
