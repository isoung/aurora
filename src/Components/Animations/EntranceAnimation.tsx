import { motion, Transition, Variants } from 'framer-motion';
import React from 'react';

import { StyleProps } from '..';
import { AnimationProps } from './AnimationProps';

interface EntranceAnimationProps extends AnimationProps, StyleProps {
  hiddenOpacity?: number;
  hiddenScale?: number;
  visibleOpacity?: number;
  visibleScale?: number;
}
const EntranceAnimation: React.FC<EntranceAnimationProps> = (props) => {
  const {
    hiddenOpacity,
    hiddenScale,
    visibleOpacity,
    visibleScale,
    visibleDelay,
    transitionDuration
  } = props;

  const variants: Variants = {
    hidden: {
      opacity: hiddenOpacity,
      scale: hiddenScale
    },
    visible: {
      opacity: visibleOpacity,
      scale: visibleScale,
      transition: {
        delay: visibleDelay
      }
    }
  };

  const transition: Transition = {
    duration: transitionDuration
  };

  return (
    <motion.div className={props.styles} variants={variants} transition={transition} initial='hidden' animate='visible'>
      {props.children}
    </motion.div>
  );
};
EntranceAnimation.defaultProps = {
  hiddenOpacity: 0,
  hiddenScale: 0,
  visibleOpacity: 1,
  visibleScale: 1,
  visibleDelay: 0,
  transitionDuration: undefined
};

export {
  EntranceAnimation
};
