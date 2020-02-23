import { css, cx } from 'emotion';
import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import DOM from 'react-dom';

import { ActiveProps } from '../ActiveProps';
import { ComponentStyleProps } from '../ComponentProps';
import { ThemeStore } from '../Theme/ThemeStore';

interface DOMRect {
  x: number;
  y: number;
  width: number;
  height: number;
  top: number;
  right: number;
  bottom: number;
  left: number;
}

const animationVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.05
    }
  }
};

export interface PopoverProps extends ActiveProps, ComponentStyleProps {
  content?: JSX.Element;
  position?: 'left' | 'top' | 'right' | 'bottom';
}
export const Popover: React.FC<PopoverProps> = (props) => {
  const [left, setLeft] = useState(null);
  const [top, setTop] = useState(null);
  const [right, setRight] = useState(null);
  const [bottom, setBottom] = useState(null);
  const childRef = useRef(null);

  const themeStore = ThemeStore.useContainer();

  useEffect(() => {
    const { current } = childRef;

    const setPositionFn = () => {
      const resizedBoundingRect = current.getBoundingClientRect();
      setTop(resizedBoundingRect.top);
      setLeft(resizedBoundingRect.left);
      setBottom(resizedBoundingRect.bottom);
      setRight(resizedBoundingRect.right);
    };

    window.addEventListener('resize', setPositionFn);

    const boundingRect: DOMRect = current.getBoundingClientRect();
    setTop(boundingRect.top);
    setLeft(boundingRect.left);
    setBottom(boundingRect.bottom);
    setRight(boundingRect.right);

    return () => {
      window.removeEventListener('resize', setPositionFn);
    };
  });

  const generateLeftStyles = (): string => {
    if (props.position === 'right') {
      return `${right}px`;
    }
    else if (props.position === 'top') {
      return `${left}px`;
    }
    else if (props.position === 'bottom') {
      return `${left}px`;
    }
    else {
      return undefined;
    }
  };

  const generateTopStyles = (): string => {
    if (props.position === 'left') {
      return `${top}px`;
    }
    else if (props.position === 'right') {
      return `${top}px`;
    }
    else if (props.position === 'bottom') {
      return `${bottom}px`;
    }
    else {
      return undefined;
    }
  };


  const generateRightStyles = (): string => {
    if (props.position === 'left') {
      return `${right}px`;
    }
    else {
      return undefined;
    }
  };


  const generateBottomStyles = (): string => {
    return props.position === 'top' ? `${bottom}px` : undefined;
  };

  const popoverStyles = css`
    font-family: ${themeStore.getFontTheme().fontFamily};
    position: absolute;
    left: ${generateLeftStyles()};
    top: ${generateTopStyles()};
    right: ${generateRightStyles()};
    bottom: ${generateBottomStyles()};
    display: flex;
  `;

  const bodyElement = document.getElementsByTagName('body')[0];
  return (
    <div ref={childRef}>
      {props.children}
      {
        DOM.createPortal(
          (
            props.active ?
            (
              <ThemeStore.Provider initialState={{
                colorTheme: themeStore.getColorTheme(),
                fontTheme: themeStore.getFontTheme()
              }}>
                <motion.div
                  variants={animationVariants}
                  initial='hidden'
                  animate='visible'
                  className={cx(popoverStyles, props.styles)}
                >
                  {props.content}
                </motion.div>
              </ThemeStore.Provider>
            ) : null
          ),
          bodyElement
        )
      }
    </div>
  );
};
Popover.defaultProps = {
  position: 'top'
};
