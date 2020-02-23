import { css, cx } from 'emotion';
import React from 'react';

import { ComponentStyleProps } from '../ComponentProps';
import { Container, ContainerProps } from '../Layout/Container/Container';

interface NavbarBrandProps extends ComponentStyleProps, ContainerProps {}
export const NavbarBrand: React.FC<NavbarBrandProps> = (props) => {
  const {
    styles,
    ...containerProps
  } = props;

  const navbarBrandStyles = css`
    height: 100%;
    padding-left: 24px;
    padding-right: 24px;
  `;

  return (
    <Container {...containerProps} styles={cx(navbarBrandStyles, props.styles)}>
      {props.children}
    </Container>
  );
};
NavbarBrand.defaultProps = {
  alignment: 'center'
};
