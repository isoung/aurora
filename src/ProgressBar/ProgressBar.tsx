import { css, cx } from 'emotion';
import { motion, Variants } from 'framer-motion';
import React from 'react';

import { ComponentProps } from '../ComponentProps';
import { getFontColorByBackground } from '../Theme/Color/Utils';
import { ThemeStore } from '../Theme/ThemeStore';
import { Text } from '../Typography/Text';

interface ProgressBarProps extends ComponentProps {
  rounded?: boolean;
  value: number;
  max: number;
  animated?: boolean;
  withText?: boolean;
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
    display: flex;
    justify-content: flex-end;
    align-items: center;
  `;

  const textStyles = css`
    color: ${getFontColorByBackground(props.variant, colorTheme)};
    margin-right: 4px;
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
        >
          { props.withText ? <Text size='info' styles={textStyles}>{props.value}</Text> : null }
        </motion.div> :
        <div className={innerProgressBarStyles}>
        { props.withText ? <Text size='info' styles={textStyles}>{props.value}</Text> : null }
        </div>
      }
    </div>
  );
});
ProgressBar.defaultProps = {
  variant: 'primary',
  rounded: false,
  animated: false,
  withText: false
};

export {
  ProgressBar
};
