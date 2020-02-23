import { css, cx } from 'emotion';
import React from 'react';

import { ComponentProps } from '../ComponentProps';
import { Container } from '../Layout/Container/Container';
import { ThemeStore } from '../Theme/ThemeStore';

interface NavbarProps extends ComponentProps {}
export const Navbar: React.FC<NavbarProps> = (props) => {
  const themeStore = ThemeStore.useContainer();
  const colorTheme = themeStore.getColorTheme();

  const navbarStyles = css`
    height: 100px;
    width: 100%;
    background-color: ${colorTheme[props.variant].base()};
    box-sizing: border-box;
    box-shadow:
      rgba(17, 31, 93, 0.08) 3px 0px 30px,
      rgba(27, 27, 43, 0.09) 2px 0px 5px;
  `;

  return (
    <Container position='center' alignment='center' styles={cx(navbarStyles, props.styles)}>
      {props.children}
    </Container>
  );
};
Navbar.defaultProps = {
  variant: 'white'
};
