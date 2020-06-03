import { Placement } from '@popperjs/core';
import { cx } from 'emotion';
import React, { useState } from 'react';
import DOM from 'react-dom';
import { usePopper } from 'react-popper';

import { ActiveProps } from '../ActiveProps';
import { ComponentStyleProps } from '../ComponentProps';
import { ThemeStore } from '../Theme/ThemeStore';

export interface PopoverProps extends ActiveProps, ComponentStyleProps {
  containerStyles?: string;
  content?: JSX.Element;
  position?: Placement;
  offset?: number;
  slidingOffset?: number;
}

const Popover: React.FC<PopoverProps> = (props) => {
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);

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

  const themeStore = ThemeStore.useContainer();
  const bodyElement = document.getElementsByTagName('body')[0];

  return (
    <div className={cx(props.containerStyles)} ref={setReferenceElement}>
      {props.children}
      {DOM.createPortal(
        props.active ? (
          <ThemeStore.Provider
            initialState={{
              colorTheme: themeStore.getColorTheme(),
              fontTheme: themeStore.getFontTheme(),
            }}>
            <div
              ref={setPopperElement}
              style={{...styles.popper, ...{ zIndex: 9999999 }}}
              {...attributes.popper}
            >
              {props.content}
              <div ref={setArrowElement} style={styles.arrow}/>
            </div>
          </ThemeStore.Provider>
        ) : null,
        bodyElement
      )}
    </div>
  );
};

Popover.defaultProps = {
  position: 'auto',
  offset: 8,
  slidingOffset: 0
};

export { Popover };
