import { motion, Transition, Variants } from 'framer-motion';
import React from 'react';

import { ComponentStyleProps } from '../ComponentProps';
import { AnimationProps } from './AnimationProps';

interface SlideLeftEntranceAnimationProps extends AnimationProps, ComponentStyleProps {
  hiddenX: number;
  visibleX?: number;
}
const SlideLeftEntranceAnimation: React.FC<SlideLeftEntranceAnimationProps> = (props) => {
  const variants: Variants = {
    hidden: {
      translateX: props.hiddenX
    },
    visible: {
      translateX: props.visibleX
    }
  };

  const transition: Transition = {
    ease: 'easeOut',
    duration: props.transitionDuration
  };

  return (
    <motion.div className={props.styles} variants={variants} transition={transition} initial='hidden' animate='visible'>
      {props.children}
    </motion.div>
  );
};
SlideLeftEntranceAnimation.defaultProps = {
  visibleDelay: 0,
  visibleX: 0,
  transitionDuration: undefined
};

export {
  SlideLeftEntranceAnimation
};
