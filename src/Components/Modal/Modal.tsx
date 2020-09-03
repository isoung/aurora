import { css, cx } from 'emotion';
import React, { useEffect } from 'react';

import { ActiveProps, EntranceAnimation, FadeAnimation, StyleProps, useTheme } from '..';

type EntranceAnimationType =
  'DEFAULT'
  | 'FADE';
export interface ModalProps extends StyleProps, ActiveProps {
  animation?: EntranceAnimationType;
  overlay?: boolean;
}
const Modal: React.FC<ModalProps> = (props) => {
  const theme = useTheme();
  const colorTheme = theme.colors;

  const modalContentStyles = css`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: fit-content;
    height: fit-content;
    margin: auto;
    background-color: ${colorTheme.white};
    border-radius: 6px;
    z-index: 9999;
  `;

  const modalOverlayStyles = css`
    position: absolute;
    background-color: ${colorTheme.black};
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    opacity: .5;
    z-index: 9998;
  `;

  const escapeKeyDownFn = (event: KeyboardEvent) => {
    if (event.keyCode === 27) {
      props.onClick();
    }
  };

  useEffect(() => {
    if (props.active) {
      document.addEventListener('keydown', escapeKeyDownFn, false);
    }
    else {
      document.removeEventListener('keydown', escapeKeyDownFn, false);
    }
  }, [props.active]);

  const generateAnimation = () => {
    switch (props.animation) {
      case 'FADE':
        return (
          <FadeAnimation transitionDuration={.3} styles={cx(modalContentStyles, props.styles)}>
            {props.children}
          </FadeAnimation>
        );
      default:
        return (
          <EntranceAnimation transitionDuration={.3} styles={cx(modalContentStyles, props.styles)}>
            {props.children}
          </EntranceAnimation>
        );
    }
  };

  return (
    <div>
      {
        props.active &&
        (
          <React.Fragment>
            {
              props.overlay && <div className={modalOverlayStyles} onClick={props.onClick}/>
            }
            {generateAnimation()}
          </React.Fragment>
        )
      }
    </div>
  );
};
Modal.defaultProps = {
  animation: 'DEFAULT',
  overlay: true
};

export {
  Modal
};
