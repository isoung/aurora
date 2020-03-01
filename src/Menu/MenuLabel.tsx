import { css, cx } from 'emotion';
import React from 'react';

import { ComponentStyleProps } from '../ComponentProps';

interface MenuLabelProps extends ComponentStyleProps {}
const MenuLabel: React.FC<MenuLabelProps> = (props) => {
  const menuLabelStyles = css`
    padding: 12px 16px 12px 16px;
  `;

  return (
    <div className={cx(menuLabelStyles, props.styles)}>
      {props.children}
    </div>
  );
};

export {
  MenuLabel
};
