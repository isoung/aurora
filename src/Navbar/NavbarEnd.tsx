import { css, cx } from 'emotion';
import React from 'react';

import { ComponentStyleProps } from '../ComponentProps';
import { Container, ContainerProps } from '../Layout/Container/Container';

interface NavbarEndProps extends ComponentStyleProps, ContainerProps {}
export const NavbarEnd: React.FC<NavbarEndProps> = (props) => {
  const {
    styles,
    ...containerProps
  } = props;

  const navbarEndStyles = css`
    margin-left: 32px;
    margin-right: 24px;
  `;

  const navbarEndContainerStyles = css`
    height: 100%;
  `;

  return (
    <div className={cx(navbarEndStyles, props.styles)}>
      <Container {...containerProps} styles={navbarEndContainerStyles}>
        {props.children}
      </Container>
    </div>
  );
};
NavbarEnd.defaultProps = {
  alignment: 'center'
};
