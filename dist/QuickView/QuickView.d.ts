import React from 'react';
import { ActiveProps } from '../ActiveProps';
import { ComponentStyleProps } from '../ComponentProps';
import { ResponsiveStyleProps } from '../ResponsiveStyles';
interface QuickViewProps extends ActiveProps, ComponentStyleProps, ResponsiveStyleProps {
    startingWidth?: number;
}
declare const QuickView: React.FC<QuickViewProps>;
export { QuickView };
