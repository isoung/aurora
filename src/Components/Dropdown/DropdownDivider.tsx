import { css, cx } from 'emotion';
import React from 'react';

import { StyleProps, useTheme } from '..';

const DropdownDivider: React.FC<StyleProps> = (props) => {
  const theme = useTheme();
  const colors = theme.colors;

  const dropdownDividerStyles = css`
    border-bottom: 1px solid ${colors.light};
    padding-top: 4px;
    margin-bottom: 4px;
  `;

  return <div className={cx(dropdownDividerStyles, props.styles)}/>;
};

export {
  DropdownDivider
};
