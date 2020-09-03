import { css, cx } from 'emotion';
import React from 'react';
import { Link, LinkProps, useLocation } from 'react-router-dom';

import { getHoveredColor, StyleProps, useTheme } from '..';

const NavbarLink: React.FC<LinkProps & StyleProps> = (props) => {
  const colors = useTheme().colors;
  const location = useLocation();
  const active = location.pathname.includes(props.to.toString());

  const linkStyles = css`
    display: flex;
    padding: 6px 8px;
    text-decoration: none;
    background-color: ${active ? colors.link : null};
    border-radius: 8px;
    margin-right: 20px;

    span {
      color: ${active ? getHoveredColor(colors.link) : null};
    }

    &:visited {
      color: ${colors.black};
    }
  `;

  return (
    <Link {...props} className={cx(linkStyles, props.styles)}>
      {props.children}
    </Link>
  );
};
NavbarLink.displayName = 'NavbarLink';

export {
  NavbarLink
};
