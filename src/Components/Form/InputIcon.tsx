import { css, cx } from 'emotion';
import React from 'react';

import { Icon, IconProps } from '..';

interface InputIconProps extends IconProps {
  position: 'left' | 'right';
}
const InputIcon: React.FC<InputIconProps> = (props) => {
  const {
    styles,
    position,
    ...iconProps
  } = props;

  const inputIconStyles = css`
    position: absolute;
    left: ${position === 'left' ? 0 : undefined};
    right: ${position === 'right' ? 0 : undefined};
    height: 2.5em;
    width: 2.5em;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  `;

  return (
    <span className={cx(inputIconStyles, styles)}>
      <Icon {...iconProps}/>
    </span>
  );
};
InputIcon.displayName = 'InputIcon';

export {
  InputIcon
};
