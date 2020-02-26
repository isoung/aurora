import React from 'react';
import { ComponentStyleProps } from '../ComponentProps';
import { AnimationProps } from './AnimationProps';
interface EntranceAnimationProps extends AnimationProps, ComponentStyleProps {
    hiddenOpacity?: number;
    hiddenScale?: number;
    visibleOpacity?: number;
    visibleScale?: number;
}
export declare const EntranceAnimation: React.FC<EntranceAnimationProps>;
export {};
