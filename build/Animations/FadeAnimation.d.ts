import React from 'react';
import { ComponentProps } from '..';
import { AnimationProps } from './AnimationProps';
interface FadeAnimation extends AnimationProps, ComponentProps {
    hiddenOpacity?: number;
    visibleOpacity?: number;
}
declare const FadeAnimation: React.FC<FadeAnimation>;
export { FadeAnimation };
