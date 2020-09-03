import { css, cx } from 'emotion';
import React from 'react';

import { Container, ContainerProps, StyleProps } from '..';

const NavbarBrand: React.FC<StyleProps & ContainerProps> = (props) => {
  const {
    styles,
    ...containerProps
  } = props;

  const navbarBrandStyles = css`
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
  alignItems: 'center',
  height: '100%'
};

export {
  NavbarBrand
};
