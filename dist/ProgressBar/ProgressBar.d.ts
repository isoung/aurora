import React from 'react';
import { ComponentProps } from '../ComponentProps';
interface ProgressBarProps extends ComponentProps {
    rounded?: boolean;
    value: number;
    max: number;
}
declare const ProgressBar: React.FC<ProgressBarProps>;
export { ProgressBar };
