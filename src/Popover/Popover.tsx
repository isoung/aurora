import { css, cx } from 'emotion';
import React, { useEffect, useRef, useState } from 'react';
import DOM from 'react-dom';

import { ActiveProps } from '../ActiveProps';
import { EntranceAnimation } from '../Animation/EntranceAnimation';
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

export interface PopoverProps extends ActiveProps, ComponentStyleProps {
  content?: JSX.Element;
  position?: 'left' | 'top' | 'right' | 'bottom';
  containerStyles?: string;
}
const Popover: React.FC<PopoverProps> = (props) => {
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
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
      setHeight(resizedBoundingRect.height);
      setWidth(resizedBoundingRect.width);
    };

    window.addEventListener('resize', setPositionFn);

    const boundingRect: DOMRect = current.getBoundingClientRect();
    setTop(boundingRect.top);
    setLeft(boundingRect.left);
    setBottom(boundingRect.bottom);
    setRight(boundingRect.right);
    setHeight(boundingRect.height);
    setWidth(boundingRect.width);

    return () => {
      window.removeEventListener('resize', setPositionFn);
    };
  });

  const generateLeftStyles = (): string => {
    if (props.position === 'right') {
      return `calc(${left}px + ${width}px)`;
    }
    else if (props.position === 'top') {
      return `${left}px`;
    }
    else if (props.position === 'bottom') {
      return `${right - width}px`;
    }
    else {
      return undefined;
    }
  };

  const generateTopStyles = (): string => {
    if (props.position === 'left') {
      return `${bottom - height}px`;
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
      return `calc(100% - ${left}px)`;
    }
    else {
      return undefined;
    }
  };

  const generateBottomStyles = (): string => {
    return props.position === 'top' ? `calc(100% - ${top}px)` : undefined;
  };

  const popoverStyles = css`
    font-family: ${themeStore.getFontTheme().fontFamily};
    position: absolute;
    left: ${generateLeftStyles()};
    top: ${generateTopStyles()};
    right: ${generateRightStyles()};
    bottom: ${generateBottomStyles()};
    margin-bottom: ${props.position === 'top' ? '8px' : undefined};
    margin-top: ${props.position === 'bottom' ? '8px' : undefined};
    margin-left: ${props.position === 'right' ? '8px' : undefined};
    margin-right: ${props.position === 'left' ? '8px' : undefined};
    display: flex;
    z-index: 123819223;
  `;

  const popoverContainerStyles = css`
    width: fit-content;
  `;

  const bodyElement = document.getElementsByTagName('body')[0];
  return (
    <div className={cx(popoverContainerStyles, props.containerStyles)} ref={childRef}>
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
                <EntranceAnimation
                  hiddenScale={.9}
                  visibleDelay={.05}
                  styles={cx(popoverStyles, props.styles)}
                >
                  {props.content}
                </EntranceAnimation>
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

export {
  Popover
};
