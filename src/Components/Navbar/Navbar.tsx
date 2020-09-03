import { css, cx } from 'emotion';
import React from 'react';

import { Component, ComponentProps, useTheme } from '..';

const Navbar: React.FC<ComponentProps> = (props) => {
  const colors = useTheme().colors;

  const {
    styles,
    variant,
    ...componentProps
  } = props;

  const navbarStyles = css`
    height: 80px;
    width: 100%;
    box-sizing: border-box;
    border-bottom: 1px solid ${colors.light};
    display: flex;
    background-color: ${colors[variant]};
  `;

  return (
    <Component tag='nav' {...componentProps} styles={cx(navbarStyles, props.styles)}>
      {props.children}
    </Component>
  );
};
Navbar.displayName = 'Navbar';
Navbar.defaultProps = {
  variant: 'white'
};

export {
  Navbar
};
