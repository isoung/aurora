import { css, cx } from 'emotion';
import React from 'react';

import { Container, ContainerProps, StyleProps } from '..';

const NavbarEnd: React.FC<StyleProps & ContainerProps> = (props) => {
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
  alignItems: 'center'
};

export {
  NavbarEnd
};
