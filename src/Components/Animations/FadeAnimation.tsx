import { motion, Variants } from 'framer-motion';
import React from 'react';

import { ComponentProps } from '..';
import { AnimationProps } from './AnimationProps';

interface FadeAnimation extends AnimationProps, ComponentProps {
  hiddenOpacity?: number;
  visibleOpacity?: number;
}
const FadeAnimation: React.FC<FadeAnimation> = (props) => {
  const variants: Variants = {
    hidden: {
      opacity: props.hiddenOpacity
    },
    visible: {
      opacity: props.visibleOpacity,
      transition: {
        delay: props.visibleDelay
      }
    }
  };

  return (
    <motion.div className={props.styles} variants={variants} initial='hidden' animate='visible'>
      {props.children}
    </motion.div>
  );
};
FadeAnimation.defaultProps = {
  hiddenOpacity: 0,
  visibleOpacity: 1,
  visibleDelay: 0
};

export {
  FadeAnimation
};
