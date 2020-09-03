import { css } from 'emotion';
import React from 'react';

import { Label, useTheme } from '..';

const FullScreenModalTitle: React.FC = (props) => {
  const themeComponents = useTheme().components;

  const labelStyles = css`
    margin-bottom: 40px;
    color: ${themeComponents.modal.foreground};
  `;

  return (
    <Label size='md' styles={labelStyles}>{props.children}</Label>
  );
};
FullScreenModalTitle.displayName = 'FullScreenModalTitle';

export {
  FullScreenModalTitle
};
