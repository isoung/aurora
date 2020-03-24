import React from 'react';
import { ComponentStyleProps } from '../ComponentProps';
import { AnimationProps } from './AnimationProps';
interface SlideLeftEntranceAnimationProps extends AnimationProps, ComponentStyleProps {
    hiddenX: number;
    visibleX?: number;
}
declare const SlideLeftEntranceAnimation: React.FC<SlideLeftEntranceAnimationProps>;
export { SlideLeftEntranceAnimation };
