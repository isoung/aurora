import { css, cx } from 'emotion';
import React from 'react';

import { Container, ContainerProps, StyleProps } from '..';

const NavbarContent: React.FC<StyleProps & ContainerProps> = (props) => {
  const {
    styles,
    ...containerProps
  } = props;

  const navbarContentStyles = css`
    margin-left: 24px;
    margin-right: 24px;
    flex-grow: 1;
  `;

  const navbarContentContainerStyles = css`
    height: 100%;
    width: 100%;
  `;

  return (
    <div className={cx(navbarContentStyles, props.styles)}>
      <Container {...containerProps} styles={navbarContentContainerStyles}>
        {props.children}
      </Container>
    </div>
  );
};
NavbarContent.defaultProps = {
  alignItems: 'center'
};

export {
  NavbarContent
};
