import { css, cx } from 'emotion';
import React, { useEffect, useRef, useState } from 'react';

import { ActiveProps } from '../ActiveProps';
import { SlideLeftEntranceAnimation } from '../Animation/SlideLeftEntranceAnimation';
import { ComponentStyleProps } from '../ComponentProps';
import { getPropStyle, ResponsiveStyleProps } from '../ResponsiveStyles';
import { ThemeStore } from '../Theme/ThemeStore';

interface QuickViewProps extends ActiveProps, ComponentStyleProps, ResponsiveStyleProps {
  startingWidth?: number;
}
const QuickView: React.FC<QuickViewProps> = (props) => {
  const themeStore = ThemeStore.useContainer();
  const colorTheme = themeStore.getColorTheme();

  const [width, setWidth] = useState(props.startingWidth ? props.startingWidth : 0);

  const childRef = useRef(null);
  useEffect(() => {
    const { current } = childRef;

    if (current) {
      const boundingRect: DOMRect = current.getBoundingClientRect();

      setWidth(boundingRect.width);
    }
  });

  const quickViewOverlayStyles = css`
    position: absolute;
    background-color: ${colorTheme.black.base()};
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    opacity: .4;
    z-index: 9998;
  `;

  const quickViewContentStyles = css`
    background-color: ${colorTheme.white.base()};
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 9999;
    will-change: transform;

    ${getPropStyle(props)}
  `;

  return (
    <div>
      {
        props.active &&
        (
          <React.Fragment>
            <div className={quickViewOverlayStyles} onClick={() => props.onClose()}/>
            <SlideLeftEntranceAnimation
              hiddenX={width}
              visibleDelay={.05}
              transitionDuration={.3}
              styles={cx(quickViewContentStyles, props.styles)}
            >
              <div ref={childRef}>
                {props.children}
              </div>
            </SlideLeftEntranceAnimation>
          </React.Fragment>
        )
      }
    </div>
  );
};

export {
  QuickView
};
