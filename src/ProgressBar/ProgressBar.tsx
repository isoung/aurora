import { css, cx } from 'emotion';
import { motion, Variants } from 'framer-motion';
import React from 'react';

import { ComponentProps } from '../ComponentProps';
import { ThemeStore } from '../Theme/ThemeStore';

interface ProgressBarProps extends ComponentProps {
  rounded?: boolean;
  value: number;
  max: number;
  animated?: boolean;
}
const ProgressBar: React.FC<ProgressBarProps> = React.memo((props) => {
  const themeStore = ThemeStore.useContainer();
  const colorTheme = themeStore.getColorTheme();

  const progressBarStyles = css`
    height: 1rem;
    background-color: ${colorTheme.light.base()};
    border-radius: ${props.rounded ? '100px' : undefined};
  `;

  const innerProgressBarStyles = css`
    background-color: ${colorTheme[props.variant].base()};
    border-top-left-radius: ${props.rounded ? '100px' : undefined};
    border-bottom-left-radius: ${props.rounded ? '100px' : undefined};
    height: 100%;
    width: ${props.value.toString()}%;
  `;

  const variants: Variants = {
    hidden: {
      width: 0
    },
    visible: {
      width: `${props.value.toString()}%`
    }
  };

  return (
    <div className={cx(progressBarStyles, props.styles)}>
      {
        props.animated ?
        <motion.div
          className={innerProgressBarStyles}
          initial='hidden'
          animate='visible'
          variants={variants}
        /> :
        <div className={innerProgressBarStyles}/>
      }
    </div>
  );
});
ProgressBar.defaultProps = {
  variant: 'primary',
  rounded: false,
  animated: false
};

export {
  ProgressBar
};
