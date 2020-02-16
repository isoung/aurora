import Color from 'color';
import { css, cx } from 'emotion';
import React from 'react';

import { ComponentProps } from '../ComponentProps';
import { Container, ContainerProps } from '../Layout/Container/Container';
import { ColorTheme } from '../Theme/Color/ColorPalette';
import { ThemeStore } from '../Theme/ThemeStore';

type ModalFooterVariants = Pick<ColorTheme, 'light' | 'primary' | 'white'>;
interface ModalFooterProps extends Omit<ComponentProps, 'variant'>, ContainerProps {
  variant?: keyof ModalFooterVariants;
}
export const ModalFooter: React.FC<ModalFooterProps> = (props) => {
  const themeStore = ThemeStore.useContainer();
  const colorTheme = themeStore.getColorTheme();

  const {
    variant,
    styles,
    ...containerProps
  } = props;

  const modalFooterStyles = css`
    background-color: ${Color(colorTheme[variant].base()).mix(Color(colorTheme.white.base()), .5).fade(.8).toString()};
    padding: 2rem;
    padding-top: .5rem;
    padding-bottom: .75rem;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  `;

  return (
    <Container {...containerProps} styles={cx(modalFooterStyles, styles)}>
      {props.children}
    </Container>
  );
};
ModalFooter.defaultProps = {
  variant: 'white'
};
