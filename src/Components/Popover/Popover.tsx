import { Placement } from '@popperjs/core';
import { css, cx } from 'emotion';
import React, { useState } from 'react';
import DOM from 'react-dom';
import { usePopper } from 'react-popper';

import { ActiveProps, StyleProps, ThemeProvider } from '..';

export interface PopoverProps extends ActiveProps, StyleProps {
  containerStyles?: string;
  content?: JSX.Element;
  position?: Placement;
  offset?: number;
  slidingOffset?: number;
  overlay?: boolean;
  overlayStyles?: string;
}
const Popover: React.FC<PopoverProps> = (props) => {
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, ] = useState(null);

  const overlayStyles = css`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  `;

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [
      { name: 'arrow', options: { element: arrowElement } },
      {
        name: 'offset',
        options: {
          offset: [props.slidingOffset, props.offset],
        },
      }
    ],
    placement: props.position
  });

  const bodyElement = document.getElementsByTagName('body')[0];
  return (
    <div className={props.containerStyles} ref={setReferenceElement}>
      {props.children}
      {DOM.createPortal(
        props.active ? (
          <ThemeProvider>
            {
              props.overlay && <div className={cx(overlayStyles, props.overlayStyles)} onClick={props.onClick}/>
            }
            <div
              ref={setPopperElement}
              style={styles.popper}
              className={props.styles}
              {...attributes.popper}
            >
              {props.content}
              {/* <div ref={setArrowElement} style={styles.arrow}/> */}
            </div>
          </ThemeProvider>
        ) : null,
        bodyElement
      )}
    </div>
  );
};

Popover.defaultProps = {
  position: 'auto',
  offset: 4,
  slidingOffset: 0,
  overlay: false
};

export { Popover };
