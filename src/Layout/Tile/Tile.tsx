import { css, cx } from 'emotion';
import React from 'react';

import { ComponentProps } from '../../ComponentProps';
import { ResponsiveStyleProps } from '../../ResponsiveStyles';
import { getFontColorByBackground } from '../../Theme/Color/Utils';
import { ThemeStore } from '../../Theme/ThemeStore';
import { Container, ContainerProps } from '../Container/Container';

interface TileProps extends
  ComponentProps, ContainerProps, ResponsiveStyleProps, React.HtmlHTMLAttributes<HTMLElement> {}
export const Tile: React.FC<TileProps> = (props) => {
  const themeStore = ThemeStore.useContainer();
  const colorTheme = themeStore.getColorTheme();

  const {
    variant,
    styles,
    ...tileProps
  } = props;

  const tileStyles = css`
    border-radius: 4px;
    background-color: ${colorTheme[variant].base()};
    color: ${getFontColorByBackground(variant, colorTheme)}
  `;

  return (
    <Container {...tileProps} styles={cx(tileStyles, props.styles)}>
      {props.children}
    </Container>
  );
};
Tile.defaultProps = {
  variant: 'white'
};
