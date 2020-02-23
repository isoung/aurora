import Color from 'color';
import { css, cx } from 'emotion';
import { motion } from 'framer-motion';
import React from 'react';
import { useContainer } from 'unstated-next';

import { ActiveProps } from '../ActiveProps';
import { ComponentStyleProps } from '../ComponentProps';
import { getPropStyle, ResponsiveStyleProps } from '../ResponsiveStyles';
import { ThemeStore } from '../Theme/ThemeStore';

export interface ModalProps extends ComponentStyleProps, ActiveProps, ResponsiveStyleProps {}
export const Modal: React.FC<ModalProps> = (props) => {
  const themeStore = useContainer(ThemeStore);
  const colorTheme = themeStore.getColorTheme();

  const modalContentStyles = css`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: fit-content;
    height: fit-content;
    margin: auto;
    background-color: ${colorTheme.white.base()};
    border-radius: 6px;
    z-index: 9999;

    ${getPropStyle(props)}
  `;

  const modalOverlayStyles = css`
    position: absolute;
    background-color: ${Color(colorTheme.black.base()).toString()};
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    opacity: .8;
    z-index: 9998;
  `;

  const container = {
    hidden: { opacity: 0, scale: .9 },
    visible: {
      opacity: 1,
      scale: 1
    }
  };

  return (
    <div>
      {
        props.active &&
        (
          <React.Fragment>
            <motion.div
              className={modalOverlayStyles} onClick={props.onClose}
            />
            <motion.div
              variants={container}
              initial='hidden'
              animate='visible'
              transition={{ duration: .3 }}
              className={cx(modalContentStyles, props.styles)}
            >
              {props.children}
            </motion.div>
          </React.Fragment>
        )
      }
    </div>
  );
};
