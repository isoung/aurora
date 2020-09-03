import React from 'react';
import { StyleProps } from '..';
import { AnimationProps } from './AnimationProps';
interface EntranceAnimationProps extends AnimationProps, StyleProps {
    hiddenOpacity?: number;
    hiddenScale?: number;
    visibleOpacity?: number;
    visibleScale?: number;
}
declare const EntranceAnimation: React.FC<EntranceAnimationProps>;
export { EntranceAnimation };
